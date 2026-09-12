import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/info";

export default function Footer() {
  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/2 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="text-xl font-bold tracking-tight group"
          >
            <span className="gradient-text">K</span>
            <span className="text-text-primary group-hover:text-accent-light transition-colors duration-300">riti Jha</span>
          </motion.a>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl border border-border bg-bg-card/60 flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/25 hover:bg-accent/5 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-text-muted text-sm flex items-center justify-center gap-1.5">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> by Kriti Jha
          </p>
        </div>
      </div>
    </footer>
  );
}
