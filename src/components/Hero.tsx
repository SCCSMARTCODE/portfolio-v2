"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Microscope,
  Sigma,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";
import HeroBackground from "./HeroBackground";

const stats = [
  { icon: BrainCircuit, value: "5+", label: "AI products deployed" },
  { icon: Microscope, value: "PROMETHEUS", label: "Research initiative" },
  { icon: GraduationCap, value: "ALX", label: "Software engineering alumni" },
];

const socials = [
  { icon: Github, href: "https://github.com/SCCSMARTCODE", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sccsmartcode/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SCCSMARTCODE", label: "X" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg", label: "YouTube" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border-secondary bg-bg-primary px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32"
    >
      <HeroBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_34rem)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-primary bg-bg-glass px-4 py-2 font-mono text-xs font-bold tracking-[0.16em] text-primary-light"
          >
            <Sparkles size={14} />
            RESEARCH_SYSTEM.ONLINE
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-2xl border-2 border-primary/60 bg-bg-tertiary shadow-[0_0_45px_rgba(124,58,237,0.35)] lg:hidden"
          >
            <Image
              src="/sccsmartcode-profile.jpeg"
              alt="Emmanuel Adewumi"
              width={224}
              height={224}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-5xl font-black leading-[0.95] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
          >
            Emmanuel
            <span className="block text-text-secondary">Adewumi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl lg:mx-0"
          >
            Founding Product & AI Engineer at Inkriv, machine learning
            researcher, and AI systems lead engineering the intersection of
            mathematics, scalable software, and intelligent product architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-mono text-sm font-black tracking-[0.12em] text-bg-primary transition hover:bg-primary-light"
            >
              <Sparkles size={18} />
              EXPLORE RESEARCH
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border-primary bg-bg-glass px-7 py-4 font-mono text-sm font-black tracking-[0.12em] text-text-primary transition hover:border-primary/60 hover:text-primary"
            >
              <Code2 size={18} />
              VIEW TRAJECTORY
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-10 flex justify-center gap-6 border-t border-border-primary pt-7 lg:justify-start"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-tertiary transition hover:text-primary"
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="hidden lg:block"
        >
          <div className="panel relative overflow-hidden rounded-lg p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid gap-7">
              <div className="flex items-end justify-between gap-8">
                <div className="h-56 w-56 overflow-hidden rounded-2xl border-2 border-primary/60 bg-bg-tertiary shadow-[0_0_60px_rgba(124,58,237,0.35)]">
                  <Image
                    src="/sccsmartcode-profile.jpeg"
                    alt="Emmanuel Adewumi"
                    width={448}
                    height={448}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-2 text-right">
                  <p className="mono-label text-xs text-text-tertiary">Current vector</p>
                  <p className="mt-2 max-w-56 text-2xl font-black leading-tight">
                    Where <span className="text-primary">mathematics</span>{" "}
                    meets code.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-md border border-border-secondary bg-bg-primary/45 p-4"
                  >
                    <div>
                      <p className="text-2xl font-black text-text-primary">{stat.value}</p>
                      <p className="mono-label mt-1 text-[0.66rem] text-text-tertiary">
                        {stat.label}
                      </p>
                    </div>
                    <stat.icon className="text-primary" size={22} />
                  </div>
                ))}
              </div>

              <div className="rounded-md border border-border-secondary bg-bg-primary/55 p-5">
                <Sigma className="mb-4 text-primary" size={28} />
                <p className="text-sm leading-7 text-text-secondary">
                  Dedicated to robust AI solutions that bridge theoretical
                  mathematics and production machine learning systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
