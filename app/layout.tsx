import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces } from "next/font/google";
import { SITE } from "@/lib/site";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#1a1f1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default:
      "Tá Online — Presença digital para personal trainers em todo o Brasil",
    template: "%s",
  },
  description:
    "Especialistas em presença digital para personal trainers. Cuidamos do site inteiro — domínio, hospedagem, suporte e alterações — para você ser encontrado e fechar mais alunos em qualquer cidade do Brasil.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "presença digital para personal trainer",
    "site para personal trainer",
    "site para personal trainer Brasil",
    "criação de site para personal trainer",
    "site para studio de pilates",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    url: SITE.baseUrl,
    title: "Tá Online — Presença digital para personal trainers",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Para personal trainers de qualquer cidade do Brasil — tudo cuidado por nós.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tá Online — Presença digital para personal trainers",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Para personal trainers de qualquer cidade do Brasil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, telephone: false, address: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
