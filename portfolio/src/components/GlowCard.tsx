import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
}

export default function GlowCard({ children, className = "", hoverScale = true }: GlowCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hoverScale) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverScale ? rotateX : 0,
        rotateY: hoverScale ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] gradient-border ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-accent-warm/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
