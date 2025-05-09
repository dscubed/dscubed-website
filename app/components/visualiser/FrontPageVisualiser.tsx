"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Line, PointMaterial, Points, Sparkles } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as THREE from "three";
import * as use from "@tensorflow-models/universal-sentence-encoder";

import WordPoint from "./WordPoint";
import SpaceDust from "./SpaceDust";

interface Props {
  vocab: string[];
  embeddings: number[][];
  initialWord?: string | null;
}

function RotatingGroup({
  children,
  position = [0, 0, 0],
}: {
  children: React.ReactNode;
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return <group ref={ref} position={position}>{children}</group>;
}

export default function Visualiser({ vocab, embeddings, initialWord }: Props) {
  const currentVocab = vocab;
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (initialWord) {
      zoomToWord(initialWord);
    }
  }, [initialWord]);

  useEffect(() => {
    async function loadUSEModel() {
      if (!model && !isModelLoading) {
        setIsModelLoading(true);
        try {
          const loadedModel = await use.load();
          setModel(loadedModel);
        } catch (error) {
          console.error("Error loading model:", error);
        } finally {
          setIsModelLoading(false);
        }
      }
    }

    loadUSEModel();
  }, [model, isModelLoading]);

  const coords3d = useMemo(() => {
    if (!embeddings || embeddings.length === 0) return [];
    const umap = new UMAP({
      nComponents: 3,
      nNeighbors: Math.min(15, embeddings.length - 1),
      spread: 5,
      minDist: 0.5,
    });
    return umap.fit(embeddings);
  }, [embeddings]);

  const center = useMemo(() => {
    if (!coords3d.length) return new THREE.Vector3(0, 0, 0);
    let sumX = 0,
      sumY = 0,
      sumZ = 0;
    for (const [x, y, z] of coords3d) {
      sumX += x;
      sumY += y;
      sumZ += z;
    }
    return new THREE.Vector3(
      sumX / coords3d.length,
      sumY / coords3d.length,
      sumZ / coords3d.length
    );
  }, [coords3d]);

  const zoomToWord = (word: string) => {
    const index = currentVocab.indexOf(word);
    if (index !== -1) {
      const [x, y, z] = coords3d[index];
      if (controlsRef.current) {
        const controls = controlsRef.current;
        const camera = controls.object;

        const startTarget = controls.target.clone();
        const startPosition = camera.position.clone();
        const offset = new THREE.Vector3(5, 5, 5);
        const endTarget = new THREE.Vector3(
          x - center.x,
          y - center.y,
          z - center.z
        );
        const endPosition = endTarget.clone().add(offset);

        const duration = 1000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          controls.target.lerpVectors(startTarget, endTarget, easeProgress);
          camera.position.lerpVectors(
            startPosition,
            endPosition,
            easeProgress
          );
          controls.update();

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    }
  };

  function generateGlowTexture(): THREE.Texture {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
  
    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.4)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;
    return texture;
  }

function Dust() {
    const count = 1500;
  
    const positions = useMemo(() => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        pos[i] = (Math.random() - 0.5) * 100;
      }
      return pos;
    }, [count]);
  
    const texture = useMemo(() => generateGlowTexture(), []);
  
    return (
      <Points positions={positions} frustumCulled={false}>
        <PointMaterial
          map={texture}
          color="#FFFFFF"
          size={0.4}
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          alphaTest={0.05}
        />
      </Points>
    );
  }

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 13], fov: 70 }}
      style={{
        // background: "radial-gradient( ellipse at center, #f5a6d7 0%, #e574d2 20%, #c149e1 40%, #3a3ca7 70%, #0b0b33 100% )",

        backgroundColor: `hsla(244.85294117647055, 100%, 50%, 1)`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E"), radial-gradient(circle at 50% 0%, hsla(244.85294117647055, 100%, 3%, 1) 49.15975941515135%, transparent 102.23193813062571%)`,
        backgroundBlendMode: `lighten, normal`,


        // backgroundColor: `hsla(120, 0%, 0%, 1)`,
        // backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 7% 84%, hsla(270, 100%, 48%, 0.88) 1%, transparent 85%), radial-gradient(circle at 68% 22%, hsla(38, 91%, 75%, 1) 15%, transparent 58%), radial-gradient(circle at 32% 53%, hsla(61, 84%, 73%, 1) 20%, transparent 61%), radial-gradient(circle at 100% 58%, hsla(247, 99%, 73%, 1) 7%, transparent 70%), radial-gradient(circle at 27% 44%, hsla(221.02941176470594, 73%, 66%, 1) 10%, transparent 81%), radial-gradient(circle at 28% 16%, hsla(5, 84%, 78%, 1) 15%, transparent 74%), radial-gradient(circle at 93% 14%, hsla(51, 89%, 79%, 1) 12%, transparent 88%)`,
        // backgroundBlendMode: `overlay, normal, normal, normal, normal, normal, normal, normal`,
        
        // backgroundColor: `hsla(79, 98%, 66%, 1)`,
        // backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 94% 95%, hsla(170, 88%, 68%, 1) 3%, transparent 76%), radial-gradient(circle at 89% 34%, hsla(263, 96%, 51%, 1) 1%, transparent 86%), radial-gradient(circle at 86% 50%, hsla(318, 80%, 65%, 1) 7%, transparent 76%), radial-gradient(circle at 89% 79%, hsla(248, 76%, 53%, 1) 7%, transparent 87%), radial-gradient(circle at 15% 44%, hsla(4, 74%, 80%, 1) 15%, transparent 81%), radial-gradient(circle at 99% 20%, hsla(75, 88%, 92%, 1) 1%, transparent 68%)`,
        // backgroundBlendMode: `overlay, normal, normal, normal, normal, normal, normal`,



        height: "calc(100vh + 66.48px)",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <fog attach="fog" args={["#0d1117", 60, 200]} />
      {/* <gridHelper args={[100, 20, "#444", "#222"]} position={[0, -10, 0]} /> */}

      <RotatingGroup position={[6, 0, 0]}>
        <Dust />
        {/* <SpaceDust /> */}

        {coords3d.map(([x1, y1, z1], i) =>
          coords3d.map(([x2, y2, z2], j) =>
            i < j ? (
              <Line
                key={`${i}-${j}`}
                points={[
                  [x1 - center.x, y1 - center.y, z1 - center.z],
                  [x2 - center.x, y2 - center.y, z2 - center.z],
                ]}
                color={"white"}
                lineWidth={1}
                transparent
                opacity={0.5}
              />
            ) : null
          )
        )}

        {coords3d.map(([x, y, z], i) => (
          <WordPoint
            key={i}
            word={currentVocab[i]}
            position={[x - center.x, y - center.y, z - center.z]}
            onSelect={(word) => {
              setHighlightedWord(word);
              zoomToWord(word);
            }}
          />
        ))}
      </RotatingGroup>
    </Canvas>
  );
}