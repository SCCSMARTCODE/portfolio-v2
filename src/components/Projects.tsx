"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, Microscope, Star } from "lucide-react";

const projects = [
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
    tone: "from-cyan-500/16",
  },
  {
    title: "Inkriv AI Writing Assistant",
    description:
      "Inkriv engineering work on an adaptive AI writing assistant with ghostwriting inference, retrieval, memory, and multi-model orchestration.",
    tags: ["Inkriv", "FastAPI", "RAG", "AI Memory"],
    category: "AI & ML",
    github: null,
    demo: null,
    stars: null,
    featured: true,
    tone: "from-violet-500/18",
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
    tone: "from-amber-500/14",
  },
  {
    title: "VerisBot",
    description:
      "Enterprise AI chatbot built with FastAPI and Hugging Face inference for production-grade conversational workflows.",
    tags: ["FastAPI", "Gemma-2", "Production"],
    category: "APIs",
    github: "https://github.com/SCCSMARTCODE/VerisBot",
    demo: null,
    stars: "-",
    featured: false,
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
    tone: "from-rose-500/14",
  },
];

const categories = ["All", "AI & ML", "Systems", "APIs", "Web Dev"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
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
              8+ Projects
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
                  ? "border-primary bg-primary/18 text-primary-light"
                  : "border-border-primary bg-bg-secondary/45 text-text-secondary hover:border-primary/50 hover:text-primary"
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
                  <div className="mb-10 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-primary/35 bg-primary/15 px-3 py-1 font-mono text-[0.66rem] font-black tracking-[0.12em] text-primary-light">
                          FEATURED
                        </span>
                      )}
                      <span className="rounded-full border border-border-primary bg-bg-primary/45 px-3 py-1 font-mono text-[0.66rem] font-bold text-text-secondary">
                        {project.category}
                      </span>
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

                  <div className="mt-auto">
                    <h3 className="font-heading text-2xl font-black transition group-hover:text-primary-light md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border-primary bg-bg-primary/55 px-3 py-1 font-mono text-[0.68rem] font-bold text-text-secondary"
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
