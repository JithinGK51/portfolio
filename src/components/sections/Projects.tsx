import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with real-time inventory management, payment processing, and admin dashboard.",
    image: "",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time AI-powered chat application with natural language processing and sentiment analysis.",
    image: "",
    tech: ["Next.js", "Python", "OpenAI", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop, real-time updates, and team workflows.",
    image: "",
    tech: ["React", "TypeScript", "PostgreSQL", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio builder with customizable templates and automatic deployment.",
    image: "",
    tech: ["Next.js", "Tailwind", "Vercel", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <GlassCard
                className="p-0 overflow-hidden cursor-pointer group"
              >
                <div onClick={() => setSelected(project)}>
                  {/* Preview area */}
                  <div className="h-48 bg-accent/30 flex items-center justify-center relative overflow-hidden">
                    <div className="text-5xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent/50 text-muted-foreground font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden border-y border-border/30 py-4">
          <div className="flex gap-12 animate-marquee">
            {[...projects, ...projects].map((p, i) => (
              <span key={i} className="text-sm text-muted-foreground/30 whitespace-nowrap font-mono uppercase tracking-widest">
                {p.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass glow-border max-w-lg w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{selected.title}</h3>
              <p className="text-muted-foreground mb-6">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/50 text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selected.liveUrl && (
                  <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
