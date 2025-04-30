import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface WordPointProps {
  word: string;
  position: [number, number, number];
  isHighlighted?: boolean;
  onSelect?: (word: string) => void;
}

// Component that renders a single word as a glowing, animated sphere with a text label
const WordPoint: React.FC<WordPointProps> = ({
  word,
  position,
  isHighlighted,
  onSelect,
}) => {
  const [x, y, z] = position;

  // Normalize x/y/z to color ranges for emissive glow
  const normalize = (v: number) => (v + 50) / 100;
  const r = normalize(x);
  const g = normalize(y);
  const b = normalize(z);

  const emissiveColor = new THREE.Color(r * 0.3, g * 0.3, b * 0.6);
  const [noiseFactor, setNoiseFactor] = useState(0);

  // Create a pulsing effect over time
  useEffect(() => {
    const interval = setInterval(() => {
      setNoiseFactor(Math.sin(Date.now() * 0.002) * 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        if (onSelect) onSelect(word);
      }}
    >
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial
          color={
            isHighlighted
              ? new THREE.Color(1, 0.5, 0)
              : new THREE.Color(0, 0, 0)
          }
          emissive={emissiveColor}
          emissiveIntensity={0.7}
          transparent
          opacity={0.3 + noiseFactor * 0.4}
          roughness={0.85}
          metalness={0}
        />
      </mesh>
      {/* Word label above the sphere */}
      <Html distanceFactor={20} position={[0, 0.6, 0]}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "0.1rem 0.4rem",
            borderRadius: "0.25rem",
            color: "white",
            fontSize: "2.5rem",
            whiteSpace: "nowrap",
            backdropFilter: "blur(4px)",
          }}
        >
          {word}
        </div>
      </Html>
    </group>
  );
};

export default WordPoint;
