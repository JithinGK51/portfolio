import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Let's Work
            <br />
            Together
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? Drop me an email and let's create something amazing.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="glass glow-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Animated border beam */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <Sparkles size={20} className="text-muted-foreground/40 mx-auto mb-6" />

            <p className="text-sm text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Email me at
            </p>

            <a
              href="mailto:jithingk831733@gmail.com"
              className="text-xl md:text-2xl font-semibold text-foreground hover:text-foreground/80 transition-colors inline-block mb-8"
            >
              jithingk831733@gmail.com
            </a>

            <div>
              <motion.a
                href="mailto:jithingk831733@gmail.com"
                className="inline-flex items-center gap-3 glass-hover rounded-xl px-8 py-4 text-sm font-medium text-foreground group"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Send Me an Email
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
