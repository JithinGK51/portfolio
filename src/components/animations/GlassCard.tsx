import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`glass glow-border ${hover ? "glass-hover" : ""} ${className}`}
      whileHover={hover ? { y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
