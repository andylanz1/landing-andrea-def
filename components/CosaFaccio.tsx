"use client";

import React from "react";
import { motion } from "framer-motion";

const donts = [
    "Non ti faccio la strategia e poi sparisco lasciandoti un PDF",
    "Non eseguo task a lista come un dipendente esterno",
    "Non vendo ore, vendo risultati e decisioni",
    "Non implemento cose in cui non credo, anche se insisti",
    "Non aggiungo AI 'perché va di moda' — solo dove ha senso economico",
];

const dos = [
    "Decido priorità quando tutto sembra urgente",
    "Smonto sistemi che non stanno in piedi prima che collassino",
    "Riduco errori prima che diventino costosi",
    "Uso l'AI come leva strategica, non come giocattolo",
    "Mi prendo la responsabilità del risultato, non solo del processo",
];

export default function CosaFaccio() {
    return (
        <section id="what-i-do" className="bg-black border-t border-white/10">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                    — Cosa faccio
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading uppercase leading-[0.92] tracking-tighter max-w-[1100px]"
                    style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
                >
                    Quello che <span className="text-accent-1">faccio</span>
                    <br />
                    <span className="text-outline">(e quello che no)</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-white/10">
                {/* DONTS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10 bg-black"
                >
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-2 h-2 bg-white/40" />
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60">
                            Cosa NON faccio
                        </span>
                    </div>
                    <ul className="space-y-6">
                        {donts.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-start gap-4 text-text-secondary text-lg leading-[1.55]"
                            >
                                <span className="font-mono text-sm text-white/40 shrink-0 mt-1">
                                    ×
                                </span>
                                <span className="line-through decoration-white/15">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* DOS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-16 lg:p-20 bg-black relative"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,77,0,0.03) 0%, rgba(0,0,0,0) 100%)",
                    }}
                >
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-2 h-2 bg-accent-1" />
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent-1">
                            Cosa faccio
                        </span>
                    </div>
                    <ul className="space-y-6">
                        {dos.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-start gap-4 text-white text-lg leading-[1.55]"
                            >
                                <span className="font-mono text-sm text-accent-1 shrink-0 mt-1">
                                    →
                                </span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
