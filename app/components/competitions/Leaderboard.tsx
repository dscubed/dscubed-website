"use client";

import Section from "@/app/components/Section";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Utility for responsive hook (optional, native matchMedia also works)
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

function PrizeCounter({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 3.5,
      });
      return animation.stop;
    }
  }, [isInView, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Prizes() {
  const [isInView, setIsInView] = useState(false);

  // Responsive: true if desktop/tablet, false if mobile
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          LEADERBOARD
        </motion.h2>
        <motion.p
          className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Based on mean absolute error
        </motion.p>
      </div>

      {/* Desktop/Tablet Podium */}
      {isDesktop && (
        <div className="flex color-white relative h-96 items-end justify-center gap-x-8">
          {/* 2ND PRIZE */}
          <motion.div
            className="text-center relative top-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 2 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="w-60 flex flex-col items-center">
              <div className="relative mb-2 w-24">
                <img
                  src="/competitions/trophy-silver.svg"
                  alt="Silver Trophy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="pb-2 text-xl font-bold">
                <p>2.62481</p>
              </div>
              <div className="rounded-xl bg-[#373737] text-sm text-white text-center py-4 px-4 w-64 h-80">
                <div className="font-bold text-2xl mt-3 mb-2">2ND PRIZE</div>
                <div className="leading-relaxed mb-3 text-[#C4C4C4] text-lg text-center top-1/2">
                  <p>
                    Lee Han Hsiang <br />
                    Muhammad Azad bin <br />
                    Mohamed Afif
                  </p>
                </div>
                <div className="h-40 flex flex-col justify-end pb-11">
                  <div className="text-4xl font-bold">
                    $<PrizeCounter value={150} isInView={isInView} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* 1ST PRIZE */}
          <motion.div
            className="text-center relative -mt-16 top-1/3"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="w-60 flex flex-col items-center">
              <div className="relative mb-2 w-24">
                <img
                  src="/competitions/trophy-gold.svg"
                  alt="Gold Trophy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="pb-2 text-xl font-bold">
                <p>2.58684</p>
              </div>
              <div className="rounded-xl bg-[#0472FD] text-sm text-white text-center py-4 px-4 w-64 h-[26rem] flex flex-col justify-between">
                <span className="font-bold text-white text-3xl font-['Press Start 2P'] mt-5 mb-2">
                  1ST PRIZE
                </span>
                <p className="leading-relaxed mb-3 text-[#B5D5FE] text-xl text-center">
                  Dimitri Micha
                  <br />
                  von Benckendorff
                  <br />
                  Lakshminarasimhan
                  <br />
                  Sudarshan
                </p>
                <div className="text-4xl font-bold self-center pb-4">
                  $<PrizeCounter value={200} isInView={isInView} />
                </div>
              </div>
            </div>
          </motion.div>
          {/* 3RD PRIZE */}
          <motion.div
            className="text-center relative top-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 3 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="w-60 flex flex-col items-center">
              <div className="relative mb-2 w-24">
                <img
                  src="/competitions/trophy-bronze.svg"
                  alt="Bronze Trophy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="pb-2 text-xl font-bold">
                <p>2.64055</p>
              </div>
              <div className="rounded-xl bg-[#373737] text-sm text-white text-center py-4 px-4 w-64 h-64">
                <div className="font-bold text-2xl mt-3 mb-2">3RD PRIZE</div>
                <p className="leading-relaxed mb-3 text-[#C4C4C4] text-lg text-center">
                  Ebyn Chan
                </p>
                <div className="h-40 flex flex-col justify-end pb-10">
                  <div className="text-4xl font-bold">
                    $<PrizeCounter value={100} isInView={isInView} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Mobile Prizes Card Stack */}
      {!isDesktop && (
        <div className="flex flex-col gap-8 items-center">
          {/* 1ST PRIZE */}
          <motion.div
            className="w-full max-w-xs mx-auto"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="rounded-xl bg-[#0472FD] text-white text-center py-6 px-4 flex flex-col items-center shadow-lg">
              <img
                src="/competitions/trophy-gold.svg"
                alt="Gold Trophy"
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="font-bold text-2xl mb-1">1ST PRIZE</span>
              <span className="text-md font-bold mb-1">2.58684</span>
              <p className="text-[#B5D5FE] text-base mb-2">
                Dimitri Micha
                <br />
                von Benckendorff
                <br />
                Lakshminarasimhan
                <br />
                Sudarshan
              </p>
              <div className="text-3xl font-bold">
                $<PrizeCounter value={200} isInView={isInView} />
              </div>
            </div>
          </motion.div>
          {/* 2ND PRIZE */}
          <motion.div
            className="w-full max-w-xs mx-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="rounded-xl bg-[#373737] text-white text-center py-6 px-4 flex flex-col items-center shadow-md">
              <img
                src="/competitions/trophy-silver.svg"
                alt="Silver Trophy"
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="font-bold text-2xl mb-1">2ND PRIZE</span>
              <span className="text-md font-bold mb-1">2.62481</span>
              <p className="text-[#C4C4C4] text-base mb-2">
                Lee Han Hsiang <br />
                Muhammad Azad bin <br />
                Mohamed Afif
              </p>
              <div className="text-3xl font-bold">
                $<PrizeCounter value={150} isInView={isInView} />
              </div>
            </div>
          </motion.div>
          {/* 3RD PRIZE */}
          <motion.div
            className="w-full max-w-xs mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <div className="rounded-xl bg-[#373737] text-white text-center py-6 px-4 flex flex-col items-center shadow-md">
              <img
                src="/competitions/trophy-bronze.svg"
                alt="Bronze Trophy"
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="font-bold text-2xl mb-1">3RD PRIZE</span>
              <span className="text-md font-bold mb-1">2.64055</span>
              <p className="text-[#C4C4C4] text-base mb-2">Ebyn Chan</p>
              <div className="text-3xl font-bold">
                $<PrizeCounter value={100} isInView={isInView} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  );
}
