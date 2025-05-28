import React from "react";
import { Html } from "@react-three/drei";

interface WordPointProps {
  word: string;
  position: [number, number, number];
  onSelect?: (word: string) => void;
}

// Component that renders a single word as a glowing, animated sphere with a text label
const WordPoint: React.FC<WordPointProps> = ({ word, position, onSelect }) => {
  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        if (onSelect) onSelect(word);
      }}
    >
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={"#ffffff"} transparent />
      </mesh>
      {/* Word label above the sphere */}
      <Html
        // distanceFactor={20} 
        position={[0, 0.6, 0]}
      >
        <div
          style={{
             backgroundColor: "rgba(255,255,255,0.05)",
            padding: "0.5rem 1rem",
            borderRadius: "5rem",
            color: "white",
            fontSize: "1.2rem",
            whiteSpace: "nowrap",
            backdropFilter: "blur(4px)",
          }}
        >
          <p>{word}</p>
        </div>
      </Html>
    </group>
  );
};

export default WordPoint;
