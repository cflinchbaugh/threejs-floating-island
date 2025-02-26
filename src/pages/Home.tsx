import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";

const Home = () => {
  const [islandConfig, setIslandConfig] = useState(() =>
    adjustIslandForScreenSize()
  );

  function adjustIslandForScreenSize() {
    const screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    return { scale: screenScale, position: screenPosition, rotation };
  }

  useEffect(() => {
    const handleResize = () => setIslandConfig(adjustIslandForScreenSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
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

          <Island
            scale={islandConfig.scale}
            position={islandConfig.position}
            rotation={islandConfig.rotation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
