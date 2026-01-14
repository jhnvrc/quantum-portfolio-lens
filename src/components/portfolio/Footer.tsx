import { personalInfo } from "@/data/portfolioData";
import { Linkedin, Github, Instagram, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and lots of ☕
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: personalInfo.socialLinks.linkedin },
              { icon: Github, href: personalInfo.socialLinks.github },
              { icon: Instagram, href: personalInfo.socialLinks.instagram },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
