"use client";
import Section from "@/app/components/Section";

// Statistics (currently taken from old AboutSection)
const stats = [
  {
    amount: "500+",
    description: "Number of current members in 2025.",
  },
  {
    amount: "2.1K+",
    description: "Followers on Instagram.",
  },
  {
    amount: "15+",
    description: "Events held each semester.",
  },
];

export default function StatsSection() {
  return (
    <Section>
      <div className="grid grid-cols-[1fr,1fr] lg:grid-cols-1 lg:gap-20 sm:gap-10">
        <div>
          <div className="sticky max-w-md sm:max-w-none top-[calc(102.55px+20px)] space-y-4">
            <h2 className="text-5xl sm:text-4xl">Club Stats</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              DSCubed is dedicated to promoting data science, analytics, and decision making skills across all disciplines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 max-w-lg lg:max-w-none space-y-20 sm:space-y-10">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="space-y-1 rounded-md">
                <h3 className="text-8xl sm:text-7xl tracking-tight leading-none">
                  {stat.amount}
                </h3>
                <p className="text-xl lg:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
