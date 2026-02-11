"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const donts = [
    "Non 'ti faccio la strategia' e poi sparisco lasciandoti con un PDF",
    "Non eseguo task a lista come un dipendente esterno",
    "Non vendo ore ma risultati e decisioni",
    "Non implemento cose in cui non credo anche se insisti",
    "Non aggiungo AI 'perché va di moda' ma solo dove ha senso economico",
];

const dos = [
    "Decido priorità quando tutto sembra urgente",
    "Smonto sistemi che non stanno in piedi prima che collassino",
    "Riduco errori prima che diventino costosi",
    "Uso l'AI come leva strategica non come giocattolo",
    "Mi prendo la responsabilità del risultato non solo del processo",
];

export default function CosaFaccio() {
    return (
        <SectionWrapper id="what-i-do" className="bg-black border-b border-white/10 px-0 sm:px-0 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-y border-white/10">
                {/* Header Block (Mobile Only or spans both on large) */}
                <div className="lg:col-span-2 p-12 lg:p-24 border-b border-white/10 bg-primary-light/5">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.8] tracking-tighter italic"
                    >
                        Quello che <br />
                        <span className="text-accent-1">faccio</span> <br />
                        <span className="text-outline text-4xl md:text-6xl lg:text-7xl block mt-4">(e quello che no)</span>
                    </motion.h2>
                </div>

                {/* What I DON'T Do */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 lg:p-24 bg-black group transition-colors duration-500 hover:bg-zinc-900"
                >
                    <h3 className="text-3xl font-heading font-black uppercase mb-12 flex items-center text-white italic">
                        <span className="w-12 h-12 bg-white text-black flex items-center justify-center mr-4 not-italic">✗</span>
                        Cosa NON faccio
                    </h3>
                    <ul className="space-y-8">
                        {donts.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start text-text-secondary text-lg md:text-xl font-medium"
                            >
                                <span className="text-accent-1 mr-4 mt-1">/</span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* What I Do */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 lg:p-24 bg-accent-1"
                >
                    <h3 className="text-3xl font-heading font-black uppercase mb-12 flex items-center text-black italic">
                        <span className="w-12 h-12 bg-black text-accent-1 flex items-center justify-center mr-4 not-italic">✓</span>
                        Cosa faccio
                    </h3>
                    <ul className="space-y-8">
                        {dos.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start text-black text-lg md:text-xl font-black uppercase tracking-tight"
                            >
                                <span className="text-black/40 mr-4 mt-1">/</span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
