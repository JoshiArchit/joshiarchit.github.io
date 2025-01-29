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
        <div className="typewriter-container w-fit text-center mx-auto">
          <p className="typewriter sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I'm Archit <span className="waving-hand">👋</span>
          </p>
        </div>

        <p className="hero_tag text-gray_gradient text-center space-x-0">
          Building software and solutions that bridge the gap between technology
          and people, which drives accessibility, adoption, and make meaningful
          impact.
        </p>
      </div>
      
      <section className="grid mt-[2%] xl:grid-cols-2 xl:grid-rows-1 md:grid-cols-1 grid-cols-1 gap-5">
        <div className="col-span-1 xl:row-span-1 flex justify-center items-center">
          <img
            src="/assets/programmer.png"
            alt="programmer"
            className="object-contain w-1/2 h-auto"
          />
        </div>

        <div className="col-span-1 xl:row-span-1 flex justify-center items-center">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi! I'm Archit</p>
              <p className="grid-subtext">
                With four years of experience in Software Engineering, I have
                refined my expertise in Full-stack Development, Data Science,
                and Machine Learning, all while maintaining a strong focus on
                clean, scalable code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
