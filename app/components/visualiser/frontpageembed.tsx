"use client"

import { useState } from 'react';
import FrontPageVisualiser from './FrontPageVisualiser'
import { useEmbeddings } from '@/app/hooks/useEmbeddings';
import vocab from '@/public/visualiser/vocab.json';
import Section from '@/app/components/Section'
import GlowingLogo, { pulseAnimation } from './GlowingLogo';
import Logo from "../Logo";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import FrontPageLayout from './FrontPageLayout';

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
                filter: 'blur(18px)',
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

  // Define the background color for the gradient
  const backgroundColor = '#0d1117';

  return (
    <section className="relative h-screen">
      <div className="absolute top-0 right-0 w-full mt-4 mr-4 text-xs text-gray-400 z-50 flex flex-col items-center gap-5">
        {/* Disclaimer Text*/}
        <p className="text-right w-full">
          Disclaimer: This is our first prototype and may contain issues or bugs.
        </p>
        {/* Logo container for XS screens*/}
        <div className="hidden xs:flex relative w-1/3 items-center justify-center">
          <GlowingLogo />
        </div>
      </div>

      <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-screen-sm mx-auto h-full">
        {/* Main Visualiser */}
        <FrontPageVisualiser
          vocab={words}
          embeddings={embeddings}
          initialWord={selectedWord}
        />

        {/* Layout */}
        <div className='xs:hidden'>
          <FrontPageLayout handleButtonClick={handleButtonClick} />
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 w-screen flex flex-col items-center justify-center mb-4 text-center gap-10 z-20">
          {/* Content for XS and lower */}
          <div className="hidden xs:flex flex-col items-center w-full">
            <h1 className="text-3xl font-bold mt-4">
              Welcome to DSCubed!
            </h1>
            <p className="mt-2">
              Empowering Future Data Scientists and Data Enthusiasts
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-white text-black px-4 py-2 rounded-md w-3/4 mt-4 text-sm font-medium hover:bg-gray-100 animate transition-colors"
            >
              Explore Data Science with our Embeddings Visualiser
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
              ease: "easeInOut"
            }}
            className="flex items-center gap-2"
          >
            <p>Scroll to browse </p> <ChevronDoubleDownIcon className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}