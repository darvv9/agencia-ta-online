import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE.baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.baseUrl}/personal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // /advogados e /estetica pausados — fora do fluxo principal (sitemap).
    // As páginas continuam existindo e acessíveis por URL direta.
  ];
}
