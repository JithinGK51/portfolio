import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jithingk831733@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Contact Me
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            <Mail size={14} className="inline mr-2" />
            jithingk831733@gmail.com
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="glass glow-border rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground block mb-2 font-mono">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/20 transition-colors"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground block mb-2 font-mono">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/20 transition-colors"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground block mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/20 transition-colors resize-none"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full glass-hover rounded-xl py-3 text-sm font-medium text-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
