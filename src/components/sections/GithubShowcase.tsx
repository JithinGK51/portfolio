import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/animations/GlassCard";
import { useGithubData } from "@/hooks/useGithubData";
import { Star, GitFork, Users, BookOpen } from "lucide-react";

const GithubShowcase = () => {
  const { user, repos, topLanguages } = useGithubData();

  return (
    <section id="github" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-mono text-center">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            GitHub Activity
          </h2>
        </ScrollReveal>

        {/* Profile stats */}
        {user.data && (
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-foreground">{user.data.public_repos}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Repos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-foreground">{user.data.followers}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-foreground">{user.data.following}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Following</div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Repos marquee */}
        {repos.data && repos.data.length > 0 && (
          <div className="overflow-hidden mb-12">
            <div className="flex gap-6 animate-marquee">
              {[...repos.data, ...repos.data].map((repo, i) => (
                <a
                  key={`${repo.id}-${i}`}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover glow-border min-w-[280px] p-5 rounded-xl flex-shrink-0 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-muted-foreground" />
                    <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-foreground/80 transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-foreground/30" />
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
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Top languages */}
        {topLanguages.length > 0 && (
          <ScrollReveal>
            <div className="max-w-md mx-auto space-y-3">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4 text-center">
                Top Languages
              </h3>
              {topLanguages.map(([lang, count]) => {
                const total = repos.data?.length || 1;
                const pct = Math.round(((count as number) / total) * 100);
                return (
                  <div key={lang} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-24 text-right font-mono">{lang}</span>
                    <div className="flex-1 h-1.5 bg-accent/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/30 rounded-full transition-all duration-1000"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground/50 font-mono w-10">{pct}%</span>
                  </div>
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
