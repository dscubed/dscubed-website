import Image, { StaticImageData } from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ExecutiveSection from "@/app/components/committee/ExecutiveSection";
import DirectorSection from "@/app/components/committee/DirectorSection";
import TeamsSection from "@/app/components/committee/TeamsSection";
import { CommitteePageHeader } from "@/app/components/committee/CommitteePageHeader";
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
  return (
    <>
      <Navbar />

      <main>
        <div className="pt-8 pb-8 px-6 mx-auto max-w-screen-xl">
          <CommitteePageHeader />
        </div>
        <Image
          className="w-full min-h-80 aspect-video object-cover brightness-[1.1] saturate-[1.2]"
          src={committeePhoto}
          alt={"Committee group photo"}
          width={1280}
        />

        <div className="flex flex-col bg-background py-12 px-8 gap-6">
          <div className="flex flex-col gap-4 sm:gap-2">
            <h2 className="text-2xl sm:text-lg font-medium text-[#B9B9B9]">
              EXECS & DIRECTORS
            </h2>
            <Image
              className="w-full min-h-80 aspect-video object-cover rounded-xl brightness-[1.1] saturate-[1.2]"
              src={execsPhoto || ""}
              alt={"Executive team photo"}
              width={1280}
              height={720}
            />
          </div>

          {/* Executive Section - rendered if executives data provided */}
          {executives && executives.length > 0 && (
            <ExecutiveSection executives={executives} teamPhoto={execsPhoto} />
          )}

          {/* Director Section - rendered if directors data provided */}
          {directors && directors.length > 0 && (
            <DirectorSection directors={directors} />
          )}
        </div>

        {/* Teams Section - rendered if teams data provided */}
        {teams && teams.length > 0 && (
          <TeamsSection teams={teams} directors={directors || []} />
        )}
      </main>

      <Footer />
    </>
  );
}
