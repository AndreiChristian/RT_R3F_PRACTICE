"use client"

import { ContactShadows, PerspectiveCamera, PresentationControls, RenderTexture, Stats, StatsGl, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useRef, useState } from "react";
import { Mesh } from "three";

function Boxy() {

  const textRef = useRef<Mesh>(null!)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
    }
  })

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial  >
        <RenderTexture attach="map" anisotropy={16} >
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <color attach="background" args={['salmon']} />
          <Text fontSize={2} color={'pink'} ref={textRef} >
            Hello
          </Text>
          <Dodecahedron />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

export default function Page() {

  const { ambientLightIntensity } = useControls({
    ambientLightIntensity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.1
    },
  })

  return <main className="h-screen bg-zinc-50" >
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }} >

      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight position={[10, 10, 5]} />

      <Suspense fallback={null} >
        <PresentationControls snap={true} >
          <Boxy />
          <Dodecahedron position={[0, 1, 0]} scale={0.2} />
        </PresentationControls>
      </Suspense>

      <ContactShadows position={[0, -0.5, 0]} blur={1} opacity={0.75} color="orange" />
      <StatsGl />
    </Canvas>
  </main>
}

function Dodecahedron(props?: any) {

  const meshRef = useRef<Mesh>(null!)

  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return <group {...props} >
    <mesh
      ref={meshRef}
      scale={isClicked ? 1.5 : 1}
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={(e) => {
        e.stopPropagation(),
          setIsHovered(true)
      }}
      onPointerOut={() => {
        setIsHovered(false)
      }}
    >
      <dodecahedronGeometry args={[0.75]} />
      <meshStandardMaterial color={!isHovered ? "teal" : "pink"} />
    </mesh>
  </group>

}

