"use client";

import Image from "next/image";
import Section from "@/app/components/Section";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect } from "react";

// Function to animate the prize value adapted from Saleh Mubashar https://codesandbox.io/p/sandbox/floral-hill-np4qz5?file=%2Fsrc%2FApp.js&from-embed
function executePrizeAnimation(value: number) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
    });

    return animation.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
}

export default function Prizes() {
  return (
    <Section>
      <div className="align-center text-center m-auto prize-font font-mono font-bold text-3xl text-white">
        <div className="flex color-white relative h-96">
          <div className="text-center relative mx-5 top-1/4">
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-1 mb-3 bg-blue-700">
              ${executePrizeAnimation(50)}
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-3/4">
              2ND PRIZE
            </div>
          </div>
          <div className="text-center relative mx-2">
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              ${executePrizeAnimation(100)}
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-full">
              1ST PRIZE
            </div>
          </div>
          <div className="text-center relative mx-5 top-1/2">
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 mb-3 bg-blue-700">
              ${executePrizeAnimation(25)}
            </div>
            <div className="my-0.3 mx-0.3 rounded-xl py-4 px-10 bg-zinc-800 py-0 px-1 text-0.8 h-1/2">
              3RD PRIZE
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
