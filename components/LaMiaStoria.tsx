"use client";

import React from "react";
import { motion } from "framer-motion";

const timeline: Array<[string, string]> = [
    ["2007", "Apro Olisticzone"],
    ["2010", "La CRISI"],
    ["2011", "+30% in pochi mesi"],
    ["2024", "AI come leva"],
];

export default function LaMiaStoria() {
    return (
        <section
            id="storia"
            className="border-t border-white/10 py-24 md:py-32"
            style={{ background: "#0A0A0A" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
                    <div>
                        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-secondary mb-6">
                            — Storia
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading uppercase leading-[0.92] tracking-tighter mb-6"
                            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
                        >
                            2007. Apro<br />Olisticzone.
                        </motion.h2>
                        <div className="font-mono text-xs tracking-[0.14em] uppercase text-white/40">
                            Centro fitness + spa · 1000 mq · Milano
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-7"
                    >
                        <p className="text-white text-xl md:text-[22px] leading-[1.55]">
                            Tre anni dopo, arrivano i big player: Virgin Active, McFit,
                            Hello Fit. Budget marketing 100 volte il mio. Conti in rosso,
                            notti insonni, soci che ti guardano storto.
                        </p>
                        <p className="text-text-secondary text-lg md:text-[19px] leading-[1.65]">
                            Smetto di copiare i grandi. Cambio approccio COMPLETAMENTE.
                            Studio web marketing notte e giorno (e ti assicuro che nel
                            2011 in Italia non c'era praticamente NESSUNO a insegnartelo
                            per bene).{" "}
                            <span className="text-white">+30% in pochi mesi.</span> Centro
                            ancora aperto 15 anni dopo.
                        </p>
                        <p className="text-text-secondary text-lg md:text-[19px] leading-[1.65]">
                            Da allora aiuto imprenditori a fare la stessa cosa: capire
                            dove sono, decidere dove andare, smettere di sprecare energia.
                            Non sono un teorico.{" "}
                            <span className="text-accent-1">
                                Sono un imprenditore che ha vissuto la crisi vera e sa
                                cosa significa DECIDERE quando tutto è incerto
                            </span>
                            .
                        </p>

                        {/* Timeline */}
                        <div className="mt-6 pt-6 border-t border-white/10 flex gap-10 flex-wrap">
                            {timeline.map(([y, l]) => (
                                <div key={y}>
                                    <div className="font-heading text-3xl md:text-[32px] leading-none">
                                        {y}
                                    </div>
                                    <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary mt-2">
                                        {l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
