import React from "react";
import { motion } from "framer-motion";

export function LiquidEther() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [0, 50, 0, -50, 0],
          y: [0, -50, 0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-secondary/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0],
          x: [0, -30, 0, 30, 0],
          y: [0, 40, 0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent blur-3xl"
      />
    </div>
  );
}
