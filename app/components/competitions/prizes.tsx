"use client";

import Section from "@/app/components/Section";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

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
          PRIZES
        </motion.h2>
        <motion.p
          className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tackle the challenge, outplay the competition, and claim your prize!
        </motion.p>
      </div>

      <div className="align-center text-center m-auto prize-font font-mono font-bold text-3xl text-white md:hidden">
        <div className="flex color-white relative h-96">
          {/* Framer Motion Scroll Reveal Animation */}
          <motion.div
            className="text-center relative mx-5 top-1/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: { duration: 2 }, // Animation duration
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-1 mb-3 bg-blue-700">
              $<PrizeCounter value={150} isInView={isInView} />
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-3/4">
              2ND PRIZE
            </div>
          </motion.div>
          <motion.div
            className="text-center relative mx-2"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: { duration: 0.5 }, // Animation duration
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              $<PrizeCounter value={200} isInView={isInView} />
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-full">
              1ST PRIZE
            </div>
          </motion.div>
          <motion.div
            className="text-center relative mx-5 top-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: { duration: 3 }, // Animation duration
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              $<PrizeCounter value={100} isInView={isInView} />
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-1/2">
              3RD PRIZE
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile prizes toggle */}
      <button className="hidden md:block w-60 text-center m-auto prize-font font-mono font-bold text-3xl text-white">
        <motion.div
          className="text-center relative mx-5 top-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: { duration: 2 }, // Animation duration
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
            x: 0, // Slide in to its original position
            transition: { duration: 2 }, // Animation duration
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
            x: 0, // Slide in to its original position
            transition: { duration: 2 }, // Animation duration
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
