"use client";

import MainScene from "@/components/MainScene";
import { Canvas } from "@react-three/fiber";

export default function Page() {

  return (
    <main className="bg-zinc-50 h-screen" >
      <Canvas gl={{ alpha: true }} >
        <ambientLight />
        <MainScene />
      </Canvas>
    </main>
  )
}
