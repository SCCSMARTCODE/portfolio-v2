import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url.toString()}#profile-page`,
      url: siteConfig.url.toString(),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-US",
      mainEntity: {
        "@id": `${siteConfig.url.toString()}#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url.toString()}#person`,
      name: "Emmanuel Adewumi",
      alternateName: [
        siteConfig.brandName,
        "SCCSMARTCODE",
        "Emmanuel Ayobami",
        "Emmanuel Ayobami Adewumi",
      ],
      url: siteConfig.url.toString(),
      image: new URL("/sccsmartcode-profile.jpeg", siteConfig.url).toString(),
      email: siteConfig.email,
      jobTitle: [
        "Founding Product & AI Engineer at Inkriv",
        "Inkriv AI Engineer",
        "Machine Learning Researcher",
        "AI Systems Lead",
        "Full Stack Engineer",
      ],
      description:
        "Emmanuel Adewumi, known as SCCSMARTCODE, is a Founding Product & AI Engineer at Inkriv and Machine Learning Researcher building AI writing systems, agentic orchestration, RAG pipelines, backend infrastructure, and production AI products.",
      sameAs: siteConfig.socialLinks,
      worksFor: [
        {
          "@type": "Organization",
          "@id": `${siteConfig.url.toString()}#organization-inkriv`,
          name: "Inkriv",
          description:
            "AI writing assistant and personalization platform where Emmanuel Adewumi works as a Founding Product & AI Engineer.",
        },
        {
          "@type": "Organization",
          "@id": `${siteConfig.url.toString()}#organization-zeviel`,
          name: "Zeviel Law Firm",
        },
      ],
      alumniOf: [
        {
          "@type": "Organization",
          name: "ALX Africa",
        },
        {
          "@type": "Organization",
          name: "Prometheus AI Program",
        },
      ],
      knowsAbout: [
        "Inkriv engineering",
        "AI writing assistants",
        "Machine Learning",
        "Artificial Intelligence",
        "ML Research",
        "Deep Learning",
        "Agentic AI",
        "RAG Systems",
        "LLM Orchestration",
        "System Architecture",
        "FastAPI",
        "React",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url.toString()}#website`,
      url: siteConfig.url.toString(),
      name: siteConfig.name,
      alternateName: siteConfig.brandName,
      publisher: {
        "@id": `${siteConfig.url.toString()}#person`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col gap-20 md:gap-32 pb-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
