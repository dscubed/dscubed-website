import Section from '@/app/components/Section'
import MemberCard from '@/app/components/committee/MemberCard'
import Image from 'next/image'

export default function ExecutiveSection({ executives, teamPhoto }: { executives: { name: string, role: string, image?: string }[], teamPhoto?: string }) {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-center mb-8">Executives</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {executives.map((profile, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard {...profile} />
          </div>
        ))}
      </div>
      {/* Conditionally render the team photo */}
      {teamPhoto && (
        <div className="w-full h-180 overflow-hidden rounded-lg">
          <Image
            src={teamPhoto}
            alt="Executive Team"
            width={1200}
            height={600}
            className="w-full rounded-lg object-cover"
          />
        </div>
      )}
    </Section>
  )
}