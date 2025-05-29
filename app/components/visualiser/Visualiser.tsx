"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
import { UMAP } from "umap-js";
import * as use from "@tensorflow-models/universal-sentence-encoder";

import WordPoint from "./WordPoint";
import SpaceDust from "./SpaceDust";

// Props expected: vocab list and precomputed embeddings
interface Props {
  vocab: string[];
  embeddings: number[][];
  onLoaded?: () => void;
}

// Main scene component that renders the 3D embedding space
export default function Visualiser({ vocab, embeddings, onLoaded }: Props) {
  // State variables for dynamic vocab and their embeddings
  const [currentVocab, setCurrentVocab] = useState(vocab);
  const [currentEmbeddings, setCurrentEmbeddings] = useState(embeddings);

  // UI states for user input and model state
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // TensorFlow model state
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);

  const [profanityList, setProfanityList] = useState<string[]>([]);

  useEffect(() => {
    async function loadProfanityList() {
      try {
        const response = await fetch("/visualiser/words.json");
        const data = await response.json();
        setProfanityList(data);
      } catch (error) {
        console.error("Error loading profanity list:", error);
      }
    }
    loadProfanityList();
  }, []);

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

  useEffect(() => {
    if (!isModelLoading) {
      onLoaded?.(); // Notify parent when done loading
    }
  }, [isModelLoading, onLoaded]);

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

  // Cosine distance for similarity measurement
  const cosineDistance = (a: number[], b: number[]) => {
    const dot = a.reduce((acc, val, i) => acc + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((acc, val) => acc + val * val, 0));
    const normB = Math.sqrt(b.reduce((acc, val) => acc + val * val, 0));
    return 1 - dot / (normA * normB);
  };

  // Compute k-nearest neighbors to a word vector
  const findNearestNeighbors = (embedding: number[], k: number = 5) => {
    const distances = currentEmbeddings.map((e) =>
      cosineDistance(e, embedding)
    );
    const sortedIndexes = distances
      .map((d, i) => ({ index: i, distance: d }))
      .sort((a, b) => a.distance - b.distance)
      .slice(1, k + 1); // Skip the word itself
    return sortedIndexes.map((item) => item.index);
  };

  // Validate input string for acceptable format
  // Validate input string for acceptable format and profanity
  const validateWord = (word: string) => {
    if (!word.trim()) {
      setValidationError("Please enter a word.");
      return false;
    }

    const valid = /^[a-zA-Z]+$/.test(word); // Only letters
    if (!valid) {
      setValidationError("Invalid word. Please use only letters.");
      return false;
    }

    // Check for profanity
    if (profanityList.includes(word.toLowerCase())) {
      setValidationError("Inappropriate input detected.");
      return false;
    }

    setValidationError("");
    return true;
  };

  // Add a new word using the USE model
  const addWord = async (newWord: string) => {
    if (!validateWord(newWord)) return;
    if (!model) {
      setValidationError(
        "Model is still loading. Please try again in a moment."
      );
      return;
    }

    setIsProcessing(true);
    try {
      // Generate embedding using the pre-trained model
      const embeddings = await model.embed([newWord.toLowerCase()]);
      const embeddingArray = await embeddings.array();
      const newEmbedding = Array.from(embeddingArray[0]);

      setCurrentVocab((prevVocab) => [...prevVocab, newWord]);
      setCurrentEmbeddings((prevEmbeddings) => {
        const updatedEmbeddings = [...prevEmbeddings, newEmbedding];

        // Compute neighbors immediately after adding the new word
        const newWordIndex = updatedEmbeddings.length - 1;
        const neighbors = findNearestNeighbors(newEmbedding);

        setNearestIndexes(neighbors); // <== this line is key
        return updatedEmbeddings;
      });
      setInputValue(""); // Clear the input field
      setIsInputVisible(false); // Hide input after adding
      setHighlightedWord(newWord); // Highlight the new word
    } catch (error) {
      console.error("Error generating embedding:", error);
      setValidationError("Failed to generate embedding for this word.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Fallback if USE model fails — fake embedding by character encoding
  const fallbackAddWord = (newWord: string) => {
    if (!validateWord(newWord)) return;

    setIsProcessing(true);
    try {
      // Generate a simple word2vec-like embedding (with lower dimensionality)
      // This is just a fallback when TensorFlow.js model fails to load
      const chars = newWord.toLowerCase().split("");
      const charValues = chars.map((c) => c.charCodeAt(0) - 96); // a=1, b=2, etc.

      // Create a simple embedding based on character positions
      // This is a very simplistic approach but provides some meaning
      const simpleEmbedding = Array(100)
        .fill(0)
        .map((_, i) => {
          const charIndex = i % charValues.length;
          const charValue = charValues[charIndex];
          const position = i / 100;
          return Math.sin(charValue * position) * Math.cos(charValue);
        });

      setCurrentVocab((prevVocab) => [...prevVocab, newWord]);
      setCurrentEmbeddings((prevEmbeddings) => [
        ...prevEmbeddings,
        simpleEmbedding,
      ]);
      setInputValue("");
      setIsInputVisible(false);
      setHighlightedWord(newWord);
    } catch (error) {
      console.error("Error with fallback embedding:", error);
      setValidationError("Failed to generate embedding for this word.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddWord = () => {
    if (model) {
      addWord(inputValue);
    } else {
      fallbackAddWord(inputValue);
    }
  };

  const [nearestIndexes, setNearestIndexes] = useState<number[]>([]);

  return (
    <div className="w-screen h-screen flex-col flex text-center font-bold">
      {/* Display model loading status */}
      {isModelLoading ? (
        <div className="p-3 mx-auto">Loading embedding model...</div>
      ) : model ? (
        <div className="p-3 mx-auto">Using Universal Sentence Encoder</div>
      ) : (
        <div className="p-3 mx-auto">Using fallback embeddings</div>
      )}

      {/* Main 3D visualization canvas */}
      <div className="animated-gradient-1 absolute inset-0 w-full h-full z-[1] opacity-20 pointer-events-none"></div>
      <div className="h-full w-full mb-5">
        <Canvas
          className="h-full w-full select-none"
          camera={{ position: [0, 10, 45], fov: 50 }}
          style={{
            background: "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            touchAction: "none",
          }}
        >
          <color attach="background" args={["#0d1117"]} />
          <fog attach="fog" args={["#0d1117", 60, 200]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={0.8} />
          <SpaceDust />
          <OrbitControls
            enableZoom={true}
            zoomSpeed={0.5}
            minDistance={5}
            maxDistance={200}
          />
          {/* Render the WordPoint components - glowing spheres */}
          {coords3d.map(([x, y, z], i) => (
            <WordPoint
              key={i}
              word={currentVocab[i]}
              position={[x, y, z]}
              isHighlighted={
                currentVocab[i] === highlightedWord ||
                nearestIndexes.includes(i)
              }
              onSelect={(word) => {
                if (highlightedWord === word) {
                  // Clicking the same word again — clear selection
                  setHighlightedWord(null);
                  setNearestIndexes([]);
                } else {
                  // New word selected — compute nearest neighbors
                  setHighlightedWord(word);
                  const idx = currentVocab.indexOf(word);
                  if (idx !== -1) {
                    const neighbors = findNearestNeighbors(
                      currentEmbeddings[idx]
                    );
                    setNearestIndexes(neighbors);
                  }
                }
              }}
            />
          ))}
          {/* Draw lines to nearest neighbors */}
          {highlightedWord &&
            nearestIndexes.map((neighborIdx) => {
              const highlightedIndex = currentVocab.indexOf(highlightedWord);
              if (
                highlightedIndex >= 0 &&
                coords3d[highlightedIndex] &&
                coords3d[neighborIdx]
              ) {
                const [x1, y1, z1] = coords3d[highlightedIndex];
                const [x2, y2, z2] = coords3d[neighborIdx];
                return (
                  <Line
                    key={`line-${neighborIdx}`}
                    points={[
                      [x1, y1, z1],
                      [x2, y2, z2],
                    ]}
                    color="white"
                    lineWidth={2}
                    opacity={0.5}
                  />
                );
              }
              return null;
            })}

          <Html fullscreen zIndexRange={[100, 0]}>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              {/* 'Add Word' button and Floating input UI*/}
              {!isInputVisible ? (
                <button
                  onClick={() => setIsInputVisible(true)}
                  className="bg-foreground text-background px-6 py-3 font-medium rounded-full"
                >
                  Add Word
                </button>
              ) : (
                <div className="flex items-center space-x-2 bg-opacity-90">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter word"
                    className="rounded-full px-4 py-2 border outline-foregroundw-40"
                    disabled={isProcessing}
                  />
                  <button
                    onClick={handleAddWord}
                    className="rounded-full px-4 py-2 bg-foreground text-background disabled:opacity-50 border"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "..." : "Add"}
                  </button>
                  <button
                    onClick={() => setIsInputVisible(false)}
                    className="rounded-full px-4 py-2 bg-foreground text-background border"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {validationError && (
                <div className="text-red-600 text-sm text-center mt-2">
                  {validationError}
                </div>
              )}
            </div>
          </Html>
        </Canvas>
      </div>
    </div>
  );
}
