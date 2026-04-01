"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FrontPageVisualiser from "./FrontPageVisualiser";
import vocab from "@/public/visualiser/front.json";
import Link from "next/link";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  };
}

export default function FrontPageEmbed() {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = null;

  return (
    <div className="relative w-full shadow-[0_100px_100px_-50px_rgba(35,40,80,1)] border-b-2 border-b-[rgb(57,64,90)]">
      {/* Background color */}
      <div className="absolute inset-0 w-full h-full bg-[#12121d]"></div>

      <div className="relative w-full flex flex-col min-h-[calc(100svh-63px)] lg:min-h-max lg:h-[calc(63px+96px*2+450px+450px)] sm:h-[calc(63px+96px*2+450px+350px)] xs:h-[calc(63px+96px*2+450px+300px)]">
        <div className="z-10 relative px-5 py-20 lg:py-24 lg:pb-8 my-auto lg:my-0 pointer-events-none">
          <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-125 mx-auto">
            <div className="grid gap-20 sm:gap-10">
              <div className="flex flex-col gap-10 my-auto max-w-xl">
                <h1 className="text-5xl xs:text-4xl font-medium">
                  <motion.span
                    className="block leading-tight xl:leading-snug"
                    {...fadeUp(0.1)}
                  >
                    The Leading{" "}
                  </motion.span>
                  <motion.span
                    className="block leading-tight xl:leading-snug"
                    {...fadeUp(0.25)}
                  >
                    Data Science Club at{" "}
                  </motion.span>
                  <motion.span
                    className="block leading-tight xl:leading-snug"
                    {...fadeUp(0.4)}
                  >
                    The University of{" "}
                  </motion.span>
                  <motion.span
                    className="block leading-tight xl:leading-snug"
                    {...fadeUp(0.55)}
                  >
                    Melbourne.
                  </motion.span>
                </h1>
                <motion.p
                  className="text-xl xs:text-lg leading-relaxed"
                  {...fadeUp(0.75)}
                >
                  We are committed in our mission to connect and empower data
                  enthusiasts, providing an unparalleled platform for students
                  who are passionate about Data Science.
                </motion.p>
                <motion.div {...fadeUp(0.9)}>
                  <Link
                    target="_blank"
                    href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
                    className="w-max bg-foreground text-background px-6 py-3.5 font-medium rounded-full pointer-events-auto"
                  >
                    Get Membership
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full cursor-pointer lg:cursor-default">
          <FrontPageVisualiser vocab={words} embeddings={embeddings} />
        </div>
      </div>
    </div>
  );
}
