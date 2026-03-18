import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Building2, Globe, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Python Full Stack Intern",
    company: "Vidyavahini Degree College",
    location: "Tumkur • 13-Day Intensive Internship",
    description: "Completed an intensive 13-day Python Full Stack internship. Gained hands-on experience in building end-to-end web applications using Python, MySQL, and modern frontend technologies.",
    icon: Building2,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Intern",
    company: "ImpaqX",
    subtext: "Through Drexel University, USA • Spring 2025",
    description: "Developed CRM web application as part of MIS 347: Domestic & Global Information Systems Outsourcing project. Implemented workflow automation, client data management, and CRM features in a collaborative international environment.",
    collaboration: ["USA", "India", "Malaysia"],
    icon: Globe,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-block">
              Experience
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto uppercase tracking-widest font-mono">
              Professional and internship experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 rounded-full opacity-50" />
          </div>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                className={`glass glow-border p-6 md:p-8 rounded-3xl relative overflow-hidden group border-t-2 ${exp.borderColor}`}
                whileHover={{ y: -5 }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border flex items-center justify-center text-accent shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <exp.icon size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.title} — {exp.company}
                        </h3>
                        <p className="text-accent text-xs md:text-sm font-mono mt-1 flex items-center gap-2">
                          {exp.location ? <><MapPin size={12} /> {exp.location}</> : <><Calendar size={12} /> {exp.subtext}</>}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {exp.collaboration && (
                      <div className="pt-6 border-t border-border/30">
                        <div className="flex items-center gap-2 mb-4 text-xs md:text-sm font-bold text-foreground/80 uppercase tracking-widest">
                          <Globe size={14} className="text-accent" />
                          International Collaboration
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.collaboration.map((country) => (
                            <span 
                              key={country}
                              className="px-4 py-1.5 rounded-xl bg-accent/5 border border-accent/10 text-accent text-[10px] md:text-xs font-mono"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
