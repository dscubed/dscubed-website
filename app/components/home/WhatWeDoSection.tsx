import { Briefcase, Laptop, Users, Computer } from "lucide-react";
import Section from "@/app/components/Section";

export default function WhatWeDoSection() {
  return (
    <Section>
      <h2 className="text-6xl sm:text-5xl mb-10 text-left">What We Do</h2>

      <div className="flex justify-around items-start gap-14 lg:flex-col lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <Briefcase className="w-16 h-16 text-white" />
          <h3 className="text-2xl font-semibold text-left">
            Industry Opportunities
          </h3>
          <p className="text-lg text-left max-w-xs">
            Kick-start your career in data science through our industry
            opportunities! We regularly host networking events with industry
            leaders and skill-building workshops. Members also gain early
            insights into internships and exclusive job listings through our
            newsletter.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Laptop className="w-16 h-16 text-white" />
          <h3 className="text-2xl font-semibold text-left">
            Technical Workshops
          </h3>
          <p className="text-lg text-left max-w-xs">
            Through hands-on sessions in Python, data analysis, ML, and AI,
            DSCubed members gain practical skills, grow in confidence, and
            connect with peers in a supportive, collaborative learning
            environment.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Users className="w-16 h-16 text-white" />
          <h3 className="text-2xl font-semibold text-left">
            Student Networking
          </h3>
          <p className="text-lg text-left max-w-xs">
            DSCubed connects passionate students in Data Science and AI through
            social events, workshops, and competitions, fostering a supportive
            community that builds valuable connections with peers and industry
            professionals.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Computer className="w-16 h-16 text-white" />
          <h3 className="text-2xl font-semibold text-left">Datathons</h3>
          <p className="text-lg text-left max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae sapien ac eros.
          </p>
        </div>
      </div>
    </Section>
  );
}
