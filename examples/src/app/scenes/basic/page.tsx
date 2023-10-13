"use client";

import { Canvas } from "@react-three/fiber";
import Box from "./box";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import LoadingComponent from "@/components/LoadingComponent";

export default function Page() {
  return <main className="h-screen bg-zinc-50" >
    <Suspense fallback={<LoadingComponent />} >
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </Suspense>
  </main>
}

