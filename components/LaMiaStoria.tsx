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
        <SectionWrapper id="story" className="bg-black border-b border-white/10 py-24">
            <div className="mb-24 px-4 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.8] tracking-tighter italic"
                >
                    Da Imprenditore <br />
                    <span className="text-outline">a Consulente</span> <br />
                    <span className="text-accent-1 text-4xl md:text-6xl lg:text-7xl block mt-4">(per Necessità)</span>
                </motion.h2>
            </div>

            <div className="max-w-6xl mx-auto relative px-4">
                {/* Vertical Line - Industrial look */}
                <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white/10 hidden md:block transform -translate-x-1/2" />
                <div className="absolute left-[30px] top-0 bottom-0 w-[4px] bg-white/10 md:hidden" />

                <div className="space-y-16">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}
                        >
                            {/* Marker */}
                            <div className="absolute left-[22px] md:left-1/2 top-8 w-5 h-5 bg-accent-1 z-10 transform -translate-x-1/2 rotate-45 border-4 border-black" />

                            <div className="ml-16 md:ml-0 md:w-1/2 px-4 md:px-12">
                                <div className={`p-10 border-4 border-white bg-black hover:scale-[1.02] transition-transform duration-300 relative ${index % 2 === 0 ? "md:text-left shadow-[15px_15px_0px_rgba(255,255,255,0.1)]" : "md:text-right shadow-[-15px_15px_0px_rgba(255,255,255,0.1)]"}`}>
                                    <span className="text-accent-1 font-heading font-black text-4xl block mb-2 italic uppercase">{event.year}</span>
                                    <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tighter italic border-b border-white/20 pb-2">{event.title}</h3>
                                    <p className="text-text-secondary text-lg font-medium leading-tight">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 bg-accent-1 text-black border-4 border-white shadow-[20px_20px_0px_white]"
                >
                    <p className="text-3xl font-heading font-black italic uppercase leading-none tracking-tighter italic">
                        "Non sono un teorico. Sono un imprenditore che ha vissuto la crisi vera e sa cosa significa dover decidere quando tutto è incerto."
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
