import type { Service } from "@/types/content";

// Categorias propositalmente amplas: o escopo final de atendimento ainda está sendo
// levantado com Ana Beatriz. Evitar prometer materiais, prazos ou tipos de peça específicos.
// TODO: revisar textos após o levantamento de escopo — detalhar tipos de trabalho atendidos.
export const SERVICES: Service[] = [
  {
    id: "protese-digital",
    title: "Prótese digital",
    description:
      "Peças planejadas e desenhadas em ambiente digital, com mais controle sobre forma, adaptação e contatos antes da produção.",
    icon: "tooth",
  },
  {
    id: "exocad",
    title: "Planejamento em Exocad",
    description:
      "Desenho protético a partir do seu escaneamento ou modelo, com decisões de forma alinhadas com você antes de seguir.",
    icon: "monitor",
  },
  {
    id: "blender",
    title: "Modelagem e ajustes em Blender",
    description:
      "Refinamentos de forma, correções de malha e modelagens complementares quando o caso pede mais liberdade que o fluxo padrão.",
    icon: "mesh",
  },
  {
    id: "escaneamento-intraoral",
    title: "Fluxo com escaneamento intraoral",
    description:
      "Trabalho a partir dos arquivos do seu escaneamento intraoral, integrando o caso ao fluxo digital desde o primeiro passo.",
    icon: "scanner",
    digital: true,
  },
  {
    id: "protese-analogica",
    title: "Apoio em prótese analógica",
    description:
      "Domínio das etapas manuais e do acabamento tradicional, para casos que pedem a mão do técnico ou um fluxo híbrido.",
    icon: "tool",
  },
  {
    id: "comunicacao-tecnica",
    title: "Comunicação técnica com o dentista",
    description:
      "Dúvidas, decisões de desenho e ajustes conversados diretamente, de profissional para profissional.",
    icon: "chat",
  },
];
