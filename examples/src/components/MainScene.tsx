import { Edges, GradientTexture, GradientType, OrbitControls, Outlines, Stage } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export default function MainScene() {

  const meshRef = useRef<Mesh>(null!)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta
    }
  })

  return <Stage
    adjustCamera={true}
  >
    <mesh
      ref={meshRef}
      scale={0.8}
    >
      <boxGeometry />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["black", "blue", "black"]}
        />
      </meshBasicMaterial>
      <Edges />
      <OrbitControls />
    </mesh>
  </Stage>


}
