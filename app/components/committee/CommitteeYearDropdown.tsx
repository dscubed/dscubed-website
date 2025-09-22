"use client"

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const years = [
  { year: 2026, href: "/committee-2026" },
  { year: 2025, href: "/committee-2025" },
  { year: 2024, href: "/committee-2024" },
];

export default function CommitteeYearDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        className="flex gap-2 text-m px-4 py-2 rounded-full bg-btn-background hover:bg-btn-background-hover border border-border"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Committee Years
        <ChevronDownIcon className="w-4 h-4 my-auto" />
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-48 bg-background-secondary border border-border rounded-xl z-10">
          {years.map(({ year, href }) => (
            <li key={year}>
              <Link
                href={href}
                className="block px-4 py-2 hover:bg-background rounded-lg"
                onClick={() => setOpen(false)}
              >
                {year} Committee
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
