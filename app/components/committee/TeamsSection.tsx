import Section from "@/app/components/Section";
import MemberList from "@/app/components/committee/MemberList";
import MemberListItem from "@/app/components/committee/MemberListItem";
import Image from "next/image";
import { Director, Team } from "./data/types";
import MemberCard from "./MemberCard";

export default function TeamsSection({
  teams,
  directors,
}: {
  teams: Team[];
  directors: Director[];
}) {
  // 1. Extract Product Director -- MemberData
  const productDirector = directors.find(
    (d) =>
      d.team === "Products" ||
      d.role?.toLowerCase().includes("product director"),
  );

  // 2. Extract Leads
  const productLeads = directors.filter(
    (d) =>
      ["AI", "Connect3", "IT"].includes(d.team as string) ||
      d.role?.toLowerCase().includes("lead"),
  );

  return (
    <Section>
      <h2 className="text-[#B9B9B9] font-inter text-[32px] font-medium leading-normal not-italic text-start mb-8">
        Teams
      </h2>

      {teams.map((team, teamIndex) => {
        const teamName = team.team || "";
        const isProduct = teamName === "Products";

        if (isProduct) {
          // Group normal members by sub-team for Product team
          const c3Members =
            team.members.filter((m) => m.productTeam === "Connect3") || [];
          const aiMembers =
            team.members.filter((m) => m.productTeam === "AI") || [];
          const itMembers =
            team.members.filter((m) => m.productTeam === "IT") || [];

          return (
            <div key={teamIndex} className="flex flex-col gap-5 mb-10">
              {/* Product Team Image */}
              {team.image && (
                <div className="w-full h-[650px] aspect-[275/147] overflow-hidden rounded-[20px]">
                  <Image
                    src={team.image}
                    alt={`${teamName} Team`}
                    width={1200}
                    height={650}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Product Team Name */}
              <h3 className="text-white font-inter text-[40px] font-medium leading-normal not-italic text-start">
                {teamName}
              </h3>

              {/* Product Leads (Vertical Cards Section) */}
              <div className="flex flex-col items-center gap-5 mt-4">
                <div className="flex justify-center flex-wrap gap-8 w-full">
                  {productDirector && (
                    <div className="w-[189px] flex-col items-start text-start">
                      <MemberCard
                        {...productDirector}
                        role={productDirector.role || "Products"}
                      />
                    </div>
                  )}
                  {productLeads.map((lead, idx) => (
                    <div
                      key={`lead-${idx}`}
                      className="w-[189px] flex-col items-center text-start"
                    >
                      <MemberCard
                        {...lead}
                        role={lead.role || `${lead.team}`}
                      />
                    </div>
                  ))}
                </div>
                {/* C3 Sub-Team (Horizontal Cards) */}
                {c3Members.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">
                      Connect3
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                      {c3Members.map((profile, idx) => (
                        <div key={idx} className="w-[250px] flex-none">
                          <MemberListItem
                            role="Connect3 Officer"
                            {...profile}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* IT Sub-Team (Horizontal Cards) */}
                {itMembers.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">
                      IT
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                      {itMembers.map((profile, idx) => (
                        <div key={idx} className="w-[250px] flex-none">
                          <MemberListItem role="IT Officer" {...profile} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Sub-Team (Horizontal Cards) */}
                {aiMembers.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">
                      AI
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                      {aiMembers.map((profile, idx) => (
                        <div key={idx} className="w-[250px] flex-none">
                          <MemberListItem role="AI Engineer" {...profile} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }

        // Standard rendering for other teams
        return (
          <div key={teamIndex} className="flex flex-col gap-5 mb-10">
            {team.image && (
              <div className="w-full h-[650px] aspect-[275/147] overflow-hidden rounded-[20px]">
                <Image
                  src={team.image}
                  alt={`${teamName} Team`}
                  width={1200}
                  height={650}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-white font-inter text-[40px] font-medium leading-normal not-italic text-start">
              {teamName}
            </h3>
            <MemberList teams={[team]} directors={directors} />
          </div>
        );
      })}
    </Section>
  );
}
