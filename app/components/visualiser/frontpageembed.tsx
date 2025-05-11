"use client";

import { useState } from "react";
import FrontPageVisualiser from "./FrontPageVisualiser";
import { useEmbeddings } from "@/app/hooks/useEmbeddings";
import vocab from "@/public/visualiser/front.json";
import { pulseAnimation } from "./GlowingLogo";
import Logo from "../Logo";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FrontPageLayout, { WelcomeText } from "./FrontPageLayout";

export default function FrontPageEmbed() {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = useEmbeddings(words);
  const router = useRouter();
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

  const handleButtonClick = () => {
    // Zoom to word
    setTriggerAnimation(true);
    // Wait for zoom then route to visualiser
    setTimeout(() => {
      router.push("/visualiser");
    }, 1500); // 1.5 second delay to match the zoom animation duration
  };

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
    <section className="relative h-screen ">
      <div className="absolute top-0 right-0 w-full mt-4 mr-4 text-sm text-gray-400 z-50 flex flex-col items-center gap-5 overflow-hidden">
        {/* Disclaimer Text*/}
        <p className="text-right w-full sm:text-[10px] overflow-hidden">
          Disclaimer: This is our first prototype and may contain issues or
          bugs.
        </p>
        {/* Content for sm screens*/}
        <div className="hidden sm:flex flex-col relative w-full items-center justify-center overflow-hidden">
          <WelcomeText /> {/* Set to true for now */}
        </div>
      </div>

      <div className="animated-gradient-1 absolute inset-0 w-full h-full z-[0] opacity-50"></div>
      {/* Main Visualiser */}
      <FrontPageVisualiser
        vocab={words}
        embeddings={embeddings}
        triggerAnimation={triggerAnimation}
      />

      {/* Layout */}
      <div className="sm:hidden left-layout">
        <FrontPageLayout
          handleButtonClick={handleButtonClick}
          triggerAnimation={triggerAnimation}
        />
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-screen flex flex-col items-center justify-center mb-4 text-center gap-10 z-20">
        {/* Content for SM and lower */}
        <div className="hidden sm:flex flex-row items-center w-full gap-4 px-20 xs:px-10">
          <button
            onClick={handleButtonClick}
            className="bg-white text-black px-4 py-2 rounded-md text-xs font-medium transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg lg:w-full sm:w-full"
          >
            Click here to get your free DSCubed Membership
          </button>
          <button
            onClick={handleButtonClick}
            className={`${
              triggerAnimation == true
                ? "bg-gray-600"
                : "bg-blue-900 hover:scale-105 hover:bg-blue-800 hover:shadow-lg"
            } text-white px-4 py-2 rounded-md text-xs font-medium transition-transform transform lg:w-full sm:w-full`}
          >
            {triggerAnimation == true
              ? "Redirecting to Visualiser...."
              : " Explore our Embeddings Visualiser"}
          </button>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, -10, 0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut",
          }}
          className="flex items-center gap-2"
        >
          <p>Scroll to browse </p> <ChevronDoubleDownIcon className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
