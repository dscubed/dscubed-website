"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
// import Carousel from "@/app/components/projects/carousel";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ProjectsHero() {
  const [loading, setLoading] = useState(true);

  const slideData = [
        {
      title: "Lung Cancer Classification",
      description: "Our project explores advanced deep learning techniques for lung cancer detection using medical CT scans. We focus on classifying the three main subtypes of non-small cell lung cancer—adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—by comparing the performance of Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs). Utilizing both baseline and pre-trained models, including VGG-16 and a hybrid ViT, we preprocess and augment data to enhance model accuracy. Our work highlights the strengths of each approach in medical image analysis, aiming to improve diagnostic precision and support clinical decision-making through cutting-edge AI technology.",
      button: "View Project",
      src: "/projects/xray.png",
      link: "/components/projects/cancer"
    },
    {
      title: "Stock Forecasting",
      description: "Our project explores advanced machine learning techniques for stock market prediction by analyzing historical financial data to forecast both price and trend movements. We compare the performance of various models—including traditional regressors and deep learning architectures—and ultimately develop an ensemble stacking model for enhanced predictive accuracy. Leveraging techniques such as feature engineering, time-series preprocessing, and hyperparameter tuning, we aim to build a robust system for automated investment decision-making. This work underscores the potential of AI in financial forecasting, offering insights that support smarter trading strategies and risk management in volatile markets.",
      button: "View Project",
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
      <div className="w-screen h-[calc(100svh-63px)] lg:h-[calc(70svh-63px)] relative">
        <div className="relative w-full h-full">
          <Spline
            scene="https://prod.spline.design/eQqi6a4D3kJA8Xri/scene.splinecode"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </div>
        {loading ? (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-background-secondary text-text-primary text-xl font-bold animate-pulse">
            Loading...
          </div>
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-max px-4">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="flex flex-col gap-4 items-center justify-end pointer-events-none"
              style={{ fontFamily: "'Akira Expanded', sans-serif" }}
              >
              <h1 className="text-text-primary text-6xl lg:text-5xl font-black text-center">
                PROJECTS INITIATIVE
              </h1>
              <p className="max-w-3xl text-center text-text-primary">
                THE DS3 STUDENT INITIATIVE IS A UNIQUE OPPORTUNITY FOR STUDENTS TO
                LEVERAGE THE POWER OF DATA ANALYTICS TOOLS TO CREATE HIGH-IMPACT
                RESEARCH PROJECTS THAT SOLVE REAL LIFE PROBLEMS
              </p>

              <button
                className="mt-3 px-6 py-2 rounded-full bg-foreground text-black text-lg font-extrabold shadow-lg hover:bg-theme transition-colors duration-200 pointer-events-auto"
                onClick={() => {
                  const nextSection = document.getElementById('project-gallery');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >
                explore projects
              </button>
            </motion.div>
          </div>
        )}
      </div>

      <div id="project-gallery">
        <Section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our Projects</h2>
          {/* <Carousel slides={slideData} /> */}

          {/* Since there are only two projects, just use a flexbox */}
          <div className="flex flex-wrap gap-8 justify-center">
            {slideData.map((slide, index) => (
              <div key={index} className="flex flex-col basis-1/2 grow-0 shrink-0 min-w-96 max-w-96 bg-background rounded-2xl overflow-hidden">
                <Image src={slide.src} alt={slide.title} width={480} height={480} className="w-full h-48 object-cover" />
                <div className="p-4 h-full flex-1 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                  <p className="text-text-secondary line-clamp-[8] min-h-[170px]">{slide.description}</p>
                  <Link href={slide.link} className="flex justify-between items-center w-full mt-auto text-theme font-medium">
                    <span>{slide.button}</span>
                    <ArrowRightIcon className="w-5 h-5 stroke-[0.5] stroke-theme" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </Section>
      </div>
    </>
  );
}
