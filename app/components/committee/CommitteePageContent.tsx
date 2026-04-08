"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ExecDirectorSection from "@/app/components/committee/ExecDirectorSection";
import TeamsSection from "@/app/components/committee/TeamsSection";
import { CommitteePageHeader } from "@/app/components/committee/CommitteePageHeader";
import { CommitteeData } from "./data/types";

export function CommitteePageContent({
  committeeData,
}: {
  committeeData: CommitteeData;
}) {
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
            src={committeeData.image}
            alt={"Committee group photo"}
            width={1280}
          />
        </motion.div>

        <div className="flex flex-col bg-background py-12 px-8 md:px-6 sm:px-4 gap-6">
          {/* Merged Exec + Director cards */}
          <ExecDirectorSection
            execsDirectorsData={committeeData.execsDirectors}
          />
        </div>

        {/* Teams Section */}
        {committeeData.teams && committeeData.teams.length > 0 && (
          <TeamsSection
            teams={committeeData.teams}
            directors={committeeData.execsDirectors.directors}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
