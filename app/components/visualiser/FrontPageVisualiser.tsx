"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as THREE from "three";
import useRotation from "@/app/hooks/useRotation";

import WordPoint from "./WordPointFront";
import SpaceDust from "./SpaceDust";

// Props expected: vocab list and precomputed embeddings
interface Props {
  vocab: string[];
  embeddings: number[][];
  triggerAnimation: boolean; // New prop to trigger the animation
}

// Main scene component that renders the 3D embedding space
export default function Visualiser({
  vocab,
  embeddings,
  triggerAnimation,
}: Props) {
  const currentVocab = vocab;

  const zoomAnimationIdRef = useRef<number | null>(null);
  const hasZoomedInitiallyRef = useRef(false); // To ensure one-time execution

  // Use the rotation hook for rotation handling and dynamic offset
  const {
    groupRef,
    rotation,
    dynamicXOffset,
    dynamicYOffset,
    dynamicZOffset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    handleTouchMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchCancel,
    setAutoRotateEnabled,
  } = useRotation();

  // Project high-dimensional embeddings to 3D using UMAP
  const coords3d = useMemo(() => {
    if (!embeddings || embeddings.length === 0) {
      return [];
    }
    const umap = new UMAP({
      nComponents: 3,
      nNeighbors: Math.min(15, embeddings.length - 1),
      spread: 12,
      minDist: 0.5,
    });
    return umap.fit(embeddings);
  }, [embeddings]);

  // Calculate the center
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

  // Effect for the one-time zoom animation
  useEffect(() => {
    // Ensure all conditions are met and animation hasn't happened yet
    if (
      triggerAnimation &&
      !hasZoomedInitiallyRef.current && // Check the flag
      groupRef.current && // Check if the group is mounted
      coords3d &&
      coords3d.length > 0 // Check if coordinates are ready
    ) {
      const targetPosition = new THREE.Vector3(0, 10, 45); // Target center for the zoom
      const duration = 1500; // Animation duration in ms
      let startTime = 0;

      // Disable auto-rotation and lock rotation
      setAutoRotateEnabled(false);
      const initialRotation = { ...rotation }; // Capture the current rotation
      groupRef.current.rotation.set(initialRotation.x, initialRotation.y, 0);

      const animate = (timestamp: number) => {
        if (startTime === 0) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease-out

        const currentPosition = new THREE.Vector3().lerpVectors(
          center,
          targetPosition,
          easeProgress
        );

        // Update the group's position relative to the center
        groupRef.current?.position.set(
          currentPosition.x,
          currentPosition.y,
          currentPosition.z
        );
        // Lock the group's rotation during each frame
        groupRef.current?.rotation.set(initialRotation.x, initialRotation.y, 0);

        if (progress < 1) {
          zoomAnimationIdRef.current = requestAnimationFrame(animate);
        } else {
          groupRef.current?.position.set(
            targetPosition.x,
            targetPosition.y,
            targetPosition.z
          ); // Ensure final position
          zoomAnimationIdRef.current = null;
          hasZoomedInitiallyRef.current = true; // Set flag: animation is done
          console.log("Enter visualiser animation complete.");
        }
      };

      if (zoomAnimationIdRef.current)
        cancelAnimationFrame(zoomAnimationIdRef.current);
      startTime = 0;
      zoomAnimationIdRef.current = requestAnimationFrame(animate);
    }

    // Cleanup animation frame if component unmounts during animation
    return () => {
      if (zoomAnimationIdRef.current) {
        cancelAnimationFrame(zoomAnimationIdRef.current);
      }
    };
  }, [triggerAnimation, groupRef, coords3d, center, setAutoRotateEnabled]); // Dependencies: all values from component scope used inside the effect

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 10, 45], fov: 50 }}
      style={{
        background: "transparent",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        touchAction: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <fog attach="fog" args={["#0d1117", 60, 200]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />

      {/* Main group for rotation - use dynamic offset */}
      <group
        ref={groupRef}
        position={[dynamicXOffset, dynamicYOffset, dynamicZOffset]}
        rotation={[rotation.x, rotation.y, 0]}
      >
        {/* Rotating dust layer inside the group - will rotate with the scene */}
        <SpaceDust />

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
                  color={"#87898c"}
                  lineWidth={1}
                  opacity={0.6}
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
            }
          />
        ))}
      </group>
    </Canvas>
  );
}
