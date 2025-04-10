import Section from '@/app/components/Section'
import { teams } from '@/app/components/committee/memberData2025'
import MemberList from '@/app/components/committee/MemberList'
import Image from 'next/image'

export default function TeamsSection() {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-8">Teams</h2>
      {teams.map((team, teamIndex) => (
        <div key={teamIndex} className="flex flex-col gap-5 mb-10">
          {/* Team Name */}
          <h3 className="text-4xl font-bold text-center">{team.name}</h3>

          {/* Team Image */}
          {team.image && (
            <div className="w-full h-96 overflow-hidden rounded-lg">
              <Image
                src={team.image}
                alt={`${team.name} Team`}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Members List */}
          <MemberList teams={[team]} />
        </div>
      ))}
    </Section>
  )
}