import MemberListItem from '@/app/components/committee/MemberListItem'
import { credits } from '@/app/components/competitions/kaggle2025s1'

export default function CreditsSection() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-center mb-10 opacity-50">Contributors & Editors</h2>
      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-6 justify-center">
        {credits.map((team, teamIndex) =>
          team.members.map((member, memberIndex) => (
            <MemberListItem
              key={`${teamIndex}-${memberIndex}`}
              name={member.name}
              role={member.role || `${team.name} Officer`}
              image={member.image}
            />
          ))
        )}
      </div>
    </div>
  )
}