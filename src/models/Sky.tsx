import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }: { isRotating: boolean }) => {
  const sky = useGLTF(skyScene);
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current !== null && isRotating) {
      ref.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
