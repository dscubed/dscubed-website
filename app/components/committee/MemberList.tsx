import MemberListItem from "@/app/components/committee/MemberListItem";
import { Director, Team } from "./data/types";

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
            let defaultRole = `${teamName} Director`;
            if (isDSCubedAI(teamName)) {
              defaultRole = "AI @ DSCubed";
            }
            return {
              name: director.name,
              role: (director.role as string) || defaultRole,
              image: director.image,
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
                    <MemberListItem {...director} />
                  </div>
                ))}
              </div>
            )}

            {/* Officers Row */}
            <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
              {team.members.map((profile, profileIndex) => {
                const officerRole = isDSCubedAI(teamName)
                  ? "AI @ DSCubed"
                  : `${teamName} Officer`;

                return (
                  <MemberListItem
                    role={officerRole}
                    {...profile}
                    key={profileIndex}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
