import { CTAFinal } from "@/components/sections/CTAFinal";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Dores } from "@/components/sections/Dores";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Investimento } from "@/components/sections/Investimento";
import { Portfolio } from "@/components/sections/Portfolio";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Sobre } from "@/components/sections/Sobre";
import { Solucao } from "@/components/sections/Solucao";
import { FloatingWhatsappBar } from "@/components/FloatingWhatsappBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildJsonLd } from "@/lib/schema";
import type { NicheContent } from "@/lib/content/types";

type Props = {
  content: NicheContent;
};

export function NichePage({ content }: Props) {
  const jsonLd = buildJsonLd(content);
  return (
    <div data-theme={content.niche} className="bg-bg text-fg min-h-screen">
      <SiteHeader message={content.hero.primaryCtaMessage} />
      <main>
        <Hero content={content} />
        <Dores content={content} />
        <Solucao content={content} />
        <Portfolio content={content} />
        <ComoFunciona content={content} />
        <Investimento content={content} />
        <Sobre content={content} />
        <FAQ content={content} />
        <CTAFinal content={content} />
      </main>
      <Footer content={content} />
      <FloatingWhatsappBar message={content.floatingMessage} />
      <JsonLd data={jsonLd} />
    </div>
  );
}
