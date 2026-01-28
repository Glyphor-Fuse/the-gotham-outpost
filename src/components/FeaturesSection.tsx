import { motion } from "framer-motion";
import { Package, Truck, Compass, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Package className="w-12 h-12" />,
    title: "Bodega Fresh",
    desc: "24/7 access to hand-selected provisions sourced from local Hudson Valley and Hill Country artisans."
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "The Express Line",
    desc: "Standard transit times don't exist here. Direct freight delivery from the heart of Gotham to the Texas range."
  },
  {
    icon: <Compass className="w-12 h-12" />,
    title: "Urban Frontier",
    desc: "Gear designed for the high-rise and the high-desert. Tactical aesthetic with sun-drenched durability."
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Ranch Bonded",
    desc: "Every item is stress-tested against Brooklyn humidity and Marfa heat. Only the toughest survive."
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-12 border-foreground md:border-r-subway border-b-subway lg:border-b-0 last:border-r-0 flex flex-col gap-6 hover:bg-foreground hover:text-background transition-colors group cursor-default`}
          >
            <div className="text-primary group-hover:text-secondary transition-colors">
              {f.icon}
            </div>
            <h3 className="text-4xl">{f.title}</h3>
            <p className="font-medium opacity-80">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}