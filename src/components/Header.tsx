import React from "react";
import { motion } from "framer-motion";
import { Menu, Zap } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center">
            <Zap className="text-foreground fill-current" size={24} />
          </div>
          <span>GOTHAM_OUTPOST</span>
        </div>
        
        <nav className="hidden md:flex gap-8 font-bold uppercase tracking-widest text-sm">
          {["Sectors", "Infrastructure", "Protocol", "Terminal"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
              className="hover:underline underline-offset-4"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-6 py-2 border-2 border-foreground font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          CONNECT_SYSTEM
        </motion.button>
      </div>
    </header>
  );
}
