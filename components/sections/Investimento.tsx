import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

function Check() {
  return (
    <svg
      className="text-primary mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Investimento({ content }: Props) {
  const { investimento } = content;
  const cta = whatsappUrl(investimento.ctaMessage);

  return (
    <Section id="investimento" variant="surface" ariaLabel="Investimento">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
            Investimento
          </p>
          <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {investimento.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{investimento.intro}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Setup */}
          <article className="border-line bg-card relative flex flex-col rounded-3xl border p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-fg text-2xl tracking-tight">
                {investimento.setup.label}
              </h3>
              <span className="bg-bg text-fg-subtle rounded-full px-3 py-1 text-[10px] tracking-wider uppercase">
                {investimento.setup.tag}
              </span>
            </div>
            <div className="mt-6">
              <p className="font-display text-fg text-5xl tracking-tight">
                {investimento.setup.price}
              </p>
              <p className="text-fg-subtle mt-2 text-sm">
                {investimento.setup.installments}
              </p>
            </div>
            <ul className="mt-7 space-y-3">
              {investimento.setup.bullets.map((b, i) => (
                <li key={i} className="text-fg flex gap-2.5 text-[0.95rem]">
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Monthly */}
          <article className="border-primary/30 bg-primary text-primary-fg relative flex flex-col overflow-hidden rounded-3xl border p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40"
              style={{
                background:
                  "radial-gradient(40rem 18rem at 80% 0%, color-mix(in oklab, var(--accent) 38%, transparent) 0%, transparent 75%)",
              }}
            />
            <div className="relative flex items-center justify-between">
              <h3 className="font-display text-2xl tracking-tight">
                {investimento.monthly.label}
              </h3>
              <span className="bg-primary-fg/10 text-primary-fg rounded-full px-3 py-1 text-[10px] tracking-wider uppercase">
                {investimento.monthly.tag}
              </span>
            </div>
            <div className="relative mt-6 flex items-baseline gap-2">
              <p className="font-display text-5xl tracking-tight">
                {investimento.monthly.price}
              </p>
              <span className="text-primary-fg/70 text-base">
                {investimento.monthly.period}
              </span>
            </div>
            <ul className="relative mt-7 space-y-3">
              {investimento.monthly.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-primary-fg flex gap-2.5 text-[0.95rem]"
                >
                  <svg
                    className="text-accent mt-0.5 h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <Button href={cta} external variant="whatsapp" size="lg">
            <WhatsappIcon className="h-5 w-5" />
            {investimento.ctaLabel}
          </Button>
          <p className="text-fg-subtle mt-5 max-w-xl text-sm">
            {investimento.footnote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
