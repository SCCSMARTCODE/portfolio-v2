"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, Microscope, Star } from "lucide-react";

const projects = [
  {
    title: "Inkriv AI Writing Assistant",
    description:
      "Founding AI research and engineering work at Inkriv: engineered the LLM post-training pipeline for in-house models, including dataset curation, supervised fine-tuning, reward modeling, and preference optimization (RLHF/DPO). Built an adaptive personalization engine that learns a user's writing voice, alongside Inkriv Lens for real-time article fact-checking, and the product's Model Context Protocol (MCP) server.",
    tags: ["Reward Modeling", "RLHF / DPO", "Preference Learning", "Inkriv Lens", "MCP"],
    category: "AI & ML",
    github: null,
    demo: "https://inkriv.com/",
    stars: null,
    featured: true,
    logo: "https://inkriv.com/logo/inkriv-logo-dark.svg",
    tone: "from-violet-500/18",
  },
  {
    title: "PureGold Events",
    description:
      "A full operating system for event planners, built for a luxury event planning brand. Tracks vetted vendor records (so planners never get burned by unreliable vendors), transactions, and client loyalty; gives clients a portal to follow and monitor their own event in real time; and auto-generates a portfolio case study straight from a completed project. Currently in beta.",
    tags: ["Next.js", "Operations Platform", "Client Portal"],
    category: "Web Dev",
    github: null,
    demo: "https://puregold.sccsmartcode.dev/",
    stars: null,
    featured: true,
    logo: null,
    tone: "from-yellow-500/16",
  },
  {
    title: "Zeviel Law Firm",
    description:
      "Production platform for a Calgary-based law firm, rebuilt on Next.js as Systems Lead: secure document workflows and internal productivity tooling behind a professional client-facing site.",
    tags: ["Next.js", "Legal Tech", "Systems Architecture"],
    category: "Web Dev",
    github: null,
    demo: "https://www.zeviellawfirm.ca/",
    stars: null,
    featured: true,
    logo: "https://www.zeviellawfirm.ca/img/Logo.png",
    tone: "from-slate-500/16",
  },
  {
    title: "SCCSMARTCODE Portfolio",
    description:
      "Personal portfolio site built end-to-end on Next.js, with an experience timeline, filterable project showcase, and a research-lab visual identity for presenting AI engineering and systems work.",
    tags: ["Next.js", "Personal Brand", "Design Systems"],
    category: "Web Dev",
    github: "https://github.com/SCCSMARTCODE",
    demo: "https://sccsmartcode.dev/",
    stars: null,
    featured: true,
    logo: "/sccsmartcode-logo.jpg",
    tone: "from-cyan-400/16",
  },
  {
    title: "SMARTMULTIMEDIA",
    description:
      "Marketing and booking site for a multimedia production studio offering videography, photography, and live streaming services for brands, events, and creators.",
    tags: ["Next.js", "Web Design", "Media"],
    category: "Web Dev",
    github: null,
    demo: "https://smartmultimedia.me/",
    stars: null,
    featured: false,
    logo: "https://smartmultimedia.me/brand/logo.png",
    tone: "from-orange-500/14",
  },
  {
    title: "SafeX Labs",
    description:
      "Privacy-aware edge surveillance using multimodal LLMs for real-time frame classification, contextual analysis, and autonomous decision-making.",
    tags: ["Edge AI", "Multimodal LLM", "Computer Vision"],
    category: "AI & ML",
    github: null,
    demo: null,
    stars: null,
    featured: true,
    logo: null,
    tone: "from-cyan-500/16",
  },
  {
    title: "CChatAPP",
    description:
      "Low-level chat system built in C with socket programming and GTK, demonstrating memory management and client-server design.",
    tags: ["C", "POSIX Sockets", "GTK"],
    category: "Systems",
    github: "https://github.com/SCCSMARTCODE/CChatAPP",
    demo: null,
    stars: "-",
    featured: true,
    logo: null,
    tone: "from-emerald-500/16",
  },
  {
    title: "Attention from Scratch",
    description:
      "Transformer implementation from first principles, focused on self-attention, positional encodings, and model internals.",
    tags: ["PyTorch", "Mathematics", "Transformers"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/attention-is-all-you-need-from-scratch",
    demo: null,
    stars: "1",
    featured: false,
    logo: null,
    tone: "from-sky-500/14",
  },
  {
    title: "GPT-2 from Scratch",
    description:
      "Complete GPT-2 architecture implementation with attention mechanisms and training pipeline fundamentals.",
    tags: ["PyTorch", "NLP", "From Scratch"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/gpt2-from-scratch",
    demo: null,
    stars: "-",
    featured: false,
    logo: null,
    tone: "from-fuchsia-500/14",
  },
  {
    title: "RAG Grammar Enhancer",
    description:
      "Real-time language refinement system using retrieval-augmented generation for contextual grammar and fluency suggestions.",
    tags: ["RAG", "NLP", "Retrieval"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/RAG-Grammar-Enhancer",
    demo: null,
    stars: "-",
    featured: false,
    logo: null,
    tone: "from-amber-500/14",
  },
  {
    title: "VerisBot",
    description:
      "Enterprise AI chatbot built with FastAPI and Hugging Face inference for production-grade conversational workflows.",
    tags: ["FastAPI", "Gemma-2", "Production"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/VerisBot",
    demo: null,
    stars: "-",
    featured: false,
    logo: null,
    tone: "from-indigo-500/14",
  },
  {
    title: "LinguaSync",
    description:
      "Neural machine translation app with Transformer architecture, Flask interface, and Dockerized deployment.",
    tags: ["Transformers", "Translation", "Docker"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/LinguaSync",
    demo: null,
    stars: "-",
    featured: false,
    logo: null,
    tone: "from-teal-500/14",
  },
  {
    title: "SMP MultiSchool Website",
    description:
      "Digital learning platform for multi-school academic collaboration, resources, and management workflows.",
    tags: ["Flask", "Education", "Web App"],
    category: "Web Dev",
    github: "https://github.com/SCCSMARTCODE/SMP-MultiSchool-Website-Project",
    demo: null,
    stars: "-",
    featured: false,
    logo: null,
    tone: "from-rose-500/14",
  },
];

const categories = ["All", "AI & ML", "Systems", "Web Dev"];

function truncateDescription(text: string, max = 150) {
  if (text.length <= max) return text;
  const truncated = text.slice(0, max);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">
              <Microscope size={14} />
              12+ Projects
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-tight md:text-6xl">
              Featured Innovations
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              A curated selection of technical research, systems engineering,
              and machine learning implementations.
            </p>
          </div>
        </motion.div>

        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-md border px-5 py-2.5 font-mono text-xs font-bold tracking-[0.1em] transition ${
                activeCategory === category
                  ? "btn-primary border-primary shadow-sm"
                  : "border-border-primary bg-bg-secondary/60 text-text-secondary hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                className={`panel group relative min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-br ${project.tone} to-transparent p-6 ${
                  project.featured ? "md:min-h-[25rem]" : ""
                }`}
              >
                <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:22px_22px]" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-8 w-8 shrink-0 rounded border border-border-primary bg-white object-contain p-1 shadow-sm"
                        />
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.featured && (
                          <span className="rounded-full border border-primary/35 bg-primary/15 px-3 py-1 font-mono text-[0.66rem] font-black tracking-[0.12em] text-primary">
                            FEATURED
                          </span>
                        )}
                        <span className="rounded-full border border-border-primary bg-bg-tertiary/70 px-3 py-1 font-mono text-[0.66rem] font-bold text-text-secondary">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} code`}
                          className="text-text-secondary transition hover:text-primary"
                        >
                          <Github size={19} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} demo`}
                          className="text-text-secondary transition hover:text-primary"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-black text-text-primary transition group-hover:text-primary md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-text-secondary">
                      {expanded[project.title]
                        ? project.description
                        : truncateDescription(project.description)}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [project.title]: !prev[project.title],
                          }))
                        }
                        className="mt-2 font-mono text-xs font-bold tracking-[0.06em] text-primary transition hover:text-primary-dark"
                      >
                        {expanded[project.title] ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border-primary bg-bg-tertiary/60 px-3 py-1 font-mono text-[0.68rem] font-bold text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.stars && project.stars !== "-" && (
                      <div className="mt-5 flex items-center gap-1 text-xs text-text-tertiary">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        {project.stars} star
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
