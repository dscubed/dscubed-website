"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

interface LoaderContextType {
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  isFullyRevealed: boolean;
}

const LoaderContext = createContext<LoaderContextType>({
  setLoaded: () => {},
  isFullyRevealed: true,
});

const LogoOverlay = ({ progress }: { progress: MotionValue<number> }) => {
  // We use a CSS clip-path to reveal the filled logo from bottom to top.
  // clip-path: inset(top right bottom left) -> inset((100 - progress)% 0 0 0)
  const clipPath = useTransform(
    progress,
    (val: number) => `inset(${100 - val}% 0 0 0)`,
  );
  const percentage = useTransform(progress, (val: number) => Math.round(val));

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative w-[135px] h-[157px]">
        {/* Unfilled Outline */}
        <div className="absolute inset-0 text-foreground opacity-30">
          <svg
            width="135"
            height="157"
            viewBox="0 0 135 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.7483 47.0173L40.1829 62.325L39.8069 62.5408V94.4568L40.1829 94.6726L67.1243 110.196L67.4983 110.412L67.8733 110.196L94.8176 94.6726L95.1926 94.4568V63.407L110.531 54.5701V103.29L67.4983 128.087L24.468 103.29V53.7058L66.7483 29.3455V47.0173Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M133.354 39.6906L118.017 48.5275L67.8726 19.6359L67.4985 19.42L67.1245 19.6359L16.6079 48.7433L16.2319 48.9591V108.04L16.6079 108.257L67.1245 137.363L67.4985 137.579L67.8726 137.363L118.017 108.472L133.354 117.309L67.4985 155.251L0.893066 116.875V40.1241L67.4985 1.74426L133.354 39.6906Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Filled Area with animated clip-path */}
        <motion.div
          className="absolute inset-0 text-foreground"
          style={{ clipPath }}
        >
          <svg
            width="135"
            height="157"
            viewBox="0 0 135 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M111.282 53.2729L94.4429 62.9744V94.0229L67.4985 109.546L40.5569 94.0229V62.9744L67.4985 47.4515V28.0486L23.718 53.2729V103.724L67.4985 128.952L111.282 103.724V53.2729Z"
              fill="currentColor"
            />
            <path
              d="M134.857 117.309L118.018 107.607L67.4985 136.714L16.982 107.607V49.3928L67.4985 20.2857L118.018 49.3928L134.857 39.6914L67.4985 0.880005L0.143066 39.6914V117.309L67.4985 156.117L134.857 117.309Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div className="font-mono text-3xl sm:text-2xl tracking-widest text-foreground font-medium">
        {percentage}
      </motion.div>
    </motion.div>
  );
};

export function HomeLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    // Start by animating up to 90% over 3 seconds
    const controls = animate(progress, 90, {
      duration: 3,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [progress]);

  useEffect(() => {
    if (loaded) {
      // Once loaded is true, quickly animate the rest to 100%
      animate(progress, 100, {
        duration: 0.4,
        ease: "easeIn",
        onComplete: () => {
          setTimeout(() => setReady(true), 200); // give it a brief moment at 100%
        },
      });
    }
  }, [loaded, progress]);

  return (
    <LoaderContext.Provider value={{ setLoaded, isFullyRevealed }}>
      <AnimatePresence onExitComplete={() => setIsFullyRevealed(true)}>
        {!ready && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-secondary-background pointer-events-auto"
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <LogoOverlay progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`transition-opacity duration-1000 delay-300 ${
          ready
            ? "opacity-100"
            : "opacity-0 pointer-events-none h-screen overflow-hidden"
        }`}
      >
        {children}
      </div>
    </LoaderContext.Provider>
  );
}

export function useHomeLoader() {
  return useContext(LoaderContext);
}
