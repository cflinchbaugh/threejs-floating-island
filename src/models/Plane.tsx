import { useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";
type Position = [x: number, y: number, z: number];
type PlaneProps = {
  isRotating: boolean;
  rotation: Position;
  scale: Position;
  position: Position;
};
const Plane = ({ isRotating, ...props }: PlaneProps) => {
  const { scene, animations } = useGLTF(planeScene);
  console.log(isRotating);
  console.log(animations);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
