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
      <div className="flex gap-20 lg:gap-10 lg:flex-col">
        <div className="sticky w-full max-w-1/2 lg:max-w-none top-[calc(102.55px+20px)] space-y-4 lg:static h-fit">
          <h2 className="text-5xl sm:text-4xl">Club Stats</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            DSCubed is dedicated to promoting data science, analytics, and
            decision making skills across all disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 w-full max-w-1/2 lg:max-w-none space-y-20 sm:space-y-10 flex-1">
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
