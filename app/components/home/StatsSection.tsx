"use client";
import Section from "@/app/components/Section";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

// Statistics (currently taken from old AboutSection)
const stats = [
  {
    value: 500,
    decimals: 0,
    suffix: "+",
    description: "Number of current members in 2025.",
  },
  {
    value: 2.1,
    decimals: 1,
    suffix: "K+",
    description: "Followers on Instagram.",
  },
  {
    value: 15,
    decimals: 0,
    suffix: "+",
    description: "Events held each semester.",
  },
];

function StatCounter({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest) => latest.toFixed(stat.decimals) + stat.suffix,
  );

  useEffect(() => {
    if (inView) {
      animate(count, stat.value, {
        duration: 2,
        delay: index * 0.2,
        ease: "easeOut",
      });
    }
  }, [inView, stat.value, count, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="space-y-1 rounded-md">
        <motion.h3 className="text-8xl sm:text-7xl tracking-tight leading-none">
          {rounded}
        </motion.h3>
        <p className="text-xl lg:text-lg leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <Section>
      <div className="flex gap-20 lg:gap-10 lg:flex-col">
        <motion.div
          className="sticky w-full max-w-1/2 lg:max-w-none top-[calc(102.55px+20px)] space-y-4 lg:static h-fit"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-4xl">Club Stats</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            DSCubed is dedicated to promoting data science, analytics, and
            decision making skills across all disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-0 w-full max-w-1/2 lg:max-w-none space-y-20 sm:space-y-10 flex-1">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
