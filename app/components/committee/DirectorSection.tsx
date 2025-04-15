import Section from '@/app/components/Section'
import MemberCard from '@/app/components/committee/MemberCard'

export default function DirectorSection({ directors }: { directors: { name: string, role: string, image?: string }[] }) {
  return (
    <Section>
      <h2 className="text-4xl font-bold text-center mb-8">Directors</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {directors.map((profile, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard {...profile} />
          </div>
        ))}
      </div>
    </Section>
  )
}