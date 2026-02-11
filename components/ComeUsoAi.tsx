"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { Bot, BrainCircuit, Sparkles } from "lucide-react";

export default function ComeUsoAI() {
    return (
        <SectionWrapper id="ai-usage" className="bg-black border-b border-white/10 px-0 sm:px-0 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-white/10 border-y border-white/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-12 lg:p-24"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-12 italic">
                        Sì, uso l'AI. <br />
                        <span className="text-outline">Ovunque</span> <br />
                        sia utile.
                    </h2>

                    <div className="space-y-8 text-xl text-text-secondary font-medium">
                        <p className="text-white font-bold text-2xl uppercase tracking-tight">
                            Non ti faccio pagare l'AI. Ti faccio pagare le decisioni che prendo usando l'AI.
                        </p>
                        <ul className="space-y-6 mt-8">
                            {[
                                "Accelerare analisi che richiederebbero giorni",
                                "Simulare scenari prima di prendere decisioni",
                                "Stressare le ipotesi per trovare punti deboli",
                                "Ridurre il costo dell'errore (test virtuali)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-white/80 border-b border-white/5 pb-4">
                                    <span className="text-accent-1 mr-4 font-black">/ 0{i + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 p-10 bg-accent-1 text-black rounded-none">
                            <p className="font-black text-xl uppercase mb-4 italic">💡 La differenza:</p>
                            <p className="font-black text-2xl leading-tight uppercase tracking-tight">L'AI suggerisce 10 opzioni. Io scelgo l'unica che funziona nel tuo contesto specifico.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center bg-zinc-900 border-t lg:border-t-0 border-white/10 p-12 lg:p-24"
                >
                    {/* Abstract industrial visualization */}
                    <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-[length:50px_50px]" />

                    <div className="relative z-10 w-full max-w-md">
                        <div className="border-4 border-white p-12 bg-black shadow-[20px_20px_0px_var(--color-accent-1)]">
                            <div className="flex flex-col space-y-12">
                                <div className="text-left border-l-4 border-accent-1 pl-6">
                                    <Bot className="w-16 h-16 text-accent-1 mb-4" />
                                    <span className="text-2xl font-heading font-black text-white uppercase italic">AI PROPOSES</span>
                                    <p className="text-sm font-mono text-text-secondary mt-2">MULTIPLE SCENARIOS & MODELS</p>
                                </div>

                                <div className="h-0.5 w-full bg-white/20 relative">
                                    <div className="absolute -top-2 left-1/2 -ml-2 w-4 h-4 bg-accent-1 rotate-45" />
                                </div>

                                <div className="text-right border-r-4 border-white pr-6">
                                    <BrainCircuit className="w-16 h-16 text-white mb-4 ml-auto" />
                                    <span className="text-2xl font-heading font-black text-white uppercase italic">I DECIDE</span>
                                    <p className="text-sm font-mono text-text-secondary mt-2">STRATEGIC JUDGMENT & CONTROL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
