import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ target, label, suffix = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-foreground font-mono">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2 uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
