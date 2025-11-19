import { Github, Linkedin, Twitter, Youtube, Heart, Coffee } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bg-secondary border-t border-border-primary pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2">
                            <span className="text-2xl">🧮</span> SCCSMARTCODE
                        </h2>
                        <p className="text-text-secondary leading-relaxed max-w-md mb-6">
                            <strong>Where Mathematics Meets Code.</strong> Building intelligent systems through mathematical precision,
                            crafting efficient algorithms, and bridging the gap between theoretical foundations and practical solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sccsmartcode/" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/SCCSMARTCODE" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Research & Focus Areas</h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Mathematical modeling of AI
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Neural network foundations
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Optimization algorithms
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Statistical learning theory
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border-secondary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
                    <p>&copy; {currentYear} SCCSMARTCODE. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> & <Coffee size={14} className="text-yellow-600" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
