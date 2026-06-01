"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Engineer & Systems Lead (Freelance)",
    company: "Zeviel Law Firm",
    period: "2024 - Present",
    description: "Led the rebuild and restructuring of Zeviel Law Firm's production platform, optimizing a complex frontend infrastructure into a refined, high-performance, single-stack Next.js environment. Taking ownership of the end-to-end system architecture, implementing backend stability paradigms, and optimizing database workflows for production reliability.",
    tags: ["Next.js", "System Architecture", "Frontend Optimization", "Database Management"]
  },
  {
    role: "Founding Product & AI Engineer",
    company: "Inkriv",
    period: "2024 - Present",
    description: "Spearheading the core development of Inkriv, bridging Advanced Agentic Orchestration for AI Personalization. Directing the architectural implementation of Adaptive Learning pipelines, ghostwriting inference, and memory injection across the model stack. Engineered zero-downtime robust Backend environments connecting multi-modal features.",
    tags: ["AI Personalization", "Agentic Orchestration", "Backend Engineering", "DevOps", "Adaptive Learning"]
  },
  {
    role: "Machine Learning & Deep Learning Trainee",
    company: "Prometheus AI Program",
    period: "2024 - 2025",
    description: "Completed an intensive program focused on machine learning and deep learning. Gained hands-on experience with model development, training, and deployment using PyTorch.",
    tags: ["PyTorch", "NLP", "Transformers", "Computer Vision", "LLM"]
  },
  {
    role: "Software Engineering Trainee",
    company: "ALX Africa",
    period: "2023 - 2024",
    description: "Completed a rigorous 12-month course covering foundational and advanced topics, including data structures, algorithms, system design, database management, and containerization.",
    tags: ["Python", "C", "SQL", "PostgreSQL", "Docker"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-border-primary ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-bg-primary shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-primary font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full text-sm w-fit">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-bg-glass border border-border-primary text-text-tertiary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
