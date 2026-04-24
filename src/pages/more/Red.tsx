import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Red = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 30% 20%, #8a0a1a 0%, #5e0510 60%, #2a0006 100%)">
    <PaintBackButton accent="#1a0003" />

    {/* Background paint splashes */}
    <PaintBlob
      d="M40 50 C 0 130, 50 230, 150 230 C 260 230, 340 150, 320 70 C 300 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#c0142b"
      className="left-[-10%] top-[10%] w-[55%] aspect-square opacity-70 -rotate-12"
    />
    <PaintBlob
      d="M50 80 C 20 160, 80 240, 170 230 C 270 220, 330 130, 300 70 C 270 20, 180 20, 120 30 C 90 36, 70 50, 50 80 Z"
      fill="#ff3344"
      className="right-[-10%] bottom-[-5%] w-[50%] aspect-square opacity-50 rotate-12"
    />
    <BrushStroke color="#ffb3b8" className="left-[20%] top-[40%] w-[60%] opacity-30" rotate={-5} />
    <BrushStroke color="#3a0008" className="right-[10%] top-[60%] w-[50%] opacity-60" rotate={8} />

    {/* Main content */}
    <main className="relative z-10 px-6 md:px-16 py-24 md:py-32 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-red-200/80 mb-6">
        RED · 01 / 06
      </div>
      <h1
        className="font-black leading-[0.85] tracking-tight mb-10"
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          color: "#fff",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "4px 6px 0 rgba(0,0,0,0.35)",
          letterSpacing: "-0.04em",
        }}
      >
        自我
        <br />
        <span className="italic" style={{ color: "#ff3344", filter: "url(#oil-paint)" }}>
          认同
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-20">
        {/* Logo: 红巢 */}
        <div>
          <div className="text-[11px] tracking-[0.4em] uppercase text-red-200/70 mb-4">
            CORE · 红巢
          </div>
          <div className="relative w-full aspect-square max-w-[420px]">
            <PaintedImage
              filename="红巢.png"
              alt="红巢 logo"
              className="w-full h-full"
              fallbackHint="红巢 logo · 请上传 红巢.png 到 src/assets/"
              fallbackBg="#3a0008"
            />
          </div>
          <p className="mt-8 text-lg md:text-xl text-red-50/85 leading-relaxed max-w-md">
            红巢是我为自己筑的窝 ——<br />
            一个允许我承认愤怒、欲望和野心的地方。<br />
            <span className="italic text-red-200/70">先回到自己，再去爱别人。</span>
          </p>
        </div>

        {/* Image: red.png */}
        <div className="md:mt-24">
          <div className="relative w-full aspect-[4/5] max-w-[420px] ml-auto">
            <svg viewBox="0 0 100 125" className="absolute inset-0 w-full h-full" aria-hidden>
              <path
                d="M8 12 C 4 30, 6 90, 14 116 C 40 122, 80 118, 92 108 C 96 80, 94 30, 88 10 C 60 4, 30 6, 8 12 Z"
                fill="#3a0008"
                filter="url(#thick-paint)"
              />
            </svg>
            <div className="absolute inset-[6%]">
              <PaintedImage
                filename="red.png"
                alt="red 配图"
                className="w-full h-full"
                fallbackHint="red.png · 请上传到 src/assets/"
                fallbackBg="#5e0510"
              />
            </div>
          </div>

          {/* Ribbon / flame */}
          <svg viewBox="0 0 200 60" className="mt-6 w-full max-w-[420px] ml-auto" aria-hidden>
            <path
              d="M5 30 C 40 5, 80 55, 120 25 S 180 50, 195 30"
              stroke="#ff3344"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              filter="url(#oil-paint)"
            />
          </svg>
        </div>
      </div>

      <blockquote
        className="mt-32 text-3xl md:text-5xl font-black italic leading-tight max-w-3xl"
        style={{ color: "#ffd9dd", fontFamily: "Georgia, serif" }}
      >
        " 我不是谁的影子，<br />
        <span style={{ color: "#ff3344" }}>我是火本身。</span>"
      </blockquote>
    </main>
  </ColorPageShell>
);

export default Red;
