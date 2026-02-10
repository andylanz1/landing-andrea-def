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
        <SectionWrapper id="what-i-do" className="bg-primary relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] bg-red-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-[-10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-heading font-bold"
                >
                    Quello che faccio <br />
                    <span className="text-text-secondary text-2xl md:text-4xl">(e quello che non faccio)</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* What I DON'T Do */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="h-full border-red-500/20 hover:border-red-500/50 bg-red-500/5">
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-red-400">
                            <XCircle className="mr-3 w-6 h-6" />
                            Cosa NON faccio
                        </h3>
                        <ul className="space-y-6">
                            {donts.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start text-text-secondary"
                                >
                                    <span className="text-red-500/50 mr-3 mt-1">✗</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>

                {/* What I Do */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="h-full border-green-500/20 hover:border-green-500/50 bg-green-500/5">
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-green-400">
                            <CheckCircle2 className="mr-3 w-6 h-6" />
                            Cosa faccio
                        </h3>
                        <ul className="space-y-6">
                            {dos.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start text-white"
                                >
                                    <span className="text-green-500 mr-3 mt-1">✓</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
