"use client";

import { Canvas } from "@react-three/fiber";
import Box from "./box";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return <main className="h-screen bg-zinc-50" >
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  </main>
}

