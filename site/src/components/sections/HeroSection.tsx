import { m } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";

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
      {/* Malha técnica, esmaecida nas bordas */}
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)]"
      />
      {/* Esfera do cartão de visita */}
      <div
        aria-hidden="true"
        className="brand-sphere absolute -right-[360px] top-[64px] -z-10 size-[480px] opacity-50 [mask-image:linear-gradient(to_bottom,black_55%,transparent_85%)] sm:-right-[220px] sm:top-[120px] sm:size-[560px] sm:opacity-60 lg:-right-[240px] lg:top-[40px] lg:size-[720px] lg:opacity-100"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col"
          >
            <p className="font-display text-3xl font-light leading-none tracking-tight text-text-primary">
              Lab<span className="font-normal text-accent-light">3D</span>
            </p>
            <p className="mt-2 font-display text-sm tracking-[0.3em] text-text-secondary">
              Odontologia Digital
            </p>
          </m.div>

          <m.h1
            id="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-10 max-w-xl font-display text-4xl font-normal tracking-tight text-text-primary text-balance sm:text-5xl"
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
              <Icon name="whatsapp" size={20} />
              Conversar no WhatsApp
            </Button>
            <Button href="#servicos" variant="outline" size="lg">
              Ver serviços
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
          <div className="rounded-2xl border border-white/10 bg-bg-surface/75 p-6 shadow-glow backdrop-blur-xl md:p-8">
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
                  <span className="font-display text-xs tabular-nums text-text-secondary">
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
              Digital <span className="text-accent-light">+</span> analógico
            </p>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
