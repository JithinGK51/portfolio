import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Zap, Award, Calendar, Briefcase, Code, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const journeyData = [
  {
    year: "2025",
    title: "Social Innovate Hackathon (24h)",
    role: "KrishiMitra Developer",
    description: "Built 'KrishiMitra', an AI-powered agricultural mobile app to assist farmers.",
    techStack: ["Flutter", "Node.js", "MongoDB", "RESTful APIs", "AI"],
    details: [
      "Developed a mobile application that identifies plant diseases by analyzing photos of leaves.",
      "Provides personalized fertilizer recommendations and cultivation tips.",
      "Features a labor connection platform to streamline hiring for farm operations."
    ],
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
  },
  {
    year: "2025",
    title: "V-havishkar Cloud Club",
    role: "1st Prize Winner",
    description: "Developed 'Lyceum Clone', a comprehensive Academic Management System.",
    techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    details: [
      "Engineered a full-scale platform for managing Attendance, Grades, and Student Profiles.",
      "Integrated fee management and student tracking functionalities.",
      "Built using a robust PHP-based backend with a relational MySQL database."
    ],
    icon: Trophy,
    color: "from-blue-400 to-indigo-600",
  },
  {
    year: "2025",
    title: "Arduinothon (24-Hour Hackathon)",
    role: "5th Prize Winner",
    description: "Created a 'Rural Development' solution using integrated hardware-software prototypes.",
    techStack: ["Arduino", "Sensors", "Hardware Components", "C++"],
    details: [
      "Secured 5th Prize for developing a functional prototype targeted at rural infrastructure challenges.",
      "Integrated various hardware sensors with Arduino for real-time data collection and processing.",
      "Completed full design and prototyping within a high-pressure 24-hour window."
    ],
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2025",
    title: "Drexel University",
    role: "Web Developer Intern",
    description: "Built CRM System and WhatsApp Chatbot for business inquiries.",
    techStack: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "MySQL", "Node.js"],
    details: [
      "Developed a CRM System with customer management and sales workflow.",
      "Built an automated WhatsApp Chatbot for business enquiries using Node.js.",
      "Created a Digital Business Course Website for educational training."
    ],
    icon: Briefcase,
    color: "from-green-400 to-emerald-600",
  },
  {
    year: "2026",
    title: "Python Full Stack Developer Internship",
    role: "Intern",
    description: "Developed a comprehensive Pharmacy Billing System.",
    techStack: ["Python", "Flask", "Supabase", "AWS S3", "Docker", "RazorPay"],
    details: [
      "Engineered a Pharmacy Billing System with stock management and expiry tracking.",
      "Integrated RazorPay for seamless payment processing.",
      "Utilized AWS S3 for profile storage and Docker for containerization.",
      "Implemented SMS and Email billing notifications."
    ],
    icon: Code,
    color: "from-red-400 to-orange-600",
  },
  {
    year: "2026",
    title: "Anveshana Hack For Hire 2026 Hackathon",
    role: "1st Prize Winner",
    description: "Built an Internal Order Tracking and Lead Management System for SBG Agro Private Limited.",
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB", "SQL", "Supabase"],
    details: [
      "Developed an internal order tracking system to digitalize manual billing, packet shifting, and supplier management.",
      "Built a lead management system integrated with WhatsApp to capture customer details from advertisements and store them in the database.",
      "Implemented role-based access with separate panels for admin monitoring and assigning leads to the sales team."
    ],
    icon: Award,
    color: "from-cyan-400 to-blue-600",
  },
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient inline-block">
              Professional Journey
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto uppercase tracking-widest font-mono">
              A timeline of my growth and contributions in the tech industry.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 rounded-full opacity-50" />
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/30">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent/0 via-accent to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {journeyData.map((item, index) => (
              <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot/Year indicator */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-accent">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-accent/30"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Year Bubble */}
                  <div className={`absolute top-0 hidden md:block ${index % 2 === 0 ? 'left-8' : 'right-8'}`}>
                    <span className="text-xl font-bold font-mono text-accent/40">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left md:text-right'}`}>
                  <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
                    <motion.div 
                      className="glass glow-border p-6 md:p-8 rounded-2xl relative group overflow-hidden"
                      whileHover={{ y: -5, scale: 1.01 }}
                    >
                      {/* Year badge for mobile */}
                      <div className="md:hidden mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold">
                        <Calendar size={12} />
                        {item.year}
                      </div>

                      <div className={`mb-6 flex items-center gap-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-accent text-sm md:text-base font-semibold mt-1">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        {item.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        {item.techStack.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground text-[10px] uppercase tracking-tight group-hover:border-accent/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Details List */}
                      <ul className={`space-y-3 mb-4 text-left ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                        {item.details.map((detail, i) => (
                          <li key={i} className={`text-muted-foreground text-xs md:text-sm flex gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-accent flex-shrink-0 mt-1.5">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative Background Element */}
                      <div className={`absolute top-0 opacity-5 pointer-events-none ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
                        <item.icon size={120} className="-rotate-12 translate-x-1/4 -translate-y-1/4" />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>

                {/* Spacer for the other half */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
