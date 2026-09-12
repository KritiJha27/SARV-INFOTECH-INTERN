import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { skills } from "../data/info";

const categoryStyles: Record<string, { gradient: string; glow: string; borderHover: string; icon: string }> = {
  Programming: { gradient: "from-blue-500 to-cyan-500", glow: "shadow-blue-500/20", borderHover: "hover:border-blue-500/30", icon: "{ }" },
  Web: { gradient: "from-orange-500 to-amber-500", glow: "shadow-orange-500/20", borderHover: "hover:border-orange-500/30", icon: "</>" },
  "AI/ML": { gradient: "from-emerald-500 to-teal-500", glow: "shadow-emerald-500/20", borderHover: "hover:border-emerald-500/30", icon: "AI" },
  Tools: { gradient: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/20", borderHover: "hover:border-purple-500/30", icon: "⚙" },
  Database: { gradient: "from-pink-500 to-rose-500", glow: "shadow-pink-500/20", borderHover: "hover:border-pink-500/30", icon: "DB" },
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="mx-auto max-w-5xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">Skills</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Technologies I{" "}
            <span className="text-gradient-premium">work with</span>
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const style = categoryStyles[group.category] || categoryStyles.Programming;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm p-6 transition-all duration-500 ${style.borderHover} hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] gradient-border group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.gradient} bg-opacity-10 flex items-center justify-center text-white text-xs font-bold shadow-lg ${style.glow}`}>
                    <span className="opacity-90">{style.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 rounded-lg bg-bg-primary/60 border border-border text-text-secondary text-sm font-medium transition-all duration-300 hover:text-text-primary hover:border-accent/25 hover:bg-accent/5 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
