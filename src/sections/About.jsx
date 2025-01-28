import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
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

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/tech_stack.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with Java, JavaScript, Python, and React, while also
                having professional experience in C# .NET, Angular, TypeScript,
                Snowflake, Azure Services, API programming, and working with
                multiple database types to meet diverse application needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/building.gif"
              alt="grid3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <p className="grid-headtext">Why Code?</p>
            <p className="grid-subtext">
              I have a passion for building and creating, both inside and
              outside of work. Whether it's through coding innovative solutions
              or assembling model kits and Lego, I enjoy bringing ideas to life
              in various forms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
