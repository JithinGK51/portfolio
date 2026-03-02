import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useGithubData } from "@/hooks/useGithubData";
import { Star, GitFork, BookOpen, TrendingUp, Code2 } from "lucide-react";

const langColors: Record<string, string> = {
  Dart: "hsl(200, 80%, 50%)",
  HTML: "hsl(15, 80%, 55%)",
  TypeScript: "hsl(210, 70%, 50%)",
  JavaScript: "hsl(50, 85%, 50%)",
  Python: "hsl(210, 50%, 45%)",
  CSS: "hsl(270, 60%, 55%)",
  Java: "hsl(20, 70%, 50%)",
  PHP: "hsl(240, 40%, 55%)",
  Kotlin: "hsl(270, 80%, 60%)",
  Swift: "hsl(15, 90%, 55%)",
};

const GithubShowcase = () => {
  const { user, repos, topLanguages } = useGithubData();

  return (
    <section id="github" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            GitHub Activity
          </h2>
        </ScrollReveal>

        {/* Profile card */}
        {user.data && (
          <ScrollReveal>
            <motion.a
              href={user.data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 max-w-2xl mx-auto mb-12 md:mb-16 group"
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={user.data.avatar_url}
                alt={user.data.login}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-border"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{user.data.name || user.data.login}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 font-mono">@{user.data.login}</p>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { label: "Repos", value: user.data.public_repos, icon: BookOpen },
                    { label: "Followers", value: user.data.followers, icon: TrendingUp },
                    { label: "Following", value: user.data.following, icon: Code2 },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Icon size={11} className="text-muted-foreground/60" />
                        <span className="text-lg md:text-xl font-bold font-mono text-foreground">{value}</span>
                      </div>
                      <span className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          </ScrollReveal>
        )}

        {/* Repos marquee */}
        {repos.data && repos.data.length > 0 && (
          <div className="overflow-hidden mb-12 md:mb-16">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...repos.data, ...repos.data].map((repo, i) => (
                <motion.a
                  key={`${repo.id}-${i}`}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glow-border min-w-[260px] md:min-w-[300px] p-4 md:p-6 rounded-2xl flex-shrink-0 group"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <BookOpen size={13} className="text-muted-foreground" />
                    <h4 className="text-xs md:text-sm font-bold text-foreground truncate">
                      {repo.name}
                    </h4>
                  </div>
                  {repo.description && (
                    <p className="text-[11px] md:text-xs text-muted-foreground line-clamp-2 mb-3 md:mb-4">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-muted-foreground/60">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <div
                          className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                          style={{ backgroundColor: langColors[repo.language] || "hsl(var(--muted-foreground))" }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={10} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={10} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        )}

        {/* Top languages */}
        {topLanguages.length > 0 && (
          <ScrollReveal>
            <div className="max-w-lg mx-auto space-y-3 md:space-y-4">
              <h3 className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4 md:mb-6 text-center">
                Top Languages
              </h3>
              {topLanguages.map(([lang, count], idx) => {
                const total = repos.data?.length || 1;
                const pct = Math.round(((count as number) / total) * 100);
                return (
                  <motion.div
                    key={lang}
                    className="flex items-center gap-3 md:gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <span className="text-[10px] md:text-xs text-muted-foreground w-20 md:w-28 text-right font-mono">{lang}</span>
                    <div className="flex-1 h-1.5 md:h-2 bg-accent/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: langColors[lang] || "hsl(var(--foreground) / 0.3)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground/50 font-mono w-10 md:w-12">{pct}%</span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {user.isLoading && (
          <div className="text-center text-muted-foreground text-sm">Loading GitHub data...</div>
        )}
      </div>
    </section>
  );
};

export default GithubShowcase;
