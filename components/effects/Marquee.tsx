"use client";

/**
 * Infinite horizontal marquee with the brand keywords.
 * Pure CSS animation, GPU accelerated.
 */
const KEYWORDS = [
    "DECIDO",
    "SEMPLIFICO",
    "TAGLIO",
    "RIDUCO IL CASINO",
    "DICO ANCHE NO",
    "AI COME LEVA",
    "RISULTATI MISURABILI",
    "ZERO FUFFA",
];

export default function Marquee() {
    // Duplicate the array twice so the loop is seamless
    const items = [...KEYWORDS, ...KEYWORDS];
    return (
        <div
            aria-hidden
            className="relative overflow-hidden border-y border-white/10 bg-black py-6"
        >
            <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap will-change-transform">
                {items.map((k, i) => (
                    <span
                        key={i}
                        className="font-heading uppercase text-5xl md:text-6xl lg:text-7xl mx-8 inline-flex items-center gap-8"
                    >
                        {k}
                        <span className="text-accent-1 text-3xl">●</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
