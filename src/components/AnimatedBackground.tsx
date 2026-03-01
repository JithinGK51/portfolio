import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient mesh */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] bg-foreground"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] bg-foreground"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full opacity-[0.02] blur-[140px] bg-foreground"
      />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-foreground/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
