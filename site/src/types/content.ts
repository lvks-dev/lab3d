import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Marca o serviço como etapa literalmente digital — único lugar da seção que recebe `clinical`. */
  digital?: boolean;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}
