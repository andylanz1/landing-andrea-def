"use client";

import React from "react";
import { motion } from "framer-motion";

const traps = [
    {
        n: "01",
        title: "Progetti deragliati",
        copy: "Parti con entusiasmo, fai 3 riunioni hype, dopo 3 mesi hai un Trello pieno di card e zero risultati tangibili. Conosco la storia, l'ho vissuta io stesso decine di volte.",
    },
    {
        n: "02",
        title: "Automazioni fragili",
        copy: "Il workflow funziona benissimo finchè non arriva l'imprevisto. Poi sgobbi 4 ore al giorno solo per tenerlo in piedi. Ti suona familiare?",
    },
    {
        n: "03",
        title: "Sistemi pieni, casse vuote",
        copy: "Tecnicamente tutto perfetto — dashboard, report, tracking pixel-perfect — ma a fine mese il fatturato è PIATTO. E lo so cosa vuol dire, anche per me è stato così.",
    },
    {
        n: "04",
        title: "Complessità inutile",
        copy: "17 tool in stack, 4 abbonamenti che nessuno usa più, un Notion da 600 pagine che nessuno legge. Stai BUTTANDO VIA SOLDI e soprattutto TEMPO, che è molto peggio.",
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
                        <span className="text-outline">FARE le cose</span>.<br />
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
                            tutorial gratis su YouTube, freelancer su Fiverr a 5€ l'ora.
                            Eppure le aziende non producono più RISULTATI, producono CASINO.
                        </p>
                        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white">
                            Sai perchè? Perchè nessuno ha il coraggio di dire NO.
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
