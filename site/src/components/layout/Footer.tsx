import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
        <div>
          <Logo showTagline />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Laboratório de prótese dental com fluxo digital e domínio analógico, para dentistas e
            consultórios.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
            Navegação
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-text-primary">{CONTACT.person}</li>
            <li>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
              >
                WhatsApp {CONTACT.phoneDisplay}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-text-secondary hover:text-text-primary"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-text-secondary sm:flex-row sm:justify-between">
        <p>
          © {year} {SITE.name} · {SITE.tagline}
        </p>
        <p>Atendimento a dentistas e consultórios odontológicos.</p>
      </Container>
    </footer>
  );
}
