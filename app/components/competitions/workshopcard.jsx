"use client";

import YouTube from "react-youtube";

export default function WorkshopCard({
  title,
  subtitle,
  description,
  videoId,
  date,
  time,
}) {
  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0, // Disable autoplay
    },
  };

  return (
    <div className="flex-1 sm:w-[calc(50%-1rem)] max-w-[28rem] bg-[#1e1e1e] text-white rounded-xl border border-[#333] p-6 flex flex-col gap-4 shadow-md">
      <div>
        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold">{title}</h3>
        <h4 className="text-[clamp(1.125rem,1.8vw,1.25rem)] font-semibold">
          {subtitle}
        </h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="rounded-md w-full h-auto overflow-hidden">
        <div className="text-center text-gray-400 font-bold text-2xl">
          <p>COMING SOON {date}</p>
        </div>
      </div>
      <div className="text-sm text-white font-semibold">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
/*
"use client";

import YouTube from "react-youtube";

export default function WorkshopCard({
  title,
  subtitle,
  description,
  videoId,
  date,
  time,
}) {
  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0, // Disable autoplay
    },
  };

  return (
    <div className="flex-1 sm:w-[calc(50%-1rem)] max-w-[28rem] bg-[#1e1e1e] text-white rounded-xl border border-[#333] p-6 flex flex-col gap-4 shadow-md">
      <div>
        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold">{title}</h3>
        <h4 className="text-[clamp(1.125rem,1.8vw,1.25rem)] font-semibold">
          {subtitle}
        </h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="rounded-md w-full h-auto overflow-hidden">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="text-sm text-white font-semibold">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
  */