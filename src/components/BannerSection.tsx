import React from "react";
import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { ArrowRight, Drill } from "lucide-react";

export function BannerSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b-2 border-foreground">
      <LiquidEther />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-0 border-2 border-foreground bg-white/80 backdrop-blur-sm">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="col-span-12 lg:col-span-7 p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-foreground flex flex-col justify-center"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
              Urban <span className="text-primary italic">Grit</span> <br />
              Texan <span className="text-secondary">Radiance</span>
            </h1>
            <p className="text-xl font-medium max-w-xl mb-8 border-l-4 border-accent pl-4">
              Where concrete brutalism meets the warmth of the prairie. High-performance infrastructure for the next generation of industrial digitalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary px-8 py-4 border-2 border-foreground font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-colors">
                Initialize Sequence
              </button>
              <button className="bg-white px-8 py-4 border-2 border-foreground font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-primary transition-colors flex items-center gap-2">
                Whitepaper <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="col-span-12 lg:col-span-5 bg-muted/20 relative min-h-[400px]"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full h-full border-2 border-foreground relative overflow-hidden group">
                ///IMG:brutalist architecture concrete building austin texas|portrait|editorial///
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-4 right-4 bg-foreground text-white p-4 font-mono text-xs">
                  COORDINATES: 30.2672° N, 97.7431° W
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
