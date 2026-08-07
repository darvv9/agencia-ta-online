import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

const ICONS = [
  // Site
  "M4 5h16v12H4z M4 9h16",
  // Google / busca local
  "M12 4v4 M12 4a8 8 0 100 16 8 8 0 008-8h-8",
  // WhatsApp
  "M3 12a9 9 0 1 1 4 7.5L3 21l1.6-3.8A9 9 0 0 1 3 12z",
  // Agendamento / calendário
  "M4 7h16v13H4z M4 11h16 M8 4v4 M16 4v4",
  // SEO / busca (lupa)
  "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M20 21l-4.35-4.35",
  // Acompanhamento / relatório (gráfico)
  "M5 20V10 M12 20V4 M19 20v-6 M4 20h16",
  // Cuidado / hospedagem (coração)
  "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z",
];

export function Solucao({ content }: Props) {
  const { solucao } = content;
  return (
    <Section ariaLabel="O que entregamos">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
            O que você recebe
          </p>
          <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {solucao.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{solucao.intro}</p>
        </div>
        {solucao.image && (
          <div className="border-line relative mx-auto mt-12 aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-3xl border">
            <Image
              src={solucao.image.src}
              alt={solucao.image.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <ul className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {solucao.items.map((item, i) => (
            <li
              key={i}
              className="border-line bg-card flex gap-4 rounded-2xl border p-6"
            >
              <div className="bg-primary/10 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d={ICONS[i % ICONS.length]} />
                </svg>
              </div>
              <div>
                <h3 className="text-fg text-lg font-semibold">{item.title}</h3>
                <p className="text-fg-muted mt-1.5 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
