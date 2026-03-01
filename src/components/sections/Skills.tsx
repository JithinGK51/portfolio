import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import {
  Code2, Server, Database, Wrench, Globe, Palette,
  FileCode, Terminal, Box, GitBranch, Cloud, Cpu,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "VS Code", "Figma", "AWS"],
  },
];

const stackItems = [
  "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
  "Docker", "AWS", "Tailwind", "Next.js", "Git", "Figma",
  "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
  "Docker", "AWS", "Tailwind", "Next.js", "Git", "Figma",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Skills & Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            My Tech Stack
          </h2>
        </ScrollReveal>

        {/* Auto-scroll row */}
        <div className="overflow-hidden my-12 border-y border-border/30 py-3">
          <div className="flex gap-8 animate-marquee-fast">
            {stackItems.map((item, i) => (
              <span key={i} className="text-xs text-muted-foreground/40 whitespace-nowrap font-mono uppercase tracking-[0.2em]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <GlassCard className="p-6 h-full">
                <cat.icon size={24} className="text-foreground/70 mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/30" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
