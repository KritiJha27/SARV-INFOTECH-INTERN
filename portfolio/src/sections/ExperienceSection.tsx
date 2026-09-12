import { motion } from "framer-motion";
import { Briefcase, Trophy, Code, Cpu, Users } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { experience, type TimelineItem } from "../data/info";

const typeConfig: Record<TimelineItem["type"], { icon: typeof Briefcase; gradient: string; color: string }> = {
  internship: { icon: Briefcase, gradient: "from-blue-500 to-cyan-500", color: "text-blue-400" },
  hackathon: { icon: Code, gradient: "from-emerald-500 to-teal-500", color: "text-emerald-400" },
  competition: { icon: Trophy, gradient: "from-amber-500 to-yellow-500", color: "text-amber-400" },
  activity: { icon: Cpu, gradient: "from-purple-500 to-fuchsia-500", color: "text-purple-400" },
  club: { icon: Users, gradient: "from-pink-500 to-rose-500", color: "text-pink-400" },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="mx-auto max-w-4xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">Experience</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Where I&apos;ve{" "}
            <span className="text-gradient-premium">been</span>
          </h2>
        </RevealText>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 md:pl-16 group"
                >
                  <div className="absolute left-2 md:left-4 top-2 w-5 h-5 rounded-full bg-bg-primary border-2 border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300 z-10">
                    <Icon size={10} className={config.color} />
                  </div>

                  <motion.div
                    whileHover={{ x: 4, borderColor: "rgba(124, 58, 237, 0.2)" }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.06)] transition-all duration-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                      <span className="text-sm text-text-muted font-mono">{item.date}</span>
                    </div>
                    <p className="text-accent-light text-sm font-medium mb-2">{item.organization}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
