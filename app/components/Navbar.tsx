"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/app/components/Logo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import Image from "next/image";

export default function Navbar({
  className = "",
  ...rest
}: {
  className?: string;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [blurNav, setBlurNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function toggleBlurNav() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // On home page, only blur if starting to scroll
      setBlurNav(pathname !== "/" || scrollTop > 30);
    }

    toggleBlurNav();

    window.addEventListener("scroll", toggleBlurNav);
    return () => window.removeEventListener("scroll", toggleBlurNav);
  }, [pathname]);

  return (
    // Use top: -1px to remove gap on some browsers
    <div className="sticky -top-px z-20" id="navbar">
      {/* <Banner text="We Are Recruiting For 2024" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" /> */}

      <nav
        {...rest}
        className={cn(
          "relative w-full pt-px backdrop-blur-lg duration-500 transition-all",
          blurNav ? "bg-background-secondary/70" : "bg-transparent",
          className,
        )}
      >
        <div className="px-5 py-3">
          <div className="relative max-w-screen-xl flex justify-between gap-3 mx-auto">
            {/* Logo */}
            <div className="flex">
              <Link href="/">
                <Logo className="w-9 h-12" />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="flex gap-6 lg:hidden">
              {/* <ThemeButton showText={false} state={themeState} /> */}
              {/* Discord Icon Button with Framer Motion */}
              <Link
                href="https://discord.gg/Q3gZcPQV63"
                target="_blank"
                className="my-auto"
              >
                <motion.div
                  className="w-6 h-6"
                  animate={{
                    rotate: [0, 360], // Full rotation
                    scale: [1, 1.1, 1], // Slight scaling effect
                  }}
                  transition={{
                    duration: 1, // Animation duration
                    repeat: Infinity, // Infinite loop
                    repeatDelay: 2, // 2 seconds delay between animations
                  }}
                >
                  <Image
                    src="/competitions/discordicon.png"
                    alt="Discord"
                    width={24}
                    height={24}
                    className="w-6 h-6 saturate-0 brightness-200 contrast-150"
                    priority={false}
                  />
                </motion.div>
              </Link>
              <div className="block h-1/2 w-0 border-l-2 border-black/10 dark:border-white/10 my-auto"></div>
              <Link className="my-auto" href="/events">
                Events
              </Link>
              <Link className="my-auto" href="/committee-2025">
                Committee
              </Link>
              <Link className="my-auto" href="/competitions">
                Competition
              </Link>
              <Link className="my-auto" href="/projects">
                Projects
              </Link>
              <Link className="my-auto" href="/visualiser">
                Visualiser
              </Link>
              <Link className="my-auto" href="/sponsors">
                Sponsors
              </Link>
              <Link
                className="my-auto px-4 py-2 bg-foreground text-background rounded-full"
                href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
                target="_blank"
              >
                Membership
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="hidden lg:block"
              onClick={() => setShowMenu(showMenu ? false : true)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile links */}
        <div
          className={clsx(
            "absolute hidden flex-col w-full bg-background-secondary top-full border-t border-border",
            {
              "lg:flex": showMenu,
            },
          )}
        >
          <Link
            className="p-4 border-b border-border flex items-center gap-4"
            href="/events"
          >
            <span>Discord</span>
            <motion.div
              className="w-6 h-6"
              animate={{
                rotate: [0, 360], // Full rotation
                scale: [1, 1.1, 1], // Slight scaling effect
              }}
              transition={{
                duration: 1, // Animation duration
                repeat: Infinity, // Infinite loop
                repeatDelay: 2, // 2 seconds delay between animations
              }}
            >
              <Image
                src="/competitions/discordicon.png"
                alt="Discord"
                width={24}
                height={24}
                className="w-6 h-6 saturate-0 brightness-200 contrast-150"
                priority={false}
              />
            </motion.div>
          </Link>
          <Link className="p-4 border-b border-border" href="/events">
            Events
          </Link>
          <Link className="p-4 border-b border-border" href="/committee-2025">
            Committee
          </Link>
          <Link className="p-4 border-b border-border" href="/competitions">
            Competition
          </Link>
          <Link className="p-4 border-b border-border" href="/projects">
            Projects
          </Link>
          <Link className="p-4 border-b border-border" href="/visualiser">
            Visualiser
          </Link>
          <Link className="p-4 border-b border-border" href="/sponsors">
            Sponsors
          </Link>
          <Link
            className="p-4 border-b border-border"
            href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/"
            target="_blank"
          >
            Membership
          </Link>
          {/* <ThemeButton className="p-4 border-b-2 border-border" state={themeState} /> */}
        </div>
      </nav>
    </div>
  );
}
