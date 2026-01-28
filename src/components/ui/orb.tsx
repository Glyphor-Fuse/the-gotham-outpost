import React from "react";
import { motion } from "framer-motion";

export function Orb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-primary blur-2xl filter ${className}`}
    />
  );
}
