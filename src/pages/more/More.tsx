import { Link } from "react-router-dom";
import { PaintFilters, CanvasGrain, BrushStroke } from "./_shared";
import moreBg from "@/assets/more-bg.jpg";

/**
 * /more — Hub page.
 * Background: uploaded marbled oil-paint texture.
 * Six irregular portals → /more/{red,orange,yellow,green,blue,purple}
 * Portals use multiply + slight transparency to blend into the canvas.
 */

type Portal = {
  to: string;
  label: string;
  word: string;
  glyph: string;
  color: string;
  d: string;
  pos: string;
  rotate: number;
};

const portals: Portal[] = [
  {
    to: "/more/red",
    label: "RED",
    word: "自我认同",
    glyph: "🪺",
    color: "#c0142b",
    d: "M30 40 C 10 90, 40 180, 110 200 C 200 220, 290 170, 320 100 C 340 40, 270 10, 180 20 C 110 28, 50 8, 30 40 Z",
    pos: "left-[2%] top-[6%] w-[36%] aspect-[4/3]",
    rotate: -6,
  },
  {
    to: "/more/orange",
    label: "ORANGE",
    word: "愈合",
    glyph: "🌹",
    color: "#e8631a",
    d: "M40 60 C 0 130, 40 220, 130 220 C 230 220, 320 160, 310 80 C 300 20, 200 0, 130 20 C 80 32, 60 30, 40 60 Z",
    pos: "right-[2%] top-[2%] w-[34%] aspect-[5/4]",
    rotate: 5,
  },
  {
    to: "/more/yellow",
    label: "YELLOW",
    word: "阳光",
    glyph: "🐈",
    color: "#f1b81a",
    d: "M60 30 C 10 70, 10 170, 80 200 C 180 230, 290 180, 310 110 C 320 40, 250 10, 170 20 C 120 26, 90 10, 60 30 Z",
    pos: "left-[6%] top-[34%] w-[30%] aspect-[5/4]",
    rotate: 8,
  },
  {
    to: "/more/green",
    label: "GREEN",
    word: "和平",
    glyph: "🍄",
    color: "#1f7a4d",
    d: "M50 50 C 20 110, 60 200, 140 210 C 240 220, 310 150, 310 90 C 310 30, 240 10, 160 20 C 110 26, 70 30, 50 50 Z",
    pos: "right-[4%] top-[36%] w-[34%] aspect-[5/4]",
    rotate: -7,
  },
  {
    to: "/more/blue",
    label: "BLUE",
    word: "海洋",
    glyph: "🐬",
    color: "#1a4ad6",
    d: "M30 70 C 10 150, 70 220, 160 220 C 250 220, 320 160, 310 80 C 300 20, 220 10, 140 20 C 90 26, 50 30, 30 70 Z",
    pos: "left-[12%] bottom-[2%] w-[34%] aspect-[5/4]",
    rotate: 6,
  },
  {
    to: "/more/purple",
    label: "PURPLE",
    word: "精神",
    glyph: "✦",
    color: "#5b1e8a",
    d: "M40 50 C 10 120, 30 210, 120 220 C 220 230, 310 170, 320 100 C 330 30, 250 0, 170 10 C 110 18, 60 20, 40 50 Z",
    pos: "right-[8%] bottom-[4%] w-[34%] aspect-[5/4]",
    rotate: -5,
  },
];

/* ---------- Decorative center sun (mirrors uploaded reference image) ---------- */
const CenterSun = () => (
  <div
    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[360px] aspect-square"
    aria-hidden
  >
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Radiating rays */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 36;
        const x2 = 100 + Math.cos(a) * 95;
        const y2 = 100 + Math.sin(a) * 95;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="#f5c64a"
            strokeWidth={i % 2 === 0 ? 1.5 : 0.6}
            opacity="0.35"
            filter="url(#oil-paint)"
          />
        );
      })}
      {/* Concentric sun body */}
      <circle cx="100" cy="100" r="60" fill="#f5c64a" opacity="0.25" filter="url(#thick-paint)" />
      <circle cx="100" cy="100" r="44" fill="#f0a830" opacity="0.45" filter="url(#thick-paint)" />
      <circle cx="100" cy="100" r="28" fill="#e89020" opacity="0.7" filter="url(#thick-paint)" />
      <circle cx="100" cy="100" r="14" fill="#fff5d8" opacity="0.85" />
    </svg>
  </div>
);

