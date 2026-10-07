import { SERVICES } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ServicesSection() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            id="servicos-title"
            index="01"
            eyebrow="Serviços"
            title="Do arquivo digital ao acabamento manual."
            description="Atuação nas etapas digitais e analógicas do trabalho protético, com o dentista acompanhando as decisões que importam."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {SERVICES.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 3) * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
