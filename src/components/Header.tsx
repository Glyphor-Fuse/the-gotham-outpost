import { motion } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background border-b-subway border-foreground">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-20">
        <div className="flex items-center gap-4">
          <div className="bg-foreground text-background p-2 font-black text-2xl wayfinding">
            G.O
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-bold uppercase tracking-widest">The Gotham Outpost</p>
            <p className="text-[10px] opacity-60 flex items-center gap-1">
              <MapPin size={10} /> 40.7128° N, 74.0060° W → 30.2672° N, 97.7431° W
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center font-bold uppercase text-sm tracking-tight">
          <a href="#" className="hover:text-primary transition-colors">Provisions</a>
          <a href="#" className="hover:text-primary transition-colors">The Range</a>
          <a href="#" className="hover:text-primary transition-colors">Manifesto</a>
          <button className="bg-secondary text-foreground px-6 py-2 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
            Order Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-background border-b-subway border-foreground p-6 flex flex-col gap-4 font-black uppercase text-2xl"
        >
          <a href="#">Provisions</a>
          <a href="#">The Range</a>
          <a href="#">Manifesto</a>
        </motion.div>
      )}
    </nav>
  );
}