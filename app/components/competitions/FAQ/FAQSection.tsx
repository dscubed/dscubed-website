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
        <h2 className="text-5xl sm:text-4xl text-center !leading-tight font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="w-full flex justify-start">
          <FAQListComp />
        </div>
        <div className="flex gap-4 py-8">
          <Link
            className="flex gap-2 text-xl text-theme my-auto"
            href="mailto:hello@dscubed.org.au"
          >
            <span className="my-auto">Get In Touch</span>
            <ArrowRightIcon className="w-6 h-6 my-auto" />
          </Link>
        </div>
      </motion.div>
    </Section>
  )
}
