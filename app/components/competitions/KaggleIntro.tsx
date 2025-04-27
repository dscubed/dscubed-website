'use client';

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function KaggleIntro() {
  return (
    <div className="flex flex-row md:flex-col px-5 max-w-screen-xl mx-auto gap-x-8 gap-y-8">
      {/* Left Text */}
      <motion.div
        className="flex flex-col w-1/2 md:w-full justify-center"
        initial={{ opacity: 0, x: -50 }} // Slide in from the left
        whileInView={{
          opacity: 1,
          x: 0, // Slide to its original position
          transition: { duration: 1 }, // Animation duration
        }}
        viewport={{ once: true }}
      >
        <h1 className="flex items-center text-3xl font-bold mb-4">
          WHAT’S&nbsp;
          <img
            src="/competitions/KaggleLogo.svg"
            alt="Kaggle Logo"
            className="ml-1 h-8 inline-block align-middle translate-y-[2px]"
          />
        </h1>

        {/* Typing Animation for Long Text */}
        <TypeAnimation
          sequence={[
            "Kaggle is the world’s leading platform for data science and machine learning. It hosts real-world datasets, challenges and competitions where individuals and teams build solutions to complex problems. For our flagship competition, we source Kaggle datasets to provide you with practical, industry-relevant experience.",
          ]}
          speed={80} // Typing speed
          wrapper="p"
          cursor={true} // Enable typing cursor
          className="text-lg leading-relaxed"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex flex-col w-1/2 md:w-full justify-center"
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        whileInView={{
          opacity: 1,
          x: 0, // Slide to its original position
          transition: { duration: 1 }, // Animation duration
        }}
        viewport={{ once: true }}
      >
        <img
          src={'/competitions/KagglePicture.jpg'}
          className="rounded-lg shadow"
        ></img>
      </motion.div>
    </div>
  );
}