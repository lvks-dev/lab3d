import type { Service } from "@/types/content";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-border-strong hover:shadow-[inset_0_0_48px_-12px_var(--color-accent-dim)] md:p-8">
      <div
        aria-hidden="true"
        className="corner-grid pointer-events-none absolute right-0 top-0 size-32 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        className={cn(
          "relative inline-flex size-11 items-center justify-center rounded-xl border border-border bg-bg-elevated",
          // Único uso de `clinical` nesta seção: etapa literalmente digital (scanner).
          service.digital ? "text-clinical" : "text-accent-light",
        )}
      >
        <Icon name={service.icon} size={20} />
      </div>
      <h3 className="mt-6 font-display text-lg font-medium text-text-primary">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.description}</p>
    </article>
  );
}
