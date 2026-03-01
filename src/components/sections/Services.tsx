import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import { Code2, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern frameworks, clean architecture, and scalable infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and visually stunning interfaces designed with user experience at the core.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Progressive web applications that are fast, reliable, and work seamlessly across all devices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Services
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15} scale>
              <GlassCard className="p-8 h-full text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/50 mb-6"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={26} className="text-foreground/70" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
