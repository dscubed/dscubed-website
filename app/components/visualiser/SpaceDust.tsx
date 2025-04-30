import React from "react";
import { Sparkles } from "@react-three/drei";

// Sparkling dust background layer
const SpaceDust: React.FC = () => {
  return (
    <Sparkles
      count={500}
      size={5}
      speed={1}
      scale={[100, 100, 100]}
      color="white"
      position={[0, 0, 0]}
    />
  );
};

export default SpaceDust;
