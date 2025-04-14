import MemberListItem from '@/app/components/committee/MemberListItem'
import { directors } from '@/app/components/committee/memberData2025'

// The default role is set to '<Team name> Officer', so don't need to set it in members.js

export default function MemberList({ teams }: { teams: { name: string, members: { name: string, image?: string }[] }[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-20 justify-center sm:gap-y-10">
      {teams.map((team, teamIndex) => {
        // Find all directors for the current team
        const teamDirectors = directors.filter((d) => d.role.toLowerCase().includes(team.name.toLowerCase()));

        return (
          <div className="flex flex-col justify-center gap-5" key={teamIndex}>
            {/* Director Block */}
            {teamDirectors.length > 0 && (
              <div className="flex flex-col items-center text-center mb-5">
                <p className="text-2xl font-bold">
                  {teamDirectors.map((director, index) => (
                    <span key={index}>
                      {director.name}
                      {index < teamDirectors.length - 1 && ' | '}
                    </span>
                  ))}
                </p>
                <p className="text-lg">{team.name} Director</p>
              </div>
            )}

            {/* Members List */}
            <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
              {team.members.map((profile, profileIndex) => (
                <MemberListItem role={`${team.name} Officer`} {...profile} key={profileIndex} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  )
}