"use client";

import { motion } from "framer-motion";

export function MotionText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");
  return (
    <h1 className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="inline-block will-change-transform"
        >
          {w}
          {i !== words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
}

export default MotionText;


