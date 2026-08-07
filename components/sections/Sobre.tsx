import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

/* TODO: substituir o avatar placeholder pela foto real.
   Quando o usuário enviar a foto, colocar em /public/sobre.jpg
   e substituir o bloco "avatar placeholder" abaixo por <Image src="/sobre.jpg" ... />. */

type Props = { content: NicheContent };

export function Sobre({ content }: Props) {
  const { sobre } = content;
  if (!sobre) return null;
  return (
    <Section ariaLabel="Sobre">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          {/* avatar placeholder — substituir por <Image src="/sobre.jpg" ... /> quando a foto chegar */}
          <div
            aria-hidden
            className="border-line bg-surface relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-inner sm:h-44 sm:w-44 md:h-48 md:w-48"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, color-mix(in oklab, var(--accent) 55%, transparent) 0%, transparent 75%)",
              }}
            />
            <Logo size="lg" className="relative" />
          </div>

          <div className="text-center md:text-left">
            <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
              Quem faz
            </p>
            <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl">
              {sobre.title}
            </h2>
            <div className="mt-6 space-y-4">
              {sobre.paragraphs.map((p, i) => (
                <p key={i} className="text-fg-muted text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
