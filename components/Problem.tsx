"use client";

import React from "react";
import { motion } from "framer-motion";

const traps = [
    {
        n: "01",
        title: "Progetti che si arenano",
        copy: "Iniziative partite con entusiasmo. Dopo 3 mesi: zero risultati, energia bruciata, nessuno che dica STOP.",
    },
    {
        n: "02",
        title: "Automazioni fragili",
        copy: "Workflow che si rompono al primo imprevisto. Manutenzione manuale costante. Costo nascosto: il tuo tempo.",
    },
    {
        n: "03",
        title: "Funnel tecnicamente perfetti",
        copy: "Stack impeccabile. Conversion rate ottimo. Fatturato reale: zero. Nessuno collega i numeri alla decisione.",
    },
    {
        n: "04",
        title: "Complessità che si accumula",
        copy: "Nuovo tool ogni mese. Nuova persona ogni trimestre. L'azienda rallenta invece di accelerare.",
    },
];

export default function Problem() {
    return (
        <section
            id="problem"
            className="relative bg-black border-t border-white/10 py-24 md:py-32 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:mb-24">
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                        — Il problema
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading uppercase leading-[0.92] tracking-tighter max-w-[1100px]"
                        style={{ fontSize: "clamp(40px, 7vw, 112px)" }}
                    >
                        Il problema non è{" "}
                        <span className="text-outline">fare le cose</span>.<br />
                        È <span className="text-accent-1">decidere</span> cosa NON fare.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-10 max-w-2xl border-l-2 border-accent-1 pl-6 py-2"
                    >
                        <p className="text-lg md:text-xl text-text-secondary leading-[1.55] mb-4">
                            Oggi tutti hanno accesso agli stessi strumenti: AI, software,
                            tutorial, freelancer. Eppure le aziende accumulano complessità
                            invece di risultati.
                        </p>
                        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white">
                            Nessuno si assume la responsabilità di dire di no.
                        </p>
                    </motion.div>
                </div>

                {/* 4 traps grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                    {traps.map((t, i) => (
                        <motion.div
                            key={t.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-8 md:p-10 border-r border-b border-white/10 group hover:bg-accent-1 transition-colors duration-200"
                        >
                            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1 group-hover:text-black mb-4">
                                — {t.n}
                            </div>
                            <h3 className="font-heading uppercase text-2xl md:text-[28px] leading-[1.02] tracking-tight mb-4 text-white group-hover:text-black">
                                {t.title}
                            </h3>
                            <p className="text-text-secondary text-[15px] leading-[1.6] group-hover:text-black/80">
                                {t.copy}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
