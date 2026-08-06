import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/whatsapp";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function Hero({ content }: Props) {
  const { hero } = content;
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
      <Container className="text-center">
        <p className="font-display text-fg-muted text-xs tracking-[0.25em] uppercase sm:text-sm">
          {hero.eyebrow}
        </p>
        <h1 className="font-display text-fg mt-6 text-4xl leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          {hero.h1Lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="text-fg-muted mx-auto mt-7 max-w-2xl text-lg sm:text-xl">
          {hero.subhead}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={whatsappUrl(hero.primaryCtaMessage)}
            external
            size="lg"
          >
            {hero.primaryCtaLabel}
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
          <Button
            href={content.portfolio ? "#portfolio" : "#investimento"}
            variant="secondary"
            size="lg"
          >
            {hero.secondaryCtaLabel}
          </Button>
        </div>
      </Container>
    </header>
  );
}
