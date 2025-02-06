import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <section className="c-space my-10">
      <h3 className="head-text flex justify-center mb-[2%]">About Me</h3>
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <p className="text-lg font-semibold text-white sm:head-text flex justify-center">
              Why Code?
            </p>
            <div>
              <img
                src="assets/programmer.png"
                alt="grid3"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <p className="text-base text-[#afb0b6]  sm:grid-subtext">
                I have a passion for building and creating, both inside and
                outside of work. Whether it's through coding innovative
                solutions that drive businesses forward, or through simple
                pleasures like assembling model kits and Lego, I enjoy bringing
                ideas to life in various forms.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <p className="text-lg font-semibold text-white sm:head-text flex justify-center">
              Primary Tech Stack
            </p>
            <div>
              <img
                src="assets/tech_stack.png"
                alt="grid2"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <p className="text-base text-[#afb0b6]  sm:grid-subtext">
                I work with Java, JavaScript, Python, and React, while
                also having professional experience in C# .NET, Angular,
                TypeScript, Snowflake, Azure Services, API programming, and
                working with multiple database types to meet diverse application
                needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="text-lg font-semibold text-white sm:head-text z-10 flex justify-center">
              Education
            </div>
            <Timeline defaultColor={"bg-green-500"} timelineType={"school"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
