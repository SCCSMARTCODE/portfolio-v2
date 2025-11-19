"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Founder & Lead Engineer",
        company: "SafeX Labs",
        period: "2025 - Present",
        description:
            "Building the future of intelligent surveillance with SafeX-Agent. Developing a privacy-first, adaptive edge monitoring system that utilizes Multimodal LLMs for real-time situational awareness. The system is highly configurable, allowing users to monitor any environment based on their specific needs, providing automated decision-making and alerting without reliance on centralized cloud infrastructure.",
        tags: ["Edge AI", "Multimodal LLM", "Computer Vision", "LangChain", "Privacy-First"],
    },
    {
        role: "Product & AI Engineer",
        company: "VingtAI",
        period: "2025 - Present",
        description:
            "Spearheading the development of Inkriv, focusing on AI Personalization and Adaptive Learning. Architecting Advanced Agentic Orchestration systems, including ghostwriting pipelines and AI Memory. Responsible for the complete Backend Engineering (API & Database management) and DevOps (Deployment & Server management), ensuring scalable and robust infrastructure.",
        tags: ["AI Personalization", "Adaptive Learning", "Agentic Orchestration", "Backend Engineering", "DevOps"],
    },
    {
        role: "Software Engineering Intern",
        company: "HNG Internship",
        period: "2025",
        description:
            "Collaborated with diverse teams to develop and deploy real-world applications. Enhanced skills in software development, version control, and agile methodologies.",
        tags: ["FastAPI", "Flask", "PostgreSQL"],
    },
    {
        role: "Machine Learning & Deep Learning Trainee",
        company: "Prometheus AI Program",
        period: "2024 - 2025",
        description:
            "Completed an intensive program focused on machine learning and deep learning. Gained hands-on experience with model development, training, and deployment using PyTorch.",
        tags: ["PyTorch", "NLP", "Transformers", "Computer Vision", "LLM"],
    },
    {
        role: "Software Engineering Trainee",
        company: "ALX Africa",
        period: "2023 - 2024",
        description:
            "Completed a rigorous 12-month course covering foundational and advanced topics, including data structures, algorithms, system design, database management, and containerization.",
        tags: ["Python", "C", "SQL", "PostgreSQL", "Docker"],
    },
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
                    <h2 className="text-4xl font-bold font-heading mb-4">Professional Experience</h2>
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
                                        <h3 className="text-2xl font-bold text-text-primary">{exp.role}</h3>
                                        <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
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
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-bg-glass border border-border-primary text-text-tertiary">
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
