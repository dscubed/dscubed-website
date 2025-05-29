"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Carousel from "@/app/components/projects/carousel";
import Section from "../Section";
import ThemeButton from "../ThemeButton";
import { describe } from "node:test";

export default function ProjectsHero() {
  const [loading, setLoading] = useState(true);

  const slideData = [
        {
      title: "Lung Cancer Classification",
      description: "AI-based classification of lung cancer types from chest CT scans",
      button: "More Info",
      src: "/projects/xray.png",
      link: "/components/projects/cancer"
    },
    {
      title: "Stock Forecasting",
      description: "Using machine learning models to predict stock prices and market trends",
      button: "More Info",
      src: "/projects/stock.png",
      link: "/components/projects/stock"
    },
  ];

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

      {/* Hero Section */}
      <div className="w-screen h-screen relative">
        <Spline
          scene="https://prod.spline.design/eQqi6a4D3kJA8Xri/scene.splinecode"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
            <span className="text-white text-xl font-bold animate-pulse">
              Loading...
            </span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-3/5 flex flex-col gap-4 items-center justify-end pointer-events-none"
            style={{ fontFamily: "'Akira Expanded', sans-serif" }}
          >
            <h1 className="text-text-primary text-6xl font-black text-center">
              PROJECTS INITIATIVE
            </h1>
            <p className="w-3/5 text-center text-text-primary">
              THE DS3 STUDENT INITIATIVE IS A UNIQUE OPPORTUNITY FOR STUDENTS TO
              LEVERAGE THE POWER OF DATA ANALYTICS TOOLS TO CREATE HIGH-IMPACT
              RESEARCH PROJECTS THAT SOLVE REAL LIFE PROBLEMS
            </p>

            <button
              className="mt-3 px-6 py-2 rounded-full bg-foreground text-black text-lg font-extrabold shadow-lg hover:bg-theme transition-colors duration-200 pointer-events-auto"
              onClick={() => {
                const nextSection = document.getElementById('carousel-section');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              explore projects
            </button>
          </motion.div>
        )}
      </div>

      
      <div id="carousel-section">
        <Section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our Projects</h2>
          <Carousel slides={slideData} />
        </Section>
      </div>
    </>
  );
}
