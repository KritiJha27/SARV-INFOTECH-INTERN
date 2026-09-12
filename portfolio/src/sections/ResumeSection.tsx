import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { personalInfo } from "../data/info";

export default function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <RevealText>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-border bg-bg-card/80 backdrop-blur-sm p-10 md:p-16 overflow-hidden gradient-border group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-warm/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <RevealText delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-5">
                  Interested in working{" "}
                  <span className="text-gradient-premium">together?</span>
                </h2>
              </RevealText>

              <RevealText delay={0.2}>
                <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.resumePath}
                    download
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-warm text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-shadow duration-300"
                  >
                    <Download size={16} />
                    Download Resume
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-text-primary font-semibold text-sm hover:border-accent/25 transition-all duration-300"
                  >
                    <Mail size={16} />
                    Contact Me
                  </motion.a>
                </div>
              </RevealText>

              <RevealText delay={0.4}>
                <p className="mt-8 text-xs text-text-muted">
                  Place your resume PDF at{" "}
                  <code className="font-mono text-accent-light/80 bg-accent/5 px-2 py-0.5 rounded-md border border-accent/10">/public/resume.pdf</code>
                </p>
              </RevealText>
            </div>
          </motion.div>
        </RevealText>
      </div>
    </SectionWrapper>
  );
}
