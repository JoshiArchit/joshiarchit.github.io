import React, { useState } from "react";
import workExp from "../constants/work";
import WorkModal from "./WorkModal"; // Import the modal component

const WorkSmallScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0); // Default to the first work item

  const openModal = (index) => {
    setCurrentWorkIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextWork = () => {
    if (currentWorkIndex < workExp.length - 1) {
      setCurrentWorkIndex(currentWorkIndex + 1);
    }
  };

  const prevWork = () => {
    if (currentWorkIndex > 0) {
      setCurrentWorkIndex(currentWorkIndex - 1);
    }
  };

  return (
    <section id="work" className=" text-white">
      <div className="carousal-message mb-3">
        <p className="text-sm text-white text-center">
          With 4 years of experience, I bring a curious attitude with and a
          strong work ethic to the table. Here are some of my past work
          experiences. Click on any to learn more.
        </p>
      </div>

      {/* Display the current work experience card */}
      <div
        className="width-full border-2 border-black-300 rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg"
        style={{
          "--hover-color": workExp[currentWorkIndex].hovercolor,
          boxShadow: `0 0 10px 4px var(--hover-color)`,
        }}
        onClick={() => openModal(currentWorkIndex)}
      >
        <div className="top-section w-full gap-2 mb-2">
          <div className="work-title justify-start items-center w-full">
            {workExp[currentWorkIndex].title}
            <br />
            
          </div>
        </div>
        <div className="horizontal-line w-full border-b-2 border-black-300 mb-2"></div>
        <div className="bottom-section flex flex-col justify-between items-start">
        <p className="text-white">{workExp[currentWorkIndex].company}</p>
          <p className="text-sm text-gray-500">
            {workExp[currentWorkIndex].location}
            <br />
            {workExp[currentWorkIndex].duration}
          </p>
        </div>
      </div>

      {/* Pagination buttons */}
      <div className="pagination flex justify-center mt-4 gap-2">
        <div className="left-button">
          <button
            onClick={prevWork}
            disabled={currentWorkIndex === 0}
            className="text-white p-2 rounded-full disabled:opacity-50"
          >
            ◀
          </button>
        </div>
        <div className="page-number flex justify-center items-center">
          {currentWorkIndex + 1} of {workExp.length}
        </div>
        <div className="right-button">
          <button
            onClick={nextWork}
            disabled={currentWorkIndex === workExp.length - 1}
            className="text-white p-2 rounded-full disabled:opacity-50"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Modal for detailed work info */}
      {isModalOpen && (
        <WorkModal
          workExp={workExp[currentWorkIndex]} // Pass the current work item
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default WorkSmallScreen;
