import { motion } from "framer-motion";
import { Train, Package, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "RAPID DEPLOY",
    description: "Built for speed. Our components drop into your workflow like a midnight subway transfer.",
    icon: Train,
    color: "bg-primary",
  },
  {
    title: "BODEGA TOUGH",
    description: "Battle-tested interfaces that withstand high-traffic environments and extreme edge cases.",
    icon: Package,
    color: "bg-secondary",
  },
  {
    title: "MODULAR GRID",
    description: "Every block is a container. Every container is a promise of utility and brutalist order.",
    icon: Layers,
    color: "bg-accent",
  },
  {
    title: "SYSTEM SECURE",
    description: "Hardened protocols ensuring your data remains as safe as a vault in the central hub.",
    icon: ShieldCheck,
    color: "bg-muted",
  },
];

export function FeaturesSection() {
  return (
    <section className="p-6 md:p-12 lg:p-20 bg-background border-b-4 border-muted">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">System Protocols</h2>
        <div className="h-2 w-48 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, backgroundColor: "rgba(0,0,0,0.02)" }}
            className="grid-block flex flex-col items-start gap-6 group"
          >
            <div className={`${feature.color} p-4 text-white group-hover:rotate-12 transition-transform`}>
              <feature.icon size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter">{feature.title}</h3>
            <p className="text-muted/80 leading-relaxed font-medium">
              {feature.description}
            </p>
            <div className="mt-auto pt-8">
              <span className="text-xs font-mono font-bold text-muted/40 tracking-widest">MODULE-0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
