import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Planet from "./Planet";

import React from "react";

const ThreeDModel = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <Planet scale={[0.1, 0.1, 0.1]}></Planet>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true}></OrbitControls>
    </Canvas>
  );
};

export default ThreeDModel;
