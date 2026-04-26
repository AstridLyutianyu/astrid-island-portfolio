import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Green = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 30% 70%, #1f7a4d 0%, #0e4a2c 50%, #051a10 100%)">
    <PaintBackButton accent="#04150a" />

    <PaintBlob
      d="M40 50 C 10 130, 50 230, 140 230 C 250 230, 330 150, 310 70 C 290 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#2bb872"
      className="left-[-10%] bottom-[5%] w-[55%] aspect-square opacity-60"
    />
    <PaintBlob
      d="M30 80 C 0 170, 80 250, 170 230 C 270 210, 320 130, 290 70 C 260 20, 170 20, 110 30 C 80 36, 50 50, 30 80 Z"
      fill="#0e4a2c"
      className="right-[-12%] top-[5%] w-[50%] aspect-square opacity-80"
    />
    <BrushStroke color="#7fffb8" className="left-[20%] top-[35%] w-[60%] opacity-25" rotate={4} />

    <main className="relative z-10 px-6 md:px-16 py-14 md:py-20 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-green-200/80 mb-6">
        GREEN · 04 / 06
      </div>

      {/* Palestine flag — painted, not pasted */}
      <div className="relative w-48 md:w-64 h-32 md:h-40 mb-10">
        <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden>
          {/* triangle */}
          <path d="M0 0 L 80 60 L 0 120 Z" fill="#c0142b" filter="url(#thick-paint)" />
          {/* black */}
          <rect x="0" y="0" width="200" height="40" fill="#0a0a0a" filter="url(#thick-paint)" />
          {/* white */}
          <rect x="0" y="40" width="200" height="40" fill="#f8f8f5" filter="url(#thick-paint)" />
          {/* green */}
          <rect x="0" y="80" width="200" height="40" fill="#1f7a4d" filter="url(#thick-paint)" />
          {/* triangle on top */}
          <path d="M0 0 L 80 60 L 0 120 Z" fill="#c0142b" filter="url(#thick-paint)" />
        </svg>
        <div className="absolute -bottom-7 left-0 text-[11px] tracking-[0.3em] uppercase text-green-100/70">
          ☮ free palestine · 反战
        </div>
      </div>

      <h1
        className="font-black leading-[0.85] tracking-tight mb-12 mt-10"
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          color: "#eafff4",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "4px 6px 0 rgba(0,0,0,0.4)",
          letterSpacing: "-0.04em",
        }}
      >
        和<span className="italic" style={{ color: "#7fffb8", filter: "url(#oil-paint)" }}>平</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-12">
        {/* muchroom logo */}
        <div>
          <div className="text-[11px] tracking-[0.4em] uppercase text-green-200/70 mb-4">
            CORE · muchroom
          </div>
          <div className="relative w-full aspect-square max-w-[420px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
              <path
                d="M10 14 C 4 36, 6 86, 14 92 C 40 98, 80 94, 90 84 C 96 60, 94 18, 84 8 C 60 2, 30 6, 10 14 Z"
                fill="rgba(234,255,244,0.92)"
                filter="url(#thick-paint)"
              />
            </svg>
            <div className="absolute inset-[10%]">
              <PaintedImage
                filename="muchroom.png"
                alt="muchroom logo"
                className="w-full h-full"
                fallbackHint="muchroom logo · 请上传 muchroom.png 到 src/assets/"
                fallbackBg="#eafff4"
              />
            </div>
          </div>
          <p className="mt-8 text-lg md:text-xl text-green-50/85 leading-relaxed max-w-md">
            蘑菇在土壤里建立的网络，<br />
            是地球最古老的「和平协议」。<br />
            <span className="italic text-green-100/70">
              我们也可以这样彼此连接 —— 不靠掠夺。
            </span>
          </p>

          {/* Olive branch */}
          <svg viewBox="0 0 300 80" className="mt-8 w-72" aria-hidden>
            <path
              d="M10 60 C 80 30, 160 50, 290 20"
              stroke="#7fffb8"
              strokeWidth="4"
              fill="none"
              filter="url(#oil-paint)"
            />
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx={40 + i * 32}
                cy={50 - i * 4}
                rx="12"
                ry="5"
                fill="#1f7a4d"
                filter="url(#thick-paint)"
                transform={`rotate(${-20 + i * 4} ${40 + i * 32} ${50 - i * 4})`}
              />
            ))}
          </svg>
        </div>

        <div className="md:mt-14">
          <div className="relative w-full aspect-[4/5] max-w-[420px] ml-auto">
            <svg viewBox="0 0 100 125" className="absolute inset-0 w-full h-full" aria-hidden>
              <path
                d="M8 14 C 4 36, 6 100, 14 118 C 40 124, 80 120, 92 110 C 96 80, 94 26, 86 8 C 60 2, 28 6, 8 14 Z"
                fill="#04150a"
                filter="url(#thick-paint)"
              />
            </svg>
            <div className="absolute inset-[6%]">
              <PaintedImage
                filename="green.png"
                alt="green 配图"
                className="w-full h-full"
                fallbackHint="green.png · 请上传到 src/assets/"
                fallbackBg="#0e4a2c"
              />
            </div>
          </div>

          {/* peace symbol */}
          <svg viewBox="0 0 100 100" className="mt-8 w-24 ml-auto" aria-hidden>
            <circle cx="50" cy="50" r="42" stroke="#7fffb8" strokeWidth="5" fill="none" filter="url(#oil-paint)" />
            <line x1="50" y1="8" x2="50" y2="92" stroke="#7fffb8" strokeWidth="5" filter="url(#oil-paint)" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="#7fffb8" strokeWidth="5" filter="url(#oil-paint)" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="#7fffb8" strokeWidth="5" filter="url(#oil-paint)" />
          </svg>
        </div>
      </div>

      <blockquote
        className="mt-16 md:mt-12 text-3xl md:text-5xl font-black italic leading-tight max-w-3xl"
        style={{ color: "#eafff4", fontFamily: "Georgia, serif" }}
      >
        " 沉默是<span style={{ color: "#c0142b" }}>共谋</span> ——<br />
        说出来，是最低限度的<span style={{ color: "#7fffb8" }}>和平。</span>"
      </blockquote>
    </main>
  </ColorPageShell>
);

export default Green;
