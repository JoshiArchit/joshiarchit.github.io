import React from "react";
import Timeline from "../components/Timeline.jsx";
import WorkSmallScreen from "../components/WorkSmallScreen.jsx";

export const Hero = () => {
  return (
    <section
      className="sm:h-auto min-h-[50vh] w-full flex flex-col justify-center items-center relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-25 mt-20 gap-3 px-4 sm:px-8">
        <div className="typewriter-container w-fit text-center mx-auto">
          <p className="typewriter sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I'm Archit <span className="waving-hand">👋</span>
          </p>
        </div>

        <p className="hero_tag text-gray_gradient text-center space-x-0">
          Building software solutions and transforming data that bridges the gap
          between technology and people, which drives accessibility, adoption,
          and makes meaningful impact.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-4 w-full gap-3 mt-10">
        <div className="bio-container grid-container col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <div className="image-container flex justify-center items-center w-full h-full">
            <img
              src="/assets/sprite.png"
              alt="grid1"
              className="object-contain"
            />
          </div>

          <div className="bio-section flex flex-col justify-center items-center text-justify">
            <p className=" font-semibold text-white text-sm md:text-base lg:grid-headtext">
              Hi! I'm Archit
            </p>
            <p className="text-[#afb0b6] text-sm sm:text-sm md:text-sm lg:grid-subtext">
              Grad Student, Software Engineer, AI and Machine learning
              enthusiast, gamer (guess my favourite) and the occasional artist.
              <br />
              Looking to leverage my software engineering skills and critical
              thinking to tackle intricate problems and helping find innovative
              solutions to shape the technological landscape around the globe.
              <br />
              <br />I am looking for challenging opportunities that will help me
              learn and grow as a professional. Please check out my some of my
              work, my resume and get in touch with me!
            </p>
          </div>

          <a href="#contact">
          <div className="grid-container socials-section flex justify-center items-center">
            <div className="socials-header head-text text-center m-0 font-semibold">
              Get in Touch!
            </div>
          </div>
          </a>
        </div>

        <div className="timeline-container grid-container h-full w-full flex items-center justify-center relative col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-2">
          {/* Timeline items */}
          <section className="w-full flex flex-col items-center relative">
            {/* Arrow positioned above text */}
            <div className="section-header flex">
              <p className="text-center m-0 text-lg font-semibold head-text mb-[4%]">
                Work Experience
              </p>
              <img
                src="/assets/location-arrow.svg"
                alt="arrow-up"
                className="hidden sm:block w-4 h-4 ml-1 mb-1 animate-bounce rounded-full hover:shadow-[0_0_10px_4px] hover:shadow-gray-500 transition-shadow duration-300"
                title="Scroll to Work Experience"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#work");

                  if (target) {
                    const navbarHeight =
                      document.querySelector("header").offsetHeight; // Get navbar height
                    const targetPosition =
                      target.getBoundingClientRect().top + window.scrollY; // Get target's position
                    window.scrollTo({
                      top: targetPosition - navbarHeight - 20, // Adjust for navbar height & extra spacing
                      behavior: "smooth",
                    });
                  }
                }}
              />
            </div>
            
            <div className="timeline hidden sm:flex">
            <Timeline defaultColor={"bg-green-500"} timelineType={"work"} />
            </div>

            <div id="worksmall" className="small-screen-work flex sm:hidden">
              <WorkSmallScreen />
              </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Hero;
