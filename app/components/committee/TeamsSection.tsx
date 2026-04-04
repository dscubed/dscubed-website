"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import FeaturedCard from "./FeaturedCard";
import MemberListCard from "./MemberListCard";
import { GroupHeading } from "./GroupHeading";
import { SectionHeading } from "./SectionHeading";
import { Director, Team } from "./data/types";
import { CardGroup } from "./ExecDirectorSection";

function isDSCubedAI(team: string | null | undefined) {
  return team === "AI @ DSCubed" || team === "AI@DSCubed";
}

function TeamBlock({ team, directors }: { team: Team; directors: Director[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const teamName = team.name || team.team || "";
  const isProduct = team.team === "Products";

  // Find directors for this team
  const teamDirectors = isProduct
    ? [
        ...directors.filter(
          (d) =>
            d.team === "Products" ||
            d.role?.toLowerCase().includes("product director"),
        ),
        ...directors.filter(
          (d) =>
            ["AI", "C3", "IT"].includes(d.team as string) ||
            d.role?.toLowerCase().includes("lead"),
        ),
      ]
    : directors
        .filter(
          (d) =>
            d.team === team.team ||
            (d.team === null &&
              team.name &&
              d.role?.toLowerCase().includes(team.name.toLowerCase())),
        )
        .map((d) => ({
          ...d,
          role: d.role || (isDSCubedAI(teamName) ? "AI @ DSCubed" : teamName),
        }));

  // Group members by sub-team for product, or flat list for standard
  const subTeams = isProduct
    ? [
        {
          name: "Connect3",
          role: "Connect3 Officer",
          members: team.members.filter((m) => m.productTeam === "C3"),
        },
        {
          name: "IT",
          role: "IT Officer",
          members: team.members.filter((m) => m.productTeam === "IT"),
        },
        {
          name: "AI",
          role: "AI Engineer",
          members: team.members.filter((m) => m.productTeam === "AI"),
        },
      ].filter((s) => s.members.length > 0)
    : null;

  const officerRole = isDSCubedAI(teamName)
    ? "AI @ DSCubed"
    : `${teamName} Officer`;

  return (
    <div ref={ref} className="flex flex-col gap-5">
      {/* Team photo */}
      {team.image && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-lg aspect-5/2"
        >
          <Image
            src={team.image}
            alt={`${teamName} Team`}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Name + Directors */}
      {teamDirectors.length > 0 && (
        <CardGroup
          title={teamName}
          items={teamDirectors.map((d) => ({
            name: d.name,
            role: d.role || (isDSCubedAI(teamName) ? "AI @ DSCubed" : teamName),
            image: d.image,
          }))}
          widthClass="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
        />
      )}

      {/* Members */}
      {subTeams
        ? subTeams.map((sub, subIndex) => (
            <MemberGroup
              key={subIndex}
              title={sub.name}
              members={sub.members.map((m) => ({ ...m, role: sub.role }))}
              inView={inView}
              delay={0.2 + subIndex * 0.1}
            />
          ))
        : team.members.length > 0 && (
            <MemberGroup
              members={team.members.map((m) => ({ ...m, role: officerRole }))}
              inView={inView}
              delay={0.2}
            />
          )}
    </div>
  );
}

function MemberGroup({
  title,
  members,
  inView,
  delay = 0,
}: {
  title?: string;
  members: { name: string; image?: string; role: string }[];
  inView: boolean;
  delay?: number;
}) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {title && <GroupHeading title={title} inView={inView} />}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.3,
              delay: delay + i * 0.04,
              ease: "easeOut",
            }}
            className="w-[250px] sm:w-[150px] flex-none"
          >
            <MemberListCard
              name={member.name}
              image={member.image}
              role={member.role}
            />
          </motion.div>
        ))}
      </div>
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
