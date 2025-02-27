import { useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";
const Bird = () => {
  const { scene } = useGLTF(birdScene);
  return (
    <mesh position={[0, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
