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
 * Eventos disparados:
 *
 * - `PageView` — automático, em todas as páginas.
 * - `ViewContent` — quando a seção de preço entra na tela. É o sinal de
 *   *intenção* do funil: separa quem só caiu na página de quem leu até o
 *   investimento. Serve para otimizar campanha sem depender do `Lead`,
 *   que é raro demais para o algoritmo aprender com verba baixa.
 * - `Lead` — disparado em `WhatsappGate`, na confirmação, e não no clique.
 *   Contar o clique cru inflava o evento com toque acidental (31 cliques
 *   para 1 conversa em ago/26), e a campanha otimizava em cima disso.
 */
export function MetaPixel() {
  useEffect(() => {
    // Chegou até o preço = interesse real. Dispara uma única vez por visita.
    const alvo = document.getElementById("investimento");
    let observer: IntersectionObserver | undefined;
    if (alvo) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              window.fbq?.("track", "ViewContent", {
                content_name: "investimento",
              });
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(alvo);
    }

    return () => observer?.disconnect();
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
