"use client";

import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    const scrollToForm = () => {
        const form = document.getElementById("contact-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <SectionWrapper id="final-cta" className="relative bg-gradient-to-b from-primary to-primary-dark overflow-hidden py-32">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-1/10 rounded-full blur-[150px] animate-pulse-glow" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading font-bold leading-tight"
                >
                    Se hai bisogno di qualcuno che decide, <br />
                    <span className="text-gradient">parliamone.</span>
                </motion.h2>

                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                    Non compila il form chi non ha un problema reale. <br />
                    Scrivimi solo se il contesto è incasinato e le decisioni contano.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        onClick={scrollToForm}
                        className="text-xl py-8 px-12 shadow-[0_0_30px_rgba(0,217,255,0.3)]"
                        rightIcon={<ArrowRight className="w-6 h-6 ml-2" />}
                    >
                        Richiedi una Call Esplorativa
                    </Button>
                </motion.div>

                <p className="text-sm text-text-secondary opacity-70">
                    Zero pressione. Parliamo, capisci se ha senso, decidi.
                </p>
            </div>
        </SectionWrapper>
    );
}
