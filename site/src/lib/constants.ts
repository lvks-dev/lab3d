import type { NavLink } from "@/types/content";

export const SITE_VERSION = "0.1.0";
export const SITE_TAG = "v0";

// Dados de contato: apenas o que já consta no cartão de visita (lab3d-product.md §7).
const WHATSAPP_NUMBER = "5531988813632";
const WHATSAPP_GREETING = "Olá! Vim pelo site da Lab3D e gostaria de conversar sobre um caso.";

export const SITE = {
  name: "Lab3D",
  tagline: "Odontologia Digital",
  // TODO: trocar pelo domínio definitivo quando for registrado — manter em sincronia com index.html.
  url: "https://lab3d.pages.dev",
} as const;

export const CONTACT = {
  person: "Ana Beatriz Colen Martins",
  email: "labodontodigitalana@gmail.com",
  phoneDisplay: "(31) 98881-3632",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];
