import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BannerSection />
        <FeaturesSection />
        <CTASection />
        
        {/* Additional Modular Grid Section for Texan Radiance */}
        <section className="py-24 border-t-2 border-foreground bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 subway-grid">
              <div className="col-span-12 md:col-span-6 subway-cell bg-primary/10">
                <h3 className="text-4xl font-black uppercase mb-4">Tactile Resilience</h3>
                <p className="font-bold text-lg mb-6">Our facilities are built to withstand the harshest Texan summers while maintaining peak operational efficiency.</p>
                ///IMG:industrial concrete texture closeup|landscape|minimalist///
              </div>
              <div className="col-span-12 md:col-span-3 subway-cell flex flex-col justify-center">
                <span className="text-6xl font-black text-accent mb-2">99.9</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Uptime Probability</span>
              </div>
              <div className="col-span-12 md:col-span-3 subway-cell bg-secondary text-white">
                <span className="text-6xl font-black mb-2">100%</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Renewable Powered</span>
              </div>
              <div className="col-span-12 md:col-span-4 subway-cell">
                <h4 className="font-black uppercase mb-2">Secure Handshake</h4>
                <p className="text-sm font-bold opacity-70 italic">Verified by the GOTHAM Security Protocol.</p>
              </div>
              <div className="col-span-12 md:col-span-8 subway-cell overflow-hidden p-0 h-[200px]">
                ///IMG:sunset over austin texas skyline architecture|landscape|warm///
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
