/**
 * Film-grain noise texture overlay (SVG fractalNoise).
 * Adds editorial / cinematic feel without slowing down rendering.
 */
export default function NoiseOverlay() {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
        <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>
        <rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/>
    </svg>`;
    const dataUrl = `url("data:image/svg+xml;utf8,${svg.replace(/\n\s*/g, "")}")`;

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[6] opacity-[0.04] mix-blend-overlay"
            style={{ backgroundImage: dataUrl, backgroundSize: "200px 200px" }}
        />
    );
}
