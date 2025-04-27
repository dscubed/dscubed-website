"use client";

import Section from "@/app/components/Section";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Function to animate the prize value
function PrizeCounter({ value, isInView }: { value: number; isInView: boolean }) {
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
      <div className="flex flex-col items-center text-center px-5">
        <h1 className="text-3xl font-bold mb-2">PRIZES</h1>
        <p className="text-lg font-medium pb-5">Lorem ipsum dolores</p>
      </div>

      <div className="align-center text-center m-auto prize-font font-mono font-bold text-3xl text-white">
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
              $<PrizeCounter value={50} isInView={isInView} />
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
              transition: { duration: 1 }, // Animation duration
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              $<PrizeCounter value={100} isInView={isInView} />
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
              transition: { duration: 1 }, // Animation duration
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              $<PrizeCounter value={25} isInView={isInView} />
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-1/2">
              3RD PRIZE
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}