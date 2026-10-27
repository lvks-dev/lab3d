import { m } from "framer-motion";
import { CONTACT, CTA, WHATSAPP_SR_HINT } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";
import { MeshSphere } from "@/components/ui/MeshSphere";

interface FlowStage {
  label: string;
  tool: string;
  /** Etapa literalmente digital — único elemento `clinical` desta tela. */
  digital?: boolean;
}

const FLOW: FlowStage[] = [
  { label: "Escaneamento intraoral", tool: "Arquivo digital", digital: true },
  { label: "Planejamento", tool: "Exocad" },
  { label: "Modelagem e ajustes", tool: "Blender" },
  { label: "Acabamento", tool: "Manual" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-24 pt-12 md:pb-32 md:pt-20"
    >
      {/* Grid de CAD com nós e diagonais, esmaecido nas bordas */}
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)]"
      />
      {/* Malha 3D: halo de profundidade + esfera wireframe triangulada.
          Abaixo de lg fica atrás do card de fluxo, nunca sob o texto. */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[24px] -right-[200px] -z-10 size-[440px] opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent_90%)] sm:-right-[160px] sm:size-[560px] lg:bottom-auto lg:-right-[200px] lg:top-[16px] lg:size-[720px] lg:opacity-100"
      >
        <div className="mesh-glow absolute inset-0" />
        <MeshSphere className="relative size-full" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {/* Eyebrow no mesmo estilo dos rótulos de seção — o wordmark já está no header. */}
          <m.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent-light"
          >
            <span aria-hidden="true" className="h-px w-6 bg-accent-light/50" />
            Laboratório de prótese digital
          </m.p>

          <m.h1
            id="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-[-0.02em] text-text-primary text-balance sm:text-5xl"
          >
            Prótese dental com precisão digital.
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary text-pretty md:text-lg"
          >
            Laboratório de prótese para dentistas e consultórios. Planejamento em Exocad, modelagem
            em Blender e escaneamento intraoral, somados ao domínio da prótese analógica — para
            casos mais previsíveis, do arquivo à entrega.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <Icon name="whatsapp" size={16} />
              {CTA.primary}
              <span className="sr-only">{WHATSAPP_SR_HINT}</span>
            </Button>
            <Button href="#servicos" variant="ghost" size="lg">
              {CTA.secondary}
              <Icon name="arrowDown" size={18} />
            </Button>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          {/* Glow roxo atrás do card; fica fora do título para não baixar o contraste do eyebrow. */}
          <div aria-hidden="true" className="mesh-glow absolute -inset-16 -z-10" />
          <div className="gradient-border rounded-2xl bg-bg-surface/80 p-6 shadow-[0_24px_64px_-24px_var(--color-accent-dim)] backdrop-blur-xl md:p-8">
            <div className="flex items-center justify-between">
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                Fluxo do caso
              </p>
              <LogoMark className="size-5" />
            </div>

            <ol className="mt-6">
              {FLOW.map((stage, index) => (
                <li
                  key={stage.label}
                  className="flex items-center gap-4 border-t border-border py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="inline-flex h-6 min-w-8 items-center justify-center rounded-md border border-border-strong bg-accent-dim/40 px-1 font-display text-xs font-semibold tabular-nums tracking-wider text-text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm text-text-primary">{stage.label}</span>
                  <span className="flex items-center gap-2 text-xs text-text-secondary">
                    {stage.digital && (
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-clinical" />
                    )}
                    {stage.tool}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-6 border-t border-border pt-4 font-display text-xs uppercase tracking-[0.2em] text-text-secondary">
              Digital <span className="text-text-primary">+</span> analógico
            </p>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
