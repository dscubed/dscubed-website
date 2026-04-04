"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeaturedCard from "@/app/components/committee/FeaturedCard";
import { GroupHeading } from "./GroupHeading";
import { Director, ExecMember, ProductTeams } from "./data/types";

const PRODUCT_TEAMS: string[] = ["Products", "AI", "C3", "IT Products"] satisfies (ProductTeams | "Products")[];

function isProductDirector(director: Director): boolean {
  return director.team !== null && PRODUCT_TEAMS.includes(director.team);
}

function getRole(director: Director): string {
  if (director.role) {
    return director.role;
  } else if (isProductDirector(director) && director.team !== "Products") {
    return `${director.team} Lead`;
  } else if (director.team == "AI @ DSCubed") {
    return "AI @ DSCubed";
  }
  return `${director.team}`;
}

export function CardGroup({
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
            <FeaturedCard {...item} />
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
  const operationsDirectors = directors.filter((d) => !isProductDirector(d));
  const productsDirectors = directors.filter((d) => isProductDirector(d));

  return (
    <div className="flex flex-col gap-8">
      <CardGroup
        title="EXECUTIVES"
        items={executives}
        widthClass="w-[calc((100%-48px)/5)] lg:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
      />
      <CardGroup
        title="OPERATIONS"
        subtitle="DIRECTORS"
        items={operationsDirectors.map((d) => ({
          name: d.name,
          role: getRole(d),
          image: d.image,
        }))}
        widthClass="w-[calc((100%-60px)/6)] lg:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
      />
      {productsDirectors.length > 0 && (
        <CardGroup
          title="PRODUCTS"
          subtitle="DIRECTORS & LEADS"
          items={productsDirectors.map((d) => ({
            name: d.name,
            role: getRole(d),
            image: d.image,
          }))}
          widthClass="w-[calc((100%-60px)/6)] lg:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
        />
      )}
    </div>
  );
}
