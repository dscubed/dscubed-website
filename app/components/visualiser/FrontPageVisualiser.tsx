"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as THREE from "three";
import * as use from "@tensorflow-models/universal-sentence-encoder";

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
    // Variables for vocab embeddings and state for highlighted word
    const currentVocab = vocab;
    const currentEmbeddings = embeddings;
    const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

    // TensorFlow model state
    const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
    const [isModelLoading, setIsModelLoading] = useState(false);

    // Reference to the controls for zooming
    const controlsRef = useRef<any>(null);

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
        const umap = new UMAP({
            nComponents: 3,
            nNeighbors: Math.min(5, currentEmbeddings.length - 1),
            spread: 5,
            minDist: 0.8,
        });
        return umap.fit(currentEmbeddings);
    }, [currentEmbeddings]);

    // Zoom to a specific word
    const zoomToWord = (word: string) => {
        const index = currentVocab.indexOf(word);
        if (index !== -1) {
            const [x, y, z] = coords3d[index];
            if (controlsRef.current) {
                const controls = controlsRef.current;
                const camera = controls.object;

                // Store initial positions
                const startTarget = controls.target.clone();
                const startPosition = camera.position.clone();

                // Calculate final positions
                const endTarget = new THREE.Vector3(x, y, z);
                const endPosition = new THREE.Vector3(x + 5, y + 5, z + 5);

                // Animation parameters
                const duration = 1000; // 1000ms (1 second)
                const startTime = Date.now();

                // Animation function
                const animate = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Easing function for smooth animation
                    const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

                    // Smooth transition to final position
                    controls.target.lerpVectors(startTarget, endTarget, easeProgress);
                    camera.position.lerpVectors(startPosition, endPosition, easeProgress);
                    controls.update();

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
            camera={{ position: [0, 0, 40], fov: 75 }}
            style={{
                background: "#0d1117",
                height: "100vh",
                width: "100vw",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0
            }}
        >
            <color attach="background" args={["#0d1117"]} />
            <fog attach="fog" args={["#0d1117", 60, 200]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <SpaceDust />

            <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                minDistance={5}
                maxDistance={200}
                autoRotate={true}
                autoRotateSpeed={5}
                enableDamping={true}
                dampingFactor={0.05}
                enablePan={true}
                panSpeed={1}
            />

            {coords3d.map(([x, y, z], i) => (
                <WordPoint
                    key={i}
                    word={currentVocab[i]}
                    position={[x, y, z]}
                    onSelect={(word) => {
                        setHighlightedWord(word);
                    }}
                />
            ))}
        </Canvas>
    );
}
