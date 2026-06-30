import type { Metadata } from "next";
import { NichePage } from "@/components/NichePage";
import { esteticaContent } from "@/lib/content/estetica";

export const metadata: Metadata = {
  title: esteticaContent.seo.title,
  description: esteticaContent.seo.description,
  keywords: esteticaContent.seo.keywords,
  alternates: { canonical: "/clinicas" },
  openGraph: {
    title: esteticaContent.seo.title,
    description: esteticaContent.seo.description,
    url: "/clinicas",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: esteticaContent.seo.title,
    description: esteticaContent.seo.description,
  },
};

export default function ClinicasPage() {
  return <NichePage content={esteticaContent} />;
}
