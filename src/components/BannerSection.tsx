import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { ArrowRight } from "lucide-react";

export function BannerSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-[12rem] leading-none mb-6">
                STREET <span className="text-secondary italic">GRIT</span><br />
                RANCH <span className="text-primary">SOUL</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl font-medium leading-tight mb-8">
                Where Manhattan's neon meet the West Texas sunset. Brutalist supplies for the modern pioneer. We don't just bridge the gap—we pave the subway line from BK to Marfa.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-foreground text-background px-8 py-4 font-black uppercase tracking-tighter text-xl border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all flex items-center gap-2">
                  Shop Provisions <ArrowRight />
                </button>
                <button className="bg-accent text-foreground px-8 py-4 font-black uppercase tracking-tighter text-xl border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] active:shadow-none transition-all">
                  Join The Outpost
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 flex items-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full aspect-square border-subway border-foreground overflow-hidden"
            >
              ///IMG:rugged texan cowboy hat on modern industrial chair|square|cinematic///
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wayfinding line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="h-full w-40 bg-secondary" 
        />
      </div>
    </section>
  );
}