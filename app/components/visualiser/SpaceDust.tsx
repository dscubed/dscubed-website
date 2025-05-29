import React from "react";
import { Sparkles } from "@react-three/drei";

// Sparkling dust background layer
const SpaceDust: React.FC = () => {
  return (
    <Sparkles
      count={200}
      size={15}
      speed={1}
      scale={[100, 100, 100]}
      color="#ffffff"
      opacity={0.5}
      position={[0, 0, 0]}
      noise={0}
    />
  );
};

export default SpaceDust;
