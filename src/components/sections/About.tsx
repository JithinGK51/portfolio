import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Scene3D from "@/components/Scene3D";
import { useGithubData } from "@/hooks/useGithubData";

const About = () => {
  const { user } = useGithubData();

  const paragraphs = [
    user.data?.bio || "💻 Full Stack Developer | 🌐 Web & 📱 Mobile Apps | HTML, CSS, JS, PHP, Python, Android",
    "I'm a passionate developer who loves creating innovative solutions and exploring new technologies.",
    "Currently working on web development and mobile app projects. Learning Advanced JavaScript, Node.js, Android development, and Flutter.",
    "I love creating both websites and mobile applications — always learning, always building.",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gradient">
              Building the future,
              <br />
              one line at a time.
            </h2>
          </ScrollReveal>

          <div className="space-y-3 md:space-y-4">
            {paragraphs.map((text, i) => (
              <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                <motion.p
                  className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  whileInView={{ opacity: [0.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  {text}
                </motion.p>
              </ScrollReveal>
            ))}
          </div>

          {/* Current Focus */}
          <ScrollReveal delay={0.6}>
            <div className="mt-6 md:mt-8 glass glow-border rounded-2xl p-4 md:p-6">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-3">Current Focus</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span>🔭</span> Web development & mobile app projects</li>
                <li className="flex items-start gap-2"><span>🌱</span> Advanced JavaScript, Node.js, Android & Flutter</li>
                <li className="flex items-start gap-2"><span>👯</span> Open to collaborations on web & mobile apps</li>
                <li className="flex items-start gap-2"><span>💬</span> Ask me about HTML, CSS, JS, PHP, Python, Android</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" className="hidden lg:block" scale>
          <div className="h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl" />
            <Scene3D className="w-full h-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
