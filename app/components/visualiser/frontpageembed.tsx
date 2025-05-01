"use client"

import { useState } from 'react';
import FrontPageVisualiser from './FrontPageVisualiser'
import { useEmbeddings } from '@/app/hooks/useEmbeddings';
import vocab from '@/public/visualiser/vocab.json';
import Section from '@/app/components/Section'
import Logo from "../Logo";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const pulseAnimation = {
  animate: {
    opacity: [0.2, 0.9, 0.2],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function FrontPageEmbed() {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = useEmbeddings(words);
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleButtonClick = () => {
    // Zoom to word
    const wordToZoom = "data";
    setSelectedWord(wordToZoom);
    // Wait for zoom then route to visualiser
    setTimeout(() => {
      router.push('/visualiser');
    }, 1000); // 1 second delay to match the zoom animation duration
  };

  if (!embeddings)
    return (
      <section className="relative h-screen">
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
          <div className="relative w-1/2 h-1/2">
            <motion.div
              {...pulseAnimation}
              style={{
                filter: 'blur(16px)',
                position: 'absolute',
                width: '100%',
                height: '100%'
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
    <section className="relative h-screen">
      <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-screen-sm mx-auto h-full">
        {/* Main Visualiser */}
        <FrontPageVisualiser
          vocab={words}
          embeddings={embeddings}
          initialWord={selectedWord}
        />
        {/* Left Section */}
        <div className="absolute left-0 w-1/3 h-screen flex flex-col items-center z-10">
          <div className="flex-1 flex flex-col items-center justify-center gap-5 relative">
            <div className="relative flex flex-col items-center gap-5">
              <h1 className="text-3xl font-bold">
                Welcome to DSCubed!
              </h1>
              <p className="mx-10 text-center">
                The Leading Data Science Club at The University of Melbourne.
              </p>
              <button
                onClick={handleButtonClick}
                className="bg-white text-black px-4 py-2 rounded-md w-1/2 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Go to Embeddings Visualiser
              </button>
            </div>
          </div>
          <div className="flex mb-8 text-center gap-2">
            <p>Scroll to browse </p> <ChevronDoubleDownIcon className="w-6 h-6" />
          </div>
        </div>
        {/* Right Section */}
        <div className="absolute right-0 w-1/3 h-screen flex flex-col items-center z-10">
          <div className="flex-1 flex flex-col items-center justify-center w-full relative">
            <motion.div
              {...pulseAnimation}
              style={{
                filter: 'blur(16px)',
                position: 'absolute',
                width: '60%',
                height: 'auto'
              }}
            >
              <Logo className="w-full h-auto opacity-80" />
            </motion.div>
            <Logo className="w-3/5 h-auto opacity-80 relative" />
          </div>
        </div>
      </div>
    </section>
  )
}