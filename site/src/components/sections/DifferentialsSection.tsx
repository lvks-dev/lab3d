import { DIFFERENTIALS, HYBRID_DIFFERENTIAL } from "@/data/differentials";
import { Container } from "@/components/layout/Container";
import { LogoMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="border-y border-border bg-bg-subtle py-24 md:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle
              id="diferenciais-title"
              index="02"
              eyebrow="Diferenciais"
              title="Tecnologia a serviço da técnica."
              description="Um laboratório pensado para trabalhar junto com o dentista, com processo claro e cuidado em cada detalhe."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <article className="relative mt-10 overflow-hidden rounded-2xl border border-border-strong bg-bg-surface p-6 md:p-8">
              <LogoMark
                className="pointer-events-none absolute -bottom-8 -right-8 size-40 opacity-10"
              />
              <span className="accent-rule" aria-hidden="true" />
              <h3 className="mt-6 font-display text-xl font-medium text-text-primary text-balance">
                {HYBRID_DIFFERENTIAL.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
                {HYBRID_DIFFERENTIAL.description}
              </p>
            </article>
          </Reveal>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 2) * 0.06}>
              <div className="h-full border-t border-border py-8">
                <h3 className="font-display text-base font-medium text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
