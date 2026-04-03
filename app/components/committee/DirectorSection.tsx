import Section from "@/app/components/Section";
import MemberCard from "@/app/components/committee/MemberCard";
import { Director } from "./data/types";

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
    const productsDirectors = directors.slice(0, 6);
  const operationsDirectors = directors.slice(6);

  return (
    <div className="flex flex-col gap-8 mt-8 mb 0 [72px] px-[12px] max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-baseline gap-[12px]">
          <h2 className="text-[32px] font-medium text-white">PRODUCTS</h2>
          <span className="text-[24px] font-medium text-[#B9B9B9]">DIRECTORS & LEADS</span>
        </div>
        <div className="flex gap-[12px]">
          {productsDirectors.map((profile, index) => (
            <MemberCard key={index} name={profile.name} role={getRole(profile)} image={profile.image} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-baseline gap-3">
          <h2 className="text-[32px] font-medium text-white">OPERATIONS</h2>
          <span className="text-[24px] font-medium text-[#B9B9B9]">DIRECTORS</span>
        </div>
        <div className="flex gap-[12px] justify-center">
          {operationsDirectors.map((profile, index) => (
            <MemberCard key={index} name={profile.name} role={getRole(profile)} image={profile.image} />
          ))}
        </div>
      </div>
      
    </div>
  );
}
