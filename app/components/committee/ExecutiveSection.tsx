import MemberCard from "@/app/components/committee/MemberCard";
import { StaticImageData } from "next/image";
import { ExecMember } from "./data/types";

export default function ExecutiveSection({
  executives,
  teamPhoto,
}: {
  executives: ExecMember[];
  teamPhoto?: string | StaticImageData;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <h2 className="sm:text-xl text-3xl font-medium text-white uppercase">
          EXECUTIVES
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {executives.map((profile, index) => (
          <div
            key={index}
            className="w-[calc((100%-48px)/5)] md:w-[calc((100%-24px)/3)] sm:w-[calc((100%-12px)/2)]"
          >
            <MemberCard {...profile} />
          </div>
        ))}
      </div>
    </div>
  );
}
