"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import { XCircle, Activity, BarChart3, Layers } from "lucide-react";

const problems = [
    {
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        title: "Progetti Deragliati",
        description: "Iniziative che partono con entusiasmo ma si arenano dopo 3 mesi senza risultati tangibili.",
    },
    {
        icon: <Activity className="w-8 h-8 text-orange-500" />,
        title: "Automazioni Fragili",
        description: "Workflow che si rompono al primo imprevisto, richiedendo costante manutenzione manuale.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
        title: "Funnel Vuoti",
        description: "Sistemi di vendita tecnicamente perfetti che però non portano fatturato reale.",
    },
    {
        icon: <Layers className="w-8 h-8 text-purple-500" />,
        title: "Complessità Inutile",
        description: "Accumulo di strumenti e software che rallentano l'azienda invece di accelerarla.",
    },
];

export default function Problem() {
    return (
        <SectionWrapper id="problem" className="relative bg-primary-dark">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold"
                    >
                        Il problema non è fare le cose. <br />
                        <span className="text-gradient">È decidere cosa NON fare.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-secondary max-w-2xl mx-auto"
                    >
                        <p className="mb-4">
                            Oggi tutti hanno accesso agli stessi strumenti: AI, software, tutorial, freelancer.
                        </p>
                        <p>
                            Eppure le aziende accumulano complessità invece di risultati.
                            Perché nessuno si assume la responsabilità di dire: <br />
                            <span className="text-white font-semibold">"Questo non serve", "Fermiamo questo", "Meglio tardi e fatto bene".</span>
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-white/5 hover:border-red-500/30">
                                <div className="mb-4">{problem.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                                <p className="text-text-secondary text-sm">{problem.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
