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
        <div className="bio-container grid-container col-span-1 sm:col-span-2">
          <img
            src="/assets/sprite.png"
            alt="grid1"
            className="w-full sm:h-[276px] h-fit object-contain "
          />
          <div className="bio-section flex flex-col justify-center items-center text-center">
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

          <div className="grid-container socials-section flex justify-center items-center gap-5 mt-5">
            <div className="socials-header head-text text-center m-0 text-lg font-semibold sm:text-4xl">
              Reach me at
            </div>

            <div className="socials-icons flex flex-row items-center gap-5">
              <a
                href="https://www.linkedin.com/in/archit2904/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8 rounded-lg"
                  title="Connect with me on LinkedIn!"
                />
              </a>
              <a
                href="https://www.github.com/JoshiArchit"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt="github"
                  className="w-8 h-8 rounded-lg"
                  title="Git on my GitHub!"
                />
              </a>
              <a href="mailto:joshi.archit.2904@gmail.com">
                <img
                  src="/assets/email.svg"
                  alt="email"
                  className="w-8 h-8 rounded-lg"
                  title="Email Me!"
                />
              </a>
              <a href="/assets/resume.pdf" download>
                <img
                  src="/assets/resume.svg"
                  alt="Download Resume"
                  className="w-12 h-12 cursor-pointer"
                  title="Download my Resume!"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-container grid-container col-span-1 sm:col-span-2 h-full w-full flex items-center justify-center relative">
          {/* Timeline items */}
          <div className="w-full">
            <p className="text-center m-0 text-lg font-semibold head-text sm:text-4xl">
              Work Experience
            </p>
            <Timeline defaultColor={"bg-green-500"} timelineType={"work"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
