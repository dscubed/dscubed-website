"use client";

import { useState } from "react";
import FrontPageVisualiser from "./FrontPageVisualiser";
// import { useEmbeddings } from "@/app/hooks/useEmbeddings";
import vocab from "@/public/visualiser/front.json";
import { useRouter } from "next/navigation";
import Link from 'next/link'

export default function FrontPageEmbed() {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = null;
  // const embeddings = useEmbeddings(words);
  const router = useRouter();

  // router.push("/visualiser");

  return (
    <div className="relative w-full mt-[-63px] shadow-[0_100px_100px_-50px_rgba(35,40,80,1)] border-b-2 border-b-[rgb(57,64,90)]">
      {/* Gradient background */}
      <div className="animated-gradient-1 absolute inset-0 w-full h-full opacity-50"></div>

      {/* Noise filter */}
      <div className="noise-filter absolute inset-0 w-full h-full opacity-50 pointer-events-none z-20"></div>
      
      {/* Take up navbar space */}
      <div className="h-[63px]"></div>

      {/* sm:h-[calc(63px+96px*2+450px+200px)] xs:h-[calc(63px+96px*2+450px+200px)] */}
      <div className="relative w-full flex flex-col min-h-[calc(100svh-63px)] lg:min-h-max lg:h-[calc(63px+96px*2+450px+450px)] sm:h-[calc(63px+96px*2+450px+350px)] xs:h-[calc(63px+96px*2+450px+300px)]">
        <div className="z-10 relative px-5 py-40 lg:py-24 lg:pb-8 my-auto lg:my-0 pointer-events-none">
          <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-[500px] mx-auto">
            <div className="grid gap-20 sm:gap-10">
              <div className="flex flex-col gap-10 my-auto max-w-xl">
                <h1 className="text-5xl xs:text-4xl font-medium">
                  <span className="block leading-tight xl:leading-snug">The Leading </span>
                  <span className="block leading-tight xl:leading-snug">Data Science Club at </span>
                  <span className="block leading-tight xl:leading-snug">The University of </span>
                  <span className="block leading-tight xl:leading-snug">Melbourne.</span>
                </h1>
                <p className="text-xl xs:text-lg leading-relaxed">We are committed in our mission to connect and empower data enthusiasts, providing an unparalleled platform for students who are passionate about Data Science.</p>
                <Link 
                  target="_blank"
                  href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
                  className="w-max bg-foreground text-background px-8 py-4 font-medium rounded-full pointer-events-auto"
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full cursor-pointer lg:cursor-default">
          <FrontPageVisualiser vocab={words} embeddings={embeddings} />
        </div>
      </div>
    </div>
  )
}
