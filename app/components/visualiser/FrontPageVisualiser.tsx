"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as THREE from "three";
import useRotation from "@/app/hooks/useRotation";
import WordPoint from "./WordPointFront";
import SpaceDust from "./SpaceDust";

// Props expected: vocab list and precomputed embeddings
interface Props {
  vocab: string[];
  embeddings: number[][] | null;
}

// Main scene component that renders the 3D embedding space
export default function Visualiser({ vocab, embeddings }: Props) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);


  const currentVocab = vocab;

  // Use the rotation hook for rotation handling and dynamic offset
  const {
    groupRef,
    rotation,
    updateDynamicOffset,
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
  } = useRotation();

  // Project high-dimensional embeddings to 3D using UMAP
  const coords3d = useMemo(() => {
    // if (!embeddings || embeddings.length === 0) {
    //   return [];
    // }

    // const umap = new UMAP({
    //   nComponents: 3,
    //   nNeighbors: Math.min(15, embeddings.length - 1),
    //   spread: 12,
    //   minDist: 0.5,
    // });

    // // Get coordinates
    // // console.log(JSON.stringify(umap.fit(embeddings)))

    // return umap.fit(embeddings);

    // Return cached results to improve performance, suggested by @Tchanwangsa
    return [[5.398126341474347,12.104259447220764,1.8080497581650483],[-1.981195477859582,6.763470758628738,9.060538942506216],[10.229667072486562,-0.15082564874835605,0.2561293094734186],[-8.230095896621705,3.207715060996656,-1.898982044488417],[4.982734172556226,-1.3711144563192816,9.712204659786991],[-1.8230601053545095,4.463904107174396,-7.883693960037585],[3.917340945751632,-7.609676182384553,1.256398542081088],[-3.937883504745913,13.061277763883474,-0.6022948786244067]]
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

  useEffect(() => {
    function updateGroupPosition() {
      if (!cameraRef.current) return;

      const pos = getTranslationToScreenPixel(
        window.innerWidth / 2 + Math.min(1280, window.innerWidth) / 5,
        window.innerHeight / 2,
        window.innerWidth,
        window.innerHeight,
        cameraRef.current,
        0
      );

      updateDynamicOffset(pos.x, pos.y, pos.z);
    }

    const handleResize = () => {
      requestAnimationFrame(updateGroupPosition);
    };

    if (cameraRef.current) updateGroupPosition();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, -35], fov: 50 }}
      style={{
        background: "transparent",
        height: "100svh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 0,
        touchAction: "none",
      }}
      onCreated={({ camera }) => {
        cameraRef.current = camera;

        const pos = getTranslationToScreenPixel(
          window.innerWidth / 2 + Math.min(1280, window.innerWidth) / 5,
          window.innerHeight / 2,
          window.innerWidth,
          window.innerHeight,
          camera,
          0
        );
        updateDynamicOffset(pos.x, pos.y, pos.z);
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

function getTranslationToScreenPixel(
  screenX: number,
  screenY: number,
  screenWidth: number,
  screenHeight: number,
  camera: THREE.Camera,
  objectWorldZ = 0 // z-position of the object (default at origin)
): THREE.Vector3 {
  // Convert pixel to Normalised Device Coordinates (NDC)
  const ndcX = (screenX / screenWidth) * 2 - 1;
  const ndcY = -(screenY / screenHeight) * 2 + 1;

  // Create a point in NDC at the object's Z-depth
  const ndc = new THREE.Vector3(ndcX, ndcY, 0.5);
  ndc.unproject(camera);

  // Ray from camera to unprojected point
  const dir = ndc.sub(camera.position).normalize();

  // Compute intersection with object's Z plane
  const distance = (objectWorldZ - camera.position.z) / dir.z;
  const targetWorldPos = camera.position.clone().add(dir.multiplyScalar(distance));

  // Offset from origin (0,0,0) to required position
  return targetWorldPos; // This is the translation to apply to the object
}