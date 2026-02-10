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
        <SectionWrapper id="contact-form" className="bg-primary-dark">
            <Card className="max-w-2xl mx-auto border-t-4 border-t-accent-1">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold mb-2">Parliamo del Tuo Problema</h3>
                    <p className="text-sm text-text-secondary">Compila il form per richiedere una call esplorativa.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary flex items-center">
                                <User className="w-4 h-4 mr-2" /> Nome
                            </label>
                            <input
                                required
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-1 focus:ring-1 focus:ring-accent-1 outline-none transition-colors"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-secondary flex items-center">
                                <Mail className="w-4 h-4 mr-2" /> Email
                            </label>
                            <input
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-1 focus:ring-1 focus:ring-accent-1 outline-none transition-colors"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary flex items-center">
                            <Building className="w-4 h-4 mr-2" /> Azienda / Ruolo (Opzionale)
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-1 focus:ring-1 focus:ring-accent-1 outline-none transition-colors"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary flex items-center">
                            <HelpCircle className="w-4 h-4 mr-2" /> Qual è il problema reale?
                        </label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Non 'voglio più clienti'. Ma 'ho 3 sistemi che non parlano tra loro e sto perdendo dati critici'..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-1 focus:ring-1 focus:ring-accent-1 outline-none transition-colors"
                            value={formState.problem}
                            onChange={(e) => setFormState({ ...formState, problem: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text-secondary flex items-center">
                            <DollarSign className="w-4 h-4 mr-2" /> Budget Indicativo
                        </label>
                        <select
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-1 focus:ring-1 focus:ring-accent-1 outline-none transition-colors appearance-none"
                            value={formState.budget}
                            onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        >
                            <option value="" className="bg-primary-dark text-gray-500">Seleziona un range...</option>
                            <option value="<5k" className="bg-primary-dark">Men o di €5.000</option>
                            <option value="5k-15k" className="bg-primary-dark">€5.000 - €15.000</option>
                            <option value="15k-50k" className="bg-primary-dark">€15.000 - €50.000</option>
                            <option value=">50k" className="bg-primary-dark">Oltre €50.000</option>
                            <option value="TBD" className="bg-primary-dark">Da discutere</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-3 pt-4">
                        <input
                            required
                            type="checkbox"
                            id="privacy"
                            className="w-5 h-5 rounded border-white/20 bg-white/5 text-accent-1 focus:ring-accent-1 focus:ring-offset-primary-dark"
                            checked={formState.privacy}
                            onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
                        />
                        <label htmlFor="privacy" className="text-sm text-text-secondary">
                            Accetto la Privacy Policy e il trattamento dei dati.
                        </label>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-6"
                        isLoading={isSubmitting}
                        disabled={!formState.privacy}
                    >
                        Invia Richiesta
                    </Button>
                </form>
            </Card>
        </SectionWrapper>
    );
}
