"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, BrainCircuit, Code, Cpu, DatabaseZap, Network, Scale, Terminal } from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "LLM Post-Training & Preference Optimization",
    description:
      "I specialize in dataset engineering, supervised fine-tuning, reward modeling, and preference learning (RLHF / DPO) to align AI models with user intent.",
  },
  {
    icon: Brain,
    title: "Research-grade Reasoning",
    description:
      "I translate research papers, model internals, and mathematical foundations into empirical systems with measurable product value.",
  },
  {
    icon: Cpu,
    title: "End-to-End System Ownership",
    description:
      "I design data pipelines, model serving endpoints, backend architecture, and client interfaces as one coherent production surface.",
  },
];

const postTrainingPipeline = [
  "Human & Synthetic Data",
  "Dataset Engineering",
  "Supervised Fine-tuning",
  "Reward Modeling",
  "Preference Learning (DPO/RLHF)",
  "Model Evaluation",
  "Inference & Model Serving",
  "Production AI System",
];

const technicalArsenal = [
  {
    category: "AI Research & Model Post-Training",
    icon: BrainCircuit,
    highlight: true,
    skills: [
      "Reward Modeling",
      "RLHF",
      "DPO",
      "Preference Learning",
      "LLM Fine-tuning",
      "Transformers",
      "NLP",
      "Deep Learning",
      "Model Evaluation",
      "Dataset Engineering",
      "Mathematical Modeling",
    ],
  },
  {
    category: "AI Systems & Infrastructure",
    icon: Network,
    highlight: false,
    skills: [
      "LLMs",
      "RAG Systems",
      "Agentic AI",
      "MCP",
      "Multi-model AI",
      "Embeddings",
      "Vector Databases",
      "Model Serving",
      "LLMOps",
    ],
  },
  {
    category: "Engineering & Backend",
    icon: Terminal,
    highlight: false,
    skills: [
      "Python",
      "PyTorch",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "System Architecture",
    ],
  },
  {
    category: "Frontend & Core Systems",
    icon: Code,
    highlight: false,
    skills: ["Next.js", "React", "C", "C++"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">
              <DatabaseZap size={14} />
              Operating System
            </span>
            <h2 className="mt-6 max-w-xl font-heading text-4xl font-black leading-tight text-text-primary md:text-6xl">
              Architecting LLM alignment & AI research that survives contact with reality.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              I work across LLM post-training research (reward modeling, DPO, RLHF, preference learning), model fine-tuning, and scalable production architecture. My core focus is converting complex alignment methodologies and mathematical research into reliable, high-performance product systems.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel rounded-lg p-6"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border-primary bg-bg-tertiary/70 text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-text-primary">{item.title}</h3>
                    <p className="mt-2 leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Post-Training Research Flow Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel mt-16 rounded-xl p-6 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Scale className="text-primary" size={20} />
              <h3 className="font-mono text-sm font-black tracking-[0.14em] text-text-primary">
                LLM POST-TRAINING & PREFERENCE PIPELINE
              </h3>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] font-bold text-primary">
              RESEARCH METHODOLOGY
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {postTrainingPipeline.map((step, index) => (
              <div key={step} className="flex items-center gap-2 md:gap-3">
                <span
                  className={`rounded-md border px-3.5 py-2 font-mono text-xs font-bold transition ${
                    step.includes("Reward") || step.includes("Preference") || step.includes("Fine-tuning")
                      ? "border-primary/50 bg-primary/15 text-primary shadow-sm"
                      : "border-border-primary bg-bg-tertiary/60 text-text-secondary"
                  }`}
                >
                  {step}
                </span>
                {index < postTrainingPipeline.length - 1 && (
                  <ArrowRight size={14} className="text-text-tertiary shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Technical Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 border-t border-border-primary pt-10"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-kicker mb-3">
                <Terminal size={14} />
                Capability Spectrum
              </span>
              <h3 className="font-heading text-3xl font-black text-text-primary md:text-4xl">
                Technical Arsenal
              </h3>
            </div>
            <p className="mono-label text-xs text-text-tertiary">
              Model Research / AI Infrastructure / Full-Stack Engineering
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technicalArsenal.map((group) => (
              <div
                key={group.category}
                className={`panel rounded-lg p-6 ${
                  group.highlight ? "border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-transparent" : ""
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-primary bg-bg-tertiary/70 text-primary">
                    <group.icon size={20} />
                  </div>
                  <h4 className="font-mono text-sm font-black tracking-[0.08em] text-text-primary">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-md border px-3.5 py-2 font-mono text-xs font-bold transition ${
                        group.highlight
                          ? "border-primary/45 bg-primary/15 text-text-primary hover:border-primary"
                          : "border-border-primary bg-bg-tertiary/60 text-text-secondary hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
