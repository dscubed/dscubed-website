"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const PAGES = [
  { year: 2026, href: "/committee/2026" },
  { year: 2025, href: "/committee/2025" },
  { year: 2024, href: "/committee/2024" },
];

export function YearSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const selectedYear = parseInt(pathname.split("/").pop() || "2025", 10);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (year: number) => {
    const page = PAGES.find((p) => p.year === year);
    if (page) router.push(page.href);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-fit">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-3 sm:gap-2 px-4 py-3 sm:px-2 sm:py-1.5 bg-background font-semibold text-xl sm:text-base",
          isOpen ? "rounded-t-lg" : "rounded-lg",
        )}
      >
        <span className="text-white tracking-wide">Year:</span>
        <span className="text-accent">{selectedYear}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="w-4 h-4 text-accent" />
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-background rounded-b-xl overflow-hidden shadow-xl z-10"
          >
            {PAGES.map((page, index) => (
              <motion.button
                key={page.year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSelect(page.year)}
                className={`w-full py-2 sm:py-1.5 text-center text-lg sm:text-base font-semibold transition-colors duration-100 ${
                  page.year === selectedYear
                    ? "bg-accent text-white"
                    : "text-accent hover:bg-white/5"
                }`}
              >
                {page.year}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
