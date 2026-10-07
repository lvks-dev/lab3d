import { PROCESS_STEPS } from "@/data/process";
import { Container } from "@/components/layout/Container";
import { StepCard } from "@/components/cards/StepCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProcessSection() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            id="processo-title"
            index="03"
            eyebrow="Processo"
            title="Um fluxo claro, do primeiro contato à entrega."
            description="Cada caso tem suas particularidades, mas o caminho é sempre conversado e previsível."
          />
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal as="li" key={step.id} delay={(index % 3) * 0.06}>
              <StepCard step={step} index={index} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
