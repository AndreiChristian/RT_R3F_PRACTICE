import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

export default function Box(props: any) {

  const meshRef = useRef<Mesh>(null!)

  const [isHovered, setHovered] = useState(false)
  const [isClicked, setClicked] = useState(false)

  useFrame((_state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta
  })

  return <mesh
    {...props}
    ref={meshRef}
    scale={isClicked ? 1.5 : 1}
    onClick={() => setClicked(!isClicked)}
    onPointerOver={(event) => {
      event.stopPropagation
      setHovered(true)
    }}
    onPointerOut={() => setHovered(false)}
  >
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={isHovered ? "purple" : "red"} />
    <Edges
      scale={1}
      threshold={15}
      color="pink"
    />
  </mesh>

}
