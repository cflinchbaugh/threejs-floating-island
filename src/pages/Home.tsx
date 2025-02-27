import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";

function adjustIslandForScreenSize() {
  const screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
  const screenPosition = [0, -6.5, -43];
  const rotation = [0.1, 4.7, 0];

  return { scale: screenScale, position: screenPosition, rotation };
}

function adjustPlaneForScreenSize() {
  const screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
  const screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

  return { scale: screenScale, position: screenPosition };
}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const [islandConfig, setIslandConfig] = useState(() =>
    adjustIslandForScreenSize()
  );
  const [planeConfig, setPlaneConfig] = useState(() =>
    adjustPlaneForScreenSize()
  );

  useEffect(() => {
    const handleResize = () => {
      setIslandConfig(adjustIslandForScreenSize());
      setPlaneConfig(adjustPlaneForScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <directionalLight position={[15, 2, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            color={"#b1e1ff"}
            groundColor={"#000"}
            intensity={1}
          />

          <Sky />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            scale={planeConfig.scale}
            position={planeConfig.position}
          />
          <Bird />

          <Island
            scale={islandConfig.scale}
            position={islandConfig.position}
            rotation={islandConfig.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={() => {}}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
