"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionH2({ children, ...props }: HTMLMotionProps<"h2">) {
  return <motion.h2 {...props}>{children}</motion.h2>;
}
