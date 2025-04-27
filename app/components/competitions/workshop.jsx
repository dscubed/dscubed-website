import WorkshopCard from "./WorkshopCard";

const workshops = [
  {
    title: "Workshop 1",
    subtitle: "Explanatory Data Analysis",
    description: "short description of the workshop",
    videoId: "j2fbOAyNOpM",
    date: "30 April 2025",
    time: "3 – 4:30 pm",
  },
  {
    title: "Workshop 2",
    subtitle: "Model Building & Evaluation",
    description: "short description of the project",
    videoId: "j2fbOAyNOpM",
    date: "2 May 2025",
    time: "5 – 6:30 pm",
  },
];

export default function Workshop() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight">
            WORKSHOPS
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2">
            short description
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center sm:justify-between">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={index} {...workshop} />
          ))}
        </div>
      </div>
    </section>
  );
}
