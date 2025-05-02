"use client";

import YouTube from "react-youtube";

function WorkshopVideo(videoId) {
  if (videoId) {
    return <iframe width="100%" height="100%" src={videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;
  } else {
    return <div className="text-gray-400 font-bold text-2xl mb-[4.385rem] mt-[4.385rem]">Coming Soon</div>;
  }
}

export default function WorkshopCard({
  title,
  subtitle,
  description,
  videoId,
  date,
  time,
  pdfLink,
}) {
  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0, // Disable autoplay
    },
  };

  return (
    <div className="w-[25rem] bg-[#1e1e1e] text-white rounded-xl border border-[#333] p-6 flex flex-col gap-4 shadow-md">
      <div>
        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold">{title}</h3>
        <h4 className="text-[clamp(1.125rem,1.8vw,1.25rem)] font-semibold">
          {subtitle}
        </h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div className="text-sm text-white font-semibold">
        <div className="flex justify-between">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className="rounded-md w-full h-auto overflow-hidden">
        <div className="text-center text-gray-400 font-bold text-2xl">
          {WorkshopVideo(videoId)}
        </div>
      </div>

      {pdfLink && (
        <a
          href={pdfLink}
          download
          className="mt-2 inline-block text-sm font-medium bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          <div className="flex items-center gap-2">
            <span>Download Slides</span>
            <span>
              <img src="/competitions/download.png" alt="Download" width="10rem" height="10rem" />
            </span>
          </div>
        </a>
      )}
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