import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import { Code2, Server, Database, Wrench, Smartphone, Rocket } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PHP", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Android", "Java", "Kotlin", "Flutter"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Linux"],
  },
  {
    title: "Other",
    icon: Rocket,
    skills: ["JSON", "AJAX", "REST API", "Responsive Design"],
  },
];

const stackItems = [
  "HTML5", "CSS3", "JavaScript", "PHP", "Python", "Node.js",
  "Android", "Java", "Kotlin", "Flutter", "MySQL", "MongoDB",
  "HTML5", "CSS3", "JavaScript", "PHP", "Python", "Node.js",
  "Android", "Java", "Kotlin", "Flutter", "MySQL", "MongoDB",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Skills & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            My Tech Stack
          </h2>
        </ScrollReveal>

        {/* Auto-scroll row */}
        <div className="overflow-hidden my-8 md:my-12 border-y border-border/30 py-3">
          <div className="flex gap-6 md:gap-8 animate-marquee-fast">
            {stackItems.map((item, i) => (
              <span key={i} className="text-[10px] md:text-xs text-muted-foreground/40 whitespace-nowrap font-mono uppercase tracking-[0.2em]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <GlassCard className="p-4 md:p-6 h-full">
                <cat.icon size={20} className="text-foreground/70 mb-3 md:mb-4" />
                <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-foreground">{cat.title}</h3>
                <ul className="space-y-1 md:space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-[11px] md:text-sm text-muted-foreground flex items-center gap-1.5 md:gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
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
