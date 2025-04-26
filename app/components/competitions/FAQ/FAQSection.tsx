import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Section from '@/app/components/Section'
import Link from 'next/link'
import FAQListComp from '@/app/components/competitions/FAQ/FAQListComp'

export default function FAQSection () {
  return (
    <Section>
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-5xl sm:text-4xl text-center !leading-tight font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQListComp />
        <div className="flex gap-4 py-8">
          <Link className="flex gap-2 text-xl text-theme my-auto" href="mailto:hello@dscubed.org.au">
            <span className="my-auto">Get In Touch</span>
            <ArrowRightIcon className="w-6 h-6 my-auto" />
          </Link>
        </div>
      </div>
    </Section>
  )
}