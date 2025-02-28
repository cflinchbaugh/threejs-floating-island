import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import birdScene from "../assets/3d/bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const ref = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (ref.current === null) {
      return;
    }

    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x > camera.position.x + 50) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.035;
      ref.current.position.z -= 0.025;
    } else {
      ref.current.position.x -= 0.035;
      ref.current.position.z += 0.025;
    }
  });

  return (
    <mesh ref={ref} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
