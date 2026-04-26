import { Link } from "react-router-dom";
import { getAsset } from "@/lib/assets";

/**
 * Shared building blocks for the /more art-direction system.
 * Oil-painting / maximalist aesthetic. Uses inline styles + SVG filters
 * because this section deliberately breaks the resume's calm design system.
 */

/* ---------- SVG filters: paint texture + brush distortion ---------- */
export const PaintFilters = () => (
  <>
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
        {/* Soft painterly mask — feathered, irregular edges */}
        <filter id="soft-paint-edge" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="5" />
          <feDisplacementMap in="SourceGraphic" scale="28" />
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        {/* Mask used to feather PaintedImage edges (alpha gradient on irregular shape) */}
        <radialGradient id="painted-image-mask" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="92%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="feather-mask">
          <rect width="100%" height="100%" fill="url(#painted-image-mask)" />
        </mask>
      </defs>
    </svg>
  </>
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
    className={`absolute pointer-events-none mix-blend-multiply ${className}`}
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
    className={`absolute pointer-events-none ${className}`}
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

/* ---------- Image: clean, modern, with subtle accent shadow ---------- */
export const PaintedImage = ({
  filename,
  alt,
  className = "",
  fallbackHint,
  fallbackBg = "#222",
  haloColor = "rgba(255,255,255,0.18)",
}: {
  filename: string;
  alt: string;
  className?: string;
  fallbackHint: string;
  fallbackBg?: string;
  /** Soft glow color around the image — should match the page accent */
  haloColor?: string;
}) => {
  const src = getAsset(filename);
  return (
    <div
      className={`painted-image-host overflow-hidden rounded-2xl ${className}`}
      style={{
        boxShadow: `0 24px 60px -12px ${haloColor}, 0 8px 24px rgba(0,0,0,0.35)`,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          style={{ background: fallbackBg }}
          className="w-full h-full flex items-center justify-center text-white/80 text-xs text-center p-4 leading-relaxed"
        >
          {fallbackHint}
        </div>
      )}
    </div>
  );
};

/* ---------- Floating paint specks: scattered dots & droplets ---------- */
const FloatingSpecks = ({ palette }: { palette: string[] }) => {
  // Deterministic pseudo-random positions so SSR/CSR match
  const specks = Array.from({ length: 22 }).map((_, i) => {
    const seed = i * 9301 + 49297;
    const r1 = ((seed * 233280) % 100) / 100;
    const r2 = ((seed * 9301) % 100) / 100;
    const r3 = ((seed * 49297) % 100) / 100;
    return {
      left: `${5 + r1 * 90}%`,
      top: `${8 + r2 * 84}%`,
      size: 6 + r3 * 22,
      color: palette[i % palette.length],
      rotate: r1 * 360,
    };
  });
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      {specks.map((s, i) => (
        <svg
          key={i}
          width={s.size}
          height={s.size}
          viewBox="0 0 20 20"
          className="absolute mix-blend-multiply opacity-70"
          style={{ left: s.left, top: s.top, transform: `rotate(${s.rotate}deg)` }}
        >
          <circle cx="10" cy="10" r="7" fill={s.color} filter="url(#thick-paint)" />
        </svg>
      ))}
    </div>
  );
};

/* ---------- Light halo: soft radiating sun ---------- */
const SunHalo = ({ color, position }: { color: string; position: string }) => (
  <div
    aria-hidden
    className="pointer-events-none absolute z-[1] mix-blend-screen opacity-45"
    style={{
      ...JSON.parse(position),
      width: "38vw",
      height: "38vw",
      maxWidth: 520,
      maxHeight: 520,
      background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
      filter: "blur(8px)",
    }}
  />
);

/* ---------- Drifting swirl strokes ---------- */
const SwirlStroke = ({
  color,
  className,
  rotate = 0,
}: {
  color: string;
  className: string;
  rotate?: number;
}) => (
  <svg
    viewBox="0 0 400 200"
    className={`absolute pointer-events-none mix-blend-overlay opacity-50 ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden
  >
    <path
      d="M10 100 C 80 20, 180 180, 260 100 S 380 30, 395 110"
      stroke={color}
      strokeWidth="14"
      fill="none"
      strokeLinecap="round"
      filter="url(#oil-paint)"
    />
  </svg>
);

/* ---------- Container preset for color pages ---------- */
export const ColorPageShell = ({
  children,
  bg,
  decorPalette,
  haloColor,
}: {
  children: React.ReactNode;
  bg: string;
  /** Accent palette used for floating specks. Falls back to white-ish. */
  decorPalette?: string[];
  /** Color of the central sun-halo. Defaults to warm white. */
  haloColor?: string;
}) => {
  const palette = decorPalette ?? ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.4)"];
  const halo = haloColor ?? "rgba(255,245,210,0.55)";
  return (
    <div className="relative min-h-screen overflow-hidden text-white" style={{ background: bg }}>
      <PaintFilters />
      <CanvasGrain />
      {/* Decorative layer — fills empty space, sits below content */}
      <SunHalo color={halo} position='{"left":"55%","top":"30%"}' />
      <SunHalo color={halo} position='{"left":"5%","top":"68%"}' />
      <SwirlStroke color={palette[0]} className="left-[40%] top-[12%] w-[40%]" rotate={-8} />
      <SwirlStroke color={palette[1] ?? palette[0]} className="left-[5%] top-[55%] w-[35%]" rotate={6} />
      <SwirlStroke color={palette[0]} className="right-[2%] bottom-[8%] w-[45%]" rotate={-4} />
      <FloatingSpecks palette={palette} />
      {children}
    </div>
  );
};
