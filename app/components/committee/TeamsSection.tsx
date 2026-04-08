"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import MemberList from "./MemberList";
import ProductsMemberList from "./ProductsMemberList";
import { SectionHeading } from "./SectionHeading";
import { Director, ProductTeams, Team } from "./data/types";
import { FeaturedCardGrid } from "./FeaturedCardGrid";

const PRODUCT_TEAMS: string[] = [
  "Products",
  "AI",
  "C3",
  "IT Products",
] satisfies (ProductTeams | "Products")[];

function isDSCubedAI(team: string | null | undefined) {
  return team === "AI @ DSCubed" || team === "AI@DSCubed";
}

function isProductDirector(director: Director): boolean {
  return director.team !== null && PRODUCT_TEAMS.includes(director.team);
}

function getDirectorRole(director: Director, fallbackRole: string): string {
  if (director.role) {
    return director.role;
  }
  // For product team leads (AI, C3, IT Products), format as "{Team} Lead"
  if (isProductDirector(director) && director.team !== "Products") {
    return `${director.team} Lead`;
  }
  return fallbackRole;
}

function getProductDirectors(directors: Director[]): Director[] {
  return directors.filter((d) => d.team && PRODUCT_TEAMS.includes(d.team));
}

function getOperationsDirectors(
  team: Team,
  directors: Director[],
  defaultRole: string,
): Director[] {
  return directors
    .filter((d) => d.team === team.team) // Only include directors with matching team
    .map((d) => ({
      ...d,
      role: d.role || defaultRole,
    }));
}

function TeamBlock({ team, directors }: { team: Team; directors: Director[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const teamName = team.name || team.team || "";
  const isProduct = team.team === "Products";

  const teamDirectors = isProduct
    ? getProductDirectors(directors)
    : getOperationsDirectors(
        team,
        directors,
        isDSCubedAI(teamName) ? "AI @ DSCubed" : teamName,
      );

  return (
    <div ref={ref} className="flex flex-col gap-5">
      {/* Team photo */}
      {team.image && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-lg aspect-2/1 md:aspect-3/2"
        >
          <Image
            src={team.image}
            alt={`${teamName} Team`}
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </motion.div>
      )}

      {/* Directors */}
      {teamDirectors.length > 0 && (
        <FeaturedCardGrid
          title={teamName}
          items={teamDirectors.map((d) => ({
            name: d.name,
            role: getDirectorRole(
              d,
              isDSCubedAI(teamName) ? "AI @ DSCubed" : teamName,
            ),
            image: d.image,
          }))}
          layout={{ columns: { default: 6, lg: 4, md: 3, sm: 2 } }}
        />
      )}

      {/* Members */}
      {isProduct ? (
        <ProductsMemberList members={team.members} delay={0.2} />
      ) : (
        team.members.length > 0 && (
          <MemberList team={teamName} members={team.members} delay={0.2} />
        )
      )}
    </div>
  );
}

export default function TeamsSection({
  teams,
  directors,
}: {
  teams: Team[];
  directors: Director[];
}) {
  return (
    <div className="flex flex-col py-12 px-8 gap-10">
      <SectionHeading>Teams</SectionHeading>
      {teams.map((team, index) => (
        <TeamBlock key={index} team={team} directors={directors} />
      ))}
    </div>
  );
}
