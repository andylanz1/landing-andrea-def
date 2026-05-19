"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, BrainCircuit } from "lucide-react";

const useCases = [
    {
        n: "01",
        title: "Accelero analisi che richiederebbero giorni",
        copy: "Documenti, report, conversazioni: l'AI li digerisce in minuti. Io leggo il pattern.",
    },
    {
        n: "02",
        title: "Simulo scenari prima di decidere",
        copy: "Stress-test su ipotesi, vie alternative, conseguenze. Decisione informata, non istintiva.",
    },
    {
        n: "03",
        title: "Stresso le ipotesi per trovare i punti deboli",
        copy: "Dove si rompe? Cosa abbiamo dato per scontato? L'AI fa il devil's advocate, io chiudo.",
    },
    {
        n: "04",
        title: "Riduco il costo dell'errore",
        copy: "Test virtuali prima di toccare il reale. Sbagli in sandbox, non in produzione.",
    },
];

export default function ComeUsoAI() {
    return (
        <section
            id="ai-usage"
            className="bg-black border-t border-white/10"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-white/10">
                {/* LEFT: copy + use cases */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-16 lg:p-20 lg:border-r border-white/10"
                >
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                        — Come uso l'AI
                    </div>

                    <h2
                        className="font-heading uppercase leading-[0.92] tracking-tighter mb-10"
                        style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                    >
                        Sì, uso l'AI.<br />
                        <span className="text-outline">Ovunque</span>{" "}
                        <span className="text-accent-1">sia utile</span>.
                    </h2>

                    <p className="text-white text-lg md:text-xl leading-[1.55] mb-10 font-medium">
                        Non ti faccio pagare l'AI. Ti faccio pagare{" "}
                        <span className="text-accent-1">le decisioni</span> che prendo
                        usando l'AI.
                    </p>

                    <ul className="space-y-6">
                        {useCases.map((u, i) => (
                            <motion.li
                                key={u.n}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="border-b border-white/10 pb-5"
                            >
                                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1 mb-2">
                                    / {u.n}
                                </div>
                                <div className="text-white text-lg md:text-xl font-medium leading-snug mb-2">
                                    {u.title}
                                </div>
                                <p className="text-text-secondary text-[15px] leading-[1.55]">
                                    {u.copy}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT: brutalist diagram */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center p-10 md:p-16 lg:p-20"
                    style={{ background: "#0A0A0A" }}
                >
                    <div className="relative z-10 w-full max-w-md">
                        <div
                            className="border-2 p-10 md:p-12 bg-black"
                            style={{
                                borderColor: "#FFFFFF",
                                boxShadow: "12px 12px 0 var(--color-accent-1)",
                            }}
                        >
                            <div className="flex flex-col gap-10">
                                <div className="border-l-4 border-accent-1 pl-5">
                                    <Bot className="w-12 h-12 text-accent-1 mb-3" />
                                    <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-secondary mb-1">
                                        — Step 01
                                    </div>
                                    <div className="font-heading uppercase text-2xl md:text-[28px] tracking-tight text-white leading-[1.02]">
                                        AI propose
                                    </div>
                                    <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/40 mt-2">
                                        Scenari · Modelli · Opzioni
                                    </p>
                                </div>

                                <div className="h-px w-full bg-white/20 relative">
                                    <div className="absolute -top-[6px] left-1/2 -ml-[6px] w-3 h-3 bg-accent-1 rotate-45" />
                                </div>

                                <div className="border-r-4 border-white pr-5 text-right">
                                    <BrainCircuit className="w-12 h-12 text-white mb-3 ml-auto" />
                                    <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-secondary mb-1">
                                        — Step 02
                                    </div>
                                    <div className="font-heading uppercase text-2xl md:text-[28px] tracking-tight text-white leading-[1.02]">
                                        Io decido
                                    </div>
                                    <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/40 mt-2">
                                        Giudizio · Contesto · Controllo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 text-text-secondary text-[15px] leading-[1.55]">
                            L'AI suggerisce 10 opzioni.{" "}
                            <span className="text-white">
                                Io scelgo l'unica che funziona nel tuo contesto
                            </span>
                            .
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
