"use client";

import { useEffect, useState } from "react";

/**
 * Radial orange glow that follows the mouse on desktop.
 * Subtle on mobile (disabled via media query).
 */
export default function CursorGlow() {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const isCoarse = window.matchMedia("(pointer: coarse)").matches;
        if (isCoarse) return;
        const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    if (!pos) return null;

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,77,0,0.12), transparent 70%)`,
            }}
        />
    );
}
