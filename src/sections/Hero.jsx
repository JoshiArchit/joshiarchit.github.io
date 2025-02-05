import { PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/Loading";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Controller from "../components/Controller";
import Timeline from "../components/Timeline.jsx";

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
          Building software solutions and transforming data that bridges the gap
          between technology and people, which drives accessibility, adoption,
          and makes meaningful impact.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-4 w-full gap-5 mt-10">
        <div className="grid-container col-span-1 sm:col-span-2">
          <img
            src="/assets/grid1.png"
            alt="grid1"
            className="w-full sm:h-[276px] h-fit object-contain"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg font-semibold text-white sm:grid-headtext">
              Hi! I'm Archit
            </p>
            <p className="text-base text-[#afb0b6]  sm:grid-subtext">
              Grad Student, Software Engineer, AI and Machine learning
              enthusiast, Gamer and the occasional artist. <br />
              Looking to leverage my software engineering skills and critical
              thinking to tackle intricate problems and helping find innovative
              solutions to shape the technological landscape around the globe.{" "}
              <br />
              <br />I am looking for challenging opportunities that will help me
              learn and grow as a professional. Please check out my some of my
              work, my resume and get in touch with me!
            </p>
          </div>
        </div>

        <div className="grid-container col-span-2 h-full w-full flex items-center justify-center relative">
          {/* Horizontal line */}
          {/* <div
            className="bg-white absolute h-full w-px opacity-30"
            style={{ zIndex: 1 }}
          >
            <hr className="m-0 border-white" />
          </div> */}

          {/* Timeline items */}
          <div className="w-full">
          <p className="text-center m-0 text-lg font-semibold text-white sm:text-4xl">
              Work Experience
            </p>
            <Timeline defaultColor={"bg-green-500"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
