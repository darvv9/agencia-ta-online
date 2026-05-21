import type { Metadata } from "next";
import { NichePage } from "@/components/NichePage";
import { personalContent } from "@/lib/content/personal";

export const metadata: Metadata = {
  title: personalContent.seo.title,
  description: personalContent.seo.description,
  keywords: personalContent.seo.keywords,
  alternates: { canonical: "/personal" },
  openGraph: {
    title: personalContent.seo.title,
    description: personalContent.seo.description,
    url: "/personal",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: personalContent.seo.title,
    description: personalContent.seo.description,
  },
};

export default function PersonalPage() {
  return <NichePage content={personalContent} />;
}
