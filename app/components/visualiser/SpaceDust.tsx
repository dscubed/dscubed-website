import React from "react";
import { Sparkles } from "@react-three/drei";

// Sparkling dust background layer
const SpaceDust: React.FC = () => {
  return (
    <Sparkles
      count={1000}
      size={15}
      speed={1}
      scale={[100, 100, 100]}
      color="#78A0FD"
      position={[0, 0, 0]}
      noise={0}
    />
  );
};

export default SpaceDust;
