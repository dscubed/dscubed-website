'use client'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Section from '@/app/components/Section'
import Link from 'next/link'
import FAQListComp from '@/app/components/competitions/FAQ/FAQListComp'
import { motion } from 'framer-motion' // Use named import

export default function FAQSection () {
  return (
    <Section>
      <motion.div
        className="flex flex-col gap-10 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-bold text-[clamp(1.75rem,5vw,3rem)] leading-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.p
            className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mt-2"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about the competition and get the information you need
          </motion.p>
        </div>
        <div className="w-full flex justify-start">
          <FAQListComp />
        </div>
        <div className="flex gap-4 py-8">
          <Link
            className="flex gap-2 text-xl text-theme my-auto"
            href="https://discord.gg/fQf2BfnV"
          >
            <span className="my-auto">Ask questions to the Education team in our Discord server</span>
            <ArrowRightIcon className="w-6 h-6 my-auto" />
          </Link>
        </div>
        <div className="flex gap-4 ">
          <Link
            className="flex gap-2 text-xl text-theme my-auto"
            href="https://linktr.ee/dscubed"
          >
            <span className="my-auto">Linktree</span>
            <ArrowRightIcon className="w-6 h-6 my-auto" />
          </Link>
        </div>
        
      </motion.div>
    </Section>
  )
}
