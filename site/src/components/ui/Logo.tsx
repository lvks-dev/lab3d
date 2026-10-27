// TODO: substituir LogoMark pelo símbolo final da Lab3D após aprovação e vetorização
// (ver .lvks/products/lab3d-brand.md para a decisão quando ela acontecer).
// Não substituir por render de IA — o símbolo final precisa ser desenhado como paths SVG,
// igual ao atual, não colado de uma imagem gerada.
import { cn } from "@/lib/utils";

/** Marca gráfica angular do cartão de visita: `<>` com a seta saindo do centro. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={4.5}
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={cn("text-accent", className)}
    >
      <path d="M20 4 5 24l15 20" />
      <path d="M28 4l15 20-15 20" />
      <path d="M19 24h22" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

/** Wordmark "Lab3D" — peso 600, "3D" em accent-light (lab3d-brand.md § Pesos tipográficos). */
export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="size-7 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-text-primary">
          Lab<span className="text-accent-light">3D</span>
        </span>
        {showTagline && (
          <span className="mt-1 font-display text-xs tracking-[0.2em] text-text-secondary">
            Odontologia Digital
          </span>
        )}
      </span>
    </span>
  );
}
