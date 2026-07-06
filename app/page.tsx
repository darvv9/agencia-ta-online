import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { JsonLd } from "@/components/ui/JsonLd";
import { FloatingWhatsappBar } from "@/components/FloatingWhatsappBar";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title:
    "Tá Online — Posicionamento digital para pequenos e médios negócios",
  description:
    "Agência de posicionamento digital para pequenos e médios negócios. Site profissional, integrado ao WhatsApp e otimizado para o Google — tudo cuidado por nós, para o seu negócio ser encontrado e crescer.",
  keywords: [
    "agência de posicionamento digital",
    "presença digital para pequenos negócios",
    "criação de site profissional",
    "site integrado ao WhatsApp",
    "otimização para o Google",
    "agência Tá Online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Tá Online — Posicionamento digital para pequenos e médios negócios",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Posicionamento digital para o seu negócio — tudo cuidado por nós.",
    url: "/",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tá Online — Posicionamento digital para pequenos e médios negócios",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Posicionamento digital para pequenos e médios negócios.",
  },
};

type Pillar = {
  title: string;
  subtitle: string;
  dotColor: string;
};

const pillars: Pillar[] = [
  {
    title: "Site profissional",
    subtitle: "Pronto para o celular e feito do zero para o seu negócio.",
    dotColor: "#3a5246",
  },
  {
    title: "Integração com WhatsApp",
    subtitle: "Botão e formulário que levam o cliente direto para a sua conversa.",
    dotColor: "#c9a87c",
  },
  {
    title: "Apareça no Google",
    subtitle: "Otimização para quem procura o seu serviço na sua região.",
    dotColor: "#3a5246",
  },
];

type Niche = {
  name: string;
  href: string;
  description: string;
};

const niches: Niche[] = [
  {
    name: "Personal Trainers",
    href: "/personal",
    description:
      "Seja encontrado por quem procura treino na sua cidade e transforme o contato em aluno.",
  },
  {
    name: "Advogados",
    href: "/advogados",
    description:
      "Presença digital sóbria e dentro das normas da OAB, para o seu escritório transmitir credibilidade.",
  },
  {
    name: "Clínicas",
    href: "/clinicas",
    description:
      "Mais agendamentos para a sua clínica, com site e Google bem posicionados na sua região.",
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.baseUrl,
  email: SITE.email,
  telephone: SITE.whatsapp.international,
  description:
    "Tá Online é uma agência de posicionamento digital para pequenos e médios negócios — site profissional, integrado ao WhatsApp e otimizado para o Google.",
  areaServed: [{ "@type": "Country", name: "Brasil" }],
  sameAs: [],
};

export default function HubPage() {
  const year = new Date().getFullYear();
  const waHref = whatsappUrl(
    "Olá! Vim pelo site e gostaria de saber mais.",
  );

  return (
    <div
      data-theme="hub"
      className="bg-bg text-fg flex min-h-screen flex-col"
    >
      <main className="flex flex-1 flex-col justify-center px-5 py-20 sm:px-6">
        <Container size="default">
          <div className="text-center">
            <Logo size="xl" />
            <p className="font-display text-fg-subtle mt-8 text-xs tracking-[0.25em] uppercase">
              Agência de posicionamento digital
            </p>
            <h1 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Posicionamento digital para pequenos e médios negócios.
            </h1>
            <p className="text-fg-muted mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              Site profissional, integrado ao WhatsApp e otimizado para o
              Google — para o seu negócio ser encontrado e crescer. Você cuida
              do seu trabalho; nós cuidamos de toda a sua presença online.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-fg inline-flex items-center justify-center gap-1.5 rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Falar no WhatsApp
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  aria-hidden
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#nichos"
                className="border-line text-fg hover:border-primary/40 inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-medium transition-colors"
              >
                Ver para quem trabalhamos
              </a>
            </div>
          </div>

          <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="bg-card border-line flex h-full flex-col rounded-2xl border p-6 sm:p-7"
              >
                <span
                  aria-hidden
                  className="mb-4 inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: p.dotColor }}
                />
                <h2 className="font-display text-xl tracking-tight sm:text-2xl">
                  {p.title}
                </h2>
                <p className="text-fg-muted mt-1.5 text-sm">{p.subtitle}</p>
              </li>
            ))}
          </ul>

          <div id="nichos" className="mt-20 scroll-mt-20 sm:mt-24">
            <div className="text-center">
              <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
                Nichos que atendemos hoje
              </p>
              <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
                Escolha o seu segmento e veja como funciona.
              </h2>
            </div>

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {niches.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="bg-card border-line hover:border-primary/40 group flex h-full flex-col rounded-2xl border p-6 transition-colors sm:p-7"
                  >
                    <h3 className="font-display flex items-center justify-between text-xl tracking-tight sm:text-2xl">
                      {n.name}
                      <svg
                        className="text-fg-subtle group-hover:text-primary h-4 w-4 transition-colors"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        aria-hidden
                      >
                        <path
                          d="M4 10h12M11 5l5 5-5 5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h3>
                    <p className="text-fg-muted mt-2 text-sm">{n.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>

      <footer className="border-line border-t py-8">
        <Container>
          <div className="text-fg-subtle flex flex-col items-start gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Tá Online</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors"
              >
                {SITE.whatsapp.display}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-fg transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Container>
      </footer>

      <FloatingWhatsappBar message="Olá! Vim pelo site e gostaria de saber mais." />
      <JsonLd data={hubSchema} />
    </div>
  );
}
