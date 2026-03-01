import { Github, Instagram, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/JithinGK51", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/jithin_gk_wb?igsh=MW5iYTdmdDluc2xkYQ==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jithin-gk-19671b2a7", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground font-mono">
          <span className="text-foreground font-semibold">JG</span>
          <span className="mx-2">·</span>
          © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground/50">
          Made with <Heart size={12} className="text-foreground/30 mx-1" /> and code
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
