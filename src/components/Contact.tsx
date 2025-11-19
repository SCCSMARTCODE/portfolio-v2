"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Youtube, Twitter } from "lucide-react";
import { useState } from "react";

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
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-heading mb-4">Get in Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        Feel free to reach out! Let's build something amazing together. 🚀
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-bg-secondary text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary">Email</p>
                                    <a href="mailto:emmanuelay.adewumi@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        emmanuelay.adewumi@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-bg-secondary text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary">Location</p>
                                    <p className="text-lg font-medium">Available Remote</p>
                                </div>
                            </div>
                        </div>

                        <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-bg-secondary text-text-secondary hover:bg-primary hover:text-bg-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/emmanuelayobami" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-bg-secondary text-text-secondary hover:bg-primary hover:text-bg-primary transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-bg-secondary text-text-secondary hover:bg-primary hover:text-bg-primary transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-bg-secondary text-text-secondary hover:bg-primary hover:text-bg-primary transition-all">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-bg-glass border border-border-primary rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 rounded-lg bg-primary text-bg-primary font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-green-500 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
