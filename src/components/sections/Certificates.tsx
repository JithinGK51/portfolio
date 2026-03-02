import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useGithubData, CertificateFile } from "@/hooks/useGithubData";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const { certificates } = useGithubData();
  const [selectedCert, setSelectedCert] = useState<CertificateFile | null>(null);

  const formatName = (name: string) => {
    return name
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .replace(/ - Jithin GK$/i, "")
      .trim();
  };

  return (
    <section id="certificates" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-gradient">
            Certificates & Awards
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-10 md:mb-16 max-w-lg mx-auto">
            Professional certifications, internships, and hackathon achievements
          </p>
        </ScrollReveal>

        {certificates.data && certificates.data.length > 0 && (
          <>
            {/* Marquee row 1 */}
            <div className="overflow-hidden mb-4 md:mb-6">
              <motion.div
                className="flex gap-4 md:gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...certificates.data, ...certificates.data].map((cert, i) => (
                  <motion.div
                    key={`r1-${i}`}
                    className="glass glow-border min-w-[260px] sm:min-w-[300px] md:min-w-[380px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="relative h-[160px] sm:h-[200px] md:h-[240px] overflow-hidden">
                      <img
                        src={cert.download_url}
                        alt={formatName(cert.name)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Award size={12} className="text-foreground/70" />
                          <span className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            Certificate
                          </span>
                        </div>
                        <h4 className="text-xs md:text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                          {formatName(cert.name)}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Marquee row 2 */}
            {certificates.data.length > 4 && (
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-4 md:gap-6"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {[...certificates.data.slice().reverse(), ...certificates.data.slice().reverse()].map((cert, i) => (
                    <motion.div
                      key={`r2-${i}`}
                      className="glass glow-border min-w-[260px] sm:min-w-[300px] md:min-w-[380px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative h-[160px] sm:h-[200px] md:h-[240px] overflow-hidden">
                        <img
                          src={cert.download_url}
                          alt={formatName(cert.name)}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Award size={12} className="text-foreground/70" />
                            <span className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                              Certificate
                            </span>
                          </div>
                          <h4 className="text-xs md:text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                            {formatName(cert.name)}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </>
        )}

        {certificates.isLoading && (
          <div className="text-center text-muted-foreground text-sm">Loading certificates...</div>
        )}

        {/* Lightbox modal */}
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-background/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full glass glow-border rounded-2xl md:rounded-3xl overflow-hidden"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.download_url}
                alt={formatName(selectedCert.name)}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="text-sm md:text-lg font-bold text-foreground mb-2">
                  {formatName(selectedCert.name)}
                </h3>
                <a
                  href={selectedCert.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={12} /> View on GitHub
                </a>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-accent transition-colors text-sm"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
