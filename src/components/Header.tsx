import { motion } from "framer-motion";
import { Menu, Map as MapIcon, ShoppingBag, Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b-4 border-muted">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <div className="flex items-center gap-4">
          <div className="bg-primary p-2">
            <Terminal className="text-white" size={24} />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">METRO & MESA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">TERMINAL</a>
          <a href="#" className="hover:text-primary transition-colors">WAYFINDING</a>
          <a href="#" className="hover:text-primary transition-colors">BODEGA</a>
          <a href="#" className="bg-muted text-background px-4 py-2 hover:bg-primary transition-colors">CONNECT</a>
        </nav>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
