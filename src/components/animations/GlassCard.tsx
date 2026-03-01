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
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
