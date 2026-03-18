import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TypeWriter from "@/components/animations/TypeWriter";
import Scene3D from "@/components/Scene3D";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Instagram, Building2, Users, Download, X } from "lucide-react";
import { useGithubData } from "@/hooks/useGithubData";
import resumeFile from "@/assets/JITHIN_GK_resume (2).pdf";
import { useState } from "react";

const techStack = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "Python",
  "Flutter", "Android", "MongoDB", "PostgreSQL", "Docker", "AWS",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/JithinGK51", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jithin-gk-19671b2a7", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/jithin_gk_wb?igsh=MW5iYTdmdDluc2xkQ==", label: "Instagram" },
];

const Hero = () => {
  const { user } = useGithubData();
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Profile */}
        <ScrollReveal className="order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6">
            <motion.div
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden glow-border"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {user.data?.avatar_url ? (
                <img
                  src={user.data.avatar_url}
                  alt="Jithin GK"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 rounded-full" />
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-3xl md:text-4xl font-bold text-foreground/50">
                    JG
                  </div>
                </>
              )}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-foreground/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
            </motion.div>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glow-border w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <ScrollReveal delay={0.1}>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 md:mb-4 font-mono">
              Developer Portfolio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-4 md:mb-6">
              <span className="text-gradient">Jithin</span>
              <br />
              <span className="text-foreground/60">GK</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 h-7 md:h-8">
              <TypeWriter />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-sm md:text-base text-muted-foreground max-w-md mb-6 md:mb-8 mx-auto lg:mx-0">
              {user.data?.bio || "💻 Full Stack Developer | 🌐 Web & 📱 Mobile Apps | HTML, CSS, JS, PHP, Python, Android"}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start flex-wrap relative">
              <motion.a
                href="#projects"
                className="glass-hover px-4 md:px-6 py-2.5 md:py-3 rounded-xl flex items-center gap-2 text-xs md:text-sm font-medium text-foreground"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={14} />
                View Projects
              </motion.a>
              <motion.a
                href="mailto:jithingk831733@gmail.com"
                className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl border border-border text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={14} />
                Contact Me
              </motion.a>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Resume button clicked, state before:", showResumeOptions);
                    setShowResumeOptions(!showResumeOptions);
                  }}
                  className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl border border-border text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all flex items-center gap-2 bg-transparent cursor-pointer"
                >
                  <Download size={14} />
                  Resume
                </button>

                {showResumeOptions && (
                  <div
                    className="absolute top-full left-0 mt-3 w-52 glass glow-border rounded-xl overflow-hidden z-[100] shadow-2xl flex flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setShowResumeModal(true);
                        setShowResumeOptions(false);
                      }}
                      className="w-full px-4 py-3 text-left text-xs md:text-sm hover:bg-white/10 transition-colors flex items-center gap-2 text-foreground font-medium bg-transparent"
                    >
                      <ExternalLink size={14} className="text-accent" /> Open on Site
                    </button>
                    <a
                      href={resumeFile}
                      download="Jithin_GK_Resume.pdf"
                      onClick={() => setShowResumeOptions(false)}
                      className="w-full px-4 py-3 text-left text-xs md:text-sm hover:bg-white/10 transition-colors border-t border-border/30 flex items-center gap-2 text-foreground font-medium"
                    >
                      <Download size={14} className="text-accent" /> Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Resume Modal - Moved outside stacking context */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl h-[85vh] glass glow-border rounded-2xl overflow-hidden flex flex-col relative"
            >
              <div className="flex justify-between items-center p-4 border-b border-border/30 bg-card/50 ">
                <h3 className="text-sm md:text-base font-mono uppercase tracking-widest">Resume Viewer</h3>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <iframe
                src={`${resumeFile}#toolbar=0`}
                className="w-full h-full border-none"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30 hidden xl:block pointer-events-none">
        <Scene3D className="w-full h-full" />
      </div>

      {/* Tech Stack Strip */}
      <ScrollReveal delay={0.6} className="mt-12 md:mt-16 lg:mt-24">
        <div className="overflow-hidden border-y border-border/50 py-3 md:py-4">
          <div className="flex gap-8 md:gap-12 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-[10px] md:text-sm text-muted-foreground/50 font-mono uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={18} className="text-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
