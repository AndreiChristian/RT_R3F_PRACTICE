"use client";

import MainScene from "@/components/MainScene";
import { Canvas } from "@react-three/fiber";

export default function Page() {

  return (
    <main className="bg-zinc-50 h-screen flex items-center justify-center" >
      <section className="box-border h-3/4 w-3/4 " >
        <Canvas >
          <ambientLight />
          <MainScene />
        </Canvas>
      </section>
    </main>
  )
}
