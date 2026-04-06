/** Customizable grid layout for featured cards (used for execs and directors)
 * Accepts a column config that maps screen sizes to number of columns, and
 * uses pre-computed Tailwind classes to set item widths accordingly.
 */

import { useInView } from "framer-motion";
import { useRef } from "react";
import { GroupHeading } from "./GroupHeading";
import FeaturedCard from "./FeaturedCard";
import { motion } from "framer-motion";

export interface CardGridLayout {
  columns: { default: number; lg?: number; md?: number; sm?: number };
  gap?: number; // px, default 12
}

/**
 * Pre-computed Tailwind width classes for each (gap, columns) combination.
 * Width formula: calc((100% - gap * (cols - 1)) / cols)
 *
 * Every string literal here is visible to Tailwind's build-time scanner,
 * so all classes are compiled even though they're looked up dynamically.
 */
function getWidthClasses(gap: number): Record<number, string> {
  // Only gap=12 is used today. Add more blocks if needed.
  // gap=12
  return {
    1: "w-full",
    2: `w-[calc((100%-${gap * 1}px)/2)]`,
    3: `w-[calc((100%-${gap * 2}px)/3)]`,
    4: `w-[calc((100%-${gap * 3}px)/4)]`,
    5: `w-[calc((100%-${gap * 4}px)/5)]`,
    6: `w-[calc((100%-${gap * 5}px)/6)]`,
  };
}

// Static class strings for Tailwind to scan at build time (gap=12)
// prettier-ignore
const WIDTHS = {
  default: {
    1: "w-full",
    2: "w-[calc((100%-12px)/2)]",
    3: "w-[calc((100%-24px)/3)]",
    4: "w-[calc((100%-36px)/4)]",
    5: "w-[calc((100%-48px)/5)]",
    6: "w-[calc((100%-60px)/6)]",
  },
  lg: {
    1: "lg:w-full",
    2: "lg:w-[calc((100%-12px)/2)]",
    3: "lg:w-[calc((100%-24px)/3)]",
    4: "lg:w-[calc((100%-36px)/4)]",
    5: "lg:w-[calc((100%-48px)/5)]",
    6: "lg:w-[calc((100%-60px)/6)]",
  },
  md: {
    1: "md:w-full",
    2: "md:w-[calc((100%-12px)/2)]",
    3: "md:w-[calc((100%-24px)/3)]",
    4: "md:w-[calc((100%-36px)/4)]",
    5: "md:w-[calc((100%-48px)/5)]",
    6: "md:w-[calc((100%-60px)/6)]",
  },
  sm: {
    1: "sm:w-full",
    2: "sm:w-[calc((100%-12px)/2)]",
    3: "sm:w-[calc((100%-24px)/3)]",
    4: "sm:w-[calc((100%-36px)/4)]",
    5: "sm:w-[calc((100%-48px)/5)]",
    6: "sm:w-[calc((100%-60px)/6)]",
  },
} as const;

/**
 * Converts a column config into Tailwind width classes.
 * Uses pre-computed lookup for gap=12, falls back to runtime calc for custom gaps.
 */
function getItemWidthClass(layout: CardGridLayout): string {
  const gap = layout.gap ?? 12;
  const { columns } = layout;

  if (gap === 12) {
    // Use static lookup (Tailwind-scannable)
    const classes: string[] = [
      WIDTHS.default[columns.default as keyof typeof WIDTHS.default],
    ];
    if (columns.lg != null)
      classes.push(WIDTHS.lg[columns.lg as keyof typeof WIDTHS.lg]);
    if (columns.md != null)
      classes.push(WIDTHS.md[columns.md as keyof typeof WIDTHS.md]);
    if (columns.sm != null)
      classes.push(WIDTHS.sm[columns.sm as keyof typeof WIDTHS.sm]);
    return classes.join(" ");
  }

  // Custom gap — build class strings dynamically (works in dev JIT, but add to safelist for production if needed)
  const w = getWidthClasses(gap);
  return w[columns.default]; // responsive not supported for custom gap
}

// ------------------------------------------------------------------
// Card Grid Component
// ------------------------------------------------------------------

export function FeaturedCardGrid({
  title,
  subtitle,
  items,
  layout,
}: {
  title: string;
  subtitle?: string;
  items: { name: string; role: string; image?: string; filter?: string }[];
  layout: CardGridLayout;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const gap = layout.gap ?? 12;
  const widthClass = getItemWidthClass(layout);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <GroupHeading title={title} subtitle={subtitle} />
      <div
        className="flex flex-wrap justify-center"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.1 + index * 0.08,
              ease: "easeOut",
            }}
            className={widthClass}
          >
            <FeaturedCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
