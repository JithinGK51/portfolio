import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Zap, Award } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const achievements = [
  {
    title: "ArduinoThon 3.0",
    institution: "SSIT College",
    description: "Won ₹2000 Prize for Rural IoT innovation. Developed an IoT-based solution to address critical challenges in rural farming communities.",
    badge: "₹2000 Prize",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Clone Web App Expo",
    institution: "Vidyavahini First Grade College",
    description: "Recognized as part of the Top 5 Best Developers for creating high-performance, pixel-perfect web application clones.",
    badge: "Top 5",
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Hack For Hire 2026",
    institution: "PES Campus Shivamogga",
    description: "Secured First Prize for exceptional full-stack development skills and rapid prototyping during a 24-hour sprint.",
    badge: "1st Prize",
    icon: Award,
    color: "from-green-400 to-emerald-600",
  },
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-block">
              Achievements
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto uppercase tracking-widest font-mono">
              Recognition and awards earned
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 rounded-full opacity-50" />
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/30">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent/0 via-accent to-accent/0"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {achievements.map((item, index) => (
              <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-accent z-10">
                  <motion.div 
                    className="absolute inset-x-0 inset-y-0 rounded-full bg-accent/40"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left md:text-right'}`}>
                  <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
                    <motion.div 
                      className="glass glow-border p-6 md:p-8 rounded-2xl relative group"
                      whileHover={{ y: -5 }}
                    >
                      {/* Icon */}
                      <div className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                        <item.icon size={24} />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      
                      {item.institution && (
                        <p className="text-muted-foreground text-sm md:text-base font-medium mb-3">
                          {item.institution}
                        </p>
                      )}
                      
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className={`flex ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          {item.badge}
                        </span>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>

                {/* Spacer for the other half */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
