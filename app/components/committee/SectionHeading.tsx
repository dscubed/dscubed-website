"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-2xl sm:text-lg uppercase font-medium text-[#B9B9B9]"
    >
      {children}
    </motion.h2>
  );
}
