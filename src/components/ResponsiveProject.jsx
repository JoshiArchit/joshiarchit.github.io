import React from "react";
import { useState } from "react";
import myProjects from "../constants/projects.js";

const ResponsiveProject = () => {
  // For mobile view
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = myProjects;
  const totalPages = data.length;

  const nextCard = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="grid-container text-white ">
      <div className="carousal-message">
        <p className="text-sm text-white text-center">
          As a visual learner I believe in building to learn new things and
          making mistakes along the way. <br />
          Please checkout some of my work and follow the links to check out the
          code and stack documentation.
        </p>
      </div>

      <div
        className="width-full border-2 border-black-300 rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg"
        style={{
          "--hover-color": myProjects[currentIndex].hovercolor,
          boxShadow: `0 0 10px 4px var(--hover-color)`,
        }}
      >
        <div className="top-section flex text-sm gap-2 mb-2">
          <div className="project-icon justify-center items-start w-[15%]">
            <img
              src={myProjects[currentIndex].logo}
              style={myProjects[currentIndex].logoStyle}
              alt="project-logo"
              title={myProjects[currentIndex].name}
              className="w-6 h-6 rounded-lg"
            />
          </div>
          <div className="project-title flex flex-grow justify-start items-center w-[85%]">
            {myProjects[currentIndex].title}
          </div>
        </div>
        <div className="middle-section flex flex-col justify-start text-sm text-start items-center mb-2">
          <p>{myProjects[currentIndex].desc}</p>
          <br />
          <p>{myProjects[currentIndex].shortdescription}</p>
        </div>
        <div className="bottom-section flex flex-col gap-2 justify-between items-start">
          <div className="github-link flex gap-2 mb-[2px]">
            <p className="text-sm justify-center items-center">Find it on : </p>
            <a
              href={myProjects[currentIndex].gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets/github.svg"
                alt="github"
                className="w-6 h-6 rounded-lg"
                title="Check it out on GitHub"
              />
            </a>
          </div>
          <div className="tech-stack flex gap-2">
            {myProjects[currentIndex].stack.map((tech) => (
              <a
                key={tech.id}
                href={tech.documentation}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tech.path}
                  alt={tech.name}
                  title={tech.name}
                  className="w-6 h-6 rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pagination flex justify-center mt-4 gap-2">
        <div className="left-button">
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="text-white p-2 rounded-full disabled:opacity-50"
          >
            ◀
          </button>
        </div>
        <div className="page-number flex justify-center items-center">
          {currentIndex + 1} of {totalPages}
        </div>
        <div className="right-button">
          <button
            onClick={nextCard}
            disabled={currentIndex === data.length - 1}
            className="text-white p-2 rounded-full disabled:opacity-50"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveProject;
