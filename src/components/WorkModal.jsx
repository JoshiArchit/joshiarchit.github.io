import React from "react";

const WorkModal = ({ workExp, closeModal }) => {
  return (
    <>
      {/* Modal Overlay */}
      <div
        className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={closeModal}
      >
        {/* Modal Content */}
        <div
          className="modal-content flex flex-col bg-black-200 rounded-lg p-6 w-11/12 h-[90vh]"
          onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing the modal
        >
          {/* Modal Content */}
          <div className="modal-header sticky">
            <div className="close-button float-right">
              <button onClick={closeModal} className="text-2xl">
                &times;
              </button>
            </div>
            <div className="modal-header-top flex flex-row w-full gap-4">
              <div className="modal-header flex flex-grow flex-col w-[95%]">
                <h2 className="text-xl font-semibold">{workExp.title}</h2>
                <p>{workExp.company}</p>
              </div>
            </div>
            <div className="modal-header-bottom">
              <p className="text-sm text-gray-500">
                {workExp.location}
                <br />
                {workExp.duration}
              </p>
            </div>
          </div>

          <div className="horizontal-line w-full border-b-2 border-black-300 my-2"></div>

          <div className="modal-body overflow-y-auto pr-2">
            <p className="text-sm text-green-200">Responsibilities</p>
            <br />
            <ul className="text-sm list-disc pl-5">
              {workExp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>

            <div className="project-stack flex gap-2 text-wrap mt-4">
              {workExp.technology.map((tech) => (
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
                    className="w-8 h-8 rounded-xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkModal;
