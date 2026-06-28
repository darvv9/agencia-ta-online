import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { JsonLd } from "@/components/ui/JsonLd";
import { FloatingWhatsappBar } from "@/components/FloatingWhatsappBar";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tá Online — Presença digital para personal trainers em todo o Brasil",
  description:
    "Especialistas em presença digital para personal trainers. Site profissional, integrado ao WhatsApp e otimizado para o Google, para você ser encontrado e fechar mais alunos em qualquer cidade do Brasil.",
  keywords: [
    "presença digital para personal trainer",
    "site para personal trainer",
    "site para personal trainer Brasil",
    "criação de site para personal trainer",
    "agência Tá Online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Tá Online — Presença digital para personal trainers em todo o Brasil",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Para personal trainers de qualquer cidade do Brasil — tudo cuidado por nós.",
    url: "/",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tá Online — Presença digital para personal trainers em todo o Brasil",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Para personal trainers de qualquer cidade do Brasil.",
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
    subtitle: "Pronto para o celular e feito do zero para o seu trabalho.",
    dotColor: "#3a5246",
  },
  {
    title: "Integração com WhatsApp",
    subtitle: "Botão e formulário que levam o aluno direto para a sua conversa.",
    dotColor: "#c9a87c",
  },
  {
    title: "Apareça no Google",
    subtitle: "Otimização para quem procura um personal na sua cidade.",
    dotColor: "#3a5246",
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
    "Tá Online é especialista em presença digital para personal trainers — site profissional, integrado ao WhatsApp e otimizado para o Google, em todo o Brasil.",
  areaServed: [{ "@type": "Country", name: "Brasil" }],
  sameAs: [],
};

export default function HubPage() {
  const year = new Date().getFullYear();
  const waHref = whatsappUrl(
    "Oi! Vim pelo site e queria saber mais 😊",
  );

  return (
    <div
      data-theme="hub"
      className="bg-bg text-fg flex min-h-screen flex-col"
    >
      <main className="flex flex-1 items-center justify-center px-5 py-20 sm:px-6">
        <Container size="default">
          <div className="text-center">
            <Logo size="xl" />
            <p className="font-display text-fg-subtle mt-8 text-xs tracking-[0.25em] uppercase">
              Especialistas em personal trainer
            </p>
            <h1 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Presença digital para personal trainers em todo o Brasil.
            </h1>
            <p className="text-fg-muted mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              Site profissional, integrado ao WhatsApp e otimizado para o
              Google — para você ser encontrado e fechar mais alunos. Você foca
              no treino; nós cuidamos da sua presença online.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/personal"
                className="bg-primary text-primary-fg inline-flex items-center justify-center gap-1.5 rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Ver como funciona
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
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line text-fg hover:border-primary/40 inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-medium transition-colors"
              >
                Falar no WhatsApp
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

      <FloatingWhatsappBar message="Oi! Vim pelo site e queria saber mais 😊" />
      <JsonLd data={hubSchema} />
    </div>
  );
}
