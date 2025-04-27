'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Title() {
    const [expanded, setExpanded] = useState(false);
    const [timerText, setTimerText] = useState("");
    const [timerColor, setTimerColor] = useState("text-red-500");

    const fullText = `Join us for DSCubed&rsquo;s flagship data competition! Whether you&#39;re a footy fanatic, 
    a data science enthusiast, or just keen to try something new, this is the perfect chance to sharpen 
    your skills, build your portfolio, and connect with a vibrant community. No prior experience needed – 
    just bring your curiosity and team spirit!`;
  
    const previewText = `Join us for DSCubed&rsquo;s flagship data competition! Whether you&#39;re a footy fanatic, 
    a data science enthusiast, or just keen to try something new...`;

    useEffect(() => {
        const competitionStart = new Date("2025-05-03T10:00:00+10:00").getTime();
        const competitionEnd = new Date("2025-05-03T14:00:00+10:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();

            if (now < competitionStart) {
                const timeLeft = competitionStart - now;
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setTimerText(`Time Until Competition: ${days}d ${hours}h ${minutes}m ${seconds}s`);
                setTimerColor("text-red-300");
            } else if (now >= competitionStart && now < competitionEnd) {
                setTimerText("Competition Day");
                setTimerColor("text-green-300");
            } else {
                setTimerText("Competition Ended");
                setTimerColor("text-yellow-300");
            }
        };

        const timerInterval = setInterval(updateTimer, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <>
            <div className="w-[100vw] h-[90vh] sm:h-[50vh] flex relative items-center justify-center">
                <Image 
                    src="/competitions/banner.png" 
                    alt="Kaggle banner image" 
                    className="h-[90vh] sm:h-[50vh] w-full object-cover object-bottom"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className="absolute flex flex-col justify-center mx-20 sm:mx-5 text-white">
                    <h2 className="sm:text-lg text-4xl font-semibold text-[#4ea6e9]">kaggle <span className="text-white">COMPETITION</span></h2>

                    <h1 className="sm:text-xl text-5xl font-extrabold mt-2 leading-tight">
                    KICK GOALS WITH DATA:<br />
                    PREDICT AFL LADDER POSITIONS
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg sm:hidden">
                    Join us for our flagship data competition! Whether youre a footy fanatic,
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
                            WED 30TH APRIL – SAT 3RD MAY
                        </span>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-2 mt-4 text-sm font-medium">
                        <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className={`text-lg font-bold ${timerColor}`}>
                                {timerText}
                            </span>
                        </span>
                    </div>

                    <a href="https://linktr.ee/dscubed" target="_blank" rel="noopener noreferrer">
                        <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded-full w-max">
                        SIGN UP
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}