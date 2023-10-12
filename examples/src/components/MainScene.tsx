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

  return <mesh ref={meshRef} >
    <boxGeometry />
    <meshStandardMaterial color={"red"} />
  </mesh>


}
