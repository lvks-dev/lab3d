import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** Índice da seção, ex.: "01" — reforça a leitura de documento técnico. */
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
}

export function SectionTitle({ index, eyebrow, title, description, id, className }: SectionTitleProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent-light">
        <span className="tabular-nums">{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-accent-light/50" />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-normal tracking-tight text-text-primary text-balance md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary text-pretty">{description}</p>
      )}
    </header>
  );
}
