import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Landing de una sola página: la home es la única URL indexable
// (las secciones internas son anclas #, no rutas propias).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/informacion-importante`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
