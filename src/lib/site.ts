export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "SCCSMARTCODE | Machine Learning Researcher & AI Engineer",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "SCCSMARTCODE",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Portfolio of SCCSMARTCODE (Emmanuel Ayobami), a Machine Learning Researcher and AI Systems Lead building intelligent architectures, production-ready full-stack applications, and predictive models like Inkriv and Zeviel Law Firm.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sccsmartcode.dev"),
  author: "SCCSMARTCODE",
  email: "emmanuelay.adewumi@gmail.com",
  socialLinks: [
    "https://github.com/SCCSMARTCODE",
    "https://www.linkedin.com/in/sccsmartcode/",
    "https://x.com/SCCSMARTCODE",
    "https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg",
  ],
  keywords: [
    "SCCSMARTCODE",
    "Emmanuel Ayobami",
    "Machine Learning",
    "ML Research",
    "AI Engineer",
    "Full Stack Engineer",
    "Systems Lead",
    "Zeviel Law Firm",
    "Inkriv",
    "Generative AI",
    "Deep Learning",
  ],
} as const;