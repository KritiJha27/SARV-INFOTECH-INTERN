import { motion } from "framer-motion";
import { Flame, Trophy, Code, Award, FileCheck } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { achievements } from "../data/info";

const iconMap: Record<string, typeof Flame> = {
  flame: Flame,
  trophy: Trophy,
  code: Code,
  award: Award,
  certificate: FileCheck,
};

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" className="bg-bg-secondary">
      <div className="mx-auto max-w-5xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">Achievements</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Milestones &{" "}
            <span className="text-gradient-premium">recognition</span>
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:border-accent/25 hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] gradient-border group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {ach.metric && (
                    <motion.span
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      className="inline-block text-5xl font-extrabold text-gradient-premium mb-3"
                    >
                      {ach.metric}+
                    </motion.span>
                  )}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                    <Icon size={22} className="text-accent-light" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{ach.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
