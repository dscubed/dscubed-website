"use client";

import { motion } from "framer-motion";
import { YearSelector } from "./YearSelector";

export function CommitteePageHeader() {
  return (
    <div className="flex sm:flex-col items-center sm:items-start gap-6 sm:gap-2">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl sm:text-2xl font-medium text-white"
      >
        DSCubed Committee
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <YearSelector />
      </motion.div>
    </div>
  );
}
