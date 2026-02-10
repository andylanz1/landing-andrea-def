"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { Bot, BrainCircuit, Sparkles } from "lucide-react";

export default function ComeUsoAI() {
    return (
        <SectionWrapper id="ai-usage" className="bg-primary-dark relative overflow-hidden">
            {/* Background Network Animation Placeholder */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.1)_0,transparent_70%)]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                        Sì, uso l'AI. <br />
                        <span className="text-gradient">Ovunque sia utile.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-text-secondary">
                        <p>
                            Non ti faccio pagare l'AI. Ti faccio pagare le decisioni che prendo usando l'AI.
                        </p>
                        <ul className="space-y-4 mt-6">
                            {[
                                "Accelerare analisi che richiederebbero giorni",
                                "Simulare scenari prima di prendere decisioni",
                                "Stressare le ipotesi per trovare punti deboli",
                                "Ridurre il costo dell'errore (test virtuali)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-white/90">
                                    <Sparkles className="w-5 h-5 text-accent-1 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                            <p className="font-semibold text-white mb-2">💡 La differenza:</p>
                            <p>L'AI suggerisce 10 opzioni. Io scelgo l'unica che funziona nel tuo contesto specifico.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square relative flex items-center justify-center">
                        {/* Abstract visualization of AI + Human */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-2/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative z-10 glass p-10 rounded-2xl border-accent-1/30">
                            <div className="flex items-center justify-center space-x-8 mb-8">
                                <div className="text-center">
                                    <Bot className="w-16 h-16 text-accent-1 mx-auto mb-2" />
                                    <span className="text-sm font-mono text-accent-1">AI PROPOSES</span>
                                </div>
                                <div className="h-0.5 w-16 bg-white/20" />
                                <div className="text-center">
                                    <BrainCircuit className="w-16 h-16 text-accent-2 mx-auto mb-2" />
                                    <span className="text-sm font-mono text-accent-2">I DECIDE</span>
                                </div>
                            </div>
                            <div className="text-center text-white/80 font-mono text-sm">
                                {`{ "inputs": ["Data", "Trends", "Models"], "output": "Strategy" }`}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
