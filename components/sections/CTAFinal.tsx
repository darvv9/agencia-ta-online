import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function CTAFinal({ content }: Props) {
  const { ctaFinal } = content;
  return (
    <Section id="contato" ariaLabel="Comece agora">
      <Container size="narrow">
        <div
          className="border-line bg-card relative isolate overflow-hidden rounded-3xl border p-10 text-center sm:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(45rem 22rem at 50% 0%, color-mix(in oklab, var(--accent) 25%, transparent) 0%, transparent 70%)",
            }}
          />
          <h2 className="font-display text-fg text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {ctaFinal.title}
          </h2>
          <p className="text-fg-muted mx-auto mt-5 max-w-xl text-lg">
            {ctaFinal.subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={whatsappUrl(ctaFinal.ctaMessage)}
              external
              variant="whatsapp"
              size="lg"
            >
              <WhatsappIcon className="h-5 w-5" />
              {ctaFinal.buttonLabel}
            </Button>
          </div>
          <p className="text-fg-subtle mt-5 text-sm">
            Abre a conversa no WhatsApp. Sem formulário e sem compromisso.
          </p>
        </div>
      </Container>
    </Section>
  );
}
