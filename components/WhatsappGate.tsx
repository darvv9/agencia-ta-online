"use client";

import { useCallback, useEffect, useState } from "react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";

type Pendente = { url: string; origem: string };

/**
 * Confirmação antes de abrir o WhatsApp.
 *
 * Por que existe: a campanha de ago/26 registrou 31 cliques em CTA de WhatsApp
 * e apenas 1 conversa real (3%). O clique direto é fácil demais de disparar sem
 * querer — a pílula flutuante fica na zona do polegar — e o Meta, otimizando
 * pelo evento `Lead`, passou a comprar gente que encosta no botão.
 *
 * Este passo intermediário faz duas coisas:
 * 1. Toque acidental não abre mais o WhatsApp nem conta como `Lead`.
 * 2. O evento `Lead` volta a significar intenção, que é o que a campanha otimiza.
 *
 * O `Lead` é disparado AQUI (na confirmação), não no clique — por isso o
 * listener correspondente saiu do `MetaPixel`.
 */
export function WhatsappGate() {
  const [pendente, setPendente] = useState<Pendente | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const isWhatsapp =
        href.includes("wa.me") || href.includes("api.whatsapp.com");
      if (!isWhatsapp) return;

      event.preventDefault();

      const origem =
        anchor
          .closest("[data-track-section]")
          ?.getAttribute("data-track-section") ??
        anchor.closest("section")?.id ??
        "desconhecido";

      setPendente({ url: href, origem });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!pendente) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPendente(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [pendente]);

  const confirmar = useCallback(() => {
    if (!pendente) return;
    window.fbq?.("track", "Lead", { content_name: pendente.origem });
    window.open(pendente.url, "_blank", "noopener,noreferrer");
    setPendente(null);
  }, [pendente]);

  if (!pendente) return null;

  let mensagem = "";
  try {
    mensagem = new URL(pendente.url).searchParams.get("text") ?? "";
  } catch {
    mensagem = "";
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confirmar conversa no WhatsApp"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setPendente(null)}
    >
      <div
        className="border-line bg-card w-full max-w-md rounded-3xl border p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-display text-fg text-xl tracking-tight sm:text-2xl">
          Falar agora no WhatsApp?
        </h2>
        <p className="text-fg-muted mt-3 text-sm">
          Vamos abrir uma conversa com a nossa equipe. Você pode editar a
          mensagem antes de enviar.
        </p>

        {mensagem && (
          <p className="border-line bg-surface text-fg mt-5 rounded-2xl border p-4 text-sm">
            “{mensagem}”
          </p>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
          <button
            type="button"
            onClick={confirmar}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#128C7E] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#0f7a6d] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5f55]"
          >
            <WhatsappIcon className="h-5 w-5" />
            Abrir WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setPendente(null)}
            className="text-fg-muted hover:text-fg rounded-full px-6 py-3.5 text-sm font-medium transition-colors"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}
