import Image from "next/image";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

export default function CommitteePage() {
  const COMMITTEES = [
    {
      year: 2024,
      image: "/people/committee2024.png",
    },
    {
      year: 2025,
      image: "/people/committee2025.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Section>
          <div className="flex flex-col gap-4 w-full text-center">
            <h1 className="text-5xl sm:text-4xl">Committee</h1>
            <p className="text-lg text-text-secondary">
              Meet the people who make it all happen throughout the years.
            </p>
          </div>
        </Section>

        <div className="flex flex-col items-center w-full gap-8 pb-20">
          {COMMITTEES.map((committee) => (
            <CommitteePageCard
              key={committee.year}
              year={committee.year}
              image={committee.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}

function CommitteePageCard({ year, image }: { year: number; image: string }) {
  return (
    <Link href={`/committee/${year}`} className="w-full max-w-4xl px-2">
      <div className="group relative flex flex-col gap-4 bg-background rounded-xl overflow-hidden w-full max-w-4xl">
        <Image
          className="object-cover w-full rounded-xl aspect-video"
          src={image}
          width={400}
          height={400}
          alt={`${year} committee picture`}
        ></Image>
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-linear-to-t from-black/40 group-hover:from-white/0 to-transparent duration-300 transition" />

        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3">
          <h3 className="text-white font-medium leading-tight tracking-wide text-2xl sm:text-xl text-ellipsis overflow-hidden">
            Committee <span className="text-accent">{year}</span>
          </h3>
          <div className="flex items-center gap-2 transition group-hover:text-white/80 sm:text-sm">
            <span>View Committee</span>
            <ArrowRight className="size-6 sm:size-4 my-auto" />
          </div>
        </div>
      </div>
    </Link>
  );
}
