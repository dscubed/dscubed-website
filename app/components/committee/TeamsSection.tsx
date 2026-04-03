import Section from "@/app/components/Section";
import MemberList from "@/app/components/committee/MemberList";
import MemberListItem from "@/app/components/committee/MemberListItem";
import Image from "next/image";
import { Director, Team } from "./data/types";

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
  // These will trigger the vertical "Featured" variant in MemberListItem
  const productLeads = directors.filter(
    (d) =>
      ["AI", "Connect3", "IT"].includes(d.team as string) ||
      (d.role?.toLowerCase().includes("lead")),
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
          const c3Members = team.members.filter((m) => m.productTeam === "Connect3") || [];
          const aiMembers = team.members.filter((m) => m.productTeam === "AI") || [];
          const itMembers = team.members.filter((m) => m.productTeam === "IT") || [];

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
                <div className="flex justify-start flex-wrap gap-8">
                  {productDirector && (
                    <div className="w-[189px] flex-col items-start text-start">
                      <MemberListItem
                        {...productDirector}
                        role={productDirector.role || "Products"}
                        variant = "featured"
                      />
                    </div>
                  )}
                  {productLeads.map((lead, idx) => (
                    <div
                      key={`lead-${idx}`}
                      className="w-[189px] flex-col items-center text-start"
                    >
                      <MemberListItem
                        {...lead}
                        // Explicitly passing "Lead" triggers the vertical variant
                        role={lead.role || `${lead.team}`}
                        variant = "featured"
                      />
                    </div>
                  ))}
                </div>

                {/* C3 Sub-Team (Horizontal Cards) */}
                {c3Members.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">Connect3</h4>
                    <div className="flex justify-center w-full">
                      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        {c3Members.map((profile, idx) => (
                          <MemberListItem
                            key={idx}
                            role="Connect3 Officer"
                            {...profile}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* IT Sub-Team (Horizontal Cards) */}
                {itMembers.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">IT</h4>
                    <div className="flex justify-center w-full">
                      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        {itMembers.map((profile, idx) => (
                          <MemberListItem
                          key={idx}
                          role="IT Officer"
                          {...profile}
                          />
                          ))}
                          </div>
                          </div>
                          </div>
                )}
                {/* AI Sub-Team (Horizontal Cards) */}
                {aiMembers.length > 0 && (
                  <div className="mt-8 w-full">
                    <h4 className="text-white text-3xl font-medium font-['Inter'] mb-6 text-start">AI</h4>
                    <div className="flex justify-center w-full">
                      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        {aiMembers.map((profile, idx) => (
                          <MemberListItem
                          key={idx}
                          role="AI Engineer"
                          {...profile}
                          />
                          ))}
                          </div>
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