"use client";
import GlowingLogo from "./GlowingLogo";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import FancyText from "@carefully-coded/react-text-gradient";

import { pulseAnimation } from "./GlowingLogo";
import Logo from "../Logo";
import { motion } from "framer-motion";

interface FrontPageLayoutProps {
  handleButtonClick: () => void;
}

export function WelcomeText({ isInView }: { isInView: boolean }) {
  return (
    <>
      <div className="relative bottom-0 w-2/5 h-2/5">
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
      <FancyText
        gradient={{ from: "#1A5194", to: "#FFFFFF", type: "radial" }}
        animateTo={{ from: "#0F2FA6", to: "#FFFFFF" }}
        animateDuration={2000}
        className="text-4xl font-bold text-left"
      >
        Welcome to DSCubed!
      </FancyText>
      {isInView ? (
        <TypeAnimation
          sequence={["Empowering Future Data Scientists", 1000]}
          speed={80}
          wrapper="p"
          cursor={true}
          repeat={0}
          className="text-left"
        />
      ) : (
        <p className="text-left">Loading...</p>
      )}
    </>
  );
}

export default function FrontPageLayout({
  handleButtonClick,
}: FrontPageLayoutProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute left-0 w-1/2 h-screen flex flex-col items-center z-10 md:w-1/2"
    >
      <div className="flex-1 flex flex-col justify-center gap-5 mx-8">
        {/* Welcome Text */}
        <WelcomeText isInView={isInView} />
        <div className="flex flex-row md:flex-col gap-4 pr-20">
          <button
            onClick={handleButtonClick}
            className="bg-white text-black px-4 py-2 rounded-md text-xs font-medium transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg lg:w-full sm:w-full"
          >
            Explore Data Science with our Embeddings Visualiser
          </button>
          <button
            onClick={handleButtonClick}
            className="bg-blue-950 text-white px-4 py-2 rounded-md text-xs font-medium transition-transform transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg lg:w-full sm:w-full"
          >
            Click here to get your free DSCubed Membership
          </button>
        </div>
      </div>
    </div>
  );
}
