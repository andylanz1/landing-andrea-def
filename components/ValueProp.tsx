"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
    {
        n: "01",
        label: "AI propone",
        title: "Mappo. Estraggo. Riduco.",
        copy: "L'AI processa volumi che un umano non vede: documenti, dati, conversazioni. Output: opzioni reali, non slide motivazionali.",
    },
    {
        n: "02",
        label: "Io decido",
        title: "Cosa fare. Cosa fermare. Cosa eliminare.",
        copy: "La decisione resta umana. Tua o mia, mai dell'algoritmo. Ti dico esattamente cosa vedo, anche quando non vuoi sentirlo.",
    },
    {
        n: "03",
        label: "Risultati misurabili",
        title: "Numeri, non promesse.",
        copy: "Ogni intervento ha metriche definite a inizio mandato. Se a 90 giorni non ci siamo, lo dico io per primo.",
    },
];

export default function ValueProp() {
    return (
        <section
            id="metodo"
            className="bg-black border-t border-white/10 py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                    — Metodo
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading uppercase leading-[0.92] tracking-tighter mb-16 max-w-[1000px]"
                    style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
                >
                    AI propone <span className="text-accent-1">→</span> Io decido.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`py-10 md:py-12 ${
                                i === 0 ? "pr-0 md:pr-8" : "px-0 md:px-8"
                            } ${
                                i < 2
                                    ? "border-b md:border-b-0 md:border-r border-white/10"
                                    : ""
                            }`}
                        >
                            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1 mb-3">
                                — {p.n} · {p.label}
                            </div>
                            <h3 className="font-heading uppercase text-[28px] md:text-[30px] leading-[1.02] tracking-tight mb-4 text-white">
                                {p.title}
                            </h3>
                            <p className="text-text-secondary text-[17px] leading-[1.6]">
                                {p.copy}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
