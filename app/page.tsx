import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { JsonLd } from "@/components/ui/JsonLd";
import { FloatingWhatsappBar } from "@/components/FloatingWhatsappBar";
import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tá Online — Sites para pequenos negócios em Niterói",
  description:
    "Agência de Niterói especializada em sites para três nichos: personal trainers e studios, advogados e clínicas de estética. Setup único + mensalidade com tudo cuidado por nós.",
  keywords: [
    "agência de sites Niterói",
    "criação de sites Niterói",
    "sites para pequenos negócios Niterói",
    "agência Tá Online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tá Online — Sites para pequenos negócios em Niterói",
    description:
      "Sites profissionais para personal trainers, advogados e clínicas de estética em Niterói. Setup único + mensalidade com tudo cuidado.",
    url: "/",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tá Online — Sites para pequenos negócios em Niterói",
    description:
      "Sites profissionais para personal trainers, advogados e clínicas de estética em Niterói.",
  },
};

type NicheLink = {
  href: string;
  title: string;
  subtitle: string;
  dotColor: string;
};

const niches: NicheLink[] = [
  {
    href: "/personal",
    title: "Personal trainers e studios",
    subtitle: "Niterói e região",
    dotColor: "#3a5246",
  },
  {
    href: "/advogados",
    title: "Advogados e escritórios",
    subtitle: "Atuação em Niterói",
    dotColor: "#14304f",
  },
  {
    href: "/estetica",
    title: "Clínicas de estética",
    subtitle: "Niterói e região",
    dotColor: "#6d3d3d",
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
    "Agência de Niterói especializada em sites para personal trainers e studios, advogados e clínicas de estética.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: SITE.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
  sameAs: [],
};

export default function HubPage() {
  const year = new Date().getFullYear();
  const waHref = whatsappUrl(
    "Olá! Vi o site da Tá Online e gostaria de conversar.",
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
            <h1 className="font-display mt-10 text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Sites para pequenos negócios em Niterói.
            </h1>
            <p className="text-fg-muted mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              Trabalhamos com três tipos de cliente. Escolha o que combina com o
              seu trabalho.
            </p>
          </div>

          <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
            {niches.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="group bg-card border-line hover:border-primary/40 flex h-full flex-col justify-between rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div>
                    <span
                      aria-hidden
                      className="mb-4 inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: n.dotColor }}
                    />
                    <h2 className="font-display text-xl tracking-tight sm:text-2xl">
                      {n.title}
                    </h2>
                    <p className="text-fg-muted mt-1.5 text-sm">{n.subtitle}</p>
                  </div>
                  <span className="text-primary mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-0.5">
                    Ver detalhes
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
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>

      <footer className="border-line border-t py-8">
        <Container>
          <div className="text-fg-subtle flex flex-col items-start gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Tá Online — Niterói, RJ</p>
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

      <FloatingWhatsappBar message="Olá! Vi o site da Tá Online e gostaria de conversar." />
      <JsonLd data={hubSchema} />
    </div>
  );
}
