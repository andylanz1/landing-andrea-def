"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        n: "01",
        label: "Mandato chiaro",
        title: "Definiamo perimetro e responsabilità",
        copy: "Non 'fammi un'offerta'. Ecco il problema, ecco cosa decidiamo, ecco il confine.",
    },
    {
        n: "02",
        label: "Intervento mirato",
        title: "Decido cosa si fa, cosa si ferma, cosa si elimina",
        copy: "Tolgo il superfluo prima di aggiungere. L'AI mappa, io taglio.",
    },
    {
        n: "03",
        label: "Sistema semplice",
        title: "Meno strumenti. Meno persone. Più chiarezza",
        copy: "Un sistema che funziona anche senza di me. Documentato. Replicabile.",
    },
    {
        n: "04",
        label: "Uscita pulita",
        title: "Niente dipendenza, autonomia operativa",
        copy: "Ti lascio sapere fare, non solo cose fatte. Se serve, torno. Se non serve, non torno.",
    },
];

export default function Process() {
    return (
        <section
            id="process"
            className="bg-black border-t border-white/10 py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                    — Come funziona
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading uppercase leading-[0.92] tracking-tighter mb-16 max-w-[1000px]"
                    style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
                >
                    4 step. <span className="text-accent-1">Niente fuffa.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 md:p-10 border-r border-b border-white/10 relative"
                        >
                            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1 mb-4">
                                — Step {s.n}
                            </div>
                            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40 mb-3">
                                {s.label}
                            </div>
                            <h3 className="font-heading uppercase text-2xl leading-[1.02] tracking-tight text-white mb-4">
                                {s.title}
                            </h3>
                            <p className="text-text-secondary text-[15px] leading-[1.6]">
                                {s.copy}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
