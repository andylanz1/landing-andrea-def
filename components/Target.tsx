"use client";

import React from "react";
import { motion } from "framer-motion";

const forYou = [
    "Gestisci complessità reale (non 'ho bisogno di un sitarello', per quello chiama un freelance).",
    "Hai già provato 'esperti' e tool inutili e ti hanno svuotato il portafoglio.",
    "Vuoi meno caos, non più output.",
    "Capisci che l'errore costa più dell'azione lenta.",
    "Vuoi qualcuno che ti dica anche NO (e che ti spieghi perchè).",
    "Sei pronto a fermare progetti che non funzionano.",
];

const notForYou = [
    "Cerchi esecuzione low-cost (qui Fiverr fa il suo lavoro meglio di me).",
    "Vuoi solo qualcuno che 'faccia' senza capire il perchè.",
    "Vuoi mantenere il controllo di ogni micro-decisione (allora che mi paghi a fare?).",
    "Pensi che l'AI sia una bacchetta magica.",
    "Cerchi uno che ti dica sempre di SÌ (esistono già, costano molto meno e ti rovineranno l'azienda).",
];

export default function Target() {
    return (
        <section
            id="perchi"
            className="bg-black border-t border-white/10 py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                    — Per chi
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading uppercase leading-[0.92] tracking-tighter mb-16 max-w-[900px]"
                    style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
                >
                    Questo non è<br />per tutti.
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10">
                    {/* For You */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: "#4ADE80" }}
                            />
                            <span
                                className="font-mono text-[11px] tracking-[0.18em] uppercase"
                                style={{ color: "#4ADE80" }}
                            >
                                Per te se
                            </span>
                        </div>
                        <ul className="space-y-4">
                            {forYou.map((t, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-4"
                                >
                                    <span
                                        className="font-mono text-xs shrink-0 mt-1"
                                        style={{ color: "#4ADE80" }}
                                    >
                                        →
                                    </span>
                                    <span className="text-white text-[17px] md:text-lg leading-[1.5]">
                                        {t}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For You */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-white/30" />
                            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40">
                                Non per te se
                            </span>
                        </div>
                        <ul className="space-y-4">
                            {notForYou.map((t, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="font-mono text-xs text-white/40 shrink-0 mt-1">
                                        ×
                                    </span>
                                    <span className="text-text-secondary text-[17px] md:text-lg leading-[1.5] line-through decoration-white/15">
                                        {t}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