/* ---------- Scattered paint sparks / star bursts ---------- */
const Sparks = () => {
  const sparks = [
    { left: "8%", top: "22%", size: 14, color: "#c0142b" },
    { left: "92%", top: "18%", size: 10, color: "#5b1e8a" },
    { left: "44%", top: "8%", size: 8, color: "#1a4ad6" },
    { left: "55%", top: "28%", size: 12, color: "#1f7a4d" },
    { left: "20%", top: "62%", size: 16, color: "#e8631a" },
    { left: "78%", top: "70%", size: 11, color: "#f1b81a" },
    { left: "48%", top: "78%", size: 14, color: "#5b1e8a" },
    { left: "30%", top: "92%", size: 9, color: "#c0142b" },
    { left: "68%", top: "94%", size: 10, color: "#1a4ad6" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {sparks.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="absolute"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: 0.55,
          }}
        >
          <path
            d="M10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z"
            fill={s.color}
            filter="url(#oil-paint)"
          />
        </svg>
      ))}
    </div>
  );
};

const More = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image — marbled oil paint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${moreBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      {/* Soft white veil so portals & text stay legible */}
      <div className="absolute inset-0 bg-[hsl(40_30%_96%/0.45)]" aria-hidden />

      <PaintFilters />
      <CanvasGrain />

      {/* Subtle accent stroke (background image already does the heavy lifting) */}
      <BrushStroke
        color="#5b1e8a"
        className="left-[5%] top-[24%] w-[55%] opacity-[0.12]"
        rotate={-6}
      />

      {/* Resume back link */}
      <Link
        to="/"
        className="fixed top-5 right-6 md:top-7 md:right-9 z-50 text-[12px] tracking-[0.2em] uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors bg-[hsl(40_30%_96%/0.6)] px-3 py-1.5 rounded-full backdrop-blur-sm"
      >
        ← back to resume
      </Link>

      {/* Hero title */}
      <header className="relative z-10 px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-12 text-center">
        <div className="inline-block text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-[#7a1f0c] font-semibold mb-6">
          MORE · 多元 · 多彩 · 多面
        </div>
        <h1
          className="font-black leading-[0.9] tracking-tight"
          style={{
            fontSize: "clamp(48px, 11vw, 168px)",
            color: "#1a1a1a",
            fontFamily: "'SF Pro Display', 'PingFang SC', serif",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block">更多元</span>
          <span
            className="block italic"
            style={{ color: "#c0142b", filter: "url(#oil-paint)" }}
          >
            更多彩
          </span>
          <span className="block">更多面</span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[17px] text-[#1a1a1a]/75 max-w-xl mx-auto leading-relaxed">
          除了简历里那些「正经事」 ——<br />
          这里是我作为一个人，更野、更鲜艳、更不被定义的部分。
        </p>
      </header>

      {/* Portal canvas — layered, irregular, overlapping, blended */}
      <section className="relative z-10 mx-auto max-w-[1400px] h-[1100px] md:h-[1200px] mb-20">
        {/* Center sun + scattered sparks fill the negative space */}
        <CenterSun />
        <Sparks />

        {portals.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className={`group absolute ${p.pos} block`}
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <div
              className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-2"
              style={{ filter: "drop-shadow(0 8px 24px rgba(60,40,20,0.18))" }}
            >
              <svg
                viewBox="0 0 360 240"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                aria-hidden
                style={{ mixBlendMode: "multiply" }}
              >
                {/* main painted blob — slightly transparent so canvas texture bleeds through */}
                <path
                  d={p.d}
                  fill={p.color}
                  opacity="0.88"
                  filter="url(#thick-paint)"
                />
                {/* dark rough edge */}
                <path
                  d={p.d}
                  fill="none"
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="1.5"
                  filter="url(#oil-paint)"
                />
                {/* light highlight */}
                <path
                  d={p.d}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                  filter="url(#oil-paint)"
                />
              </svg>
              <div
                className="relative h-full w-full flex flex-col items-center justify-center text-white px-6 text-center"
                style={{ transform: `rotate(${-p.rotate}deg)` }}
              >
                <div className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase opacity-90 mb-2">
                  {p.label}
                </div>
                <div
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "clamp(32px, 4vw, 56px)",
                    textShadow: "2px 3px 0 rgba(0,0,0,0.3)",
                  }}
                >
                  {p.word}
                </div>
                <div className="text-3xl md:text-4xl opacity-95">{p.glyph}</div>
                <div className="mt-4 text-[11px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-90 transition-opacity">
                  enter →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="relative z-10 text-center pb-10 text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/55">
        painted with intention · 2026
      </footer>
    </div>
  );
};

export default More;
