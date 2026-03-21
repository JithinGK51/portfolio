import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Award, ExternalLink, Search, X, Download } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/animations/GlassCard";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { useGithubData, CertificateFile } from "@/hooks/useGithubData";

const CertificatesGallery = () => {
  const { certificates } = useGithubData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState<CertificateFile | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatName = (name: string) => {
    return name
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .replace(/ - Jithin GK$/i, "")
      .trim();
  };

  const filteredCerts = certificates.data?.filter(cert => 
    cert.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Link 
          to="/" 
          className="glass glow-border px-4 py-2 rounded-full flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <ThemeToggle />
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-mono">
            Recognition & Achievements
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Certificates Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete collection of my professional certifications, hackathon wins, and internship completions.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search certificates by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass glow-border pl-12 pr-6 py-3 rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
          />
        </div>

        {certificates.isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 glass animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <GlassCard className="h-full overflow-hidden flex flex-col p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.download_url}
                      alt={formatName(cert.name)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-4">
                       <div className="w-full">
                          <div className="flex items-center gap-2 mb-1">
                            <Award size={14} className="text-accent" />
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                              Certificate
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-foreground line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                            {formatName(cert.name)}
                          </h3>
                       </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!certificates.isLoading && filteredCerts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No certificates found matching your search.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full glass glow-border rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4 bg-black/20 flex items-center justify-center p-4 min-h-[40vh] md:min-h-0">
                  <img
                    src={selectedCert.download_url}
                    alt={formatName(selectedCert.name)}
                    className="max-w-full max-h-[70vh] object-contain shadow-lg rounded-lg"
                  />
                </div>
                <div className="md:w-1/4 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-accent">
                      <Award size={20} />
                      <span className="text-xs font-mono uppercase tracking-[0.2em]">Verified</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                      {formatName(selectedCert.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8">
                      This certificate verifies the successful completion of the respective program or achievement.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedCert.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full glass glow-border py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-accent hover:text-white transition-all group"
                    >
                      <Download size={18} className="group-hover:scale-110 transition-transform" /> Download PDF
                    </a>
                    <a
                      href={selectedCert.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                    >
                      <ExternalLink size={16} /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-accent transition-colors z-10"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesGallery;
