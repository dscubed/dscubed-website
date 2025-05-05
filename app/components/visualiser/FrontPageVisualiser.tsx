"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as THREE from "three";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import useRotation from "@/app/hooks/useRotation";

import WordPoint from "./WordPoint";
import SpaceDust from "./SpaceDust";

// Props expected: vocab list and precomputed embeddings
interface Props {
  vocab: string[];
  embeddings: number[][];
  initialWord?: string | null;
}

// Main scene component that renders the 3D embedding space
export default function Visualiser({ vocab, embeddings, initialWord }: Props) {
  const currentVocab = vocab;
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  // TensorFlow model state
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);

  // Use the rotation hook for rotation handling and dynamic offset
  const {
    groupRef,
    rotation,
    dynamicXOffset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
  } = useRotation();

  // Effect to handle initial word zoom
  useEffect(() => {
    if (initialWord) {
      zoomToWord(initialWord);
    }
  }, [initialWord]);

  // Load Universal Sentence Encoder (USE) model only once
  useEffect(() => {
    async function loadUSEModel() {
      if (!model && !isModelLoading) {
        setIsModelLoading(true);
        try {
          console.log("Loading Universal Sentence Encoder model...");
          const loadedModel = await use.load();
          setModel(loadedModel);
          console.log("Model loaded successfully");
        } catch (error) {
          console.error("Error loading model:", error);
        } finally {
          setIsModelLoading(false);
        }
      }
    }

    loadUSEModel();
  }, [model, isModelLoading]);

  // Project high-dimensional embeddings to 3D using UMAP
  const coords3d = useMemo(() => {
    if (!embeddings || embeddings.length === 0) {
      return [];
    }
    const umap = new UMAP({
      nComponents: 3,
      nNeighbors: Math.min(15, embeddings.length - 1),
      spread: 5,
      minDist: 0.5,
    });
    return umap.fit(embeddings);
  }, [embeddings]);

  // Calculate the center using a for...of loop
  const center = useMemo(() => {
    if (!coords3d || coords3d.length === 0) {
      return new THREE.Vector3(0, 0, 0);
    }
    // Find sum of x y and z coordinates of all points
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
    for (const coord of coords3d) {
      const [x, y, z] = coord;
      sumX += x;
      sumY += y;
      sumZ += z;
    }
    const count = coords3d.length;
    // Returns average of all points as center
    return new THREE.Vector3(sumX / count, sumY / count, sumZ / count);
  }, [coords3d]);

  // Calculate bounds and define cube edges
  const cubeEdges = useMemo(() => {
    if (coords3d.length === 0) return [];

    let minX = Infinity,
      maxX = -Infinity;
    let minY = Infinity,
      maxY = -Infinity;
    let minZ = Infinity,
      maxZ = -Infinity;

    // Find min and max for each dimension
    coords3d.forEach(([x, y, z]) => {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      minZ = Math.min(minZ, z);
      maxZ = Math.max(maxZ, z);
    });

    // Add a small padding to the bounds
    const padding = 5; // Adjust padding as needed
    minX -= padding;
    maxX += padding;
    minY -= padding;
    maxY += padding;
    minZ -= padding;
    maxZ += padding;

    // Calculate current dimensions
    const width = maxX - minX;
    const height = maxY - minY;
    const depth = maxZ - minZ;

    // Find the maximum dimension to form a cube
    const maxDim = Math.max(width, height, depth);

    // Calculate how much to expand each dimension to match the max dimension
    const expandX = maxDim - width;
    const expandY = maxDim - height;
    const expandZ = maxDim - depth;

    // Adjust the min/max bounds to form a cube, centered around the original bounds
    const cubeMinX = minX - expandX / 2;
    const cubeMaxX = maxX + expandX / 2;
    const cubeMinY = minY - expandY / 2;
    const cubeMaxY = maxY + expandY / 2;
    const cubeMinZ = minZ - expandZ / 2;
    const cubeMaxZ = maxZ + expandZ / 2;

    // Define the 8 vertices of the cube
    const vertices = [
      new THREE.Vector3(cubeMinX, cubeMinY, cubeMinZ), // 0: bottom-front-left
      new THREE.Vector3(cubeMaxX, cubeMinY, cubeMinZ), // 1: bottom-front-right
      new THREE.Vector3(cubeMinX, cubeMaxY, cubeMinZ), // 2: bottom-back-left
      new THREE.Vector3(cubeMaxX, cubeMaxY, cubeMinZ), // 3: bottom-back-right
      new THREE.Vector3(cubeMinX, cubeMinY, cubeMaxZ), // 4: top-front-left
      new THREE.Vector3(cubeMaxX, cubeMinY, cubeMaxZ), // 5: top-front-right
      new THREE.Vector3(cubeMinX, cubeMaxY, cubeMaxZ), // 6: top-back-left
      new THREE.Vector3(cubeMaxX, cubeMaxY, cubeMaxZ), // 7: top-back-right
    ];

    // Define the 12 edges by connecting vertices
    const edges = [
      [vertices[0], vertices[1]], // Bottom front
      [vertices[0], vertices[2]], // Bottom left
      [vertices[1], vertices[3]], // Bottom right
      [vertices[2], vertices[3]], // Bottom back

      [vertices[4], vertices[5]], // Top front
      [vertices[4], vertices[6]], // Top left
      [vertices[5], vertices[7]], // Top right
      [vertices[6], vertices[7]], // Top back

      [vertices[0], vertices[4]], // Front left vertical
      [vertices[1], vertices[5]], // Front right vertical
      [vertices[2], vertices[6]], // Back left vertical
      [vertices[3], vertices[7]], // Back right vertical
    ];

    return edges;
  }, [coords3d]);

  // Zoom to a specific word
  const zoomToWord = (word: string) => {
    const index = currentVocab.indexOf(word);
    if (index !== -1) {
      const [x, y, z] = coords3d[index];
      if (groupRef.current) {
        const group = groupRef.current;
        const camera = group.position;

        // Store initial positions
        const startTarget = group.position.clone();
        const startPosition = camera.clone();

        // Calculate final positions (offset slightly from the word)
        const offset = new THREE.Vector3(5, 5, 5); // Adjust offset as needed
        const endTarget = new THREE.Vector3(x, y, z);
        const endPosition = endTarget.clone().add(offset);

        // Animation parameters
        const duration = 1000; // 1000ms (1 second)
        const startTime = Date.now();

        // Animation function
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation (Cubic ease-out)
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          // Smooth transition to final position
          group.position.lerpVectors(startPosition, endPosition, easeProgress);
          group.updateMatrixWorld();

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    }
  };

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 60], fov: 50 }}
      style={{
        background: "#0d1117",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      <color attach="background" args={["#0d1117"]} />
      <fog attach="fog" args={["#0d1117", 60, 200]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />

      {/* Main group for rotation - use dynamic offset */}
      <group
        ref={groupRef}
        position={[dynamicXOffset, 0, 0]} // Use state variable for X offset
        rotation={[rotation.x, rotation.y, 0]}
      >
        {/* Rotating dust layer inside the group - will rotate with the scene */}
        <SpaceDust />

        {/* Add the cube edges - adjust points relative to center */}
        {cubeEdges.map((edge, index) => {
          // Adjust points correctly for Line component
          const p1 = new THREE.Vector3(
            edge[0].x - center.x,
            edge[0].y - center.y,
            edge[0].z - center.z
          );
          const p2 = new THREE.Vector3(
            edge[1].x - center.x,
            edge[1].y - center.y,
            edge[1].z - center.z
          );
          return (
            <Line
              key={`cube-${index}`}
              points={[p1, p2]} // Pass Vector3 array
              color={"#1F2B47"}
              lineWidth={5}
            />
          );
        })}

        {/* Connect all word nodes with lines - adjust points relative to center */}
        {coords3d.map(([x1, y1, z1], i) =>
          coords3d.map(([x2, y2, z2], j) => {
            if (i < j) {
              // Adjust points for the line
              const p1: [number, number, number] = [
                x1 - center.x,
                y1 - center.y,
                z1 - center.z,
              ];
              const p2: [number, number, number] = [
                x2 - center.x,
                y2 - center.y,
                z2 - center.z,
              ];
              return (
                <Line
                  key={`conn-${i}-${j}`}
                  points={[p1, p2]} // Use adjusted points as tuples
                  color={"#9EC4F0"}
                  lineWidth={1}
                />
              );
            }
            return null;
          })
        )}

        {/* Word Points - adjust position relative to center */}
        {coords3d.map(([x, y, z], i) => (
          <WordPoint
            key={`word-${i}`}
            word={currentVocab[i]}
            // Adjust position
            position={
              [x - center.x, y - center.y, z - center.z] as [
                number,
                number,
                number
              ]
            } // Assert as tuple
            onSelect={(word) => {
              // Potentially call zoomToWord here, though camera is static now
              setHighlightedWord(word);
            }}
          />
        ))}
      </group>
    </Canvas>
  );
}
