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
  return `${director.team}`;
}

export default function DirectorSection({
  directors,
}: {
  directors: Director[];
}) {
  const operationsDirectors = directors.slice(0, 6);
  const productsDirectors = directors.slice(6);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Operations Directors */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3 uppercase">
          <h2 className="text-[32px] font-medium text-white sm:text-xl text-3xl">
            OPERATIONS
          </h2>
          <span className="text-2xl sm:text-lg font-medium text-[#B9B9B9]">
            DIRECTORS
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {operationsDirectors.map((profile, index) => (
            <div
              key={index}
              className="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
            >
              <MemberCard
                name={profile.name}
                role={getRole(profile)}
                image={profile.image}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Products Directors */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3 uppercase">
          <h2 className="text-[32px] font-medium text-white sm:text-xl text-3xl">
            PRODUCTS
          </h2>
          <span className="text-2xl sm:text-lg font-medium text-[#B9B9B9]">
            DIRECTORS & LEADS
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {productsDirectors.map((profile, index) => (
            <div
              key={index}
              className="w-[calc((100%-60px)/6)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
            >
              <MemberCard
                name={profile.name}
                role={getRole(profile)}
                image={profile.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
