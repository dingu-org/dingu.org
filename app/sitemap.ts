import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";

function lastModified(): Date {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", "app/page.tsx", "app/layout.tsx"],
      { cwd: process.cwd(), encoding: "utf8" },
    ).trim();
    if (iso) return new Date(iso);
  } catch {
    // git unavailable at build time (e.g. shallow deploy without history)
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dingu.org",
      lastModified: lastModified(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
