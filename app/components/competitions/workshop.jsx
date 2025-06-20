"use client";

import { motion } from "framer-motion";
import WorkshopCard from "@/app/components/competitions/workshopcard";
import Section from "@/app/components/Section";

const workshops = [
  {
    title: "Workshop 1",
    subtitle: "Explanatory Data Analysis",
    description: "This workshop will guide you through exploring, cleaning and preparing your data for machine learning",
    videoId: "https://www.youtube.com/embed/i3Slu6B63rs?si=EHexWYQ-fC7XH_rn",
    date: "30 April 2025",
    time: "3 – 4:30 pm",
    pdfLink: '/competitions/Workshop1Slides.pdf',
  },
  {
    title: "Workshop 2",
    subtitle: "Model Building & Evaluation",
    description: "This workshop will teach you how to build an evaluate different machine learning models to best solve a problem",
    videoId: "https://www.youtube.com/embed/cZBt3JWpO0k?si=UaRBMoNqBXZOWv4s",
    date: "2 May 2025",
    time: "5 – 6:30 pm",
    pdfLink: '/competitions/Workshop2Slides.pdf',
  },
];

export default function Workshop() {
  return (
    <Section>
      <div className="w-full px-6 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              WORKSHOPS
            </motion.h2>
            <motion.p
              className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unlock your potential with our guided workshops!
            </motion.p>
          </div>

          {/* Cards */}
          <motion.div
            className="flex flex-wrap gap-10 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <WorkshopCard {...workshop} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}