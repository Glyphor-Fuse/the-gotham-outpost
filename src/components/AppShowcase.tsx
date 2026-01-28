import { motion } from "framer-motion";

export function AppShowcase() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-8 leading-none">
              THE <span className="underline decoration-secondary">STATION</span><br />
              MASTER APP
            </h2>
            <p className="text-xl mb-10 max-w-md">
              Our mobile platform isn't just an app—it's your digital wayfinder. Track shipments across state lines with GPS-integrated ranch maps and real-time transit alerts.
            </p>
            
            <div className="space-y-4">
              {['Live Freight Tracking', 'Hill Country Delivery Routes', 'Bodega Inventory Alerts'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 border-l-4 border-foreground pl-4 py-2">
                  <span className="font-black text-secondary">0{idx + 1}</span>
                  <span className="font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20" />
            <div className="relative border-subway border-foreground bg-white p-4 shadow-[20px_20px_0px_0px_rgba(20,20,20,1)]">
              ///IMG:modern smartphone app interface displaying shipping routes between NYC and Texas|portrait|ui design///
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}