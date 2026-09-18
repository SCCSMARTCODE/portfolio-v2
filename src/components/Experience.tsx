"use client";

import { motion } from "framer-motion";
import { GitBranch, Milestone } from "lucide-react";

const experiences = [
  {
    role: "Systems Lead",
    company: "Zeviel Law Firm",
    period: "Mar 2026 - Present",
    bullets: [
      "Rebuilt the production platform into a high-performance Next.js architecture.",
      "Designed backend stability patterns and internal productivity/case-management tooling, alongside secure document workflows.",
    ],
    tags: ["Next.js", "System Arch", "Backend Ops"],
    logo: "https://www.zeviellawfirm.ca/img/Logo.png",
  },
  {
    role: "Founding Product & AI Engineer",
    company: "Inkriv",
    period: "Mar 2025 - Present",
    bullets: [
      "Built the backend architecture for training and serving in-house models: supervised fine-tuning, reward modeling, and reinforcement learning.",
      "Engineered an adaptive personalization system that learns a user's writing voice over time, built the product's MCP server, and shipped Inkriv Lens, a Chrome extension for real-time article fact-checking.",
    ],
    tags: ["Inkriv", "Model Training", "Reinforcement Learning", "MCP"],
    logo: "https://inkriv.com/logo/inkriv-logo-dark.svg",
  },
  {
    role: "ML Trainee",
    company: "Prometheus AI Program",
    period: "Jan 2024 - Feb 2025",
    bullets: [
      "Explored deep learning fundamentals through custom neural network architectures.",
      "Analyzed transformer mechanics and language model dynamics.",
    ],
    tags: ["PyTorch", "Transformers", "ML Theory"],
    logo: null,
  },
  {
    role: "Software Engineering",
    company: "Holberton School",
    period: "Jun 2023 - Jul 2024",
    bullets: [
      "Mastered algorithms, low-level programming semantics, and system design basics.",
      "Built foundations across C, Python, databases, and containerized workflows.",
    ],
    tags: ["Algorithms", "Systems C", "Data Structures"],
    logo: null,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-border-secondary bg-bg-secondary/18 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-kicker">
            <GitBranch size={14} />
            Trajectory
          </span>
          <h2 className="mt-6 font-heading text-4xl font-black leading-tight md:text-6xl">
            Experience Vector
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            A chronological mapping of professional milestones, algorithmic
            deployment, and systemic optimization.
          </p>
        </motion.div>

        <div className="relative ml-3 border-l border-primary/45 pl-7 md:ml-10 md:pl-12">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative pb-7 last:pb-0"
            >
              <div className="absolute -left-[2.15rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-bg-primary md:-left-[3.35rem]">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="panel rounded-lg p-6 md:p-7">
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mono-label mb-2 text-xs text-primary-light">
                      {experience.period}
                    </p>
                    <h3 className="font-heading text-2xl font-black md:text-3xl">
                      {experience.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      {experience.logo && (
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-5 w-5 shrink-0 rounded bg-white/90 object-contain p-0.5 md:hidden"
                        />
                      )}
                      <p className="text-text-secondary">{experience.company}</p>
                    </div>
                  </div>
                  {experience.logo ? (
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="hidden h-12 w-12 shrink-0 rounded-lg bg-white/90 object-contain p-2 md:block"
                    />
                  ) : (
                    <Milestone className="hidden text-primary md:block" size={24} />
                  )}
                </div>

                <ul className="space-y-3 text-sm leading-6 text-text-secondary md:text-base">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border-primary bg-bg-primary/55 px-3 py-1 font-mono text-[0.68rem] font-bold text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
