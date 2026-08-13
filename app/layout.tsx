import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Archivo, Public_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import { MetaPixel } from "@/components/MetaPixel";
import { WhatsappGate } from "@/components/WhatsappGate";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
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
      "Tá Online — Posicionamento digital para pequenos e médios negócios",
    template: "%s",
  },
  description:
    "Agência de posicionamento digital para pequenos e médios negócios. Cuidamos do site inteiro — domínio, hospedagem, suporte e alterações — integrado ao WhatsApp e otimizado para o Google, para o seu negócio ser encontrado e crescer.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "agência de posicionamento digital",
    "presença digital para pequenos negócios",
    "criação de site profissional",
    "site integrado ao WhatsApp",
    "otimização para o Google",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    url: SITE.baseUrl,
    title: "Tá Online — Posicionamento digital para pequenos e médios negócios",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Posicionamento digital para o seu negócio — tudo cuidado por nós.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tá Online — Posicionamento digital para pequenos e médios negócios",
    description:
      "Site profissional, integrado ao WhatsApp e otimizado para o Google. Posicionamento digital para pequenos e médios negócios.",
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
      className={`${publicSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased">
        {children}
        <WhatsappGate />
        <MetaPixel />
      </body>
    </html>
  );
}
