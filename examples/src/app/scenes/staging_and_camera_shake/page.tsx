"use client";

import { CameraShake, Float, OrbitControls, Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";


function Model(props?: any) {
  const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')

  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions.Idle) {
      actions.Idle.play()
    }
  }, [scene, animations])

  return <primitive object={scene} {...props} />

}

export default function Page() {
  return <main id="main"
    className="h-screen bg-zinc-600" >
    <Canvas
      shadows
      camera={{ fov: 50 }}
    >
      <Suspense fallback={null} >
        <Stage environment="forest" shadows="contact" >
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
      <CameraShake
        maxYaw={0.1}
        maxPitch={0.1}
        yawFrequency={0.1}
        pitchFrequency={0.1}
        rollFrequency={0.1}
        intensity={1}
        decayRate={0.65}
      />
    </Canvas>
  </main>
}


