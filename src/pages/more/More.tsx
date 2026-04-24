import { Link } from "react-router-dom";
import { PaintFilters, CanvasGrain, PaintBlob, BrushStroke } from "./_shared";

/**
 * /more — Hub page.
 * Background: warm canvas (off-white) with thick paint splashes.
 * Six irregular portals → /more/{red,orange,yellow,green,blue,purple}
 */

type Portal = {
  to: string;
  label: string;
  word: string; // theme word
  glyph: string; // small representative element
  color: string;
  d: string; // SVG path for the painted blob
  pos: string; // tailwind classes for positioning
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

const More = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, #f5e9d6 0%, #efe1c8 40%, #e7d6b3 100%)",
      }}
    >
      <PaintFilters />
      <CanvasGrain />

      {/* Background painterly accents */}
      <PaintBlob
        d="M80 60 C 30 130, 60 240, 160 250 C 280 260, 360 180, 340 90 C 320 20, 220 10, 140 20 C 110 22, 100 30, 80 60 Z"
        fill="#ec603e"
        className="left-[-12%] top-[-10%] w-[60%] aspect-square opacity-[0.18] -rotate-12"
      />
      <PaintBlob
        d="M50 90 C 10 170, 90 260, 180 240 C 280 220, 340 130, 300 70 C 260 20, 170 30, 110 40 C 80 46, 70 60, 50 90 Z"
        fill="#1a4ad6"
        className="right-[-10%] bottom-[-12%] w-[55%] aspect-square opacity-[0.14] rotate-12"
      />
      <BrushStroke color="#5b1e8a" className="left-[10%] top-[28%] w-[60%] opacity-20" rotate={-8} />

      {/* Resume back link — small, painted */}
      <Link
        to="/"
        className="fixed top-5 right-6 md:top-7 md:right-9 z-50 text-[12px] tracking-[0.2em] uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
      >
        ← back to resume
      </Link>

      {/* Hero title */}
      <header className="relative z-10 px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-12 text-center">
        <div
          className="inline-block text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-[#7a1f0c] font-semibold mb-6"
        >
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
        <p className="mt-6 text-[15px] md:text-[17px] text-[#1a1a1a]/70 max-w-xl mx-auto leading-relaxed">
          除了简历里那些「正经事」 ——<br />
          这里是我作为一个人，更野、更鲜艳、更不被定义的部分。
        </p>
      </header>

      {/* Portal canvas — layered, irregular, overlapping */}
      <section className="relative z-10 mx-auto max-w-[1400px] h-[1100px] md:h-[1200px] mb-20">
        {portals.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className={`group absolute ${p.pos} block`}
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-2">
              <svg
                viewBox="0 0 360 240"
                className="absolute inset-0 w-full h-full drop-shadow-2xl"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d={p.d} fill={p.color} filter="url(#thick-paint)" />
                {/* highlight stroke */}
                <path
                  d={p.d}
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="2"
                  filter="url(#oil-paint)"
                />
              </svg>
              <div
                className="relative h-full w-full flex flex-col items-center justify-center text-white px-6 text-center"
                style={{ transform: `rotate(${-p.rotate}deg)` }}
              >
                <div className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase opacity-80 mb-2">
                  {p.label}
                </div>
                <div
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "clamp(32px, 4vw, 56px)",
                    textShadow: "2px 3px 0 rgba(0,0,0,0.25)",
                  }}
                >
                  {p.word}
                </div>
                <div className="text-3xl md:text-4xl opacity-90">{p.glyph}</div>
                <div className="mt-4 text-[11px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-90 transition-opacity">
                  enter →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="relative z-10 text-center pb-10 text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/50">
        painted with intention · 2026
      </footer>
    </div>
  );
};

export default More;
