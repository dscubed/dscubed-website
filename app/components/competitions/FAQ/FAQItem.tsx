'use client'
import { PlusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TypeAnimation } from 'react-type-animation'

// Dynamically import motion to avoid "use client" issues
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

export default function FAQItem ({
  question,
  answer
}: {
  question: string,
  answer: string
}) {
  const [showAnswer, toggleAnswer] = useState(false)

  return (
    <MotionDiv
      className="w-full border-border py-6 transition-all cursor-pointer overflow-hidden"
      onClick={() => toggleAnswer(!showAnswer)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="grid grid-cols-[max-content,1fr] gap-x-4 max-w-screen-xl mx-auto">
        <PlusIcon
          className={`w-7 h-[calc(1.25rem*1.625)] text-text-secondary transition-all ${
            showAnswer ? 'rotate-45' : 'rotate-0'
          }`}
        />
        <h3 className="text-xl leading-relaxed my-auto">{question}</h3>
        <div
          className={`transition-all duration-300 text-xl sm:text-lg text-text-secondary !leading-relaxed col-start-2 ${
            showAnswer ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {showAnswer && (
            <TypeAnimation
              sequence={[answer]}
              speed={90} // Typing speed
              wrapper="span"
              cursor={true}
              className="block pt-4"
            />
          )}
        </div>
      </div>
    </MotionDiv>
  )
}