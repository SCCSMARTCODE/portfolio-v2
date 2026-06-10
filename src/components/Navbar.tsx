"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AtSign, BriefcaseBusiness, Home, Menu, Microscope, X, Zap } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ThemeToggle from "./ThemeToggle";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Experience", href: "#experience", icon: Zap },
  { name: "Projects", href: "#projects", icon: Microscope },
  { name: "Contact", href: "#contact", icon: AtSign },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "border-border-primary bg-bg-primary/82 py-3 backdrop-blur-xl"
            : "border-transparent bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link
            href="#home"
            className="font-mono text-xs font-black tracking-[0.22em] text-text-primary"
          >
            SCC<span className="text-primary">SMART</span>CODE
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-bg-glass hover:text-text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary px-4 py-2 text-sm font-bold text-bg-primary transition hover:bg-primary-light"
            >
              <BriefcaseBusiness size={16} />
              Collaborate
            </a>
          </div>

          <button
            type="button"
            className="rounded-md border border-border-primary bg-bg-glass p-2 text-text-primary md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-5 mt-4 rounded-lg border border-border-primary bg-bg-secondary/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-text-secondary hover:bg-bg-glass hover:text-text-primary"
              >
                <link.icon size={17} />
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border-primary px-3 pt-3">
              <span className="text-sm text-text-tertiary">Theme</span>
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </header>

      <nav className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-border-primary bg-bg-primary/88 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[0.65rem] font-bold text-text-secondary transition hover:bg-primary/15 hover:text-text-primary"
            >
              <link.icon size={18} />
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
