"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, Youtube, Terminal } from "lucide-react";
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import { useState, useEffect } from "react";

const GlitchText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const scramble = () => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    prev
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return text[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Initial scramble
        scramble();

        // Random glitch effect every few seconds
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.8) {
                iteration = 0;
                scramble();
            }
        }, 5000);

        return () => {
            clearInterval(interval);
            clearInterval(glitchInterval);
        };
    }, [text]);

    return <span className="font-mono text-primary">{displayText}</span>;
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
            <HeroBackground />

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start max-w-5xl mx-auto">

                    {/* Terminal-style Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-8 text-primary/80 font-mono text-sm md:text-base bg-primary/5 px-4 py-2 rounded border border-primary/10"
                    >
                        <Terminal size={16} />
                        <span>researcher_profile.init()</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight tracking-tight text-text-primary"
                    >
                        Emmanuel <br />
                        <span className="text-text-secondary">Adewumi</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed font-light"
                    >
                        <p className="mb-4">
                            Engineering intelligent systems at the intersection of <GlitchText text="Mathematics" /> and <GlitchText text="Machine Learning" />.
                        </p>
                        <p className="text-text-tertiary text-lg">
                            Building scalable architectures for the next generation of AI.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-6 mb-16"
                    >
                        <Link
                            href="#projects"
                            className="group relative px-8 py-4 bg-text-primary text-bg-primary font-bold rounded-none overflow-hidden transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 w-full h-full bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                View Research
                                <ArrowRight size={20} />
                            </span>
                        </Link>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-text-primary/20 text-text-primary font-medium hover:bg-text-primary/5 transition-all flex items-center gap-2"
                        >
                            Download CV
                            <Download size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex gap-8 border-t border-border-primary pt-8 w-full"
                    >
                        <a href="https://github.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors"><Github size={24} /></a>
                        <a href="https://linkedin.com/in/emmanuelayobami" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors"><Linkedin size={24} /></a>
                        <a href="https://x.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors"><Twitter size={24} /></a>
                        <a href="https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors"><Youtube size={24} /></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
