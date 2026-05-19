"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault();
        const form = document.getElementById("contact-form");
        if (form) form.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="top"
            className="relative overflow-hidden pt-32 pb-36 md:pt-40 md:pb-44 bg-black"
        >
            {/* Faint cyan glow accent in corner */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-48 -right-48 w-[600px] h-[600px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,217,255,0.08) 0%, rgba(0,0,0,0) 60%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-8"
                >
                    Consulente strategico · dal 2007
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                    className="font-heading uppercase leading-[0.92] tracking-tighter mb-8 max-w-[1100px]"
                    style={{ fontSize: "clamp(64px, 11vw, 176px)" }}
                >
                    Quando il tuo business<br />
                    è nel{" "}
                    <span className="text-accent-1">CASINO</span>,<br />
                    chi cavolo chiami?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-text-secondary max-w-[720px] mb-12 font-normal leading-[1.5]"
                    style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
                >
                    Quando tutto sembra urgente, ogni decisione sembra sbagliata e ogni
                    "esperto" ti dice una cosa diversa. Ecco, è{" "}
                    <span className="text-white">lì che ti servo io</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex gap-4 flex-wrap items-center"
                >
                    <a
                        href="#contact-form"
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-3 px-7 py-4 bg-accent-1 text-white font-bold uppercase tracking-wide hover:bg-[#FF6A22] transition-colors"
                        style={{ boxShadow: "0 0 0 1px rgba(255,77,0,0.4), 0 8px 32px rgba(255,77,0,0.35)" }}
                    >
                        Scrivimi ora <span className="font-mono">→</span>
                    </a>
                    <a
                        href="#metodo"
                        className="inline-flex items-center gap-3 px-6 py-[14px] border-2 border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
                    >
                        Capisci se è per te
                    </a>
                </motion.div>

                {/* Bottom meta line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center gap-8 flex-wrap mt-24 pt-6 border-t border-white/10 font-mono text-[11px] tracking-[0.14em] uppercase text-white/40"
                >
                    <span>
                        <span className="text-accent-1">●</span> Disponibile — solo 2 slot al mese
                    </span>
                    <span>Base · Milano</span>
                    <span>ITA · ENG</span>
                    <span className="ml-auto">Scroll ↓</span>
                </motion.div>
            </div>
        </section>
    );
}
