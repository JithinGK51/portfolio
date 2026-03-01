import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const stats = [
  { target: 25, label: "Projects", suffix: "+" },
  { target: 15, label: "Technologies", suffix: "+" },
  { target: 1200, label: "Commits", suffix: "+" },
  { target: 3, label: "Years Learning", suffix: "+" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Milestones
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Achievements
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass glow-border rounded-2xl p-8">
                <AnimatedCounter target={stat.target} label={stat.label} suffix={stat.suffix} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
