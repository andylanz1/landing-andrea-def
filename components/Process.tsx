"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { FileText, Zap, LayoutGrid, DoorOpen } from "lucide-react";

const steps = [
    {
        icon: <FileText className="w-8 h-8 text-accent-1" />,
        title: "1. Mandato Chiaro",
        description: "Definiamo perimetro e responsabilità. Non 'fammi un'offerta', ma 'ecco il problema'."
    },
    {
        icon: <Zap className="w-8 h-8 text-accent-2" />,
        title: "2. Intervento Mirato",
        description: "Decido cosa si fa, cosa si ferma, cosa si elimina. Tolgo il superfluo."
    },
    {
        icon: <LayoutGrid className="w-8 h-8 text-accent-1" />,
        title: "3. Sistema Semplice",
        description: "Meno strumenti. Meno persone. Un sistema che funziona anche senza di me."
    },
    {
        icon: <DoorOpen className="w-8 h-8 text-accent-2" />,
        title: "4. Uscita Pulita",
        description: "Niente dipendenza. Ti lascio documentazione e autonomia operativa."
    }
];

export default function Process() {
    return (
        <SectionWrapper id="process" className="bg-primary relative">
            <div className="text-center mb-16">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.8] tracking-tighter italic">Come Funziona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative bg-primary pt-4 text-center md:text-left"
                    >
                        <div className="w-16 h-16 mx-auto md:mx-0 bg-white/5 rounded-none flex items-center justify-center border border-white/10 mb-6 relative z-10 glass-card">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-text-secondary text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
