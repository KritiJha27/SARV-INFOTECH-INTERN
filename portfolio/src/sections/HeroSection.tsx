import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { personalInfo } from "../data/info";
import ParticleBackground from "../components/ParticleBackground";

function AnimatedWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % personalInfo.animatedWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[220px] text-left">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-gradient-premium font-bold"
      >
        {personalInfo.animatedWords[index]}
      </motion.span>
    </span>
  );
}

function MagneticButton({ children, href, className = "", download = false, target, rel, ariaLabel }: {
  children: React.ReactNode; href: string; className?: string; download?: boolean; target?: string; rel?: string; ariaLabel?: string;
}) {
  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent-warm/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/30 to-bg-primary pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent-light text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="text-text-primary">{personalInfo.name.split(" ")[0]}</span>{" "}
          <span className="text-gradient-premium">
            {personalInfo.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl text-text-secondary font-medium tracking-wide"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3 text-lg text-text-secondary"
        >
          <Sparkles size={16} className="text-accent" />
          <span>Specializing in</span>
          <AnimatedWords />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-warm text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-shadow duration-300"
          >
            View Projects
            <ArrowDown size={16} />
          </MagneticButton>
          <MagneticButton
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-text-primary font-semibold text-sm hover:border-accent/30 transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
          <MagneticButton
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub Profile"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass text-text-secondary hover:text-accent-light transition-all duration-300"
          >
            <GithubIcon size={20} />
          </MagneticButton>
          <MagneticButton
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn Profile"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass text-text-secondary hover:text-accent-light transition-all duration-300"
          >
            <LinkedinIcon size={20} />
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
