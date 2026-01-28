import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full grid-block bg-white text-center"
      >
        <h1 className="text-8xl font-black mb-4 text-muted">404</h1>
        <p className="text-xl text-muted/80 mb-8 font-mono">STATION NOT FOUND</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold hover:translate-x-1 transition-transform"
        >
          <MoveLeft size={20} />
          RETURN TO HUB
        </a>
      </motion.div>
    </div>
  );
}
