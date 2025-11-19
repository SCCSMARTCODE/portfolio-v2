"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ThemeToggle from "./ThemeToggle";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-bg-glass backdrop-blur-md border-b border-border-primary py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading text-primary tracking-tight">
                    EA<span className="text-accent">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-bg-primary transition-all text-sm font-medium"
                    >
                        Contact Me
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-primary p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-border-primary md:hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-border-primary">
                                <ThemeToggle />
                                <span className="text-text-secondary">Switch Theme</span>
                            </div>
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-2 rounded-full bg-primary text-bg-primary text-center font-medium hover:bg-primary-dark transition-colors"
                            >
                                Contact Me
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
