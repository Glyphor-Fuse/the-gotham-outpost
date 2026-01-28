import React from "react";
import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function CTASection() {
  return (
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      <Orb className="top-0 right-0 w-96 h-96 opacity-20" />
      <Orb className="bottom-0 left-0 w-64 h-64 bg-secondary opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center border-4 border-primary p-12 md:p-20 bg-foreground/50 backdrop-blur-md">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-7xl font-black uppercase mb-8 leading-none"
          >
            Ready for the <br />
            <span className="text-primary">Outpost Protocol?</span>
          </motion.h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto font-medium">
            Join the coalition of urban pioneers securing the decentralized frontier. Deploy your nodes in the heart of Texas grit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-foreground px-10 py-5 font-black uppercase text-xl border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              Access Terminal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-10 py-5 font-black uppercase text-xl border-2 border-white"
            >
              View Dashboard
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
