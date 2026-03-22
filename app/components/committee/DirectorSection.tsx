import Section from "@/app/components/Section";
import MemberCard from "@/app/components/committee/MemberCard";
import { Director } from "./types";

function getRole(director: Director): string {
  if (director.role) {
    return director.role;
  } else if (
    director.team == "C3" ||
    director.team == "AI" ||
    director.team == "IT"
  ) {
    return `${director.team} Lead`;
  } else if (director.team == "AI @ DSCubed") {
    return "AI @ DSCubed";
  }
  return `${director.team} Director`;
}

export default function DirectorSection({
  directors,
}: {
  directors: Director[];
}) {
  return (
    <Section>
      <h2 className="text-4xl font-bold text-center mb-8">Directors</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {directors.map((profile, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard
              name={profile.name}
              role={getRole(profile)}
              image={profile.image}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
