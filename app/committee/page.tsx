"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function CommitteePage() {
  const COMMITTEES = [
    { year: 2026, image: "/people/committee2026.png" },
    { year: 2025, image: "/people/committee2025.jpg" },
    { year: 2024, image: "/people/committee2024.png" },
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Section>
          <motion.div
            className="flex flex-col gap-4 w-full text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-4xl">Committee</h1>
            <p className="text-lg text-text-secondary">
              Meet the people who make it all happen throughout the years.
            </p>
          </motion.div>
        </Section>

        <AnimatePresence>
          <div className="flex flex-col items-center w-full gap-8 pb-20">
            {COMMITTEES.map((committee, index) => (
              <motion.div
                key={committee.year}
                className="w-full max-w-4xl px-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
              >
                <CommitteePageCard
                  year={committee.year}
                  image={committee.image}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </main>
    </>
  );
}

function CommitteePageCard({ year, image }: { year: number; image: string }) {
  return (
    <Link href={`/committee/${year}`} className="w-full max-w-4xl px-2 block">
      <motion.div
        className="group relative flex flex-col gap-4 bg-background rounded-xl overflow-hidden w-full max-w-4xl"
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Image
          className="object-cover w-full rounded-xl aspect-video"
          src={image}
          width={400}
          height={400}
          alt={`${year} committee picture`}
        />
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-linear-to-t from-black/60 group-hover:from-black/50 to-transparent duration-300 transition" />

        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3">
          <h3 className="text-white font-medium leading-tight tracking-wide text-2xl sm:text-xl text-ellipsis overflow-hidden">
            Committee <span className="text-accent">{year}</span>
          </h3>
          <motion.div
            className="flex items-center gap-2 transition group-hover:text-white/80 sm:text-sm"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span>View Committee</span>
            <ArrowRight className="size-6 sm:size-4 my-auto" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
