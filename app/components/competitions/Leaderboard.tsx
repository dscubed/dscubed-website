"use client";

import Section from "@/app/components/Section";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function PrizeCounter({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 6,
      });

      return animation.stop;
    }
  }, [isInView, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Prizes() {
  const [isInView, setIsInView] = useState(false);

  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          LEADERBOARD
        </motion.h2>
        <motion.p
          className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Based on mean absolute error
        </motion.p>
      </div>

      {/* Main Podium */}
      <div className="flex color-white relative h-96 items-end justify-center">
        {/* 2ND PRIZE */}
        <motion.div
          className="text-center relative mx-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <div className="w-72 flex flex-col items-center">
            {/* TROPHY: Centered above the pillar */}
            <div
              className="relative mb-2"
              style={{
                width: "calc(0.2678571429 * 18rem)", // 18rem = w-72
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src="/competitions/trophy-silver.svg"
                alt="Silver Trophy"
                className="w-full h-full object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#181818]">
                2
              </span>
            </div>

            {/* Pillar content */}
            <div className="rounded-xl bg-[#373737] text-sm text-white text-center py-4 px-3 w-full">
              <div className="font-bold text-lg mb-2">2ND PRIZE</div>
              <p className="leading-relaxed mb-3">
                Lee Han Hsiang <br />
                <br />
                Muhammad Azad bin <br />
                Mohamed Afif
              </p>
              <div className="text-xl font-bold">
                $<PrizeCounter value={150} isInView={isInView} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1ST PRIZE */}
        <motion.div
          className="text-center relative mx-2 -mt-16" // negative margin to lift 1st pillar
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <div className="w-72 flex flex-col items-center">
            {/* TROPHY: Centered above the pillar */}
            <div
              className="relative mb-2"
              style={{
                width: "calc(0.2678571429 * 18rem)",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src="/competitions/trophy-gold.svg"
                alt="Gold Trophy"
                className="w-full h-full object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#181818]">
                1
              </span>
            </div>

            {/* Pillar content */}
            <div className="rounded-xl bg-[#0472FD] text-sm text-white text-center py-4 px-3 w-full flex flex-col items-center">
              <span className="font-bold text-white text-2xl font-['Press Start 2P'] mb-2">
                1ST PRIZE
              </span>
              <p className="font-bold text-white text-xl text-center font-['Press Start 2P'] whitespace-pre-line break-words mb-3">
                Dimitri Micha
                <br />
                von Benckendorff
                <br />
                <br />
                Lakshminarasimhan
                <br />
                Sudarshan
              </p>
              <div className="text-xl font-bold">
                ${<PrizeCounter value={200} isInView={isInView} />}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3RD PRIZE */}
        <motion.div
          className="text-center relative mx-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 3 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <div className="w-72 flex flex-col items-center">
            {/* TROPHY: Centered above the pillar */}
            <div
              className="relative mb-2"
              style={{
                width: "calc(0.2678571429 * 18rem)",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src="/competitions/trophy-bronze.svg"
                alt="Bronze Trophy"
                className="w-full h-full object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#181818]">
                3
              </span>
            </div>

            {/* Pillar content */}
            <div className="rounded-xl bg-[#373737] text-sm text-white text-center py-4 px-3 w-full">
              <div className="font-bold text-lg mb-2">3RD PRIZE</div>
              <p className="leading-relaxed mb-3">Ebyn chan</p>
              <div className="text-xl font-bold">
                $<PrizeCounter value={100} isInView={isInView} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile prizes toggle */}
      <button className="hidden md:block w-60 text-center m-auto prize-font font-mono font-bold text-3xl text-white">
        <motion.div
          className="text-center relative mx-5 top-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          1ST PRIZE
          <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mt-3 mb-16 bg-blue-700">
            $<PrizeCounter value={200} isInView={isInView} />
          </div>
        </motion.div>
        <motion.div
          className="text-center relative mx-5 top-1/4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          2ND PRIZE
          <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mt-3 mb-16 bg-blue-700">
            $<PrizeCounter value={150} isInView={isInView} />
          </div>
        </motion.div>
        <motion.div
          className="text-center relative mx-5 top-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          3RD PRIZE
          <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 my-3 bg-blue-700">
            $<PrizeCounter value={100} isInView={isInView} />
          </div>
        </motion.div>
      </button>
    </Section>
  );
}
