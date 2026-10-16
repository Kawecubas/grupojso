import type { MetadataRoute } from "next";
import { proyectos } from "@/lib/data";

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.grupojso.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url, priority: 1 },
    { url: `${url}/proyectos`, priority: 0.8 },
    ...proyectos.map((p) => ({ url: `${url}/proyectos/${p.slug}`, priority: 0.6 })),
  ];
}
