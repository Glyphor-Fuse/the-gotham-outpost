import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WayfindingSection() {
  return (
    <section className="bg-muted text-background">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="p-12 border-r-4 border-background/20 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-7xl font-black opacity-10">01</h3>
            <h4 className="text-3xl font-black mt-[-2rem] mb-4">TRANSFER</h4>
            <p className="font-mono text-sm opacity-60">
              Seamlessly move between design systems without friction. Our wayfinding logic handles the heavy lifting.
            </p>
          </div>
          <motion.a whileHover={{ x: 10 }} href="#" className="flex items-center justify-between border-t-2 border-background/20 pt-4 group">
            <span className="font-bold">VIEW ROUTES</span>
            <ArrowUpRight className="group-hover:text-accent transition-colors" />
          </motion.a>
        </div>

        <div className="p-12 border-r-4 border-background/20 bg-primary/10 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-7xl font-black opacity-10">02</h3>
            <h4 className="text-3xl font-black mt-[-2rem] mb-4">VALIDATE</h4>
            <p className="font-mono text-sm opacity-60">
              Integrated auditing tools ensure every tile is aligned and every border is exactly 4 pixels of pure intent.
            </p>
          </div>
          <motion.a whileHover={{ x: 10 }} href="#" className="flex items-center justify-between border-t-2 border-background/20 pt-4 group">
            <span className="font-bold">RUN AUDIT</span>
            <ArrowUpRight className="group-hover:text-accent transition-colors" />
          </motion.a>
        </div>

        <div className="p-12 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-7xl font-black opacity-10">03</h3>
            <h4 className="text-3xl font-black mt-[-2rem] mb-4">DEPLOY</h4>
            <p className="font-mono text-sm opacity-60">
              Launch across platforms with a single command. The bodega never closes, and neither does your pipeline.
            </p>
          </div>
          <motion.a whileHover={{ x: 10 }} href="#" className="flex items-center justify-between border-t-2 border-background/20 pt-4 group">
            <span className="font-bold">LAUNCH HUB</span>
            <ArrowUpRight className="group-hover:text-accent transition-colors" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
