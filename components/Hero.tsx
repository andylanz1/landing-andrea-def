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
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-light/30 rounded-full blur-[120px] animate-float opacity-60" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-2/20 rounded-full blur-[120px] animate-float opacity-50" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-accent-1/20 rounded-full blur-[100px] animate-float opacity-40" style={{ animationDelay: "4s" }} />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
                        <span className="block text-white mb-2">
                            Se vuoi qualcuno che esegue, <br className="hidden md:block" />
                            l'AI basta.
                        </span>
                        <span className="text-gradient block">
                            Se vuoi qualcuno che decide, <br className="hidden md:block" />
                            ti servo io.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed">
                        Non vendo ore. Non vendo task. <br />
                        Mi prendo la responsabilità delle decisioni quando il contesto è confuso,
                        i sistemi sono fragili e l'errore costa caro.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="font-medium text-accent-1"
                    >
                        👉 Questo non è per tutti.
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Button
                        size="lg"
                        onClick={scrollToForm}
                        rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        className="group text-lg px-10 py-6 h-auto"
                    >
                        Richiedi una Call Esplorativa
                    </Button>
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
