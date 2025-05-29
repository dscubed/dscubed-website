"use client";

import React, { useState } from "react";
import Visualiser from "@/app/components/visualiser/Visualiser";
import { useEmbeddings } from "@/app/hooks/useEmbeddings";
import vocab from "@/public/visualiser/vocab.json";
import { pulseAnimation } from "./GlowingLogo";
import Logo from "../Logo";
import { motion } from "framer-motion";

export default function VisualiserSection({
  onLoaded,
}: {
  onLoaded?: () => void;
}) {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = useEmbeddings(words);

  if (!embeddings)
    return (
      <section className="relative h-screen">
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
          <div className="relative w-1/2 h-1/2">
            <motion.div
              {...pulseAnimation}
              style={{
                filter: "blur(18px)",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Logo className="w-full h-full opacity-80" />
            </motion.div>
            <Logo className="w-full h-full opacity-80 relative" />
          </div>
          <p className="text-2xl font-bold text-center">LOADING...</p>
        </div>
      </section>
    );

  return (
    <Visualiser vocab={words} embeddings={embeddings} onLoaded={onLoaded} />
  );
}
