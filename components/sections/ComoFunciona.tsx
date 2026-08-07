import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function ComoFunciona({ content }: Props) {
  const { comoFunciona } = content;
  if (!comoFunciona) return null;
  return (
    <Section ariaLabel="Como funciona">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
            Como funciona
          </p>
          <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {comoFunciona.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{comoFunciona.intro}</p>
        </div>
        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {comoFunciona.steps.map((step, i) => (
            <li
              key={i}
              className="border-line bg-card relative rounded-2xl border p-6"
            >
              <span className="font-display text-accent text-5xl leading-none tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-fg mt-4 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
