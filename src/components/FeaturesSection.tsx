import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Network, Database } from "lucide-react";

const features = [
  {
    title: "Brutalist Core",
    desc: "Uncompromising stability with redundant power grids and reinforced digital shielding.",
    icon: Shield,
    span: "col-span-12 md:col-span-8",
    color: "bg-secondary"
  },
  {
    title: "Thermal Venting",
    desc: "Optimized cooling for high-density compute.",
    icon: Cpu,
    span: "col-span-12 md:col-span-4",
    color: "bg-accent"
  },
  {
    title: "Texan Connectivity",
    desc: "Hyper-local low-latency routing.",
    icon: Network,
    span: "col-span-12 md:col-span-4",
    color: "bg-primary"
  },
  {
    title: "Monolithic Storage",
    desc: "Immutable data layers backed by decentralized state protocols and physical hardware parity.",
    icon: Database,
    span: "col-span-12 md:col-span-8",
    color: "bg-white"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Infrastructure Stack</h2>
          <div className="h-1 w-32 bg-primary" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${f.span} brutalist-card p-8 flex flex-col justify-between min-h-[300px] ${f.color === "bg-white" ? "" : "text-white"}`}
              style={{ backgroundColor: f.color.startsWith('bg-') ? undefined : f.color }}
            >
              <div className={f.color === "bg-white" ? "text-foreground" : "text-white"}>
                <f.icon size={48} strokeWidth={2.5} className="mb-6" />
                <h3 className="text-3xl font-black uppercase mb-4">{f.title}</h3>
                <p className="text-lg font-bold opacity-90">{f.desc}</p>
              </div>
              <div className="mt-8 self-end font-mono text-sm">MODULE_0{i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
