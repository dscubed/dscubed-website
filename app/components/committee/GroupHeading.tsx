"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function GroupHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-baseline gap-3 uppercase"
    >
      <h2 className="font-medium text-white sm:text-xl text-3xl">{title}</h2>
      {subtitle && (
        <span className="text-2xl sm:text-lg font-medium text-[#B9B9B9]">
          {subtitle}
        </span>
      )}
    </motion.div>
  );
}
