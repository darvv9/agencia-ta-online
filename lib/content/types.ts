export type Niche = "personal" | "advogados" | "estetica";

export type SchemaKind = "LocalBusiness" | "LegalService";

export interface NicheContent {
  niche: Niche;
  schemaKind: SchemaKind;
  path: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };

  hero: {
    eyebrow: string;
    h1Lines: string[];
    subhead: string;
    primaryCtaLabel: string;
    primaryCtaMessage: string;
    secondaryCtaLabel: string;
    /** Microcopy sob o CTA, para derrubar a fricção de "vou ter que falar com vendedor". */
    ctaHint?: string;
    /** Opcional: com imagem o hero vira duas colunas no desktop. */
    image?: { src: string; alt: string };
  };

  dores: {
    title: string;
    intro: string;
    items: { title: string }[];
    closing: string;
  };

  solucao: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };

  /** Opcional: nichos sem exemplos publicados omitem o bloco e a seção some da página. */
  portfolio?: {
    title: string;
    intro: string;
    demos: {
      name: string;
      kind: string;
      bullets: string[];
      href: string | null;
      /** Domínio exibido no card e na barra do mock (sem protocolo). */
      url?: string;
      /** Screenshot real do site, em /public. Quando ausente, mostra o mock vazio. */
      image?: string;
    }[];
  };

  comoFunciona: {
    title: string;
    intro: string;
    steps: { title: string; description: string }[];
  };

  investimento: {
    title: string;
    intro: string;
    setup: {
      label: string;
      tag: string;
      price: string;
      installments: string;
      bullets: string[];
    };
    monthly: {
      label: string;
      tag: string;
      price: string;
      period: string;
      bullets: string[];
    };
    ctaLabel: string;
    ctaMessage: string;
    footnote: string;
  };

  sobre: {
    title: string;
    paragraphs: string[];
  };

  faq: {
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };

  ctaFinal: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    ctaMessage: string;
  };

  footer: {
    crossSell: {
      label: string;
      links: { label: string; href: string }[];
    };
  };

  floatingMessage: string;
}
