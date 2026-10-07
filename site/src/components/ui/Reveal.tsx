import type { ReactNode } from "react";
import { m } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — usar pequeno (≤ 0.3) para escalonar itens de uma grade. */
  delay?: number;
  as?: "div" | "li";
}

/**
 * Discreet fade-up on first viewport entry.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in App.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "li" ? m.li : m.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
