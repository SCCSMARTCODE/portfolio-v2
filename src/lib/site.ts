export const siteConfig = {
  name:
    process.env.NEXT_PUBLIC_SITE_NAME ??
    "Emmanuel Adewumi | Inkriv Founding AI Engineer & SCCSMARTCODE",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "SCCSMARTCODE",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Official portfolio of Emmanuel Adewumi, known as SCCSMARTCODE: Founding Product & AI Engineer at Inkriv, Machine Learning Researcher, and AI Systems Lead building intelligent architectures, production-ready full-stack applications, and applied AI products.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sccsmartcode.dev"),
  author: "Emmanuel Adewumi",
  brandName: "SCCSMARTCODE",
  email: "emmanuelay.adewumi@gmail.com",
  socialLinks: [
    "https://github.com/SCCSMARTCODE",
    "https://www.linkedin.com/in/sccsmartcode/",
    "https://x.com/SCCSMARTCODE",
    "https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg",
  ],
  keywords: [
    "SCCSMARTCODE",
    "Emmanuel Adewumi",
    "Emmanuel Ayobami",
    "Emmanuel Ayobami Adewumi",
    "Inkriv engineer",
    "Inkriv engineers",
    "Inkriv AI engineer",
    "Inkriv founding engineer",
    "Founding Product AI Engineer Inkriv",
    "Inkriv AI Writing Assistant",
    "Machine Learning",
    "ML Research",
    "AI Engineer",
    "AI Systems Lead",
    "Full Stack Engineer",
    "Systems Lead",
    "Zeviel Law Firm",
    "Inkriv",
    "Generative AI",
    "Deep Learning",
  ],
} as const;
