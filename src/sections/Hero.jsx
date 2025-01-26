import { PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/Loading";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Controller from "../components/Controller";

export const Hero = () => {
  // Leva controls for ThreeJS components - Uncomment to play with the controls. Add the controls to the respective components.
  // const controls = useControls("HackerRoom", {
  //   rotationX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationY: {
  //     value: -Math.PI,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: 0.1,
  //     max: 1,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I'm Archit <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient space-x-0">
          Building software and solutions that bridge the gap between technology
          and people, driving accessibility, adoption, and meaningful impact.
        </p>
      </div>

      {/* Canvas Component for ThreeJS render */}
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />

            <group>
              <Controller position={sizes.targetPosition}/>
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
