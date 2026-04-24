import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Orange = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 70% 30%, #f08a2c 0%, #c45a14 50%, #6e2f08 100%)">
    <PaintBackButton accent="#3a1505" />

    <PaintBlob
      d="M40 50 C 10 130, 50 230, 140 230 C 250 230, 330 150, 310 70 C 290 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#ffb866"
      className="right-[-12%] top-[5%] w-[55%] aspect-square opacity-50 rotate-6"
    />
    <PaintBlob
      d="M30 80 C 0 170, 80 250, 170 230 C 270 210, 320 130, 290 70 C 260 20, 170 20, 110 30 C 80 36, 50 50, 30 80 Z"
      fill="#e8631a"
      className="left-[-10%] bottom-[-5%] w-[50%] aspect-square opacity-70 -rotate-8"
    />
    {/* gold drip */}
    <BrushStroke color="#ffcc55" className="left-[15%] top-[20%] w-[70%] opacity-40" rotate={2} />
    <BrushStroke color="#fff2c0" className="right-[5%] bottom-[30%] w-[60%] opacity-35" rotate={-6} />

    <main className="relative z-10 px-6 md:px-16 py-24 md:py-32 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-orange-100/80 mb-6">
        ORANGE · 02 / 06
      </div>
      <h1
        className="font-black leading-[0.85] tracking-tight mb-12"
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          color: "#fff7e6",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "4px 6px 0 rgba(0,0,0,0.3)",
          letterSpacing: "-0.04em",
        }}
      >
        <span className="italic" style={{ color: "#ffd28a", filter: "url(#oil-paint)" }}>
          愈
        </span>
        合
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl text-orange-50/90 leading-relaxed mb-20">
        裂痕不是要被掩盖的 ——<br />
        而是金色颜料流过的地方。<br />
        <span className="italic text-orange-100/70">
          三个让我重新长出力气的项目。
        </span>
      </p>

      {/* Three logos in a staggered, painterly row */}
      <div className="grid md:grid-cols-3 gap-10 md:gap-6 mb-24">
        {[
          { src: "极乐玫瑰.png", label: "极乐玫瑰", offset: "md:mt-0" },
          { src: "Ambifree.png", label: "Ambifree", offset: "md:mt-16" },
          { src: "herstory.png", label: "herstory", offset: "md:mt-6" },
        ].map((logo) => (
          <div key={logo.label} className={`flex flex-col items-center ${logo.offset}`}>
            <div className="relative w-full aspect-square max-w-[280px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
                <path
                  d="M10 14 C 4 36, 6 80, 14 92 C 40 98, 78 94, 90 84 C 96 60, 94 22, 84 8 C 60 2, 30 6, 10 14 Z"
                  fill="rgba(255,247,230,0.95)"
                  filter="url(#thick-paint)"
                />
              </svg>
              <div className="absolute inset-[10%]">
                <PaintedImage
                  src={`/src/assets/${logo.src}`}
                  alt={`${logo.label} logo`}
                  className="w-full h-full"
                  fallbackHint={`${logo.label} · 请上传 ${logo.src}`}
                  fallbackBg="#fff7e6"
                />
              </div>
            </div>
            <div
              className="mt-6 text-2xl md:text-3xl font-black"
              style={{
                color: "#fff7e6",
                fontFamily: "Georgia, serif",
                textShadow: "2px 3px 0 rgba(0,0,0,0.25)",
              }}
            >
              {logo.label}
            </div>
          </div>
        ))}
      </div>

      {/* Hero side image */}
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="relative w-full aspect-[5/4] max-w-[600px]">
          <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" aria-hidden>
            <path
              d="M6 10 C 2 30, 4 60, 10 74 C 40 80, 80 76, 94 68 C 98 50, 96 16, 88 6 C 60 2, 28 4, 6 10 Z"
              fill="#3a1505"
              filter="url(#thick-paint)"
            />
          </svg>
          <div className="absolute inset-[5%]">
            <PaintedImage
              src="/src/assets/orange.png"
              alt="orange 配图"
              className="w-full h-full"
              fallbackHint="orange.png · 请上传到 src/assets/"
              fallbackBg="#c45a14"
            />
          </div>
        </div>

        <blockquote
          className="text-3xl md:text-5xl font-black italic leading-tight"
          style={{ color: "#fff7e6", fontFamily: "Georgia, serif" }}
        >
          " 让<br />
          <span style={{ color: "#ffcc55" }}>金色</span><br />
          流进<br />
          裂缝里 "
        </blockquote>
      </div>
    </main>
  </ColorPageShell>
);

export default Orange;
