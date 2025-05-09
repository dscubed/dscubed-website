"use client"

import { useState } from 'react';
import FrontPageVisualiser from './FrontPageVisualiser'
import { useEmbeddings } from '@/app/hooks/useEmbeddings';
import vocab from '@/public/visualiser/front.json';
import Section from '@/app/components/Section'
import GlowingLogo, { pulseAnimation } from './GlowingLogo';
import Logo from "../Logo";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import FrontPageLayout from './FrontPageLayout';
import Link from 'next/link';
import Image from 'next/image';

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
      <section className="absolute h-screen">
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

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-screen-sm mx-auto h-full overflow-hidden">
        <FrontPageVisualiser
          vocab={words}
          embeddings={embeddings}
          initialWord={selectedWord}
        />
      </div>
    </section>
  )
}