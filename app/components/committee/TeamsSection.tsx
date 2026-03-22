import Section from "@/app/components/Section";
import MemberList from "@/app/components/committee/MemberList";
import MemberListItem from "@/app/components/committee/MemberListItem";
import Image from "next/image";
import { Director, Team } from "./types";

export default function TeamsSection({
  teams,
  directors,
}: {
  teams: Team[];
  directors: Director[];
}) {
  // Extract Product Director from directors
  const productDirector = directors.find(
    (d) =>
      d.team === "Product" ||
      d.role?.toLowerCase().includes("product director"),
  );

  // Extract Leads from directors (since they have their own sub-teams under Product)
  const productLeads = directors.filter(
    (d) =>
      ["AI", "C3", "IT"].includes(d.team as string) ||
      (d.team === null && d.role?.toLowerCase().includes("lead")),
  );

  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-8">Teams</h2>
      {teams.map((team, teamIndex) => {
        const teamName = team.name || team.team || "";
        const isProduct =
          team.team === "Product" || teamName.toLowerCase() === "product";

        if (isProduct) {
          // Group normal members by sub-team for Product team
          const c3Members =
            team.members.filter((m) => m.productTeam === "C3") || [];
          const aiMembers =
            team.members.filter((m) => m.productTeam === "AI") || [];
          const itMembers =
            team.members.filter((m) => m.productTeam === "IT") || [];

          return (
            <div key={teamIndex} className="flex flex-col gap-5 mb-10">
              {/* Product Team Name */}
              <h3 className="text-4xl font-bold text-center">{teamName}</h3>

              {/* Product Team Image */}
              {team.image && (
                <div className="w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src={team.image}
                    alt={`${teamName} Team`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Product Leads */}
              <div className="flex flex-col justify-center gap-5 mt-4">
                <div className="flex justify-center flex-wrap gap-4">
                  {productDirector && (
                    <div className="w-70 flex-col items-center text-center">
                      <MemberListItem
                        {...productDirector}
                        role={productDirector.role || "Product Director"}
                      />
                    </div>
                  )}
                  {productLeads.map((lead, idx) => (
                    <div
                      key={`lead-${idx}`}
                      className="w-70 flex-col items-center text-center"
                    >
                      <MemberListItem
                        {...lead}
                        role={lead.role || `${lead.team} Lead`}
                      />
                    </div>
                  ))}
                </div>

                {/* C3 Sub-Team */}
                {c3Members.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-2xl font-bold text-center mb-6">
                      Connect3
                    </h4>
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
                )}

                {/* AI Sub-Team */}
                {aiMembers.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-2xl font-bold text-center mb-6">AI</h4>
                    <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                      {aiMembers.map((profile, idx) => (
                        <MemberListItem
                          key={idx}
                          role="AI Officer"
                          {...profile}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* IT Sub-Team */}
                {itMembers.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-2xl font-bold text-center mb-6">IT</h4>
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
                )}
              </div>
            </div>
          );
        }

        // Standard rendering for other teams
        return (
          <div key={teamIndex} className="flex flex-col gap-5 mb-10">
            {/* Team Name */}
            <h3 className="text-4xl font-bold text-center">{teamName}</h3>

            {/* Team Image */}
            {team.image && (
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src={team.image}
                  alt={`${teamName} Team`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Members List */}
            <MemberList teams={[team]} directors={directors} />
          </div>
        );
      })}
    </Section>
  );
}
