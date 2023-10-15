"use client";

import LoadingComponent from "@/components/LoadingComponent";
import { Html, StatsGl } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useRef } from "react";
import { Group } from "three";

function Dodecahedron(props: any) {

  const { distanceFactor } = useControls({
    distanceFactor: {
      value: 10,
      min: 0,
      max: 100,
      step: 1
    }
  })

  return <mesh {...props} >
    <dodecahedronGeometry />
    <meshStandardMaterial roughness={0.75} emissive="#404057" />
    <Html distanceFactor={distanceFactor} >
      <div className="pt-2.5 transform-[calc(50%_+_40px)] text-left bg-[#202035] text-white p-2.5 rounded relative">
        <div className="absolute top-[25px] left-[-40px] h-[1px] w-[40px] bg-black"></div>
        hello
        <br />
        world
      </div>
    </Html>
  </mesh>
}

function Content() {

  const groupRef = useRef<Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = groupRef.current.rotation.y = groupRef.current.rotation.z += 0.01
    }
  })

  return <group ref={groupRef} >
    <Dodecahedron position={[-2, 0, 0]} />
    <Dodecahedron position={[0, -2, -3]} />
    <Dodecahedron position={[2, 0, 0]} />
  </group>
}


export default function Page() {
  return <Suspense fallback={LoadingComponent()} >
    <main className="bg-zinc-50 h-screen">
      <Canvas camera={{ position: [0, 0, 7.5] }} >
        <Content />
        <pointLight color="indianred" />
        <pointLight position={[10, 10, -10]} color="orange" />
        <pointLight position={[-10, -10, 10]} color="blue" />
        <StatsGl />
      </Canvas>
    </main>
  </Suspense>
}
