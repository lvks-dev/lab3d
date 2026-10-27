import { useEffect, useState } from "react";
import { CONTACT, CTA, NAV_LINKS, WHATSAPP_SR_HINT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-bg-elevated focus:px-4 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#inicio" aria-label="Lab3D — voltar ao início" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="soft"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {CTA.primary}
            <span className="sr-only">{WHATSAPP_SR_HINT}</span>
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-text-primary hover:bg-bg-elevated md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Seções"
        hidden={!menuOpen}
        className="border-t border-border md:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 font-display text-base text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full"
            onClick={closeMenu}
          >
            {CTA.primary}
            <span className="sr-only">{WHATSAPP_SR_HINT}</span>
          </Button>
        </Container>
      </nav>
    </header>
  );
}
