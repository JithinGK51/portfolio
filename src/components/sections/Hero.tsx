import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TypeWriter from "@/components/animations/TypeWriter";
import Scene3D from "@/components/Scene3D";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Instagram } from "lucide-react";

const techStack = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "MongoDB",
  "PostgreSQL", "Python", "Docker", "AWS", "Git", "Figma",
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "MongoDB",
  "PostgreSQL", "Python", "Docker", "AWS", "Git", "Figma",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/JithinGK51", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jithin-gk-19671b2a7", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/jithin_gk_wb?igsh=MW5iYTdmdDluc2xkYQ==", label: "Instagram" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Profile */}
        <ScrollReveal className="order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <motion.div
              className="relative w-36 h-36 rounded-full overflow-hidden glow-border"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 rounded-full" />
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-foreground/50">
                JG
              </div>
            </motion.div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glow-border w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <ScrollReveal delay={0.1}>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono">
              Developer Portfolio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
              <span className="text-gradient">Jithin</span>
              <br />
              <span className="text-foreground/60">GK</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-lg md:text-xl mb-6 h-8">
              <TypeWriter />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground max-w-md mb-8 mx-auto lg:mx-0">
              Crafting digital experiences with clean code, modern design, and a passion for innovation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                className="glass-hover px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-medium text-foreground"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                View Projects
              </motion.a>
              <motion.a
                href="mailto:jithingk831733@gmail.com"
                className="px-6 py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Contact Me
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3D Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30 hidden xl:block pointer-events-none">
        <Scene3D className="w-full h-full" />
      </div>

      {/* Marquee Tech Stack */}
      <ScrollReveal delay={0.6} className="mt-16 md:mt-24">
        <div className="overflow-hidden border-y border-border/50 py-4">
          <div className="marquee">
            {techStack.map((tech, i) => (
              <span key={i} className="text-sm text-muted-foreground/50 whitespace-nowrap font-mono uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
