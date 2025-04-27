import React from "react";

type TimelineItem = {
  date: string;
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
};

const timelineData: TimelineItem[] = [
  {
    date: "16TH APRIL 2025",
    time: "12:00 AM",
    title: "Applications Open",
    description: "Register online as teams",
  },
  {
    date: "30TH APRIL 2025",
    time: "3–4:30 PM",
    title: "Workshop 1 – Exploratory Data Analysis",
    description: "PAR-110-L1-1022-Lectorial Learning Space (70)",
  },
  {
    date: "2ND MAY 2025",
    time: "5–6:30 PM",
    title: "Workshop 2 – Model Building & Evaluation",
    description: "PAR-104-G-G20-Flexible Learning Space (62)",
  },
  {
    date: "3RD MAY 2025",
    time: "10 AM – 2:00 PM",
    title: "Competition Day!!!",
    description: "Arts West, L2, Room 253",
    highlight: true,
  },
  {
    date: "",
    time: "10 AM – 10:30 AM",
    title: "Dataset",
    description: "Dataset is released blah blah",
    highlight: true,
  },
  {
    date: "",
    time: "10:30 AM – 1:30 PM",
    title: "Model Building",
    description: "Lock in",
    highlight: true,
  },
  {
    date: "",
    time: "1:30 PM – 2:00 PM",
    title: "Results, Prizes & Awards",
    description: "",
    highlight: true,
  },
];

export default function EventTimeline() {
  const firstHighlightIndex = timelineData.findIndex((item) => item.highlight);
  const lastItemIndex = timelineData.length - 1; // Get the index of the last item

  return (
    <div className="flex flex-col items-center px-6 py-8">
      {/* Heading Section */}
      <div className="px-8 py-4 rounded-2xl mb-12">
        <h1 className="text-white font-extrabold text-3xl tracking-wider">
          EVENT TIMELINE
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl">
        <div className="flex flex-col items-center relative">
          {/* Line (White part) */}
          <div
            className="absolute w-1 bg-white z-0"
            style={{
              top: "2rem",
              height: `calc(${firstHighlightIndex} * 7rem)`, // Dynamically set height based on the number of items
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* Line (Blue part) */}
          <div
            className="absolute w-1 bg-blue-500 z-0"
            style={{
              top: `calc(${firstHighlightIndex} * 7rem + 2rem)`, // Align blue line to start at the same point as the white line
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 z-12">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[1fr_3rem_1fr] items-center gap-6 relative"
              >
                {/* Left: Date & Time */}
                <div className="text-right pr-6">
                  {item.date && (
                    <p className="text-white font-extrabold text-lg leading-tight">
                      {item.date}
                    </p>
                  )}
                  <p className="text-white font-bold text-md">{item.time}</p>
                </div>

                {/* Center: Dot */}
                <div className="relative flex justify-center items-center w-12 h-12">
                  <div
                    className={`rounded-full ${
                      item.highlight
                        ? idx === firstHighlightIndex
                          ? "w-14 h-14 bg-blue-500" // First blue circle is slightly bigger
                          : "w-8 h-8 bg-blue-500"
                        : idx === 0
                        ? "w-14 h-14 bg-white" // First white circle is slightly bigger
                        : "w-8 h-8 bg-white"
                    }`}
                  />
                </div>

                {/* Right: Title & Description */}
                <div className="pl-6">
                  <p
                    className={`${
                      item.highlight
                        ? "text-blue-600 font-bold italic text-xl"
                        : item.title === "Applications Open" ||
                          item.title ===
                            "Workshop 1 – Exploratory Data Analysis" ||
                          item.title ===
                            "Workshop 2 – Model Building & Evaluation"
                        ? "text-[#BAD9FF] font-semibold italic text-lg"
                        : "text-white font-semibold italic text-lg"
                    }`}
                  >
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-white text-md mt-2">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}