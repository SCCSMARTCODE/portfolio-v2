"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  Star,
  } from "lucide-react";

const projects = [
  {
    title: "SafeX Labs",
    description:
      "Intelligent, privacy-aware edge surveillance system designed for real-time situational awareness. Features a two-layer intelligence architecture using Multimodal LLMs for frame classification and contextual analysis. Highly configurable and adaptive, providing autonomous decision-making at the edge.",
    tags: [
      "Edge AI",
      "Multimodal LLM",
      "Computer Vision",
      "LangChain",
      "Privacy-First",
    ],
    category: "AI & ML",
    github: null,
    demo: null,
    stars: null,
    featured: true,
  },
  {
    title: "Inkriv AI Writing Assistant",
    description:
      "AI-powered writing assistant with personalized, adaptive AI. Built complete system from scratch at VingtAI, including ghostwriting pipeline, retrieval engine, and multi-model orchestration.",
    tags: ["FastAPI", "Advanced LLM", "RAG", "AI Memory", "PostgreSQL"],
    category: "AI & ML",
    github: null,
    demo: null,
    stars: null,
    featured: true,
  },
  {
    title: "CChatAPP",
    description:
      "System engineering project built entirely in C from scratch using Socket Programming and GTK for the GUI. Demonstrates low-level network programming, memory management, and client-server architecture without reliance on high-level frameworks.",
    tags: [
      "C",
      "Socket Programming",
      "GTK",
      "System Engineering",
      "Network Programming",
    ],
    category: "Systems",
    github: "https://github.com/SCCSMARTCODE/CChatAPP",
    demo: null,
    stars: "-",
    featured: true,
  },
  {
    title: "Attention is All You Need",
    description:
      "Complete implementation of the groundbreaking Transformer architecture from the 'Attention is All You Need' paper. Deep dive into self-attention and positional encoding.",
    tags: ["PyTorch", "Transformers", "Attention", "From Scratch"],
    category: "AI & ML",
    github:
      "https://github.com/SCCSMARTCODE/attention-is-all-you-need-from-scratch",
    demo: null,
    stars: "1",
  },
  {
    title: "GPT-2 from Scratch",
    description:
      "Complete implementation of GPT-2 architecture from scratch, providing deep understanding of generative pre-trained transformers. Includes attention mechanisms and training pipelines.",
    tags: ["PyTorch", "Transformers", "NLP", "From Scratch"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/gpt2-from-scratch",
    demo: null,
    stars: "-",
  },
  {
    title: "RAG Grammar Enhancer",
    description:
      "Real-time language refinement system using Retrieval-Augmented Generation. Corrects grammar and fluency issues while providing contextually relevant suggestions.",
    tags: ["RAG", "NLP", "Grammar", "Retrieval"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/RAG-Grammar-Enhancer",
    demo: null,
    stars: "-",
  },
  {
    title: "VerisBot",
    description:
      "Production-grade enterprise AI chatbot built with FastAPI and powered by Hugging Face Inference API. Features Google Gemma-2-2b-it model for accurate responses.",
    tags: ["FastAPI", "AI Chatbot", "Gemma-2", "Production"],
    category: "APIs",
    github: "https://github.com/SCCSMARTCODE/VerisBot",
    demo: null,
    stars: "-",
  },
  {
    title: "LinguaSync",
    description:
      "Neural Machine Translation system with Transformer architecture. Features Flask web interface and Docker containerization for scalable deployment.",
    tags: ["Transformers", "Translation", "Flask", "Docker"],
    category: "AI & ML",
    github: "https://github.com/SCCSMARTCODE/LinguaSync",
    demo: null,
    stars: "-",
  },
  {
    title: "SMP MultiSchool Website",
    description:
      "Comprehensive digital learning platform for multi-school academic collaboration and resource management.",
    tags: ["Flask", "Education", "Web App"],
    category: "Web Dev",
    github: "https://github.com/SCCSMARTCODE/SMP-MultiSchool-Website-Project",
    demo: null,
    stars: "-",
  },
  {
    title: "EchoDAT",
    description:
      "Innovative web application for music groups to enhance collaboration, share resources, and coordinate activities.",
    tags: ["Web App", "Music", "Collaboration"],
    category: "Web Dev",
    github: "https://github.com/SCCSMARTCODE/EchoDAT",
    demo: null,
    stars: "-",
  },
];

const categories = ["All", "AI & ML", "Web Dev", "APIs", "Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A showcase of my latest work in AI, machine learning, and software
            engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === category
                  ? "bg-primary border-primary text-bg-primary font-medium"
                  : "bg-bg-secondary border-border-primary text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className={`group rounded-2xl bg-bg-glass border border-border-primary overflow-hidden hover:border-primary/50 transition-all hover:shadow-glow ${
                  project.featured
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-bg-glass to-primary/5"
                    : ""
                }`}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2 flex-wrap">
                      {project.featured && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/20">
                          FEATURED
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-bg-secondary text-text-tertiary text-xs font-medium border border-border-secondary">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-tertiary hover:text-primary transition-colors"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-tertiary hover:text-primary transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-bg-secondary/50 text-text-tertiary text-xs border border-border-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.stars && project.stars !== "-" && (
                    <div className="mt-4 flex items-center gap-1 text-xs text-text-tertiary">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span>{project.stars} stars</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
