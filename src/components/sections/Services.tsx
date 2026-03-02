import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import { Code2, Palette, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications with HTML, CSS, JavaScript, PHP, Python, Node.js and modern databases.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native Android apps with Java/Kotlin and cross-platform solutions with Flutter.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and visually stunning interfaces designed with user experience at the core.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Responsive web applications that work seamlessly across all devices and browsers.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15} scale>
              <GlassCard className="p-4 md:p-8 h-full text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-accent/50 mb-4 md:mb-6"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={20} className="text-foreground/70 md:hidden" />
                  <service.icon size={26} className="text-foreground/70 hidden md:block" />
                </motion.div>
                <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-foreground">{service.title}</h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
