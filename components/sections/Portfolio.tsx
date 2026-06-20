import { BrowserMock } from "@/components/ui/BrowserMock";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

/* Demos com `href` viram cards clicáveis (abrem o site real em nova aba) e,
   quando há `image`, mostram um screenshot real dentro do mock de browser.
   Sem `href`, o card cai no estado "Em breve" com o mock vazio.
   Dados em: lib/content/[niche].ts → portfolio.demos[i] */

type Props = { content: NicheContent };

export function Portfolio({ content }: Props) {
  const { portfolio } = content;
  return (
    <Section id="portfolio" variant="surface" ariaLabel="Portfólio">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
            Portfólio
          </p>
          <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {portfolio.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{portfolio.intro}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {portfolio.demos.map((demo, i) => {
            const card = (
              <>
                <div className="relative">
                  <BrowserMock
                    name={demo.name}
                    bullets={demo.bullets}
                    url={demo.url}
                    image={demo.image}
                  />
                  <span className="bg-card border-line text-fg-subtle absolute top-3 right-3 rounded-full border px-2.5 py-1 text-[10px] tracking-wider uppercase">
                    {demo.href ? "No ar" : "Em breve"}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-fg text-xl tracking-tight">
                      {demo.name}
                    </h3>
                    <p className="text-fg-subtle mt-1 text-sm">{demo.kind}</p>
                    {demo.href && demo.url ? (
                      <p className="text-fg-subtle mt-1 text-xs">{demo.url}</p>
                    ) : null}
                  </div>
                  {demo.href ? (
                    <span className="text-primary group-hover:text-fg shrink-0 text-sm font-medium underline-offset-4 group-hover:underline">
                      Ver site →
                    </span>
                  ) : (
                    <span className="text-fg-subtle shrink-0 text-sm">
                      Em breve
                    </span>
                  )}
                </div>
              </>
            );

            return demo.href ? (
              <a
                key={i}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver o site ${demo.name} (abre em nova aba)`}
                className="group border-line bg-card hover:border-primary/40 block overflow-hidden rounded-3xl border p-5 transition-colors sm:p-6"
              >
                {card}
              </a>
            ) : (
              <article
                key={i}
                className="border-line bg-card overflow-hidden rounded-3xl border p-5 sm:p-6"
              >
                {card}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
