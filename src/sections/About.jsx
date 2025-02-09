import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <section id="about" className="about-section my-5">
      <h3 className="head-text flex justify-center mb-5">About Me</h3>
      <div className="grid row-span-3 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-5 h-full">
        <div className="col-span-4 row-span-1 md:row-span-3 md:col-span-2">
          <div className="grid-container">
            <p className="text-base font-semibold text-white sm:head-text flex justify-center">
              Why Code?
            </p>
            <div className="grid-sub-container sm:flex sm:flex-grow sm:flex-col">
              <img
                src="assets/programmer.png"
                alt="grid3"
                className="w-fit mr-4 sm:w-full sm:h-[276px] float-left h-[100px] object-contain"
              />

              <p className="text-sm text-[#afb0b6]">
                I have a passion for building and creating, both inside and
                outside of work. Whether it's through coding innovative
                solutions that drive businesses forward, or through simple
                pleasures like assembling model kits and Lego, I enjoy bringing
                ideas to life in various forms.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4  row-span-1 md:row-span-3 md:col-span-2">
          <div className="grid-container">
            <p className="text-base font-semibold text-white sm:head-text flex justify-center">
              Primary Tech Stack
            </p>
            <div className="grid-sub-container sm:flex sm:flex-grow sm:flex-col">
              <img
                src="assets/tech_stack.png"
                alt="grid2"
                className="w-fit mr-4 sm:w-full sm:h-[276px] float-left h-[100px] object-contain"
              />
              <p className="text-sm text-[#afb0b6]">
                I work with Java, JavaScript, Python, and React, while
                also having professional experience in C# .NET, Angular,
                TypeScript, Snowflake, Azure Services, API programming, and
                working with multiple database types to meet diverse application
                needs.
              </p>
            </div>
          </div>
        </div>



        <div className="col-span-4 row-span-1 md:row-span-3">
          <div className="grid-container">
            <div className="text-lg font-semibold text-white sm:head-text z-10 flex justify-center">
              Education
            </div>
            <div className="timeline-container grid-sub-container flex flex-grow flex-col">

            <Timeline defaultColor={"bg-green-500"} timelineType={"school"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
