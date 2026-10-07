import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

// Página única com âncoras (ADR-008, Fase A): sem roteador.
// LazyMotion + `m` keeps only the DOM animation features in the bundle.
export function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Header />
        <main id="conteudo">
          <HeroSection />
          <ServicesSection />
          <DifferentialsSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
