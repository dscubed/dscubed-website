'use client'

import React from 'react'
import ScrollUp from 'react-scroll-up'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollUpButton() {
  return (
    <ScrollUp showUnder={200}>
        <div>
            <button
            className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all z-50"
            aria-label="Scroll to top"
         >
             <ArrowUpIcon className="w-5 h-5" />
             <span>Scroll Up</span>
            </button>
        </div>
    </ScrollUp>
  )
}