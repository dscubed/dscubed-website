import Section from "@/app/components/Section";
import MemberCard from "@/app/components/committee/MemberCard";
import { Director } from "./types";

type DirectorSectionProps = {
  directors: Director[];
};

export default function DirectorSection({ directors }: DirectorSectionProps) {
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
  );
}
