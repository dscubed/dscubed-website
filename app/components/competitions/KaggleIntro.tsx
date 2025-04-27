'use client';

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

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
        <AnimatedText
          text={[
            "Kaggle is the world’s leading platform for data science and machine learning. It hosts real-world datasets, challenges and competitions where individuals and teams build solutions to complex problems. For our flagship competition, we source Kaggle datasets to provide you with practical, industry-relevant experience.",
          ]}
          el="p"
          className="text-xl font-bold leading-relaxed" // Increased font size and bolded text
          once
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

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: Variants; // Updated type
};

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.02, // Reduced duration for faster typing
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: animation.hidden, // Fixed variants structure
          visible: animation.visible, // Fixed variants structure
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};