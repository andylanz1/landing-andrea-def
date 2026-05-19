"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black py-24 px-4 border-t-8 border-accent-1 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
                    <div>
                        <h4 className="text-4xl font-heading font-black text-white mb-6 uppercase italic tracking-tighter">Andrea <br />Lanzone</h4>
                        <p className="text-text-secondary text-sm font-bold uppercase tracking-widest leading-relaxed">
                            Milano, IT<br />
                            P.IVA 13967810964
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h5 className="text-xs font-black text-accent-1 uppercase tracking-[0.3em] mb-4">/ CONTACTS</h5>
                        <a href="mailto:info@andrealanzone.it" className="text-2xl font-heading font-black text-white hover:text-accent-1 transition-colors uppercase italic tracking-tighter">info@andrealanzone.it</a>
                    </div>

                    <div className="text-xs text-text-secondary font-bold uppercase tracking-widest leading-loose">
                        <h5 className="text-xs font-black text-accent-1 uppercase tracking-[0.3em] mb-4">/ LEGAL</h5>
                        <p>© 2026 Andrea Lanzone. All rights reserved.</p>
                        <div className="mt-4 flex flex-col space-y-2">
                            <a
                                href="/privacy-policy"
                                className="hover:text-white transition-colors border-b border-white/10 w-fit"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/cookie-policy"
                                className="hover:text-white transition-colors border-b border-white/10 w-fit"
                            >
                                Cookie Policy
                            </a>
                            <a
                                href="/note-legali"
                                className="hover:text-white transition-colors border-b border-white/10 w-fit"
                            >
                                Note Legali
                            </a>
                            <button
                                type="button"
                                onClick={() => {
                                    if (typeof window !== "undefined") {
                                        (window as unknown as { _iub?: { cs?: { api?: { openPreferences?: () => void } } } })
                                            ._iub?.cs?.api?.openPreferences?.();
                                    }
                                }}
                                className="hover:text-white transition-colors border-b border-white/10 w-fit text-left cursor-pointer"
                            >
                                Preferenze Cookie
                            </button>
                        </div>
                    </div>
                </div>


                <div className="mt-24 pt-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <p className="text-3xl md:text-5xl font-heading font-black italic text-white/20 uppercase leading-none tracking-tighter">
                        "L'AI accelera tutto. <br />
                        Anche gli errori. <br />
                        Io servo a evitarli."
                    </p>
                    <div className="flex justify-end lg:justify-end">
                        <img
                            src="/images/firma-andrea-lanzone.png"
                            alt="Firma Andrea Lanzone"
                            className="w-72 opacity-50 invert brightness-200"
                        />
                    </div>
                </div>
            </div>


            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-16 h-16 bg-accent-1 text-black flex items-center justify-center hover:bg-white transition-colors z-50 shadow-[5px_5px_0px_white]"
                aria-label="Back to top"
            >
                <ArrowUp className="w-8 h-8 font-black" />
            </button>
        </footer>
    );
}
