import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WayfindingSection } from "@/components/WayfindingSection";
import { GoldenHourShowcase } from "@/components/GoldenHourShowcase";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen noise-bg">
      <Header />
      <main>
        <BannerSection />
        <WayfindingSection />
        <FeaturesSection />
        <GoldenHourShowcase />
      </main>
      <Footer />
    </div>
  );
}
