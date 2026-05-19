"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault();
        const form = document.getElementById("contact-form");
        if (form) form.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="bg-black border-t border-white/10 py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-14 border-2 border-white bg-black"
                    style={{ boxShadow: "12px 12px 0 var(--color-accent-1)" }}
                >
                    {/* Eyebrow chip overlapping border */}
                    <div className="absolute -top-3 left-8 bg-black px-3 font-mono text-[11px] tracking-[0.18em] uppercase text-accent-1">
                        — Quote
                    </div>

                    <h2
                        className="font-heading uppercase leading-[0.98] tracking-tighter"
                        style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
                    >
                        &ldquo;L'AI accelera tutto.<br />
                        Anche gli errori.<br />
                        Io servo a <span className="text-accent-1">evitarli</span>.&rdquo;
                    </h2>

                    <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between gap-6 flex-wrap">
                        <div>
                            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-secondary">
                                Andrea Lanzone
                            </div>
                            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40 mt-1">
                                Consulente strategico
                            </div>
                        </div>

                        <a
                            href="#contact-form"
                            onClick={scrollToForm}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-accent-1 text-white font-bold uppercase tracking-wide text-sm hover:bg-[#FF6A22] transition-colors"
                            style={{
                                boxShadow:
                                    "0 0 0 1px rgba(255,77,0,0.4), 0 8px 32px rgba(255,77,0,0.35)",
                            }}
                        >
                            Scrivimi <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                <p className="mt-8 text-center text-text-secondary text-sm leading-[1.6] max-w-2xl mx-auto">
                    Non compilare il form se non hai un problema reale. Scrivimi SOLO se
                    il contesto è incasinato e le decisioni contano davvero qualcosa per
                    il tuo business. Altrimenti ci perdiamo il tempo entrambi.
                </p>
            </div>
        </section>
    );
}
