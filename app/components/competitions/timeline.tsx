'use client'
import React from "react";
import { motion, useInView } from "framer-motion";

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
    title: "Competition Day",
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
  const timelineRef = React.useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });

  return (
    <div className="flex flex-col items-center px-6 py-8">
      {/* Heading Section */}
      <div className="px-8 py-4 rounded-2xl mb-12">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">
          EVENT TIMELINE
        </h1>
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative w-full max-w-6xl">
        <div className="flex flex-col items-center relative">
          {/* Line */}
          <motion.div
            className="absolute w-1 z-0 bg-gradient-to-b from-black via-[#AFCBFF] to-[#3B82F6] dark:from-white dark:via-[#AFCBFF] dark:to-[#3B82F6]"
            initial={{ height: 0 }}
            animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{
              top: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 z-12">
            {timelineData.map((item, idx) => (
              <TimelineItemComponent
                key={idx}
                item={item}
                idx={idx}
                isTimelineInView={isTimelineInView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItemComponent({
  item,
  idx,
  isTimelineInView,
}: {
  item: TimelineItem;
  idx: number;
  isTimelineInView: boolean;
}) {
  return (
    <motion.div
      className="grid grid-cols-[1fr_3rem_1fr] items-center gap-6 relative"
      initial="hidden"
      animate={isTimelineInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: idx * 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Left: Date & Time */}
      <motion.div
        className="text-right pr-6"
        initial={{ opacity: 0, x: -50 }}
        animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: idx * 0.3 }}
      >
        {item.date && (
          <p className="font-extrabold text-lg leading-tight dark:text-white">
            {item.date}
          </p>
        )}
        <p className="font-bold text-md dark:text-white">{item.time}</p>
      </motion.div>

      {/* Center: Dot */}
      <motion.div
        className="relative flex justify-center items-center w-12 h-12"
        initial={{ scale: 0 }}
        animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.3 }}
      >
        <div
          className={`rounded-full ${
            item.highlight
              ? idx === 0
                ? "w-14 h-14 bg-blue-500"
                : "w-8 h-8 bg-blue-500"
              : idx === 0
              ? "w-14 h-14 bg-black dark:bg-white"
              : "w-8 h-8 bg-black dark:bg-white"
          }`}
        />
      </motion.div>

      {/* Right: Title & Description */}
      <motion.div
        className="pl-6"
        initial={{ opacity: 0, x: 50 }}
        animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: idx * 0.3 }}
      >
        <p
          className={`${
            item.highlight
              ? "text-blue-600 font-bold text-2xl dark:text-blue-400"
              : item.title === "Applications Open" ||
                item.title === "Workshop 1 – Exploratory Data Analysis" ||
                item.title === "Workshop 2 – Model Building & Evaluation"
              ? "text-[#BAD9FF] font-semibold text-xl dark:text-[#BAD9FF]"
              : "font-semibold text-xl dark:text-white"
          }`}
        >
          {item.title}
        </p>
        {item.description && (
          <p className="text-md mt-2 dark:text-white">{item.description}</p>
        )}
      </motion.div>
    </motion.div>
  );
}