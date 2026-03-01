import { lazy, Suspense } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const GithubShowcase = lazy(() => import("@/components/sections/GithubShowcase"));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass glow-border rounded-full px-6 py-2.5 flex gap-6">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
          >
            {item}
          </a>
        ))}
      </nav>

      <Hero />

      <div className="relative z-10 space-y-0">
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={<div className="section-padding text-center text-muted-foreground text-sm">Loading...</div>}>
          <GithubShowcase />
        </Suspense>
        <Achievements />
        <Services />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
