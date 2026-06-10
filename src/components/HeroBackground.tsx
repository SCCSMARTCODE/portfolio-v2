"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: -1000, y: -1000 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const angle = Math.atan2(dy, dx);
                    const force = (150 - distance) / 150;
                    const pushX = Math.cos(angle) * force * 0.5;
                    const pushY = Math.sin(angle) * force * 0.5;

                    this.x -= pushX;
                    this.y -= pushY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#4f46e5';
                ctx.globalAlpha = 0.5;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#4f46e5';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.globalAlpha = 1 - distance / 150;
                        ctx.stroke();
                    }
                }
                particles[i].update();
                particles[i].draw();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        />
    );
}
