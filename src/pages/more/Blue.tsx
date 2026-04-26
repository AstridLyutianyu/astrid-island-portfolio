import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Blue = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 70% 80%, #1a4ad6 0%, #0a2a8a 55%, #03102e 100%)">
    <PaintBackButton accent="#03102e" />

    <PaintBlob
      d="M40 50 C 10 130, 50 230, 140 230 C 250 230, 330 150, 310 70 C 290 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#3a7bff"
      className="right-[-10%] top-[10%] w-[55%] aspect-square opacity-55 rotate-6"
    />

    {/* Wavy ocean strokes */}
    {Array.from({ length: 6 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 1200 120"
        className="absolute w-full opacity-25"
        style={{ top: `${15 + i * 14}%`, transform: `translateX(${i % 2 === 0 ? 0 : -40}px)` }}
        aria-hidden
      >
        <path
          d={`M0 ${60} Q 150 ${20 + i * 6} 300 ${60} T 600 ${60} T 900 ${60} T 1200 ${60}`}
          stroke={i % 2 === 0 ? "#7fb6ff" : "#fff"}
          strokeWidth={i % 2 === 0 ? 5 : 2}
          fill="none"
          filter="url(#oil-paint)"
        />
      </svg>
    ))}

    <BrushStroke color="#fff" className="left-[10%] top-[68%] w-[40%] opacity-30" rotate={-3} />

    <main className="relative z-10 px-6 md:px-16 py-14 md:py-20 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-blue-100/80 mb-6">
        BLUE · 05 / 06
      </div>
      <h1
        className="font-black leading-[0.85] tracking-tight mb-10"
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          color: "#eaf3ff",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "4px 6px 0 rgba(0,0,0,0.4)",
          letterSpacing: "-0.04em",
        }}
      >
        海<span className="italic" style={{ color: "#7fb6ff", filter: "url(#oil-paint)" }}>洋</span>
      </h1>
      <p className="text-2xl md:text-4xl font-black italic text-blue-100/90 mb-12" style={{ fontFamily: "Georgia, serif" }}>
        — 保护生态。
      </p>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative w-full aspect-[5/4] max-w-[640px]">
          <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" aria-hidden>
            <path
              d="M6 10 C 2 30, 4 60, 10 74 C 40 80, 80 76, 94 68 C 98 50, 96 16, 88 6 C 60 2, 28 4, 6 10 Z"
              fill="#03102e"
              filter="url(#thick-paint)"
            />
          </svg>
          <div className="absolute inset-[5%]">
            <PaintedImage
              filename="blue.png"
              alt="blue 配图"
              className="w-full h-full"
              fallbackHint="blue.png · 请上传到 src/assets/"
              fallbackBg="#0a2a8a"
            />
          </div>
        </div>

        {/* Painted dolphin */}
        <div>
          <svg viewBox="0 0 320 220" className="w-full max-w-[420px]" aria-hidden>
            {/* dolphin body — abstract brush silhouette */}
            <path
              d="M20 130 C 40 80, 110 60, 180 70 C 230 76, 260 60, 280 30 C 285 60, 270 90, 240 105 C 280 110, 300 130, 305 160 C 270 150, 230 152, 200 165 C 160 180, 110 188, 70 178 C 40 170, 20 155, 20 130 Z"
              fill="#eaf3ff"
              filter="url(#thick-paint)"
            />
            {/* eye */}
            <circle cx="200" cy="100" r="4" fill="#03102e" />
            {/* fin */}
            <path
              d="M120 70 C 130 40, 160 30, 175 50 C 165 60, 145 70, 120 70 Z"
              fill="#7fb6ff"
              filter="url(#thick-paint)"
            />
            {/* water splash */}
            <path
              d="M280 30 C 300 10, 320 5, 318 22"
              stroke="#7fb6ff"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              filter="url(#oil-paint)"
            />
          </svg>
          <div
            className="mt-6 text-2xl md:text-3xl font-black italic"
            style={{ color: "#7fb6ff", fontFamily: "Georgia, serif" }}
          >
            它们听得懂海，<br />
            我们却忘了听。
          </div>
        </div>
      </div>

      {/* Water-oil separation band */}
      <div className="mt-14 h-32 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #1a4ad6 0%, #1a4ad6 50%, #f5e9d6 50%, #f5e9d6 100%)" }} />
        <svg viewBox="0 0 1200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0 100 Q 100 60 200 100 T 400 100 T 600 100 T 800 100 T 1000 100 T 1200 100 L 1200 200 L 0 200 Z"
            fill="#1a4ad6"
            filter="url(#oil-paint)"
          />
        </svg>
      </div>

      <blockquote
        className="mt-14 text-3xl md:text-5xl font-black italic leading-tight max-w-3xl"
        style={{ color: "#eaf3ff", fontFamily: "Georgia, serif" }}
      >
        " 海不是你的，<br />
        <span style={{ color: "#7fb6ff" }}>你只是从海里来。</span>"
      </blockquote>
    </main>
  </ColorPageShell>
);

export default Blue;
