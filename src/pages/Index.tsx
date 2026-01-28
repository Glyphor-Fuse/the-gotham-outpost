import { Header } from "../components/Header";
import { BannerSection } from "../components/BannerSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { AppShowcase } from "../components/AppShowcase";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="relative min-h-screen selection:bg-secondary selection:text-white">
      <div className="texture-grain fixed inset-0 z-50 overflow-hidden" />
      
      <Header />
      
      <main className="pt-20">
        <BannerSection />
        
        <div className="border-y-subway border-foreground">
          <FeaturesSection />
        </div>
        
        <AppShowcase />
        
        <div className="border-t-subway border-foreground">
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}