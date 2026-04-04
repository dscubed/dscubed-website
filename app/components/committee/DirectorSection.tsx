"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MemberCard from "@/app/components/committee/MemberCard";
import { Director } from "./data/types";

function getRole(director: Director): string {
  if (director.role) {
    return director.role;
  } else if (
    director.team == "C3" ||
    director.team == "AI" ||
    director.team == "IT"
  ) {
    return `${director.team} Lead`;
  } else if (director.team == "AI @ DSCubed") {
    return "AI @ DSCubed";
  }
  return `${director.team}`;
}

function DirectorGroup({
  title,
  subtitle,
  directors,
}: {
  title: string;
  subtitle: string;
  directors: Director[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-baseline gap-3 uppercase"
      >
        <h2 className="font-medium text-white sm:text-xl text-3xl">{title}</h2>
        <span className="text-2xl sm:text-lg font-medium text-[#B9B9B9]">
          {subtitle}
        </span>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3">
        {directors.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1 + index * 0.08,
              ease: "easeOut",
            }}
            className="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
          >
            <MemberCard
              name={profile.name}
              role={getRole(profile)}
              image={profile.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function DirectorSection({
  directors,
}: {
  directors: Director[];
}) {
  const operationsDirectors = directors.slice(0, 6);
  const productsDirectors = directors.slice(6);

  return (
    <div className="w-full flex flex-col gap-8">
      <DirectorGroup
        title="OPERATIONS"
        subtitle="DIRECTORS"
        directors={operationsDirectors}
      />
      <DirectorGroup
        title="PRODUCTS"
        subtitle="DIRECTORS & LEADS"
        directors={productsDirectors}
      />
    </div>
  );
}
