"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, DatabaseZap, Rocket } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Research-grade reasoning",
    description:
      "I translate papers, model behavior, and mathematical foundations into systems with measurable product value.",
  },
  {
    icon: Cpu,
    title: "Systems ownership",
    description:
      "I design backend, data, deployment, and frontend flows as one coherent production surface.",
  },
  {
    icon: Rocket,
    title: "Product acceleration",
    description:
      "I build quickly without losing the fundamentals: reliability, maintainability, and user intent.",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "Deep Learning",
  "FastAPI",
  "RAG Systems",
  "Agentic AI",
  "PostgreSQL",
  "Docker",
  "Next.js",
  "React",
  "C",
  "C++",
  "System Architecture",
  "MLOps",
  "Multi-model AI",
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
            <h2 className="mt-6 max-w-xl font-heading text-4xl font-black leading-tight md:text-6xl">
              Architecting AI that survives contact with reality.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              I work across machine learning research, backend architecture, and
              full-stack product delivery. My strongest zone is turning a
              complex model or workflow into a clear, reliable system people can
              actually use, including the Inkriv AI writing and personalization
              stack.
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border-primary bg-bg-primary/60 text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-t border-border-primary pt-9"
        >
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h3 className="font-heading text-2xl font-black">Technical Arsenal</h3>
            <p className="mono-label text-xs text-text-tertiary">
              Research / Systems / Product
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border-primary bg-bg-secondary/55 px-4 py-2 font-mono text-xs font-bold text-text-secondary transition hover:border-primary/50 hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
