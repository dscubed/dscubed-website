"use client";

import Image from "next/image";
import { Director, ExecsDirectorsData, ProductTeams } from "./data/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FeaturedCardGrid } from "./FeaturedCardGrid";
import { SectionHeading } from "./SectionHeading";

const PRODUCT_TEAMS: string[] = [
  "Products",
  "AI",
  "C3",
  "IT Products",
] satisfies (ProductTeams | "Products")[];

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

// ------------------------------------------------------------------
// ExecDirectorSection
// ------------------------------------------------------------------

export default function ExecDirectorSection({
  execsDirectorsData,
}: {
  execsDirectorsData: ExecsDirectorsData;
}) {
  const execPhotoRef = useRef(null);
  const { executives, directors, image } = execsDirectorsData;
  const execPhotoInView = useInView(execPhotoRef, {
    once: true,
    margin: "-100px",
  });

  const operationsDirectors = directors.filter((d) => !isProductDirector(d));
  const productsDirectors = directors.filter((d) => isProductDirector(d));

  return (
    <>
      {/* Execs & Directors section heading + team photo */}
      <div className="flex flex-col gap-4 sm:gap-2">
        <SectionHeading>Execs & Directors</SectionHeading>
        {image && (
          <motion.div
            ref={execPhotoRef}
            initial={{ opacity: 0, y: 40 }}
            animate={execPhotoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-lg aspect-2/1 md:aspect-3/2"
          >
            <Image
              src={image}
              alt={"Executive team photo"}
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover object-center"
            />
          </motion.div>
        )}
      </div>
      <div className="flex flex-col gap-8">
        <FeaturedCardGrid
          title="EXECUTIVES"
          items={executives}
          layout={{ columns: { default: 5, lg: 3, sm: 2 } }}
        />
        <FeaturedCardGrid
          title="OPERATIONS"
          subtitle="DIRECTORS"
          items={operationsDirectors.map((d) => ({
            name: d.name,
            role: getRole(d),
            image: d.image,
          }))}
          layout={{ columns: { default: 6, lg: 4, md: 3, sm: 2 } }}
        />
        {productsDirectors.length > 0 && (
          <FeaturedCardGrid
            title="PRODUCTS"
            subtitle="DIRECTORS & LEADS"
            items={productsDirectors.map((d) => ({
              name: d.name,
              role: getRole(d),
              image: d.image,
            }))}
            layout={{ columns: { default: 6, lg: 4, md: 3, sm: 2 } }}
          />
        )}
      </div>
    </>
  );
}
