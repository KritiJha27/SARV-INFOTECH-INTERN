import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-24 md:py-36 ${className}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />
      {children}
    </motion.section>
  );
}
