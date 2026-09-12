import { Sparkles, BookOpen, Code2, Zap } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { aboutContent } from "../data/info";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary">
      <div className="mx-auto max-w-4xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">About</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-10">
            A bit about{" "}
            <span className="text-gradient-premium">me</span>
          </h2>
        </RevealText>

        <div className="space-y-6">
          {aboutContent.paragraphs.map((para, i) => (
            <RevealText key={i} delay={0.15 + i * 0.1}>
              <p className="text-text-secondary leading-[1.8] text-base md:text-lg">{para}</p>
            </RevealText>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <RevealText delay={0.5}>
            <div className="p-6 rounded-2xl glass gradient-border group hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <BookOpen size={18} className="text-accent" />
                </div>
                <span className="text-base font-semibold text-text-primary">Currently Learning</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutContent.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/15 text-accent-light text-sm font-medium hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-default"
                  >
                    <Sparkles size={11} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealText>

          <RevealText delay={0.6}>
            <div className="p-6 rounded-2xl glass gradient-border group hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Zap size={18} className="text-accent" />
                </div>
                <span className="text-base font-semibold text-text-primary">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutContent.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-primary/60 border border-border text-text-secondary text-sm font-medium hover:text-text-primary hover:border-accent/20 transition-all duration-300 cursor-default"
                  >
                    <Code2 size={11} />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </RevealText>
        </div>
      </div>
    </SectionWrapper>
  );
}
