import ScrollReveal from "@/components/animations/ScrollReveal";
import Scene3D from "@/components/Scene3D";

const About = () => {
  const paragraphs = [
    "I'm a passionate developer who loves building elegant, performant web applications.",
    "With a focus on modern technologies and clean architecture, I create solutions that are both beautiful and functional.",
    "I believe in writing code that tells a story — well-structured, well-tested, and well-documented.",
    "Always learning, always building, always pushing the boundaries of what's possible on the web.",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Building the future,
              <br />
              one line at a time.
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {paragraphs.map((text, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="right" className="hidden lg:block">
          <div className="h-[400px]">
            <Scene3D className="w-full h-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
