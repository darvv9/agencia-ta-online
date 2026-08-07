import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function Hero({ content }: Props) {
  const { hero } = content;
  const hasImage = Boolean(hero.image);

  const texto = (
    <>
      <p className="font-display text-fg-muted text-xs tracking-[0.25em] uppercase sm:text-sm">
        {hero.eyebrow}
      </p>
      <h1 className="font-display text-fg mt-6 text-4xl leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
        {hero.h1Lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p
        className={`text-fg-muted mt-7 text-lg sm:text-xl ${
          hasImage ? "" : "mx-auto max-w-2xl"
        }`}
      >
        {hero.subhead}
      </p>
      <div
        className={`mt-10 flex flex-col gap-3 sm:flex-row ${
          hasImage ? "items-stretch sm:items-center" : "items-center justify-center"
        }`}
      >
        <Button
          href={whatsappUrl(hero.primaryCtaMessage)}
          external
          variant="whatsapp"
          size="lg"
        >
          <WhatsappIcon className="h-5 w-5" />
          {hero.primaryCtaLabel}
        </Button>
        <Button
          href={content.portfolio ? "#portfolio" : "#investimento"}
          variant="secondary"
          size="lg"
        >
          {hero.secondaryCtaLabel}
        </Button>
      </div>
      {hero.ctaHint && (
        <p
          className={`text-fg-subtle mt-4 text-sm ${
            hasImage ? "" : "mx-auto"
          }`}
        >
          {hero.ctaHint}
        </p>
      )}
    </>
  );

  return (
    <header className="bg-bg relative isolate overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% 0%, color-mix(in oklab, var(--accent) 28%, transparent) 0%, transparent 70%)",
        }}
      />
      <Container className={hasImage ? "" : "text-center"}>
        {hasImage ? (
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>{texto}</div>
            {/* Mesma pessoa dos criativos do anúncio: quem clica reconhece
                a página em que caiu e não bate de frente com um muro de texto. */}
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
              <div className="border-line bg-surface relative aspect-[3/4] overflow-hidden rounded-3xl border shadow-sm">
                <Image
                  src={hero.image!.src}
                  alt={hero.image!.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 340px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ) : (
          texto
        )}
      </Container>
    </header>
  );
}
