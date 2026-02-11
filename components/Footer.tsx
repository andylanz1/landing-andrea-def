"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black py-16 px-4 border-t border-white/10 relative overflow-hidden">
            {/* Stars Animation Placeholder */}
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">Andrea Lanzone</h4>
                    <p className="text-text-secondary text-sm">
                        Via G. Marconi 24<br />
                        20090 Trezzano sul Naviglio (MI), IT<br />
                        P.IVA 13967810964
                    </p>
                </div>

                <div className="space-y-2 text-sm text-text-secondary">
                    <p>Email: <a href="mailto:info@andrealanzone.it" className="hover:text-accent-1 transition-colors">info@andrealanzone.it</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/andrea-lanzone-marketing/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1 transition-colors">andrea-lanzone-marketing</a></p>
                </div>

                <div className="text-xs text-text-secondary opacity-60">
                    <p>© 2026 Andrea Lanzone. Tutti i diritti riservati.</p>
                    <div className="mt-2 space-x-4">
                        <a
                            href="https://www.iubenda.com/privacy-policy/54151139"
                            className="iubenda-black no-brand iubenda-noiframe iubenda-embed hover:text-white transition-colors"
                            title="Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a
                            href="https://www.iubenda.com/privacy-policy/54151139/cookie-policy"
                            className="iubenda-black no-brand iubenda-noiframe iubenda-embed hover:text-white transition-colors"
                            title="Cookie Policy"
                        >
                            Cookie Policy
                        </a>
                        <span>|</span>
                        <span>P.IVA: 13967810964</span>
                    </div>
                </div>
            </div>


            <div className="mt-16 text-center max-w-lg mx-auto">
                <p className="text-sm italic text-white/40 mb-6">
                    "L'AI accelera tutto. Anche gli errori. Io servo a evitare quelli che non ti puoi permettere."
                </p>
                <img
                    src="/images/firma-andrea-lanzone.png"
                    alt="Firma Andrea Lanzone"
                    className="mx-auto w-64 opacity-70 invert"
                />
            </div>


            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-50 backdrop-blur-sm"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
