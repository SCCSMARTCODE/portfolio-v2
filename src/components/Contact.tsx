"use client";

import { motion } from "framer-motion";
import { AtSign, BriefcaseBusiness, Github, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const channels = [
  { label: "GitHub", href: "https://github.com/SCCSMARTCODE", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sccsmartcode/", icon: Linkedin },
  { label: "X Network", href: "https://x.com/SCCSMARTCODE", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg", icon: Youtube },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border-secondary bg-bg-secondary/20 py-20 pb-32 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">
              <AtSign size={14} />
              Open Channel
            </span>
            <h2 className="mt-6 font-heading text-5xl font-black leading-tight md:text-7xl">
              Let&apos;s Build the Future.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              Available for remote research, systems architecture, AI products,
              and collaboration on technically ambitious work.
            </p>

            <a
              href="mailto:emmanuelay.adewumi@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-md border border-border-primary bg-bg-glass px-5 py-4 font-mono text-sm font-bold text-text-primary transition hover:border-primary/60 hover:text-primary"
            >
              <BriefcaseBusiness size={18} />
              emmanuelay.adewumi@gmail.com
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="panel rounded-lg p-6 md:p-8"
          >
            <div className="grid gap-7">
              <div>
                <label htmlFor="name" className="mono-label text-sm text-text-secondary">
                  Identifier
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-3 w-full border-0 border-b border-border-primary bg-transparent px-0 py-3 text-lg text-text-primary outline-none transition placeholder:text-text-tertiary focus:border-primary"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mono-label text-sm text-text-secondary">
                  Comm_Channel
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-3 w-full border-0 border-b border-border-primary bg-transparent px-0 py-3 text-lg text-text-primary outline-none transition placeholder:text-text-tertiary focus:border-primary"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label htmlFor="message" className="mono-label text-sm text-text-secondary">
                  Payload
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-3 w-full resize-none border-0 border-b border-border-primary bg-transparent px-0 py-3 text-lg text-text-primary outline-none transition placeholder:text-text-tertiary focus:border-primary"
                  placeholder="Initialize message sequence..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary px-6 py-4 font-mono text-sm font-black tracking-[0.14em] text-bg-primary transition hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
              >
                {status === "loading" ? "TRANSMITTING..." : "TRANSMIT DATA"}
                <Send size={17} />
              </button>

              {status === "success" && (
                <p className="font-mono text-sm font-bold text-emerald-400">
                  Message transmitted successfully.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-sm font-bold text-red-400">
                  Transmission failed. Please try again.
                </p>
              )}
            </div>
          </motion.form>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex min-h-36 flex-col items-center justify-center gap-4 rounded-lg p-5 text-center transition hover:border-primary/50"
            >
              <channel.icon className="text-text-secondary transition group-hover:text-primary" size={32} />
              <span className="font-mono text-sm font-bold tracking-[0.14em] text-text-primary">
                {channel.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
