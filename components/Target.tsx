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
        <SectionWrapper id="target" className="bg-primary-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold">
                    È per te se... <br />
                    <span className="text-text-secondary text-2xl md:text-4xl">/ Non è per te se...</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For You */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-green-500/20 bg-green-500/5">
                        <h3 className="text-2xl font-bold mb-6 text-green-400">✅ È per te se:</h3>
                        <ul className="space-y-4">
                            {forYou.map((item, i) => (
                                <li key={i} className="flex items-start text-white/90">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>

                {/* Not For You */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="h-full border-red-500/20 bg-red-500/5">
                        <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Non è per te se:</h3>
                        <ul className="space-y-4">
                            {notForYou.map((item, i) => (
                                <li key={i} className="flex items-start text-text-secondary">
                                    <X className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
