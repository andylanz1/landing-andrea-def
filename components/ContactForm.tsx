"use client";

import React, { useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
    const [form, setForm] = useState({ nome: "", email: "", cosa: "", honeypot: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errMsg, setErrMsg] = useState<string>("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");
        setErrMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json().catch(() => ({} as { error?: string }));
            if (res.ok && data.ok) {
                setStatus("ok");
            } else {
                setStatus("error");
                setErrMsg(data.error || "Invio fallito. Riprova o scrivi direttamente a info@andrealanzone.it");
            }
        } catch {
            setStatus("error");
            setErrMsg("Connessione fallita. Scrivimi direttamente a info@andrealanzone.it");
        }
    };

    return (
        <SectionWrapper
            id="contact-form"
            className="bg-black border-t border-white/10 py-24"
        >
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="font-mono text-xs uppercase tracking-widest text-accent-1 mb-6">
                            — SCRIVIMI
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase leading-[0.85] tracking-tighter mb-8">
                            DIMMI{" "}
                            <span className="text-accent-1">COSA</span>
                            <br />
                            DEVI DECIDERE.
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed border-l-4 border-accent-1 pl-6 py-3">
                            Una frase, senza giri di parole. Se è un fit, ti rispondo in
                            48h con una call da 30 minuti. Se non lo è, te lo dico anche
                            quello.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {status === "ok" ? (
                        <div
                            className="border-2 border-accent-1 p-10"
                            style={{
                                boxShadow:
                                    "0 0 0 1px rgba(255,77,0,0.2), 0 12px 48px rgba(255,77,0,0.3)",
                            }}
                        >
                            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent-1 mb-4">
                                <CheckCircle2 className="w-4 h-4" /> RICEVUTO
                            </div>
                            <div className="font-heading text-4xl md:text-5xl uppercase leading-none">
                                GRAZIE,{" "}
                                {form.nome.split(" ")[0]?.toUpperCase() || "OK"}.
                                <br />
                                TI SCRIVO IO.
                            </div>
                            <p className="text-text-secondary text-lg mt-6">
                                Massimo 48h. Se è un fit ti propongo una call; se non lo
                                è ti dico anche quello.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
                            <input
                                type="text"
                                name="honeypot"
                                value={form.honeypot}
                                onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="absolute -left-[9999px] w-px h-px opacity-0"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field
                                    label="Nome"
                                    value={form.nome}
                                    onChange={(v) => setForm({ ...form, nome: v })}
                                    placeholder="Mario Rossi"
                                    required
                                />
                                <Field
                                    label="Email"
                                    value={form.email}
                                    onChange={(v) => setForm({ ...form, email: v })}
                                    placeholder="mario@azienda.it"
                                    type="email"
                                    required
                                />
                            </div>
                            <Field
                                label="Cosa devi decidere"
                                value={form.cosa}
                                onChange={(v) => setForm({ ...form, cosa: v })}
                                placeholder="Una frase. Senza giri di parole."
                                textarea
                                required
                            />

                            <div className="flex flex-wrap gap-4 items-center mt-2">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="inline-flex items-center gap-3 bg-accent-1 hover:bg-white text-black font-bold uppercase tracking-wide px-7 py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? "INVIO IN CORSO…" : "INVIA RICHIESTA"}
                                    {status !== "sending" && <ArrowRight className="w-5 h-5" />}
                                </button>
                                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                                    RISPOSTA IN 48H
                                </span>
                            </div>

                            {status === "error" && (
                                <div className="text-sm border border-red-500 bg-red-500/10 text-red-300 p-4">
                                    {errMsg}
                                </div>
                            )}

                            <p className="text-xs text-text-secondary mt-4">
                                Inviando il modulo accetti la{" "}
                                <a href="/privacy-policy" className="text-accent-1 underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    textarea = false,
    required = false,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    type?: string;
    textarea?: boolean;
    required?: boolean;
}) {
    const common =
        "bg-black border border-white/15 focus:border-accent-1 outline-none text-white text-lg px-4 py-3 placeholder:text-white/30 transition-colors";
    return (
        <label className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                {label}
                {required && <span className="text-accent-1"> *</span>}
            </span>
            {textarea ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    rows={4}
                    required={required}
                    className={`${common} resize-y min-h-[120px]`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    required={required}
                    className={common}
                />
            )}
        </label>
    );
}
