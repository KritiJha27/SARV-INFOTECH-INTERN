import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, Lightbulb, Wrench, Cpu, BarChart3, ArrowRight } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { projects, type Project } from "../data/info";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-accent/25 hover:shadow-[0_0_60px_rgba(124,58,237,0.08)] gradient-border overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-accent/3 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-accent-light text-sm font-medium mt-1.5">{project.subtitle}</p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent/10 text-accent-light text-sm font-medium hover:bg-accent/20 transition-colors border border-accent/15"
                  aria-label={`${project.title} Live Demo`}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass text-text-secondary text-sm font-medium hover:text-text-primary hover:border-accent/25 transition-all duration-300"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon size={14} />
                  GitHub
                </motion.a>
              )}
              {project.caseStudyUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass text-text-secondary text-sm font-medium hover:text-text-primary hover:border-accent/25 transition-all duration-300"
                  aria-label={`${project.title} Case Study`}
                >
                  Case Study
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-text-secondary leading-[1.8] mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-accent/5 border border-accent/10 text-accent-light text-xs font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-light transition-colors duration-300 group/btn"
            aria-expanded={expanded}
          >
            <span>{expanded ? "Hide details" : "View breakdown"}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-border/50 space-y-4">
                  {[
                    { icon: Lightbulb, label: "Problem", text: "Identified a need for intelligent, accessible solutions in this domain." },
                    { icon: Wrench, label: "Solution", text: "Designed and built an end-to-end system combining AI/ML with practical user interfaces." },
                    { icon: Cpu, label: "Technology", text: `Built using ${project.technologies.join(", ")}.` },
                    { icon: BarChart3, label: "Result", text: "Delivered a functional, tested prototype demonstrating core capabilities." },
                  ].map((step, si) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: si * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <step.icon size={14} className="text-accent-light" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-text-primary">{step.label}</span>
                        <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{step.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-bg-secondary">
      <div className="mx-auto max-w-4xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">Projects</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Featured{" "}
            <span className="text-gradient-premium">projects</span>
          </h2>
        </RevealText>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <RevealText delay={0.4}>
          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.03, x: 5 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors duration-300 text-sm font-medium"
            >
              View all projects on GitHub
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </RevealText>
      </div>
    </SectionWrapper>
  );
}

import { personalInfo } from "../data/info";
