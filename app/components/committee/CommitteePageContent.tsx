"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ExecDirectorSection from "@/app/components/committee/ExecDirectorSection";
import TeamsSection from "@/app/components/committee/TeamsSection";
import { CommitteePageHeader } from "@/app/components/committee/CommitteePageHeader";
import { SectionHeading } from "@/app/components/committee/SectionHeading";
import { Director, ExecMember, Team } from "./data/types";

interface CommitteePageContentProps {
  committeePhoto: string | StaticImageData;
  execsPhoto?: string | StaticImageData;
  executives?: ExecMember[];
  directors?: Director[];
  teams?: Team[];
}

export function CommitteePageContent({
  committeePhoto,
  execsPhoto,
  executives,
  directors,
  teams,
}: CommitteePageContentProps) {
  const execPhotoRef = useRef(null);
  const execPhotoInView = useInView(execPhotoRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      <Navbar />

      <main>
        <div className="pt-8 pb-8 px-6 mx-auto max-w-screen-xl">
          <CommitteePageHeader />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            className="w-full min-h-80 aspect-video object-cover brightness-[1.1] saturate-[1.2]"
            src={committeePhoto}
            alt={"Committee group photo"}
            width={1280}
          />
        </motion.div>

        <div className="flex flex-col bg-background py-12 px-8 gap-6">
          {/* Execs & Directors section heading + team photo */}
          <div className="flex flex-col gap-4 sm:gap-2">
            <SectionHeading>Execs & Directors</SectionHeading>
            {execsPhoto && (
              <motion.div
                ref={execPhotoRef}
                initial={{ opacity: 0, y: 40 }}
                animate={execPhotoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  className="w-full min-h-80 aspect-video object-cover rounded-xl brightness-[1.1] saturate-[1.2]"
                  src={execsPhoto}
                  alt={"Executive team photo"}
                  width={1280}
                  loading="eager"
                  height={720}
                />
              </motion.div>
            )}
          </div>

          {/* Merged Exec + Director cards */}
          {executives && directors && (
            <ExecDirectorSection
              executives={executives}
              directors={directors}
            />
          )}
        </div>

        {/* Teams Section */}
        {teams && teams.length > 0 && (
          <TeamsSection teams={teams} directors={directors || []} />
        )}
      </main>

      <Footer />
    </>
  );
}
