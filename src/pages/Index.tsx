import { lazy, Suspense, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Menu, X } from "lucide-react";

const GithubShowcase = lazy(() => import("@/components/sections/GithubShowcase"));
const Certificates = lazy(() => import("@/components/sections/Certificates"));

const navItems = ["About", "Skills", "Projects", "GitHub", "Certificates", "Contact"];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass glow-border rounded-full px-4 md:px-6 py-2.5 hidden md:flex items-center gap-3 lg:gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
          >
            {item}
          </a>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="glass glow-border w-10 h-10 rounded-full flex items-center justify-center text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-foreground font-mono uppercase tracking-widest hover:text-muted-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <Hero />

      <div className="relative z-10 space-y-0">
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={<div className="section-padding text-center text-muted-foreground text-sm">Loading...</div>}>
          <GithubShowcase />
        </Suspense>
        <Suspense fallback={<div className="section-padding text-center text-muted-foreground text-sm">Loading...</div>}>
          <Certificates />
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
