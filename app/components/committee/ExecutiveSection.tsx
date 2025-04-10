import Section from '@/app/components/Section'
import { executives } from '@/app/components/committee/memberData2025'
import MemberCard from '@/app/components/committee/MemberCard'

export default function ExecutiveSection () {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-center mb-8">Executives</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {executives.map((profile, index) => (
          <div key={index} className="flex justify-center ">
            <MemberCard {...profile} key={index}/>
          </div>
        ))}
      </div>
    </Section>
  )
}