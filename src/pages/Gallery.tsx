import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star, GitFork, Search } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/animations/GlassCard";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

const Gallery = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/JithinGK51/repos?sort=updated&per_page=100");
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
    window.scrollTo(0, 0);
  }, []);

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    repo.topics?.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Project Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of my open-source projects, experiments, and contributions on GitHub.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search projects by name, description or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass glow-border pl-12 pr-6 py-3 rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 glass animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full p-6 flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent">
                      <Github size={20} />
                    </div>
                    <div className="flex gap-3 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.language && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics?.slice(0, 3).map(topic => (
                      <span key={topic} className="text-[10px] px-2 py-0.5 rounded-md bg-muted/30 text-muted-foreground font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono hover:text-accent transition-colors"
                    >
                      <Github size={14} /> Repo
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
