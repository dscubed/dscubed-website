"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cn } from "@/app/lib/utils";

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
          "flex items-center gap-2 px-5 py-3 bg-background font-medium",
          isOpen ? "rounded-t-xl" : "rounded-xl",
        )}
      >
        <span className="font-bold text-white">Year:</span>
        <span className="text-accent font-semibold">{selectedYear}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background rounded-b-xl overflow-hidden shadow-xl z-10 animate-in fade-in zoom-in-95 duration-150">
          {PAGES.map((page) => (
            <button
              key={page.year}
              onClick={() => handleSelect(page.year)}
              className={`w-full py-3 text-center font-semibold transition-colors duration-100 ${
                page.year === selectedYear
                  ? "bg-accent text-white"
                  : "text-accent hover:bg-white/5"
              }`}
            >
              {page.year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
