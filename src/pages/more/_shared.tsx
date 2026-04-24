import { Link } from "react-router-dom";

/**
 * Shared building blocks for the /more art-direction system.
 * Oil-painting / maximalist aesthetic. Uses inline styles + SVG filters
 * because this section deliberately breaks the resume's calm design system.
 */

/* ---------- SVG filters: paint texture + brush distortion ---------- */
export const PaintFilters = () => (
  <svg className="absolute w-0 h-0" aria-hidden>
    <defs>
      <filter id="oil-paint" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="6" />
      </filter>
      <filter id="thick-paint" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="14" />
      </filter>
      <filter id="canvas-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0" />
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
      <filter id="brush-edge">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="2" />
        <feDisplacementMap in="SourceGraphic" scale="22" />
      </filter>
    </defs>
  </svg>
);

/* ---------- Canvas grain overlay (paper / linen feel) ---------- */
export const CanvasGrain = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
    }}
  />
);

/* ---------- Painted blob: irregular SVG shape with thick-paint filter ---------- */
export const PaintBlob = ({
  d,
  fill,
  className = "",
  style,
}: {
  d: string;
  fill: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 400 400"
    className={`absolute ${className}`}
    style={style}
    aria-hidden
    preserveAspectRatio="none"
  >
    <path d={d} fill={fill} filter="url(#thick-paint)" />
  </svg>
);

/* ---------- Painted brush stroke ---------- */
export const BrushStroke = ({
  className = "",
  color,
  rotate = 0,
  style,
}: {
  className?: string;
  color: string;
  rotate?: number;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 600 120"
    className={`absolute ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, ...style }}
    aria-hidden
  >
    <path
      d="M10 60 C 100 10, 200 110, 300 60 S 500 10, 590 60 L 590 80 C 500 30, 400 130, 300 80 S 100 30, 10 80 Z"
      fill={color}
      filter="url(#oil-paint)"
    />
  </svg>
);

/* ---------- Painted return button (top-left of every color page) ---------- */
export const PaintBackButton = ({ accent }: { accent: string }) => (
  <Link
    to="/more"
    className="fixed top-5 left-5 md:top-7 md:left-7 z-50 group"
    aria-label="返回 /more"
  >
    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <path
          d="M14 22 C 6 40, 8 64, 22 84 C 44 92, 70 88, 86 74 C 96 56, 92 30, 76 14 C 54 6, 28 10, 14 22 Z"
          fill={accent}
          filter="url(#thick-paint)"
        />
      </svg>
      <span className="relative text-white text-2xl md:text-3xl font-black -translate-x-0.5 group-hover:-translate-x-1 transition-transform" style={{ fontFamily: "Georgia, serif" }}>
        ←
      </span>
    </div>
  </Link>
);

/* ---------- Image with painted edge + graceful fallback placeholder ---------- */
export const PaintedImage = ({
  src,
  alt,
  className = "",
  fallbackHint,
  fallbackBg = "#222",
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackHint: string;
  fallbackBg?: string;
}) => (
  <div className={`relative ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ filter: "url(#brush-edge)" }}
      onError={(e) => {
        const t = e.currentTarget as HTMLImageElement;
        t.style.display = "none";
        const ph = t.nextElementSibling as HTMLElement | null;
        if (ph) ph.style.display = "flex";
      }}
    />
    <div
      style={{ display: "none", background: fallbackBg }}
      className="w-full h-full items-center justify-center text-white/80 text-xs text-center p-4 leading-relaxed"
    >
      {fallbackHint}
    </div>
  </div>
);

/* ---------- Container preset for color pages ---------- */
export const ColorPageShell = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) => (
  <div className="relative min-h-screen overflow-hidden text-white" style={{ background: bg }}>
    <PaintFilters />
    <CanvasGrain />
    {children}
  </div>
);
