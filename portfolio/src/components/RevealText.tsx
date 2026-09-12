import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const directionOffset = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

export default function RevealText({ children, className = "", delay = 0, direction = "up" }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
