import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-xl w-full brutalist-card p-12 text-center bg-white">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary border-2 border-foreground mb-8">
          <AlertTriangle size={40} className="text-white" />
        </div>
        <h1 className="text-6xl font-black uppercase mb-4 tracking-tighter">404_ERROR</h1>
        <p className="text-xl font-bold mb-8 uppercase text-muted-foreground">
          Sector Not Found. The requested coordinates do not exist in the Outpost grid.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-foreground px-8 py-4 font-black uppercase border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Return to Base
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
