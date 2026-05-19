"use client";

import React from "react";
import { motion } from "framer-motion";

const timeline: Array<[string, string]> = [
    ["2007", "Olisticzone"],
    ["2010", "Crisi · pivot"],
    ["2012", "+30% revenue"],
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
                            Centro fitness · Milano
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-7"
                    >
                        <p className="text-white text-xl md:text-[22px] leading-[1.55]">
                            Tre anni dopo, crisi. Non quella sui giornali — la mia. Conti
                            che non tornano, scelte sbagliate, energia finita.
                        </p>
                        <p className="text-text-secondary text-lg md:text-[19px] leading-[1.65]">
                            Decido di smontare tutto: cosa funziona, cosa no, cosa va
                            eliminato. Imparo web marketing prima che esistano gli
                            &ldquo;esperti&rdquo;. Riapro con metodo.{" "}
                            <span className="text-white">+30% in 18 mesi.</span>
                        </p>
                        <p className="text-text-secondary text-lg md:text-[19px] leading-[1.65]">
                            Da allora aiuto imprenditori a fare la stessa cosa: capire
                            dove sono, decidere dove andare, smettere di disperdere
                            energia. Non sono un guru.{" "}
                            <span className="text-accent-1">
                                Sono uno che ha sbagliato e ha capito
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
