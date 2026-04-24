import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Yellow = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 50% 0%, #ffe14a 0%, #f1b81a 45%, #8a6608 100%)">
    <PaintBackButton accent="#5a4205" />

    {/* Light explosion */}
    <svg
      viewBox="0 0 800 800"
      className="absolute left-1/2 top-[-10%] w-[140%] -translate-x-1/2 opacity-50"
      aria-hidden
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 24;
        const x2 = 400 + Math.cos(a) * 600;
        const y2 = 400 + Math.sin(a) * 600;
        return (
          <line
            key={i}
            x1="400"
            y1="400"
            x2={x2}
            y2={y2}
            stroke="#fff7c2"
            strokeWidth={i % 2 === 0 ? 8 : 3}
            filter="url(#oil-paint)"
          />
        );
      })}
    </svg>

    <PaintBlob
      d="M40 50 C 10 130, 50 230, 140 230 C 250 230, 330 150, 310 70 C 290 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#fff2a8"
      className="right-[-15%] top-[20%] w-[55%] aspect-square opacity-60"
    />
    <BrushStroke color="#a87d04" className="left-[10%] bottom-[20%] w-[80%] opacity-40" rotate={-3} />

    <main className="relative z-10 px-6 md:px-16 py-24 md:py-32 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-yellow-900/70 mb-6">
        YELLOW · 03 / 06
      </div>
      <h1
        className="font-black leading-[0.85] tracking-tight mb-10"
        style={{
          fontSize: "clamp(72px, 16vw, 240px)",
          color: "#3d2c00",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "5px 6px 0 #fff7c2",
          letterSpacing: "-0.04em",
        }}
      >
        阳<span className="italic" style={{ color: "#fff", filter: "url(#oil-paint)" }}>光</span>
      </h1>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center mt-16">
        <div>
          <div className="text-[11px] tracking-[0.4em] uppercase text-yellow-900/70 mb-3">
            THEME
          </div>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{ color: "#3d2c00", fontFamily: "Georgia, serif" }}
          >
            我的猫<br />
            <span className="italic" style={{ color: "#a87d04" }}>· 动物保护</span>
          </h2>
          <p className="text-lg md:text-xl text-yellow-950/80 leading-relaxed max-w-md">
            一只猫教会我的事比一年的书还多 ——<br />
            慢、看、不解释、自由地存在。<br />
            <span className="italic">愿所有毛茸茸的生命都能被温柔对待。</span>
          </p>

          {/* Abstract cat silhouette */}
          <svg viewBox="0 0 200 160" className="mt-10 w-64" aria-hidden>
            <path
              d="M40 40 L 50 10 L 70 40 M 130 40 L 150 10 L 160 40"
              fill="#3d2c00"
              filter="url(#thick-paint)"
            />
            <ellipse cx="100" cy="90" rx="65" ry="50" fill="#3d2c00" filter="url(#thick-paint)" />
            <circle cx="80" cy="80" r="6" fill="#fff7c2" />
            <circle cx="120" cy="80" r="6" fill="#fff7c2" />
            <path
              d="M85 105 Q 100 115 115 105"
              stroke="#fff7c2"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30 130 C 50 145, 80 150, 100 145 S 160 145, 175 130"
              stroke="#3d2c00"
              strokeWidth="6"
              fill="none"
              filter="url(#oil-paint)"
            />
          </svg>
        </div>

        <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto">
          <svg viewBox="0 0 100 125" className="absolute inset-0 w-full h-full" aria-hidden>
            <path
              d="M8 14 C 4 36, 6 100, 14 118 C 40 124, 80 120, 92 110 C 96 80, 94 26, 86 8 C 60 2, 28 6, 8 14 Z"
              fill="#3d2c00"
              filter="url(#thick-paint)"
            />
          </svg>
          <div className="absolute inset-[6%]">
            <PaintedImage
              src="/src/assets/yellow.png"
              alt="yellow 配图"
              className="w-full h-full"
              fallbackHint="yellow.png · 请上传到 src/assets/"
              fallbackBg="#f1b81a"
            />
          </div>
        </div>
      </div>

      <blockquote
        className="mt-32 text-3xl md:text-5xl font-black italic leading-tight max-w-3xl"
        style={{ color: "#3d2c00", fontFamily: "Georgia, serif" }}
      >
        " 善待每一个不会说话的灵魂 ——<br />
        <span style={{ color: "#fff7c2" }}>那是文明的底色。</span>"
      </blockquote>
    </main>
  </ColorPageShell>
);

export default Yellow;
