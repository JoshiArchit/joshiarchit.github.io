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
          className="modal-content bg-gray-400 rounded-lg p-6 w-11/12 md:w-1/3"
          onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing the modal
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="relative top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>

          {/* Modal Content */}
          <div>
            <h2 className="text-xl font-semibold">{workExp.title}</h2>
            <div className="mt-4">
              <p>{workExp.shortDescription}</p>
              {/* Add more detailed information about the work item as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkModal;
