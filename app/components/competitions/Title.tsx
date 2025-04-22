'use client'
import { useState } from "react";


export default function Title() {
    const [expanded, setExpanded] = useState(false);

    const fullText = `Join us for DSCubed’s flagship data competition! Whether you're a footy fanatic, 
    a data science enthusiast, or just keen to try something new, this is the perfect chance to sharpen 
    your skills, build your portfolio, and connect with a vibrant community. No prior experience needed – 
    just bring your curiosity and team spirit!`;
  
    const previewText = `Join us for DSCubed’s flagship data competition! Whether you're a footy fanatic, 
    a data science enthusiast, or just keen to try something new...`;


  return (
    <>
        <div className="w-[100vw] h-[90vh] sm:h-[50vh] flex relative items-center justify-center">
            <img src="/competitions/banner.png" alt="Kaggle banner image" className="h-[90vh] sm:h-[50vh] w-full object-cover object-bottom"/>
            <div className="absolute flex flex-col justify-center mx-20 sm:mx-5 text-white">
                <h2 className="sm:text-lg text-4xl font-semibold text-[#4ea6e9]">kaggle <span className="text-white">COMPETITION</span></h2>

                <h1 className="sm:text-xl text-5xl font-extrabold mt-2 leading-tight">
                KICK GOALS WITH DATA:<br />
                PREDICT AFL LADDER POSITIONS
                </h1>

                <p className="mt-4 max-w-2xl text-lg sm:hidden">
                Join us for DSCubed’s flagship data competition! Whether you're a footy fanatic,
                a data science enthusiast, or just keen to try something new, this is the perfect
                chance to sharpen your skills, build your portfolio, and connect with a vibrant
                community. No prior experience needed – just bring your curiosity and team spirit!
                </p>

                <p className="mt-4 max-w-2xl text-lg sm:block hidden">
                    {expanded ? fullText : previewText}
                </p>
                <button
                 onClick={() => setExpanded(!expanded)}
                className="mt-2 text-sm underline text-[#4ea6e9] hover:text-white w-max sm:block hidden">
                {expanded ? "Read Less" : "Read More"}
                </button>

                <div className="flex items-center gap-2 mt-6 text-sm font-medium">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    WED 30TH APRIL – FRI 2ND MAY
                </span>
                </div>

                <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded-full w-max">
                SIGN UP
                </button>
            </div>
        </div>
    </>
  )
}