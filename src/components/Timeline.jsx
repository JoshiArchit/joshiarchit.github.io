import {
  workTimelineItems,
  educationTimelineItems,
} from "../constants/index.js";
import schoolIcon from "/assets/school.svg";
import workIcon from "/assets/work.svg";

import { useState } from "react";

export default function Timeline({ defaultColor, timelineType }) {
  const isWork = timelineType === "work";
  const data = isWork ? workTimelineItems : educationTimelineItems;

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = data.length;
  // Tracking cards for smaller screen
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
    <>
      {/* for large screen timeline fashion*/}
      <div className="timeline-large-screen hidden sm:flex h-full w-full flex-col items-center justify-center overflow-auto">
        {data.map((element, index) => {
          const colors = [
            "bg-red-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-orange-500",
          ];
          const color = `bg-${element.color}-500` || defaultColor;

          return (
            <div
              key={index}
              className="relative card-box flex flex-row justify-between items-center text-center w-full p-1 mb-6"
            >
              {/* Icon positioned outside the box */}
              <div className="card-right">
                <div
                  className={`card-icon flex-shrink-0 items-start transform ${color} p-1 rounded-lg`}
                  style={{ position: "relative", zIndex: 100 }}
                >
                  <img
                    src={isWork ? workIcon : schoolIcon}
                    alt="icon"
                    className="w-10" // Ensure image has the same z-index as the icon container
                  />
                </div>
                {/* Line connecting the icons horizontally to the card */}
                <div
                  className={`${color} translate-x-9 -translate-y-5 opacity-30 h-px w-8`}
                  style={{ position: "relative", zIndex: 40 }}
                >
                  <hr className="m-0" />
                </div>
              </div>
              <div className="card-details flex flex-col justify-start text-left p-[2%] flex-1 ml-5 border pd-2% opacity-100 border-green-200 rounded-lg">
                <div className="card-top flex flex-grow flex-col justify-between mb-[2%]">
                  <div className="card-header flex flex-grow flex-row justify-between">
                    <div className="card-header-left">
                      <div className="title-card  text-white text-base font-medium text-wrap">
                        {element.title}
                      </div>
                      <div className="text-gray-200 font-medium text-base">
                        {isWork ? element.company : element.school}
                      </div>
                    </div>

                    <div className="card-header-right justify-center text-end">
                      <div className="text-gray-400 text-sm font-medium">
                        {element.location}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {element.date}
                      </div>
                    </div>
                  </div>

                  {!isWork && (
                    <div className="card-certifications text-sm">
                      <span className="text-gray-400">
                        With {element.certification}
                      </span>
                    </div>
                  )}
                </div>

                <div className="card-bottom">
                  <div className="card-stack text-sm">
                    <span className="text-green-200">
                      {isWork ? "Tech Stack - " : "Related Course work - "}
                    </span>
                    <br />
                    <span className="text-gray-400">
                      {element.description.map((item, index) =>
                        index ? `,  ${item}` : item
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small Screen Section (only one card at a time) */}
      <div className="text-white timeline-small-screen w-full flex flex-grow flex-col sm:hidden items-center justify-center relative x-auto">
        {/* Work/Education Card */}
        <div className="card-section-top flex flex-grow justify-between items-center w-full rounded-lg">
          {/* Card */}
          <div
            className={
              "timeline-card flex flex-grow flex-col rounded-lg shadow-md p-1 border-2 border-gray-500"
            }
          >
            <p className="text-white text-base text-center">
              {data[currentIndex].title}
            </p>
            <p className="text-white text-base text-center font-light">
              {isWork ? data[currentIndex].company : data[currentIndex].school}
            </p>
            <p className="text-gray-400 text-sm text-center">
              {data[currentIndex].location}
            </p>
            <p className="text-gray-400 text-sm text-center">
              {data[currentIndex].date}
            </p>
            {isWork && (
              <div className="text-xs text-center pt-[1%]">
                <span className="text-green-200">Tech Stack -</span>{" "}
                {data[currentIndex].description.map((item, index) =>
                  index ? `,  ${item}` : item
                )}
              </div>
            )}
          </div>
        </div>

        {/* Page Number Display */}
        <div className="card-section-bottom flex flex-row justify-center mt-4 text-gray-300 text-sm">
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
    </>
  );
}
