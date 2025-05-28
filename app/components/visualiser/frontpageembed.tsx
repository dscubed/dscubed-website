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
    <div className="relative w-full min-h-svh mt-[-63px] shadow-[0_0_200px_50px_rgba(20,15,30,1)] border-b-2 border-b-[rgb(44,44,54)]">
      {/* Gradient background */}
      <div className="animated-gradient-1 absolute inset-0 w-full h-full opacity-50"></div>

      {/* Noise filter */}
      <div className="noise-filter absolute inset-0 w-full h-full opacity-50 pointer-events-none z-10"></div>
      
      {/* Take up navbar space */}
      <div className="h-[63px]"></div>

      <div className="relative w-full min-h-[calc(100svh-63px)] flex">
        <div className="relative flex-1 px-5 py-40 sm:py-24 my-auto">
          <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-screen-sm mx-auto">
            <div className="grid gap-20 sm:gap-10">
              <div className="flex flex-col gap-10 my-auto max-w-xl lg:max-w-xl">
                <h1 className="text-5xl sm:text-4xl font-medium">
                  <span className="block leading-tight xl:leading-snug">The Leading </span>
                  <span className="block leading-tight xl:leading-snug">Data Science Club at </span>
                  <span className="block leading-tight xl:leading-snug">The University of </span>
                  <span className="block leading-tight xl:leading-snug">Melbourne.</span>
                </h1>
                <p className="text-xl sm:text-lg leading-relaxed">We are committed in our mission to connect and empower data enthusiasts, providing an unparalleled platform for students who are passionate about Data Science.</p>
                <Link 
                  target="_blank"
                  href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
                  className="w-max bg-foreground text-background px-8 py-4 font-medium rounded-full"
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full select-none cursor-pointer">
          <FrontPageVisualiser vocab={words} embeddings={embeddings} />
        </div>
      </div>
    </div>
  )
}
