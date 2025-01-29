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
  return (
    <section
      className="sm:h-auto min-h-[50vh] w-full flex flex-col justify-center items-center relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-25 mt-20 gap-3 px-4 sm:px-8">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I'm Archit <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient text-center space-x-0">
          Building software and solutions that bridge the gap between technology
          and people, which drives accessibility, adoption, and make  meaningful
          impact.
        </p>
      </div>

      <section className="flex items-center justify-center px-4 sm:px-8 mt-8">
        <div className="w-full sm:w-1/3 h-auto sm:h-1/3 relative inset-0">
          <img
            src="/assets/programmer.png"
            alt="programmer"
            className="object-contain w-full h-auto"
          />
        </div>
      </section>    
    </section>

    
  );
};

export default Hero;
