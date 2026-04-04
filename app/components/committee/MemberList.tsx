import MemberListItem from "@/app/components/committee/MemberListItem";
import { Director, Team } from "./data/types";
import MemberCard from "./MemberCard";

// The default role is set to '<Team name> Officer', so don't need to set it in members.js

function isDSCubedAI(team: string | null | undefined) {
  return team === "AI @ DSCubed" || team === "AI@DSCubed";
}

export default function MemberList({
  teams,
  directors,
}: {
  teams: Team[];
  directors: Director[];
}) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-20 justify-center sm:gap-y-10">
      {teams.map((team, teamIndex) => {
        const teamName = team.name || team.team || "";

        // Find all directors for the current team
        const teamDirectors = directors
          .filter(
            (d) =>
              d.team === team.team ||
              (d.team === null &&
                team.name &&
                d.role?.toLowerCase().includes(team.name.toLowerCase())),
          )
          .map((director) => {
            let defaultRole = `${teamName}`;
            if (isDSCubedAI(teamName)) {
              defaultRole = "AI @ DSCubed";
            }
            return {
              name: director.name,
              role: (director.role as string) || defaultRole,
              image: director.image,
              variant: "featured",
            };
          });

        return (
          <div className="flex flex-col justify-center gap-5" key={teamIndex}>
            {/* Directors Row */}
            {teamDirectors.length > 0 && (
              <div className="flex justify-center gap-4">
                {teamDirectors.map((director, directorIndex) => (
                  <div
                    key={`director-${directorIndex}`}
                    className="w-70 flex-col items-center text-center"
                  >
                    <MemberCard {...director} />
                  </div>
                ))}
              </div>
            )}

            {/* Officers Row */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
              {team.members.map((profile, profileIndex) => {
                const officerRole = isDSCubedAI(teamName)
                  ? "AI @ DSCubed"
                  : `${teamName} Officer`;

                return (
                  <div key={profileIndex} className="w-[250px] flex-none">
                    <MemberListItem
                      role={officerRole}
                      {...profile}
                      key={profileIndex}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
