import Section from "@/app/components/Section";
import MemberCard from "@/app/components/committee/MemberCard";
import Image, { StaticImageData } from "next/image";
import { ExecMember } from "./data/types";

export default function ExecutiveSection({
  executives,
  teamPhoto,
}: {
  executives: ExecMember[];
  teamPhoto?: string | StaticImageData;
}) {
  return (
    <Section className = "mt-16 mb-0">
      <div className="flex flex-col gap-8">
        <h2 className="text-[32px] font-medium text-[#B9B9B9]">EXECS & DIRECTORS</h2>
        {teamPhoto && (
          <div className="w-full overflow-hidden rounded-[20px]" style={{ height: '670px' }}>
            <Image
              src={teamPhoto}
              alt="Executive Team"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-[40px] font-medium text-white pl-[12px]">EXECUTIVES</h2>
        <div className="grid grid-cols-5 gap-[12px]">
          {executives.map((profile) => (
            <div key={profile.name} >
              <MemberCard {...profile} />
            </div>
          ))}
        </div>
      </div>


      
    </Section>
  );
}
