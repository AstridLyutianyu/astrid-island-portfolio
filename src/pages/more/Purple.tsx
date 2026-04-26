import { ColorPageShell, PaintBackButton, PaintBlob, BrushStroke, PaintedImage } from "./_shared";

const Purple = () => (
  <ColorPageShell bg="radial-gradient(ellipse at 50% 30%, #6e21b8 0%, #3a0e6a 55%, #14041f 100%)">
    <PaintBackButton accent="#14041f" />

    <PaintBlob
      d="M40 50 C 10 130, 50 230, 140 230 C 250 230, 330 150, 310 70 C 290 10, 200 0, 130 20 C 90 28, 60 30, 40 50 Z"
      fill="#b06bff"
      className="left-[-12%] top-[5%] w-[55%] aspect-square opacity-55 -rotate-12"
    />
    <PaintBlob
      d="M30 80 C 0 170, 80 250, 170 230 C 270 210, 320 130, 290 70 C 260 20, 170 20, 110 30 C 80 36, 50 50, 30 80 Z"
      fill="#3a0e6a"
      className="right-[-12%] bottom-[-5%] w-[55%] aspect-square opacity-80 rotate-6"
    />

    {/* Star sparks */}
    {Array.from({ length: 18 }).map((_, i) => {
      const left = (i * 53) % 100;
      const top = (i * 37) % 100;
      const size = 8 + (i % 5) * 4;
      return (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
          }}
          aria-hidden
        >
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <path
              d="M10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z"
              fill={i % 3 === 0 ? "#fff" : "#ffd6f8"}
              opacity={0.55}
              filter="url(#oil-paint)"
            />
          </svg>
        </div>
      );
    })}

    <BrushStroke color="#ffd6f8" className="left-[5%] top-[55%] w-[80%] opacity-30" rotate={-4} />

    <main className="relative z-10 px-6 md:px-16 py-14 md:py-20 max-w-[1400px] mx-auto">
      <div className="text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-purple-100/80 mb-6">
        PURPLE · 06 / 06
      </div>
      <h1
        className="font-black leading-[0.85] tracking-tight mb-12"
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          color: "#fff0fc",
          fontFamily: "'SF Pro Display', 'PingFang SC', serif",
          textShadow: "4px 6px 0 rgba(0,0,0,0.45)",
          letterSpacing: "-0.04em",
        }}
      >
        精<span className="italic" style={{ color: "#b06bff", filter: "url(#oil-paint)" }}>神</span>
      </h1>

      {/* Big bold manifesto, allowed to overflow */}
      <div className="relative my-20">
        <h2
          className="font-black leading-[0.92] tracking-tight"
          style={{
            fontSize: "clamp(40px, 8vw, 130px)",
            color: "#fff0fc",
            fontFamily: "Georgia, serif",
          }}
        >
          去活，<br />
          去<span className="italic" style={{ color: "#ffd6f8" }}>创作</span>，<br />
          直到流下<span style={{ color: "#b06bff" }}>眼泪。</span>
        </h2>

        {/* Painted tear */}
        <svg viewBox="0 0 60 100" className="absolute -right-2 md:right-12 top-10 w-16 md:w-24" aria-hidden>
          <path
            d="M30 5 C 10 40, 5 70, 30 92 C 55 70, 50 40, 30 5 Z"
            fill="#b06bff"
            filter="url(#thick-paint)"
          />
          <path
            d="M30 5 C 10 40, 5 70, 30 92 C 55 70, 50 40, 30 5 Z"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            filter="url(#oil-paint)"
          />
        </svg>
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center mt-12">
        <div>
          <p className="text-lg md:text-xl text-purple-100/85 leading-relaxed max-w-md">
            创作不是奢侈，是证明你还活着的方式。<br />
            <span className="italic">写下那行你不敢说的话，<br />画下那张让你颤抖的脸。</span>
          </p>

          {/* Cluster of star bursts */}
          <div className="relative mt-10 h-40">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                viewBox="0 0 40 40"
                className="absolute"
                style={{
                  left: `${i * 18}%`,
                  top: `${(i % 2) * 30}%`,
                  width: 50 + i * 8,
                  height: 50 + i * 8,
                }}
                aria-hidden
              >
                <path
                  d="M20 0 L 24 16 L 40 20 L 24 24 L 20 40 L 16 24 L 0 20 L 16 16 Z"
                  fill={i % 2 === 0 ? "#fff" : "#b06bff"}
                  opacity="0.85"
                  filter="url(#oil-paint)"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto">
          <svg viewBox="0 0 100 125" className="absolute inset-0 w-full h-full" aria-hidden>
            <path
              d="M8 14 C 4 36, 6 100, 14 118 C 40 124, 80 120, 92 110 C 96 80, 94 26, 86 8 C 60 2, 28 6, 8 14 Z"
              fill="#14041f"
              filter="url(#thick-paint)"
            />
          </svg>
          <div className="absolute inset-[6%]">
            <PaintedImage
              filename="purple.png"
              alt="purple 配图"
              className="w-full h-full"
              fallbackHint="purple.png · 请上传到 src/assets/"
              fallbackBg="#3a0e6a"
            />
          </div>
        </div>
      </div>

      <blockquote
        className="mt-16 md:mt-12 text-3xl md:text-5xl font-black italic leading-tight max-w-3xl"
        style={{ color: "#fff0fc", fontFamily: "Georgia, serif" }}
      >
        " 流泪不是软弱 ——<br />
        <span style={{ color: "#b06bff" }}>是灵魂还在工作的证据。</span>"
      </blockquote>
    </main>
  </ColorPageShell>
);

export default Purple;
