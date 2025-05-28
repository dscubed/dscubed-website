"use client";
import Section from "@/app/components/Section";

// Statistics (currently taken from old AboutSection)
const stats = [
  {
    id: "members",
    number: 123,
    title: "Title?",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien ac eros.",
  },
  {
    id: "degrees",
    number: 123,
    title: "Title?",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien ac eros.",
  },
  {
    id: "events",
    number: 123,
    title: "Title?",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien ac eros.",
  },
];

export default function StatsSection() {
  const formatNumber = (num: number) => {
    if (num < 10) {
      return `00${num}`;
    }
    if (num < 100) {
      return `0${num}`;
    }
    return `${num}`;
  };

  return (
    <Section>
      <div className="grid grid-cols-[1fr,1fr] lg:grid-cols-1 lg:gap-20 sm:gap-10">
        <div>
          <div className="sticky max-w-sm sm:max-w-none top-[calc(102.55px+20px)]">
            <h2 className="text-5xl sm:text-4xl !leading-tight mb-10">
              About Us
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              DSCubed is dedicated to promoting data science, analytics, and
              decision making skills across all disciplines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 max-w-xl lg:max-w-none">
          {stats.map((stat, index) => (
            <div key={stat.id}>
              <div className="flex flex-col gap-4 rounded-md py-10">
                <h3 className="text-[6rem] sm:text-[6rem] font-bold tracking-tight leading-none">
                  {formatNumber(stat.number)}
                </h3>
                <h4 className="text-xl">{stat.title}</h4>
                <p className="text-xl lg:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
              {index < stats.length - 1 && (
                <hr className="border-t-2 border-white border-opacity-40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
