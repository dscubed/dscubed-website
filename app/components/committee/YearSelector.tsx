"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const PAGES = [
  { year: 2024, href: "/committee/2024" },
  { year: 2025, href: "/committee/2025" },
  { year: 2026, href: "/committee/2026" },
];

export function YearSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Extract year from pathname
  const selectedYear = parseInt(pathname.split("/").pop() || "2025", 10);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (year: number) => {
    const selectedPage = PAGES.find((page) => page.year === year);
    if (selectedPage) {
      router.push(selectedPage.href);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-2.5 bg-white/50 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
      >
        {selectedYear}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {PAGES.map((page) => (
            <button
              key={page.year}
              onClick={() => handleSelect(page.year)}
              className={`w-full px-6 py-3 text-left font-medium transition-colors duration-150 ${
                page.year === selectedYear
                  ? "bg-background text-white"
                  : "text-gray-700 hover:bg-gray-100"
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
