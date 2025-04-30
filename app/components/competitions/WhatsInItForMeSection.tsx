"use client";

import { motion } from "framer-motion";

export default function WhatsInItForMeSection() {
  return (
    <section className="flex flex-col items-center text-center px-5 py-10 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          WHATS IN IT FOR YOU
        </motion.h2>
        <motion.p
          className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Gain practical experience and career-boosting opportunities!
        </motion.p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center gap-x-20 gap-y-10 text-left">
        {/* Item 1 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/competitions/ArtificialIntelligence.svg"
            alt="ML applications"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Gain hands-on experience with real-world ML applications
          </p>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/competitions/Teamwork.svg"
            alt="Teamwork"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Build teamwork and problem-solving through collaboration
          </p>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/competitions/Project.svg"
            alt="Project portfolio"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Add a unique, data-driven project to your portfolio
          </p>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          viewport={{ once: true }}
        >
          <img
            src="/competitions/Diploma.svg"
            alt="Certificate"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Stand out to recruiters with a verified certificate and practical
            experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}