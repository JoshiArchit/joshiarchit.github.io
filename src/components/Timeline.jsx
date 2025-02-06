import {
  workTimelineItems,
  educationTimelineItems,
} from "../constants/index.js";
import schoolIcon from "/assets/school.svg";
import workIcon from "/assets/work.svg";

export default function Timeline({ defaultColor, timelineType }) {
  const isWork = timelineType === "work";
  const data = isWork ? workTimelineItems : educationTimelineItems;
  console.log(data);
  return (
    <>
      {/* for large screen */}
      <div className="timeline-large-screen  hidden sm:flex h-full w-full flex-col items-center justify-center overflow-auto">
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
                <div className="title-card  text-white text-lg font-medium text-wrap">
                  {element.title}
                </div>
                <div className="text-gray-200 font-medium text-lg">
                  {isWork ? element.company : element.school}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {element.location}
                </div>
                <div className="text-gray-400 text-sm">{element.date}</div>

                <div className="text-sm">
                  <span className="text-green-200">
                    {isWork ? "Tech Stack - " : "Related Course work - "}
                  </span>
                  <br/>
                  <span className="text-gray-400">
                    {element.description.map((item, index) =>
                      index ? `,  ${item}` : item
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* for small screen */}
      <div className="timeline-small-screen flex sm:hidden flex-col items-center justify-center overflow-auto">
        {data.map((element, index) => {})}
      </div>
    </>
  );
}
