"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { useHomeLoader } from "./HomeLoaderContext";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

export function MotionDiv({ children, whileInView, ...props }: MotionDivProps) {
  const { isFullyRevealed } = useHomeLoader();

  return (
    <motion.div
      {...props}
      whileInView={isFullyRevealed ? whileInView : undefined}
    >
      {children}
    </motion.div>
  );
}

export function MotionH2({
  children,
  whileInView,
  ...props
}: HTMLMotionProps<"h2">) {
  const { isFullyRevealed } = useHomeLoader();

  return (
    <motion.h2
      {...props}
      whileInView={isFullyRevealed ? whileInView : undefined}
    >
      {children}
    </motion.h2>
  );
}

export function MotionH3({
  children,
  whileInView,
  ...props
}: HTMLMotionProps<"h3">) {
  const { isFullyRevealed } = useHomeLoader();

  return (
    <motion.h3
      {...props}
      whileInView={isFullyRevealed ? whileInView : undefined}
    >
      {children}
    </motion.h3>
  );
}
