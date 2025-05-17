import { Briefcase, Laptop, Users } from "lucide-react"; // Importing icons from lucide-react
import Section from "@/app/components/Section";

export default function WhatWeDoSection() {
  return (
    <Section>
      <h2 className="text-6xl sm:text-5xl mb-10 text-center">What We Do</h2>

      <div className="flex justify-around items-center gap-14 lg:flex-col lg:gap-10">
        <div className="flex flex-col items-center gap-6">
          <Briefcase className="w-28 h-28 text-white" />
          <h3 className="text-2xl font-semibold">Industry Opportunities</h3>
          <p className="text-lg text-center max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae sapien ac eros.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Laptop className="w-28 h-28 text-white" />
          <h3 className="text-2xl font-semibold">Technical Workshops</h3>
          <p className="text-lg text-center max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae sapien ac eros.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Users className="w-28 h-28 text-white" />
          <h3 className="text-2xl font-semibold">Student Networking</h3>
          <p className="text-lg text-center max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae sapien ac eros.
          </p>
        </div>
      </div>
    </Section>
  );
}
