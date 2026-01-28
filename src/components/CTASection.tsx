import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function CTASection() {
  return (
    <section className="relative py-32 bg-primary text-background overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-30">
        <Orb className="top-1/4 right-1/4" />
      </div>

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-[9rem] mb-12">NEXT STOP:<br />THE RANGE</h2>
          <p className="text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Join the 10,000+ urban pioneers bridging the gap between concrete canyons and rolling prairies.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <input 
              type="email" 
              placeholder="YOUR.EMAIL@GOTHAM.OUTPOST"
              className="bg-transparent border-b-4 border-background p-4 text-2xl font-black uppercase placeholder:text-background/40 focus:outline-none focus:border-secondary transition-colors"
            />
            <button className="bg-secondary text-foreground px-12 py-4 text-2xl font-black uppercase border-2 border-foreground shadow-[6px_6px_0px_0px_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Sign On
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}