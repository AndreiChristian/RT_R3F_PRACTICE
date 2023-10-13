"use client";

import { CameraShake, Float, OrbitControls, Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useEffect } from "react";


function Model(props?: any) {
  const { scene, animations } = useGLTF('/robot-draco.glb')

  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions.Idle) {
      actions.Idle.play()
    }
  }, [scene, animations])

  return <primitive object={scene} {...props} />

}

export default function Page() {

  const { maxYaw, maxPitch, yawFrequency, pitchFrequency } = useControls({
    maxYaw: {
      value: 0.1,
      min: 0.001,
      max: 0.5,
      step: 0.001
    },
    maxPitch: {
      value: 0.1,
      min: 0.001,
      max: 0.5,
      step: 0.001
    },
    yawFrequency: {
      value: 0.1,
      min: 0.001,
      max: 0.5,
      step: 0.001
    },
    pitchFrequency: {
      value: 0.1,
      min: 0.001,
      max: 0.5,
      step: 0.001
    },
  })

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
        maxYaw={maxYaw}
        maxPitch={maxPitch}
        yawFrequency={yawFrequency}
        pitchFrequency={pitchFrequency}
        rollFrequency={0.1}
        intensity={1}
        decayRate={0.65}
      />
    </Canvas>
  </main>
}


