import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {

  return (
    <Canvas >
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
