import type { Differential } from "@/types/content";

/** Diferencial central da marca — recebe destaque próprio na seção. */
export const HYBRID_DIFFERENTIAL: Differential = {
  id: "visao-hibrida",
  title: "Digital e analógico no mesmo laboratório",
  description:
    "O fluxo digital traz controle e previsibilidade; o domínio manual resolve o que o software sozinho não resolve. Cada caso segue o caminho que faz mais sentido para ele.",
};

export const DIFFERENTIALS: Differential[] = [
  {
    id: "fluxo-digital",
    title: "Fluxo digital",
    description: "Escaneamento, desenho e ajuste em ambiente digital, com cada etapa revisável.",
  },
  {
    id: "previsibilidade",
    title: "Previsibilidade",
    description: "Planejar antes de produzir reduz surpresas na prova e no ajuste em boca.",
  },
  {
    id: "comunicacao",
    title: "Comunicação clara",
    description: "Retorno objetivo sobre o caso e decisões técnicas explicadas, sem ruído.",
  },
  {
    id: "detalhe",
    title: "Atenção ao detalhe",
    description: "Anatomia, contatos e acabamento revisados com o mesmo cuidado, peça a peça.",
  },
  {
    id: "dominio-tecnico",
    title: "Domínio técnico",
    description: "Exocad e Blender apoiados em conhecimento protético — o software a serviço da técnica.",
  },
  {
    id: "parceria",
    title: "Parceria com o dentista",
    description: "O caso é conduzido junto com você, respeitando seu planejamento clínico.",
  },
];
