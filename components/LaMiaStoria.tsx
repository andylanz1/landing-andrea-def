"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const timelineEvents = [
    {
        year: "2007",
        title: "Olisticzone",
        description: "Apro un centro fitness+spa di 1000mq a Milano. Investimenti enormi. Pensavo bastasse la qualità.",
    },
    {
        year: "CRISI",
        title: "L'Impatto",
        description: "Arrivano i big player (Virgin, Hello Fit). Budget marketing 100x il mio. Fatturato in caduta libera.",
    },
    {
        year: "DECISIONE",
        title: "Il Cambio",
        description: "Smetto di copiare i grandi. Cambio approccio completamente. Studio web marketing notte e giorno.",
    },
    {
        year: "RISULTATO",
        title: "+30%",
        description: "Fatturato in crescita in pochi mesi. Salvataggio completato.",
    },
];

export default function LaMiaStoria() {
    return (
        <SectionWrapper id="story" className="bg-primary relative">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    Da Imprenditore a Consulente <br />
                    <span className="text-text-secondary text-2xl md:text-4xl">(per Necessità)</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-1 to-transparent" />

                <div className="space-y-12">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } relative`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[11px] md:left-1/2 top-0 md:top-1/2 w-5 h-5 bg-primary border-2 border-accent-1 rounded-full z-10 transform -translate-x-[2px] md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(0,217,255,0.5)]" />

                            <div className="ml-12 md:ml-0 md:w-1/2 px-8 py-4">
                                <div className={`p-6 glass rounded-xl border-t-2 border-accent-1/50 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className="text-accent-1 font-mono font-bold text-lg block mb-2">{event.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center max-w-2xl mx-auto p-8 border border-white/10 rounded-2xl bg-white/5"
                >
                    <p className="text-lg italic text-white/90">
                        "Non sono un teorico. Sono un imprenditore che ha vissuto la crisi vera e sa cosa significa dover decidere quando tutto è incerto."
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
