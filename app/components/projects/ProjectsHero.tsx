"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "Akira Expanded";
          src: url("/fonts/Akira Expanded Demo.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      <div className="w-screen h-screen relative">
        <Spline
          scene="https://prod.spline.design/eQqi6a4D3kJA8Xri/scene.splinecode"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        {loading ? (
          // Loading Scene
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
            <span className="text-white text-xl font-bold animate-pulse">
              Loading...
            </span>
          </div>
        ) : (
          // Hero content
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-3/5 flex flex-col gap-4 items-center justify-end pointer-events-none"
            style={{ fontFamily: "'Akira Expanded', sans-serif" }}
          >
            <h1 className="text-white text-6xl font-black text-center">
              PROJECTS INITIATIVE
            </h1>
            <p className="w-3/5 text-center">
              THE DS3 STUDENT INITIATIVE IS A UNIQUE OPPORTUNITY FOR STUDENTS TO
              LEVERAGE THE POWER OF DATA ANALYTICS TOOLS TO CREATE HIGH-IMPACT
              RESEARCH PROJECTS THAT SOLVE REAL LIFE PROBLEMS
            </p>
            <button className="mt-3 px-6 py-2 rounded-2xl bg-white text-black text-lg font-extrabold shadow-lg hover:bg-cyan-100 transition-colors duration-200 pointer-events-auto">
              MORE INFO
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}
