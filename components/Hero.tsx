"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const scrollToForm = () => {
        const form = document.getElementById("contact-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary px-4 sm:px-6 lg:px-8">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10" />

            <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-12"
                >
                    <h1 className="flex flex-col items-center justify-center font-heading font-black leading-[0.85] tracking-tighter uppercase overflow-hidden">
                        <span className="text-accent-1 text-7xl md:text-9xl lg:text-[180px] xl:text-[220px]">
                            Se vuoi
                        </span>
                        <span className="text-outline text-7xl md:text-9xl lg:text-[180px] xl:text-[220px]">
                            L'AI basta
                        </span>
                        <span className="text-white text-7xl md:text-9xl lg:text-[180px] xl:text-[220px]">
                            TI SERVO IO
                        </span>
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-8">
                        <p className="text-xl md:text-2xl text-text-secondary font-medium tracking-tight border-l-4 border-accent-1 pl-6 py-2 text-left">
                            Non vendo ore. Non vendo task. <br />
                            Mi prendo la responsabilità delle decisioni quando il contesto è confuso,
                            i sistemi sono fragili e l'errore costa caro.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                            <Button
                                size="lg"
                                onClick={scrollToForm}
                                className="group w-full md:w-auto h-20 text-xl px-12"
                            >
                                START THE ENGINE →
                            </Button>

                            <p className="text-accent-1 font-bold tracking-widest text-sm uppercase">
                                👉 Questo non è per tutti.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles (Simplified for performance) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5 + Math.random() * 5,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
