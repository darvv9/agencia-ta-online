"use client";

import { useEffect } from "react";
import Script from "next/script";

const PIXEL_ID = "1337926821631153";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta (Facebook) Pixel.
 *
 * - Carrega o pixel base via next/script (afterInteractive) e dispara PageView
 *   automaticamente em todas as páginas (montado no layout raiz).
 * - Registra um único listener delegado de clique que dispara o evento de
 *   conversão "Lead" sempre que um link de WhatsApp (wa.me / api.whatsapp.com)
 *   é clicado — cobre todos os botões/CTAs sem precisar tocar em cada um.
 *
 * O disparo do Lead NÃO impede a navegação: o fbq roda de forma síncrona
 * durante o evento de clique, antes da ação padrão do navegador.
 */
export function MetaPixel() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const isWhatsapp =
        href.includes("wa.me") || href.includes("api.whatsapp.com");
      if (!isWhatsapp) return;

      window.fbq?.("track", "Lead");
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- pixel de rastreio 1x1 dentro de <noscript>; next/image não se aplica */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
