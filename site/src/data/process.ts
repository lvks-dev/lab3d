import type { ProcessStep } from "@/types/content";

// Fluxo ilustrativo. Não há acompanhamento de status nesta fase.
// TODO: na Fase B (portal de pedidos, ADR-008), estas etapas são candidatas naturais aos
// status de um caso — reaproveitar a nomenclatura ao modelar os dados.
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "contato",
    title: "Contato inicial",
    description: "Você chama pelo WhatsApp ou e-mail e conta brevemente o que o caso precisa.",
  },
  {
    id: "informacoes",
    title: "Envio das informações do caso",
    description: "Escaneamento, fotos, modelo ou prescrição — combinamos o melhor formato para o caso.",
  },
  {
    id: "avaliacao",
    title: "Avaliação técnica",
    description: "Análise do material recebido e alinhamento de qualquer ponto antes de começar.",
  },
  {
    id: "planejamento",
    title: "Planejamento e design",
    description: "Desenho da peça em ambiente digital, com ajustes conversados quando necessário.",
  },
  {
    id: "producao",
    title: "Produção e acabamento",
    description: "Execução e acabamento com revisão de detalhes, unindo etapas digitais e manuais.",
  },
  {
    id: "entrega",
    title: "Entrega e alinhamento final",
    description: "Entrega do trabalho e retorno sobre o resultado para ajustar o que for preciso.",
  },
];
