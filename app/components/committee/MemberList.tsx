import MemberListItem from '@/app/components/committee/MemberListItem'

// The default role is set to '<Team name> Officer', so don't need to set it in members.js

export default function MemberList({ teams }: { teams: { name: string, members: { name: string, image?: string }[] }[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-20 justify-center sm:gap-y-10">
      {teams.map((team, teamIndex) => (
        <div className="flex flex-col justify-center gap-5" key={teamIndex}>
          <h4 className="text-xl text-text-secondary">{team.name}</h4>
          <div className="grid grid-cols-4 lg:grid-cols-2 justify-center sm:grid-cols-1 gap-4">
            {team.members.map((profile, profileIndex) => (
              <MemberListItem role={`${team.name} Officer`} {...profile} key={profileIndex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}