import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      // Rota antiga renomeada para /clinicas. 308 permanente para preservar
      // qualquer anúncio/link que ainda aponte para /estetica.
      {
        source: "/estetica",
        destination: "/clinicas",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
