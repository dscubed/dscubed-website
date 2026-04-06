"use client";

import { motion } from "framer-motion";
import MemberListCard from "./MemberListCard";
import { CommitteeMember } from "./data/types";

export default function MemberList({
  team,
  members,
  inView,
  delay = 0,
}: {
  team: string;
  members: CommitteeMember[];
  inView: boolean;
  delay?: number;
}) {
  return (
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
            filter={member.filter}
            team={team}
            displayRole={member.displayRole}
          />
        </motion.div>
      ))}
    </div>
  );
}
