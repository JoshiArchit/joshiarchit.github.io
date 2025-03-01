import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myProjects from "../constants/projects.js";
import ProjectsSmallScreen from "../components/ProjectsSmallScreen.jsx";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0); // State to hold the consistent height
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const projectsPerPage = 3;
  const totalProjects = myProjects.length;

  const handleNavigation = (dir) => {
    setDirection(dir === "right" ? 1 : -1);

    setStartIndex((prevIndex) => {
      let newIndex;

      if (dir === "right") {
        newIndex = prevIndex + projectsPerPage; // Move right by projectsPerPage

        // Wrap around if exceeding total projects
        if (newIndex >= totalProjects) {
          newIndex = 0; // Reset to start
        }
      } else {
        newIndex = prevIndex - projectsPerPage; // Move left by projectsPerPage

        // Wrap around if going below 0
        if (newIndex < 0) {
          newIndex =
            totalProjects -
            (totalProjects % projectsPerPage || projectsPerPage);
        }
      }

      return newIndex;
    });
  };

  const projectCardsRef = useRef([]); // To hold references to project cards

  useEffect(() => {
    // Function to calculate the tallest card height
    const getMaxHeight = () => {
      let maxHeight = 0;
      projectCardsRef.current.forEach((card) => {
        if (card) {
          const cardHeight = card.getBoundingClientRect().height;
          maxHeight = Math.max(maxHeight, cardHeight);
        }
      });
      setCardHeight(maxHeight); // Set the height to the tallest card's height
    };

    // Run on mount and whenever the startIndex changes
    getMaxHeight();
  }, [startIndex]);

  return (
    <section id="projects" className="mb-[2%]">
      <h3 className="head-text text-center mb-[2%]">My Selected Work</h3>

      <div className="projects-md-screen hidden sm:flex  projects-section h-full  flex-col mb-[2%]">
        <div className="flex flex-col projects-carousel h-full justify-between  items-center">
          <p className="text-white w-[90%] text-base text-center">
            As a visual learner, I believe the best way to learn new technology
            is using it to build something and learning from the mistakes you
            make along the way. Please checkout some of my work below. <br />
            The Github links are included for you to check out the code and the
            tech stack icons will take you to the documentations!
          </p>

          <div className="carousel-container flex flex-col h-full justify-between  items-center">
            <div className="project-container flex h-full justify-between  items-center">
              <div
                className="left-arrow arrow-btn w-[25%] flex justify-start hover:shadow-[0_0_10px_4px] hover:shadow-blue-500 transition-shadow duration-300"
                onClick={() => handleNavigation("left")}
              >
                <button>
                  <img src="assets/left-arrow.png" alt="Left" />
                </button>
              </div>

              <div className="project-wrapper relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={startIndex} // Keep the key as startIndex to ensure correct element rendering
                    className="relative flex flex-row text-white w-full h-full"
                    initial={{ x: direction * 100 }}
                    animate={{ x: 0 }}
                    exit={{
                      x: -direction * 100,
                      transition: { duration: 0.3 },
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {myProjects
                      .slice(startIndex, startIndex + projectsPerPage)
                      .map((project, index) => (
                        <div
                          ref={(el) => (projectCardsRef.current[index] = el)} // Save the reference of each card
                          className="project-card flex items-center flex-col  bg-cover transition-shadow duration-300 hover:shadow-[0_0_10px_4px_var(--hover-color)]"
                          style={{
                            backgroundImage: `url(${project.spotlight})`,
                            minHeight: cardHeight ? `${cardHeight}px` : "auto", // Apply the calculated height
                            "--hover-color": project.hovercolor,
                          }}
                          key={index}
                        >
                          <div className="project-header-row flex items-center w-full justify-start gap-3 text-left text-white text-lg font-medium">
                            <div className="project-logo w-[10%]">
                              <img
                                src={project.logo}
                                alt="project-logo"
                                style={project.logoStyle}
                                className="rounded-lg"
                              />
                            </div>
                            <div className="project-title w-[90%]">
                              <h4>{project.title}</h4>
                            </div>
                          </div>

                          <div className="project-desc flex flex-col flex-grow text-left text-[#afb0b6] text-sm font-normal w-full">
                            <p>{project.desc}</p>
                            <br />
                            <p>{project.subdesc}</p>
                          </div>

                          <div className="project-footer flex justify-between w-full">
                            <div className="project-stack flex gap-2">
                              {project.stack.map((tech) => (
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
                                    className="w-8 h-8 transition-all rounded-xl duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
                                  />
                                </a>
                              ))}
                            </div>

                            <div className="project-links flex gap-2">
                              <a
                                href={project.gitLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="assets/github.svg"
                                  alt="github"
                                  className="w-8 h-8 transition-all rounded-xl duration-300 hover:shadow-[0_0_15px_5px_rgba(239,68,68,0.5)]"
                                  title="Check it out on GitHub"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="right-arrow arrow-btn w-[25%] flex justify-end hover:shadow-[0_0_10px_4px] hover:shadow-blue-500 transition-shadow duration-300"
                onClick={() => handleNavigation("right")}
              >
                <button>
                  <img src="assets/right-arrow.png" alt="Right" />
                </button>
              </div>
            </div>

            {/* Page Numbers */}
            <div className="pagination flex justify-center mt-4 gap-2">
              {Array.from({
                length: Math.ceil(totalProjects / projectsPerPage),
              }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold
                              ${
                                startIndex / projectsPerPage === pageIndex
                                  ? "bg-blue-500 text-white"
                                  : "bg-black-300 text-gray-300"
                              } transition-all duration-300 hover:bg-blue-500`}
                  onClick={() => setStartIndex(pageIndex * projectsPerPage)}
                >
                  {pageIndex + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="projects-small-screen flex sm:hidden">
        <ProjectsSmallScreen />
      </div>
    </section>
  );
};

export default Projects;
