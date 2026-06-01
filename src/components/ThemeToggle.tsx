"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        const initialTheme = savedTheme || systemTheme;
        setTimeout(() => setTheme(initialTheme), 0);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-bg-secondary border border-border-primary text-text-secondary hover:text-primary hover:border-primary transition-all relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? 0 : -20,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon size={18} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === "light" ? 0 : 20,
                    opacity: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
            >
                <Sun size={18} />
            </motion.div>
            {/* Invisible placeholder to maintain width/height */}
            <div className="opacity-0">
                <Sun size={18} />
            </div>
        </button>
    );
}
