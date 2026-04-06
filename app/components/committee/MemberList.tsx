"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MemberListCard from "./MemberListCard";
import { CommitteeMember } from "./data/types";

export default function MemberList({
  team,
  members,
  delay = 0,
}: {
  team: string;
  members: CommitteeMember[];
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-4 w-full">
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
