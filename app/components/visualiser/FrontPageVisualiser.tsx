"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useRotation from "@/app/hooks/useRotation";
import WordPoint from "./WordPointFront";
import SpaceDust from "./SpaceDust";
import SpaceGlows from "./SpaceGlows";

// Props expected: vocab list and precomputed embeddings
interface Props {
  vocab: string[];
  embeddings: number[][] | null;
}

interface LineData {
  start: [number, number, number];
  end: [number, number, number];
  length: number;
}

// Draws all lines simultaneously from their start point outward.
// All lines complete within `duration` seconds (longest line sets the pace).
const DRAW_DURATION = 1.0; // seconds

function AnimatedLines({
  lines,
  onComplete,
}: {
  lines: LineData[];
  onComplete: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const geoRefs = useRef<THREE.BufferGeometry[]>([]);
  const elapsed = useRef(0);
  const done = useRef(false);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Find longest line — that one takes exactly DRAW_DURATION, shorter ones finish sooner
  const maxLength = useMemo(
    () => Math.max(...lines.map((l) => l.length), 0.001),
    [lines],
  );

  // Build Three.js objects once in an effect (avoids ref-during-render error)
  const readyRef = useRef(false);
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    // Clear previous children
    while (group.children.length) group.remove(group.children[0]);
    geoRefs.current = [];

    lines.forEach((line) => {
      const positions = new Float32Array([
        line.start[0],
        line.start[1],
        line.start[2],
        line.start[0],
        line.start[1],
        line.start[2],
      ]);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geoRefs.current.push(geo);
      const mat = new THREE.LineBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.5,
      });
      group.add(new THREE.Line(geo, mat));
    });

    readyRef.current = true;

    return () => {
      geoRefs.current.forEach((g) => g.dispose());
    };
  }, [lines]);

  useFrame((_, delta) => {
    if (done.current || !readyRef.current) return;
    elapsed.current += delta;

    let allDone = true;

    lines.forEach((line, i) => {
      // Each line's speed = its length / DRAW_DURATION * (maxLength / line.length)
      // Simplified: progress = elapsed / DRAW_DURATION * (maxLength / line.length)
      // But we want ALL lines done by DRAW_DURATION, so:
      // progress_i = elapsed / (DRAW_DURATION * line.length / maxLength)
      const lineDuration = DRAW_DURATION * (line.length / maxLength);
      const t = Math.min(1, elapsed.current / lineDuration);
      if (t < 1) allDone = false;

      const geo = geoRefs.current[i];
      if (!geo) return;
      const pos = geo.attributes.position.array as Float32Array;
      pos[3] = line.start[0] + (line.end[0] - line.start[0]) * t;
      pos[4] = line.start[1] + (line.end[1] - line.start[1]) * t;
      pos[5] = line.start[2] + (line.end[2] - line.start[2]) * t;
      geo.attributes.position.needsUpdate = true;
    });

    if (allDone) {
      done.current = true;
      onCompleteRef.current();
    }
  });

  return <group ref={groupRef} />;
}

