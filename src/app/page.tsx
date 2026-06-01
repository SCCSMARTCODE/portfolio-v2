import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author,
  alternateName: "Emmanuel Ayobami",
  url: siteConfig.url.toString(),
  image: new URL("/sccsmartcode-profile.jpeg", siteConfig.url).toString(),
  jobTitle: "Machine Learning Researcher & AI Systems Lead",
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: siteConfig.socialLinks,
  worksFor: [
    {
      "@type": "Organization",
      name: "Inkriv",
    },
    {
      "@type": "Organization",
      name: "Zeviel Law Firm",
    },
  ],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "ML Research",
    "Deep Learning",
    "System Architecture",
    "FastAPI",
    "React",
    "Next.js",
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
