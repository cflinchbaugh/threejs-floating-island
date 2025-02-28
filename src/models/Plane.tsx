import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";
import type { Position } from "../pages/Home";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type PlaneProps = {
  isRotating: boolean;
  rotation?: Position;
  scale: Position;
  position: Position;
};

const Plane = ({ isRotating, ...props }: PlaneProps) => {
  const ref = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
