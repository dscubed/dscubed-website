"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MemberCard from "@/app/components/committee/MemberCard";
import { GroupHeading } from "./GroupHeading";
import { Director, ExecMember } from "./data/types";

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

function CardGroup({
  title,
  subtitle,
  items,
  widthClass,
}: {
  title: string;
  subtitle?: string;
  items: { name: string; role: string; image?: string; filter?: string }[];
  widthClass: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <GroupHeading title={title} subtitle={subtitle} inView={inView} />
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1 + index * 0.08,
              ease: "easeOut",
            }}
            className={widthClass}
          >
            <MemberCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ExecDirectorSection({
  executives,
  directors,
}: {
  executives: ExecMember[];
  directors: Director[];
}) {
  const operationsDirectors = directors.slice(0, 6);
  const productsDirectors = directors.slice(6);

  return (
    <div className="flex flex-col gap-8">
      <CardGroup
        title="EXECUTIVES"
        items={executives}
        widthClass="w-[calc((100%-48px)/5)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
      />
      <CardGroup
        title="OPERATIONS"
        subtitle="DIRECTORS"
        items={operationsDirectors.map((d) => ({
          name: d.name,
          role: getRole(d),
          image: d.image,
        }))}
        widthClass="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
      />
      <CardGroup
        title="PRODUCTS"
        subtitle="DIRECTORS & LEADS"
        items={productsDirectors.map((d) => ({
          name: d.name,
          role: getRole(d),
          image: d.image,
        }))}
        widthClass="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
      />
    </div>
  );
}
