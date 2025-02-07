import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExp } from "../constants/index.js";

const Work = () => {
  const [startIndex, setStartIndex] = useState(0);
  const projectsPerPage = 2;
  const totalProjects = workExp.length;
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNavigation = (dir) => {
    setDirection(dir === "right" ? 1 : -1);

    setStartIndex((prevIndex) => {
      let newIndex;

      if (dir === "right") {
        newIndex = prevIndex + 1; // Move right by 1

        // When moving right and less than `projectsPerPage` projects remain, wrap around
        if (newIndex + projectsPerPage > totalProjects) {
          newIndex = 0; // Reset to start
        }
      } else {
        newIndex = prevIndex - 1; // Move left by 1

        // When moving left and reaching the start, wrap around to the end
        if (newIndex < 0) {
          newIndex = totalProjects - projectsPerPage;
        }
      }

      // Ensure there is enough content to fill the page
      if (newIndex + projectsPerPage > totalProjects) {
        const remainingProjects = totalProjects - newIndex;
        const extraProjects = projectsPerPage - remainingProjects;

        // Wrap back to the start of the list when there are fewer remaining
        newIndex = totalProjects - extraProjects;
      }

      return newIndex;
    });
  };

  const [cardHeight, setCardHeight] = useState(0); // State to hold the consistent height
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
    <section id="work">
      <h3 className="head-text text-center mb-[2%]">Work Experience</h3>

      <div className="hidden sm:flex  projects-section h-full  flex-col mb-[2%]">
        <div className="flex flex-col projects-carousel h-full justify-between  items-center">
          <p className="text-white w-[90%] text-base text-center">
            With 4 years of full-time experience and over 6 years of collective leadership experience across NGOs, University leader roles and professional work environments, I have developed a strong foundation in software development & leadership. I have worked on a variety of projects ranging from web development, mobile app development, and data analysis.
          </p>
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
                  {workExp
                    .slice(startIndex, startIndex + projectsPerPage)
                    .map((work, index) => (
                      <div
                        ref={(el) => (projectCardsRef.current[index] = el)} // Save the reference of each card
                        className="work-card flex items-center flex-col  bg-cover transition-shadow duration-300 hover:shadow-[0_0_10px_4px_var(--hover-color)]"
                        style={{
                          backgroundImage: `url(${work.spotlight})`,
                          minHeight: cardHeight ? `${cardHeight}px` : "auto", // Apply the calculated height
                          "--hover-color": work.hovercolor,
                        }}
                        key={index}
                      >
                        <div className="project-header-row flex items-center w-full justify-start gap-3 text-left text-white text-lg font-medium">
                          
                          <div className="project-title w-[90%]">
                            <h4>{work.title}</h4>
                          </div>
                        </div>

                        <div className="project-desc flex flex-col flex-grow text-left text-[#afb0b6] text-sm font-normal w-full">
                          <p>{work.company}</p>
                          <br />
                          <p>{work.location}</p>
                          <p>{work.duration}</p>
                          <p>{work.description}</p>
                        </div>

                        <div className="project-footer flex justify-between w-full">
                          <div className="project-stack flex gap-2">
                            {work.technology.map((tech) => (
                              <a
                                href={tech.documentation}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  key={tech.id}
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
                              href={work.gitLink}
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
        </div>
      </div>
    </section>
  );
};

export default Work;
