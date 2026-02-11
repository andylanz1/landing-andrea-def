"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
    "Gestisci complessità reale (non 'ho bisogno di un sito')",
    "Hai già provato 'esperti' e tool inutili",
    "Vuoi meno caos, non più output",
    "Capisci che l'errore costa più dell'azione lenta",
    "Vuoi qualcuno che dica anche 'no'"
];

const notForYou = [
    "Cerchi esecuzione low-cost",
    "Vuoi solo qualcuno che 'faccia' senza capire",
    "Vuoi mantenere il controllo di ogni micro-decisione",
    "Pensi che l'AI sia una bacchetta magica",
    "Cerchi qualcuno che ti dica sempre di sì"
];

export default function Target() {
    return (
        <SectionWrapper id="target" className="bg-black border-b border-white/10 px-0 sm:px-0 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-white/10 border-y border-white/10">
                {/* For You */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 lg:p-24 bg-black group transition-colors duration-500 hover:bg-zinc-900 border-b lg:border-b-0 border-white/10"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-12 italic">
                        È per te <br />
                        <span className="text-accent-1">se...</span>
                    </h2>
                    <ul className="space-y-8">
                        {forYou.map((item, i) => (
                            <li key={i} className="flex items-start text-white text-xl md:text-2xl font-black uppercase tracking-tight">
                                <span className="w-10 h-10 border-4 border-accent-1 text-accent-1 flex items-center justify-center mr-6 shrink-0 italic">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Not For You */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 lg:p-24 bg-white"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-12 italic text-black">
                        NON è <br />
                        <span className="text-accent-1">per te se...</span>
                    </h2>
                    <ul className="space-y-8">
                        {notForYou.map((item, i) => (
                            <li key={i} className="flex items-start text-black/40 text-xl font-bold uppercase tracking-tight line-through decoration-black/20">
                                <span className="w-10 h-10 bg-black text-white flex items-center justify-center mr-6 shrink-0 italic">✗</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
