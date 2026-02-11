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
        <SectionWrapper id="problem" className="relative bg-black border-y border-white/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-[length:100px_100px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="mb-20 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter"
                    >
                        Il problema non è <br />
                        <span className="text-outline">fare le cose.</span> <br />
                        <span className="text-accent-1 italic">È decidere</span> <br />
                        cosa NON fare.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-2xl border-l-2 border-white/20 pl-8 py-4"
                    >
                        <p className="mb-4">
                            Oggi tutti hanno accesso agli stessi strumenti: AI, software, tutorial, freelancer. Eppure le aziende accumulano complessità invece di risultati.
                        </p>
                        <p className="text-white font-bold uppercase tracking-widest text-sm">
                            Nessuno si assume la responsabilità di dire di no.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-r border-b border-white/10 p-10 hover:bg-accent-1 group transition-colors duration-200">
                                <div className="mb-10 group-hover:text-black">{problem.icon}</div>
                                <h3 className="text-2xl font-heading font-bold uppercase mb-4 group-hover:text-black leading-tight italic">{problem.title}</h3>
                                <p className="text-text-secondary text-sm group-hover:text-black/80 font-medium">{problem.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
