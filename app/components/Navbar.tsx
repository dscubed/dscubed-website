'use client'
import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Banner from '@/app/components/Banner'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Logo from '@/app/components/Logo'
import { motion } from 'framer-motion'

const ThemeButton = dynamic(
  () => import('@/app/components/ThemeButton'),
  { ssr: false }
)

export default function Navbar ({ className = '', ...rest }: { className?: string }) {
  const [showMenu, setShowMenu] = useState(false)
  // Share the same state across both theme buttons
  const themeState = useState('')

  return (
    // Use top: -1px to remove gap on some browsers
    <div className="sticky top-[-1px] z-20" id="navbar">
      {/* <Banner text="We Are Recruiting For 2024" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" /> */}

      <nav {...rest} className={clsx('relative w-full bg-background-secondary bg-opacity-70 border-b border-border pt-px', className)}>
        <div className="px-5 py-3">
          <div className="relative max-w-screen-xl flex justify-between gap-2 mx-auto">
            {/* Logo */}
            <div className="flex">
              <Link href="/">
                <Logo className="w-9 h-12" />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="flex gap-6 md:hidden">
              <Link className="my-auto text-l text-opacity-50 transition-transform transform hover:scale-110" href="/projects">Projects Initiative</Link>
              <Link className="my-auto text-l text-opacity-50 transition-transform transform hover:scale-110" href="/events">Events</Link>
              <Link className="my-auto text-l text-opacity-50 transition-transform transform hover:scale-110" href="/committee-2025">Committee</Link>
              <Link className="my-auto text-l text-opacity-50 transition-transform transform hover:scale-110" href="/sponsors">Sponsors</Link>
              <Link className="my-auto text-l text-opacity-50 transition-transform transform hover:scale-110" href="/competitions"> Competitions [NEW] </Link>

              <ThemeButton className="transition-transform transform hover:scale-110" showText={false} state={themeState} />
              <div className="block h-1/2 w-0 border-l border-border my-auto"></div>
              
              {/* Discord Icon Button with Framer Motion */}
              <Link
                href="https://discord.gg/fQf2BfnV"
                target="_blank"
                className="my-auto"
              >
                <motion.div
                  className="w-8 h-8"
                  animate={{
                    rotate: [0, 360], // Full rotation
                    scale: [1, 1.5, 1], // Slight scaling effect
                  }}
                  transition={{
                    duration: 1, // Animation duration
                    repeat: Infinity, // Infinite loop
                    repeatDelay: 2, // 2 seconds delay between animations
                  }}
                >
                  <img
                    src="/competitions/discordicon.png"
                    alt="Discord"
                    className="w-8 h-8"
                  />
                </motion.div>
              </Link>

              {/* Membership Button */}
              <Link className="my-auto px-4 py-2 bg-foreground text-background rounded-full transition-transform transform hover:scale-110" href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" target="_blank">Membership</Link>
            </div>

            {/* Mobile menu toggle */}
            <button className="hidden md:block" onClick={() => setShowMenu(showMenu ? false : true)}>
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile links */}
        <div className={clsx("absolute hidden flex-col w-full bg-background-secondary top-full border-t border-border", {
          'md:flex': showMenu,
        })}>
          <Link className="p-4 border-b border-border " href="/projects">Projects Initiative</Link>
          <Link className="p-4 border-b border-border " href="/events">Events</Link>
          <Link className="p-4 border-b border-border " href="/committee-2025">Committee</Link>
          <Link className="p-4 border-b border-border " href="/sponsors">Sponsors</Link>
          <Link
            className="p-4 border-b border-border text-lg font-bold "
            href="/competitions"
          >
            Competitions [NEW]
          </Link>
          <Link className="p-4 border-b border-border " href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" target="_blank">Membership</Link>
          <ThemeButton className="p-4 border-b border-border " state={themeState} />
        </div>
      </nav>
    </div>
  )
}