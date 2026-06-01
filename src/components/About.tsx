"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Rocket,
} from "lucide-react";

const philosophies = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Research-Driven Innovation",
    description:
      "As a PROMETHEUS AI Research Team Member, I translate complex research papers into practical applications with solid theoretical foundations.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    title: "Production Excellence",
    description:
      "Currently building Inkriv - an AI-powered writing assistant with advanced LLM capabilities, retrieval systems, and AI memory.",
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "Continuous Learning",
    description:
      "ALX Software Engineering Graduate with a systematic approach to building innovative solutions that solve real-world problems.",
  },
];

const skills = [
  "Python",
  "Deep Learning",
  "Machine Learning",
  "PyTorch",
  "C",
  "C++",
  "Flask",
  "FastAPI",
  "SQL",
  "PostgreSQL",
  "Docker",
  "RAG Systems",
  "Multi-model AI",
  "Git",
  "GitHub",
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Engineering the future through innovation and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse-glow opacity-50 blur-md"></div>
              <img
                src="/sccsmartcode-profile.jpeg"
                alt="Emmanuel Ayobami (SCCSMARTCODE) Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-bg-secondary shadow-2xl"
              />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Hello, I&apos;m <span className="text-primary">Emmanuel Ayobami</span> (SCCSMARTCODE)
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Passionate{" "}
              <strong className="text-text-primary">
                Machine Learning Researcher & AI Systems Lead
              </strong>{" "}
              driven by the mathematical foundations that power our digital
              world. I am constantly seeking opportunities to drive cutting-edge ML research and build the next big thing.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I specialize in building intelligent architectures, from advanced Agentic Orchestration and Deep Learning to real-time Personalization engines. I design scalable backends and engineer robust systems that bridge the gap between rigorous mathematical theory and practical, production-ready AI products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-bg-glass border border-border-primary hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-bg-secondary/50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-bg-secondary border border-border-primary text-text-secondary hover:text-primary hover:border-primary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
