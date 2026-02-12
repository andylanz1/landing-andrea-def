"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactForm() {
    return (
        <SectionWrapper id="contact-form" className="bg-black border-t border-white/10 py-24">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase leading-[0.8] tracking-tighter italic mb-8"
                    >
                        Parliamo <br />
                        <span className="text-outline">del tuo</span> <br />
                        <span className="text-accent-1 italic">problema.</span>
                    </motion.h2>
                    <p className="text-xl text-text-secondary font-medium border-l-4 border-white pl-8 py-4 uppercase tracking-tight">
                        Se hai un problema reale da risolvere, <br />
                        scrivimi direttamente e iniziamo a collaborare.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <a
                            href="mailto:info@andrealanzone.it"
                            className="group block"
                        >
                            <div className="relative group transition-transform duration-300 hover:-translate-y-2 active:translate-y-0">
                                {/* Decorative elements for brutalist look */}
                                <div className="absolute -inset-2 border-2 border-white/5 pointer-events-none" />

                                <div className="bg-white hover:bg-accent-1 text-black p-8 lg:p-12 border-4 border-white shadow-[20px_20px_0px_rgba(255,255,255,0.1)] transition-colors duration-300">
                                    <div className="flex flex-col items-center space-y-6 text-center">
                                        <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-colors">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter leading-none">
                                                SCRIVIMI ORA
                                            </h3>
                                            <p className="text-base font-bold opacity-70 tracking-tight">
                                                info@andrealanzone.it
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-2 font-black text-xl uppercase tracking-widest pt-4 group-hover:translate-x-4 transition-transform">
                                            <span>START THE PROJECT</span>
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