// Main scene component that renders the 3D embedding space
export default function Visualiser({ vocab }: Props) {
  const cameraRef = useRef<THREE.Camera | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraZ, setCameraZ] = useState(-40);
  const [linesComplete, setLinesComplete] = useState(false);
  const currentVocab = vocab;

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
  } = useRotation(linesComplete);

  const coords3d = useMemo(() => {
    return [
      [5.398126341474347, 12.104259447220764, 1.8080497581650483],
      [-1.981195477859582, 6.763470758628738, 9.060538942506216],
      [10.229667072486562, -0.15082564874835605, 0.2561293094734186],
      [-8.230095896621705, 3.207715060996656, -1.898982044488417],
      [4.982734172556226, -1.3711144563192816, 9.712204659786991],
      [-1.8230601053545095, 4.463904107174396, -7.883693960037585],
      [3.917340945751632, -7.609676182384553, 1.256398542081088],
      [-3.937883504745913, 13.061277763883474, -0.6022948786244067],
    ];
  }, []);

  const center = useMemo(() => {
    if (!coords3d || coords3d.length === 0) {
      return new THREE.Vector3(0, 0, 0);
    }
    let sumX = 0,
      sumY = 0,
      sumZ = 0;
    for (const coord of coords3d) {
      const [x, y, z] = coord;
      sumX += x;
      sumY += y;
      sumZ += z;
    }
    const count = coords3d.length;
    return new THREE.Vector3(sumX / count, sumY / count, sumZ / count);
  }, [coords3d]);

  // Precompute line data (centered coords + length)
  const lineData = useMemo<LineData[]>(() => {
    const result: LineData[] = [];
    for (let i = 0; i < coords3d.length; i++) {
      for (let j = i + 1; j < coords3d.length; j++) {
        const [x1, y1, z1] = coords3d[i];
        const [x2, y2, z2] = coords3d[j];
        const start: [number, number, number] = [
          x1 - center.x,
          y1 - center.y,
          z1 - center.z,
        ];
        const end: [number, number, number] = [
          x2 - center.x,
          y2 - center.y,
          z2 - center.z,
        ];
        const length = Math.sqrt(
          (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2,
        );
        result.push({ start, end, length });
      }
    }
    return result;
  }, [coords3d, center]);

  const updateGroupPosition = useCallback(() => {
    if (!cameraRef.current || !canvasRef.current) return;

    let screenX = 0;
    let screenY = 0;
    const canvasRect = canvasRef.current.getBoundingClientRect();

    if (window.innerWidth >= 1024) {
      screenX = canvasRect.width / 2 + Math.min(1280, canvasRect.width) / 5;
      screenY = canvasRect.height / 2 - 20;
      setCameraZ(-40);
    } else if (window.innerWidth >= 640) {
      screenX = canvasRect.width / 2;
      screenY = 63 + 96 * 2 + 450 + 100;
      setCameraZ(-60);
    } else if (window.innerWidth >= 480) {
      screenX = canvasRect.width / 2;
      screenY = 63 + 96 * 2 + 450 + 40;
      setCameraZ(-70);
    } else {
      screenX = canvasRect.width / 2;
      screenY = 63 + 96 * 2 + 450 + 10;
      setCameraZ(-70);
    }

    const pos = getTranslationToScreenPixel(
      screenX,
      screenY,
      canvasRect.width,
      canvasRect.height,
      cameraRef.current,
      0,
    );

    updateDynamicOffset(pos.x, pos.y, pos.z);
  }, [updateDynamicOffset]);

  useEffect(() => {
    const handleResize = () => requestAnimationFrame(updateGroupPosition);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateGroupPosition]);

  return (
    <Canvas
      key={cameraZ}
      ref={canvasRef}
      camera={{ position: [0, 0, cameraZ], fov: 50 }}
      className="lg:pointer-events-none! select-none"
      style={{
        background: "transparent",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        touchAction: "none",
      }}
      onCreated={({ camera }) => {
        cameraRef.current = camera;
        updateGroupPosition();
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
      <ambientLight intensity={1} />

      <group
        ref={groupRef}
        position={[dynamicXOffset, dynamicYOffset, dynamicZOffset]}
        rotation={[rotation.x, rotation.y, 0]}
      >
        <SpaceGlows />
        <SpaceDust />

        {/* Animated lines — drawn from endpoint to endpoint at constant speed */}
        <AnimatedLines
          lines={lineData}
          onComplete={() => setLinesComplete(true)}
        />

        {/* Word points — visible immediately */}
        {coords3d.map(([x, y, z], i) => (
          <WordPoint
            key={`word-${i}`}
            word={currentVocab[i]}
            position={
              [x - center.x, y - center.y, z - center.z] as [
                number,
                number,
                number,
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
  objectWorldZ = 0,
): THREE.Vector3 {
  const ndcX = (screenX / screenWidth) * 2 - 1;
  const ndcY = -(screenY / screenHeight) * 2 + 1;

  const ndc = new THREE.Vector3(ndcX, ndcY, 0.5);
  ndc.unproject(camera);

  const dir = ndc.sub(camera.position).normalize();

  const distance = (objectWorldZ - camera.position.z) / dir.z;
  const targetWorldPos = camera.position
    .clone()
    .add(dir.multiplyScalar(distance));

  return targetWorldPos;
}
