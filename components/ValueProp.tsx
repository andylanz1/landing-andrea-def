"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function ValueProp() {
    return (
        <SectionWrapper id="value-prop" className="bg-primary text-center">
            <div className="max-w-3xl mx-auto space-y-12">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-1 to-accent-2 rounded-full flex items-center justify-center mb-8 relative"
                >
                    <div className="absolute inset-0 bg-accent-1/50 rounded-full animate-ping opacity-20" />
                    <PhoneCall className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-heading font-bold"
                >
                    Quando qualcosa va storto, <br />
                    <span className="text-gradient">chi chiamano?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-lg text-text-secondary"
                >
                    <p>
                        Quando un'automazione rompe il flusso, un sistema non scala o un dato critico è sbagliato...
                        Il cliente non chiama l'AI.
                    </p>
                    <p className="text-2xl font-semibold text-white">Chiama me.</p>
                    <p>
                        Il mio valore non è scrivere codice o prompt. <br />
                        Il mio valore è esserci quando serve <span className="text-accent-1">decidere</span>.
                    </p>
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="border-l-4 border-accent-1 pl-6 py-4 bg-white/5 rounded-r-lg"
                >
                    <p className="text-xl italic text-white/90">
                        "Le aziende non pagano per l'esecuzione. Pagano per dormire tranquille sapendo che qualcuno ha il controllo quando loro non ce l'hanno."
                    </p>
                </motion.blockquote>
            </div>
        </SectionWrapper>
    );
}
