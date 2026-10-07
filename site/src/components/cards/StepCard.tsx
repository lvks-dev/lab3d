import type { ProcessStep } from "@/types/content";

interface StepCardProps {
  step: ProcessStep;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="relative h-full border-t border-border pt-6">
      {/* Marcador sobre a linha do tempo */}
      <span aria-hidden="true" className="absolute -top-px left-0 h-px w-12 bg-accent" />
      <p className="font-display text-4xl font-light tabular-nums text-text-muted">
        <span className="sr-only">Etapa </span>
        {number}
      </p>
      <h3 className="mt-4 font-display text-lg font-medium text-text-primary">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
    </article>
  );
}
