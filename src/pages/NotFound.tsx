import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 className="text-[12rem] text-foreground leading-none">404</h1>
        <div className="bg-primary text-background p-4 mb-8 font-black text-2xl uppercase">
          Track Termination: End of Line
        </div>
        <p className="text-xl mb-8 max-w-md mx-auto">
          You've reached a dead end on the Gotham-Texas line. Please return to the nearest transfer station.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-secondary text-foreground px-12 py-4 text-2xl font-black uppercase border-subway border-foreground shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] hover:shadow-none transition-all"
        >
          Back to Base
        </Link>
      </motion.div>
    </div>
  );
}