import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">About Me</h3>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <p className="grid-headtext flex justify-center">Why Code?</p>
            <div>
              <img
                src="assets/building.gif"
                alt="grid3"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <p className="grid-subtext">
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
            <p className="grid-headtext flex justify-center">Primary Tech Stack</p>
            <div>
              <img
                src="assets/tech_stack.png"
                alt="grid2"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <p className="grid-subtext">
                I work mostly with Java, JavaScript, Python, and React, while
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
          
            <div className="grid-headtext z-10 flex justify-center">
              Reach me at
            </div>
            
            <div className="grid mt-[10%] grid-cols-2 gap-5 z-10">
              <div className="grid-container"></div>
              <div className="grid-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
