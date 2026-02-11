"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function ValueProp() {
    return (
        <SectionWrapper id="value-prop" className="bg-black border-b border-white/10 py-24">
            <div className="max-w-5xl mx-auto space-y-16 px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 mx-auto bg-accent-1 flex items-center justify-center mb-8 relative border-4 border-white"
                >
                    <PhoneCall className="w-12 h-12 text-black" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-9xl font-heading font-black uppercase leading-[0.85] tracking-tighter italic"
                >
                    Quando qualcosa <br />
                    <span className="text-outline">va storto,</span> <br />
                    chi chiamano?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-xl text-text-secondary border-l-4 border-accent-1 pl-8 py-4"
                    >
                        <p className="font-medium">
                            Quando un'automazione rompe il flusso, un sistema non scala o un dato critico è sbagliato...
                            Il cliente non chiama l'AI.
                        </p>
                        <p className="text-4xl font-black text-white uppercase italic tracking-tighter">Chiama me.</p>
                        <p className="font-medium">
                            Il mio valore non è scrivere codice o prompt. <br />
                            Il mio valore è esserci quando serve <span className="text-accent-1 font-bold italic">decidere</span>.
                        </p>
                    </motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-10 bg-zinc-900 border border-white/10 rounded-none relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-2 text-accent-1/20 font-heading font-black text-6xl leading-none">"</div>
                        <p className="text-2xl font-black italic text-white leading-tight uppercase tracking-tight">
                            "Le aziende non pagano per l'esecuzione. Pagano per dormire tranquille sapendo che qualcuno ha il controllo quando loro non ce l'hanno."
                        </p>
                    </motion.blockquote>
                </div>
            </div>
        </SectionWrapper>
    );
}
