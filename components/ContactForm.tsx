"use client";

import React, { useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, User, Mail, Building, HelpCircle, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        problem: "",
        budget: "",
        privacy: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <SectionWrapper id="contact-form" className="bg-primary-dark min-h-[50vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold">Ricevuto.</h3>
                    <p className="text-text-secondary max-w-md mx-auto">
                        Ti rispondo personalmente entro 24 ore. <br />
                        Se il problema è complesso come dici, avremo molto di cui parlare.
                    </p>
                </motion.div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="contact-form" className="bg-black border-t border-white/10 py-24">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.8] tracking-tighter italic mb-8"
                    >
                        Parliamo <br />
                        <span className="text-outline">del tuo</span> <br />
                        <span className="text-accent-1 italic">problema.</span>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium border-l-4 border-white pl-8 py-4 uppercase tracking-tight">
                        Compila il form per richiedere una call esplorativa. <br />
                        Solo se hai un problema reale da risolvere.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-white/5 pointer-events-none" />
                    <Card className="bg-zinc-900 border-4 border-white rounded-none p-10 shadow-[20px_20px_0px_var(--color-accent-1)]">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white uppercase tracking-widest flex items-center">
                                        / NOME
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-black border-2 border-white/20 rounded-none p-4 text-white focus:border-accent-1 outline-none transition-colors font-bold uppercase"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white uppercase tracking-widest flex items-center">
                                        / EMAIL
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-black border-2 border-white/20 rounded-none p-4 text-white focus:border-accent-1 outline-none transition-colors font-bold uppercase"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-white uppercase tracking-widest flex items-center">
                                    / AZIENDA (OPZIONALE)
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black border-2 border-white/20 rounded-none p-4 text-white focus:border-accent-1 outline-none transition-colors font-bold uppercase"
                                    value={formState.company}
                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-white uppercase tracking-widest flex items-center">
                                    / QUAL È IL PROBLEMA REALE?
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="NON 'VOGLIO PIÙ CLIENTI'. MA 'HO 3 SISTEMI CHE NON PARLANO TRA LORO'..."
                                    className="w-full bg-black border-2 border-white/20 rounded-none p-4 text-white focus:border-accent-1 outline-none transition-colors font-bold uppercase placeholder:text-white/20"
                                    value={formState.problem}
                                    onChange={(e) => setFormState({ ...formState, problem: e.target.value })}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-white uppercase tracking-widest flex items-center">
                                    / BUDGET INDICATIVO
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        className="w-full bg-black border-2 border-white/20 rounded-none p-4 text-white focus:border-accent-1 outline-none transition-colors appearance-none font-black uppercase"
                                        value={formState.budget}
                                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                    >
                                        <option value="" className="bg-black text-white/20">Seleziona un range...</option>
                                        <option value="<5k" className="bg-black text-white">Meno di €5.000</option>
                                        <option value="5k-15k" className="bg-black text-white">€5.000 - €15.000</option>
                                        <option value="15k-50k" className="bg-black text-white">€15.000 - €50.000</option>
                                        <option value=">50k" className="bg-black text-white">Oltre €50.000</option>
                                        <option value="TBD" className="bg-black text-white">Da discutere</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent-1">▼</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 pt-4">
                                <input
                                    required
                                    type="checkbox"
                                    id="privacy"
                                    className="w-6 h-6 rounded-none border-2 border-white/20 bg-black text-accent-1 focus:ring-accent-1"
                                    checked={formState.privacy}
                                    onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
                                />
                                <label htmlFor="privacy" className="text-xs font-bold text-white/60 uppercase tracking-tighter">
                                    Accetto la Privacy Policy e il trattamento dei dati.
                                </label>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-20 text-2xl"
                                isLoading={isSubmitting}
                                disabled={!formState.privacy}
                            >
                                START THE PROJECT →
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    );
}
