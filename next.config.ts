import type { NextConfig } from "next";
import { proyectos } from "./lib/data";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "static.wixstatic.com" }],
    formats: ["image/avif", "image/webp"],
  },
  // Redirecciones 301 desde las URLs del sitio Wix para conservar el SEO
  async redirects() {
    return proyectos.map((p) => ({
      source: p.rutaAntigua,
      destination: `/proyectos/${p.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
