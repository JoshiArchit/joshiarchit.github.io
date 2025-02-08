import React from "react";
import Timeline from "../components/Timeline.jsx";

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
        <div className="bio-container grid-container col-span-1 sm:col-span-2">
          <div className="image-container flex justify-center items-center w-full h-full">
            <img
              src="/assets/sprite.png"
              alt="grid1"
              className="object-contain"
            />
          </div>

          <div className="bio-section flex flex-col justify-center items-center text-justify">
            <p className=" font-semibold text-white sm:grid-headtext">
              Hi! I'm Archit
            </p>
            <p className="text-xl text-[#afb0b6]  sm:grid-subtext">
              Grad student, Software Engineer, and AI/ML enthusiast with a
              passion for turning complex problems into innovative solutions.
              When I'm not coding, you can find me gaming (any guesses on my
              favorite?). 
              <br/>
              <br/>
              I'm on the lookout for challenging full-time
              opportunities that blend Software Engineering, Data Science, and
              Machine Learning. Take a look at my work, grab my resume, and
              let's connect—I'd love to chat!
            </p>
          </div>

          <div className="grid-container socials-section flex justify-center items-center">
            <div className="socials-header head-text text-center m-0 font-semibold">
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
          <section className="w-full flex flex-col items-center relative">
            {/* Arrow positioned above text */}
            <div className="section-header flex">
              <p className="text-center m-0 text-lg font-semibold head-text mb-[4%]">
                Work Experience
              </p>
              <img
                src="/assets/location-arrow.svg"
                alt="arrow-up"
                className="w-4 h-4 ml-1 mb-1 animate-bounce rounded-full hover:shadow-[0_0_10px_4px] hover:shadow-gray-500 transition-shadow duration-300"
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

            <Timeline defaultColor={"bg-green-500"} timelineType={"work"} />
          </section>
        </div>
      </section>
    </section>
  );
};

export default Hero;
