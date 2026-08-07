import type { NicheContent } from "./types";

/* Landing enxuta de propósito: `comoFunciona` e `sobre` foram cortadas e a copy
   encurtada para reduzir o caminho até o CTA do WhatsApp. Ver PROJECT_CONTEXT. */

export const advogadosContent: NicheContent = {
  niche: "advogados",
  schemaKind: "LegalService",
  path: "/advogados",

  seo: {
    title:
      "Tá Online — Sites para Advogados e Escritórios em todo o Brasil",
    description:
      "Site institucional para advogados e escritórios, integrado ao WhatsApp e otimizado para o Google, para o seu escritório ser encontrado e transmitir credibilidade em qualquer cidade do Brasil. Sempre dentro das normas da OAB.",
    keywords: [
      "site para advogado",
      "site para escritório de advocacia",
      "site institucional advogado",
      "criação de site para advogado",
      "presença digital para advogado",
    ],
    ogImageAlt:
      "Site institucional para advogados e escritórios em todo o Brasil",
  },

  hero: {
    eyebrow: "Sites para advocacia",
    h1Lines: ["Site para o seu", "escritório, no ar", "em 7 dias."],
    subhead:
      "Site institucional próprio, pronto para o celular, com WhatsApp integrado e otimizado para o Google. Dentro das normas da OAB.",
    primaryCtaLabel: "Falar no WhatsApp",
    primaryCtaMessage:
      "Olá! Vim pelo site e queria entender como funciona o site para o meu escritório.",
    secondaryCtaLabel: "Ver preço",
    ctaHint: "Sem formulário. Você fala direto com quem faz o site.",
    image: {
      src: "/advogados/hero.jpg",
      alt: "Advogado trabalhando no notebook em seu escritório",
    },
  },

  dores: {
    title: "Hoje, quem procura um advogado não te encontra",
    intro: "Três situações que se repetem em escritórios pequenos.",
    items: [
      {
        title:
          "Buscam advogado na sua cidade e na sua área — e o seu nome não aparece.",
      },
      {
        title:
          "Sem site próprio, fica difícil passar a credibilidade que escritórios maiores passam.",
      },
      {
        title:
          "A indicação é o único canal — e depende de alguém lembrar de você.",
      },
    ],
    closing:
      "Um site institucional não substitui o seu trabalho. Ele mostra que o escritório existe para quem ainda não te conhece — dentro do que a OAB permite.",
  },

  solucao: {
    title: "O que você recebe",
    intro: "Tudo pronto para funcionar. Você não precisa tocar em nada técnico.",
    image: {
      src: "/advogados/escritorio.jpg",
      alt: "Advogada revisando documentos em um escritório de advocacia",
    },
    items: [
      {
        title: "Site institucional pronto para o celular",
        description:
          "De 5 a 7 páginas, feitas do zero, com estrutura sóbria e adequada à advocacia.",
      },
      {
        title: "WhatsApp integrado em todo o site",
        description:
          "Botão fixo e flutuante que levam direto para a sua conversa. Sem formulário longo.",
      },
      {
        title: "Otimizado para aparecer no Google",
        description:
          "Estruturado para os termos de quem procura advogado na sua cidade e nas suas áreas de atuação.",
      },
      {
        title: "Hospedagem, domínio e alterações inclusos",
        description:
          "Precisou mudar algo? Você pede por WhatsApp e nós atualizamos, sem cobrar à parte.",
      },
    ],
  },

  investimento: {
    title: "Quanto custa",
    intro: "Sem letra miúda e sem fidelidade.",
    setup: {
      label: "Setup do site",
      tag: "Pagamento único",
      price: "R$ 997",
      installments: "ou em até 10x de R$ 99,70 sem juros no cartão",
      bullets: [
        "Site institucional de 5 a 7 páginas, criado do zero",
        "Estrutura sóbria, alinhada às normas da OAB",
        "WhatsApp integrado em todos os pontos de contato",
        "Textos prontos para a sua revisão",
        "No ar em 7 a 10 dias úteis",
      ],
    },
    monthly: {
      label: "Plano mensal",
      tag: "Tudo cuidado por nós",
      price: "R$ 79,90",
      period: "/mês",
      bullets: [
        "Domínio e hospedagem inclusos",
        "Alterações ilimitadas no mês",
        "Suporte direto, sem intermediário",
        "Sem fidelidade — cancela quando quiser",
      ],
    },
    ctaLabel: "Tirar uma dúvida no WhatsApp",
    ctaMessage:
      "Olá! Vi os valores no site e queria tirar uma dúvida antes de decidir.",
    footnote:
      "A mensalidade mantém o site no ar, atualizado e com suporte — sem que o escritório precise pensar em parte técnica.",
  },

  faq: {
    title: "Perguntas frequentes",
    intro: "O que perguntam antes de começar.",
    items: [
      {
        q: "Advogado pode ter site? E quanto à OAB?",
        a: "Pode. O Código de Ética da OAB permite presença digital com finalidade informativa. O que não é permitido é promessa de resultado, mercantilização e comparação com outros profissionais. Nosso padrão é exatamente esse: site institucional, informativo e sóbrio.",
      },
      {
        q: "Quanto tempo demora para ficar pronto?",
        a: "De 7 a 10 dias úteis depois que recebemos os textos e as fotos.",
      },
      {
        q: "Aceita parcelar?",
        a: "Sim. O setup pode ser parcelado em até 10x sem juros no cartão.",
      },
      {
        q: "E se eu quiser cancelar?",
        a: "Não há fidelidade. Avise com 30 dias e encerramos. Se quiser levar o site para outro provedor, auxiliamos na migração do domínio.",
      },
      {
        q: "O site é meu mesmo?",
        a: "É. O domínio pode ser registrado em nome do escritório, e textos, identidade e marca continuam 100% seus.",
      },
    ],
  },

  ctaFinal: {
    title: "Vamos colocar o seu escritório no ar?",
    subtitle: "Envie uma mensagem e tire suas dúvidas. Sem compromisso.",
    buttonLabel: "Falar no WhatsApp",
    ctaMessage:
      "Olá! Quero conversar sobre o site institucional do meu escritório.",
  },

  footer: {
    crossSell: {
      label: "Também atendemos",
      links: [
        { label: "Personal trainers e studios", href: "/personal" },
        { label: "Clínicas de estética", href: "/clinicas" },
      ],
    },
  },

  floatingMessage:
    "Olá! Vim pelo site de advogados e queria saber mais.",
};
