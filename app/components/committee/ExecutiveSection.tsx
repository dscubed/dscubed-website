"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeaturedCard from "@/app/components/committee/FeaturedCard";
import { StaticImageData } from "next/image";
import { ExecMember } from "./data/types";

export default function ExecutiveSection({
  executives,
  teamPhoto,
}: {
  executives: ExecMember[];
  teamPhoto?: string | StaticImageData;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-baseline gap-3"
      >
        <h2 className="sm:text-xl text-3xl font-medium text-white uppercase">
          EXECUTIVES
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3">
        {executives.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1 + index * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-wrap justify-center gap-3"
          >
            <FeaturedCard
              {...profile}
              className="w-[calc((100%-48px)/5)] lg:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
