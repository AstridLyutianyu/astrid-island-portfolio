import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/astrid-portrait.jpg";

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

/* ---------- Reusable Apple-style product card ---------- */
type CardProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  theme?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
};

const ProductCard = ({
  id,
  eyebrow,
  title,
  sub,
  primaryCta,
  secondaryCta,
  theme = "light",
  align = "center",
  className = "",
  children,
}: CardProps) => {
  const isDark = theme === "dark";
  return (
    <article
      id={id}
      className={`relative overflow-hidden rounded-[18px] ${
        isDark ? "bg-[hsl(var(--surface-dark))]" : "bg-white"
      } ${className}`}
    >
      <div
        className={`relative z-10 pt-12 md:pt-14 px-6 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <div
            className={`apple-eyebrow mb-2 ${
              isDark ? "text-on-dark" : "text-foreground"
            }`}
          >
            {eyebrow}
          </div>
        )}
        <h3
          className={`apple-card-title mb-3 ${
            isDark ? "text-on-dark" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        {sub && (
          <p
            className={`apple-card-sub max-w-md mx-auto ${
              isDark ? "text-on-dark-sub" : "text-muted-foreground"
            }`}
          >
            {sub}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div
            className={`mt-6 flex items-center gap-5 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {primaryCta && (
              <a href={primaryCta.href} className="apple-pill">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="apple-pill-ghost">
                {secondaryCta.label} <span className="ml-1">›</span>
              </a>
            )}
          </div>
        )}
      </div>
      {children}
    </article>
  );
};

/* ---------- Visual elements inside cards ---------- */

const PortraitVisual = () => (
  <div className="absolute inset-x-0 bottom-0 h-[58%] flex items-end justify-center pointer-events-none">
    <img
      src={portrait}
      alt="Astrid 鱼仔"
      className="h-full w-auto object-contain object-bottom"
      loading="eager"
    />
  </div>
);

const SkillsVisual = () => {
  const skills = ["运营管理", "社群运营", "新媒体", "AI 应用", "内容策划", "项目协作"];
  return (
    <div className="relative mt-10 px-6 pb-14">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {skills.map((s, i) => (
          <span
            key={s}
            style={{ animationDelay: `${i * 80}ms` }}
            className={`animate-fade-up rounded-full bg-white border border-border px-5 py-2.5 text-[17px] font-medium text-foreground shadow-[var(--shadow-card)] ${
              i % 3 === 0 ? "text-xl px-6 py-3" : ""
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const FocusVisual = () => {
  const items = [
    { emoji: "✨", label: "AI 与女性社群" },
    { emoji: "📓", label: "新媒体培训" },
    { emoji: "🌿", label: "自然与人" },
  ];
  return (
    <div className="mt-10 grid grid-cols-3 gap-3 px-6 pb-12 max-w-md mx-auto">
      {items.map((it, i) => (
        <div
          key={it.label}
          style={{ animationDelay: `${i * 100}ms` }}
          className="animate-fade-up flex flex-col items-center gap-2 rounded-2xl bg-white border border-border py-5 px-2"
        >
          <span className="text-3xl">{it.emoji}</span>
          <span className="text-[13px] text-muted-foreground text-center leading-tight">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const IslandVisual = () => (
  <div className="mt-8 pb-12 px-6">
    <div className="mx-auto max-w-md aspect-[16/10] rounded-2xl bg-gradient-to-br from-[hsl(199_85%_75%)] via-[hsl(192_90%_82%)] to-[hsl(45_95%_85%)] relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(210_60%_30%)] to-transparent opacity-60" />
      <svg
        className="absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 400 120"
        fill="none"
      >
        <path
          d="M0 80 Q 100 40 200 70 T 400 60 V120 H0 Z"
          fill="hsl(160 50% 35%)"
          opacity="0.85"
        />
        <path
          d="M0 95 Q 120 65 220 90 T 400 85 V120 H0 Z"
          fill="hsl(160 60% 25%)"
        />
      </svg>
      <div className="absolute top-6 right-8 w-12 h-12 rounded-full bg-white/80 blur-sm" />
      <div className="absolute top-7 right-9 w-10 h-10 rounded-full bg-white" />
    </div>
  </div>
);

const ContactVisual = () => (
  <div className="mt-8 pb-12 px-6">
    <div className="mx-auto max-w-sm rounded-2xl bg-[hsl(0_0%_96%)] border border-border p-6 text-left space-y-4">
      <div>
        <div className="text-[13px] text-muted-foreground mb-1">微信</div>
        <div className="text-[19px] font-medium text-foreground tracking-wide">
          ltyuu_
        </div>
      </div>
      <div className="h-px bg-border" />
      <div>
        <div className="text-[13px] text-muted-foreground mb-1">邮箱</div>
        <div className="text-[19px] font-medium text-foreground">
          hello@astrid.me
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Page ---------- */

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      {/* Top nav — apple style: thin, centered links, glass */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[hsl(0_0%_100%/0.8)] backdrop-blur-xl border-b border-border/60">
        <nav className="max-w-[1024px] mx-auto h-11 px-6 flex items-center justify-between text-[12px] text-foreground/80">
          <a href="#hero" className="font-medium">Astrid 鱼仔</a>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:text-foreground transition-quick">关于</a>
            <a href="#now" className="hover:text-foreground transition-quick">在做的事</a>
            <a href="#skills" className="hover:text-foreground transition-quick">技能</a>
            <a href="#projects" className="hover:text-foreground transition-quick">项目</a>
            <a href="#contact" className="hover:text-foreground transition-quick">联系</a>
          </div>
          <a href="#contact" className="hover:text-foreground transition-quick">合作 ›</a>
        </nav>
      </header>

      {/* HERO — large centered title like apple */}
      <section
        id="hero"
        className="bg-white pt-20 md:pt-24 pb-16 md:pb-20 text-center px-6 animate-fade-in"
      >
        <div className="apple-eyebrow text-foreground">Astrid 鱼仔</div>
        <h1 className="apple-headline mt-2 mb-3 text-foreground">
          少而精，慢而美。
        </h1>
        <p className="apple-subhead max-w-2xl mx-auto">
          运营管理者 · 内容策划 · 社群共创者。<br className="hidden md:block" />
          用结构化思维做有温度的项目。
        </p>
        <div className="mt-6 flex items-center justify-center gap-5">
          <a href="#contact" className="apple-pill">和我聊聊</a>
          <a href="#projects" className="apple-pill-ghost">了解更多 ›</a>
        </div>
      </section>

      {/* Grid of product-style cards */}
      <main className="px-2 md:px-4 pb-4">
        {/* Row 1: About — split layout, photo on the right with depth */}
        <Reveal>
          <article className="relative overflow-hidden rounded-[18px] bg-white mb-2 grid md:grid-cols-2 min-h-[560px] md:min-h-[640px]">
            {/* Left: text */}
            <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 py-14 md:py-20 text-left">
              <div className="apple-eyebrow text-[hsl(var(--apple-blue))] mb-3">About</div>
              <h2 className="apple-card-title mb-4 text-foreground">
                认识一下，<br />
                我是 Astrid。
              </h2>
              <p className="apple-card-sub text-muted-foreground max-w-md mb-8">
                运营管理是日常，但我喜欢在工作之外保留一点野生的好奇心 ——
                关注 AI、女性社群、新媒体表达，也愿意走到自然里去。
              </p>

              {/* mini facts */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
                {[
                  { k: "城市", v: "广州" },
                  { k: "角色", v: "运营 / 共创" },
                  { k: "状态", v: "开放合作" },
                ].map((f) => (
                  <div key={f.k}>
                    <div className="text-[12px] text-muted-foreground mb-1">{f.k}</div>
                    <div className="text-[15px] font-medium text-foreground">{f.v}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a href="#contact" className="apple-pill">联系我</a>
                <a href="#projects" className="apple-pill-ghost">查看项目 ›</a>
              </div>
            </div>

            {/* Right: portrait with decorative layers */}
            <div className="relative h-[420px] md:h-auto bg-gradient-to-br from-[hsl(220_25%_94%)] via-[hsl(210_30%_92%)] to-[hsl(200_40%_88%)] overflow-hidden">
              {/* soft blob */}
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[hsl(211_100%_70%/0.18)] blur-3xl" />
              <div className="absolute bottom-10 -left-10 w-56 h-56 rounded-full bg-[hsl(45_100%_75%/0.25)] blur-3xl" />

              {/* grid lines for design feel */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* portrait card, offset & tilted slightly */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[28px] bg-white/60 backdrop-blur-sm shadow-[0_20px_60px_-15px_hsl(0_0%_0%/0.15)] -rotate-3" />
                  <div className="absolute -inset-1.5 rounded-[24px] bg-white shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.18)] rotate-1" />
                  <img
                    src={portrait}
                    alt="Astrid 鱼仔"
                    className="relative w-[220px] md:w-[280px] aspect-[4/5] object-cover rounded-[20px] shadow-[0_30px_60px_-20px_hsl(0_0%_0%/0.35)]"
                    loading="eager"
                  />
                  {/* floating tag */}
                  <div className="absolute -right-4 -bottom-4 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_-8px_hsl(0_0%_0%/0.2)] border border-border">
                    <div className="text-[11px] text-muted-foreground">最近</div>
                    <div className="text-[13px] font-semibold">环游海岛 🌊</div>
                  </div>
                  {/* small badge */}
                  <div className="absolute -left-5 top-6 bg-[hsl(var(--apple-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center text-[11px] font-medium shadow-lg rotate-[-8deg]">
                    Hi 👋
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Row 2: two cards side by side */}
        <div className="grid md:grid-cols-2 gap-2 mb-2">
          <Reveal delay={50}>
            <ProductCard
              id="now"
              eyebrow="Now"
              title="我在持续关注的事。"
              sub="三个让我保持新鲜感、也塑造看世界方式的方向。"
              secondaryCta={{ label: "了解更多", href: "#about" }}
              className="h-[560px]"
            >
              <FocusVisual />
            </ProductCard>
          </Reveal>
          <Reveal delay={150}>
            <ProductCard
              eyebrow="Skills"
              title="我擅长的事。"
              sub="把复杂的事拆解、组织、推进，并让团队一起跑起来。"
              className="h-[560px]"
            >
              <SkillsVisual />
            </ProductCard>
          </Reveal>
        </div>

        {/* anchor for now */}
        <div id="now" className="-mt-2" />
        <div id="skills" className="-mt-2" />

        {/* Row 3: Projects header card */}
        <Reveal>
          <ProductCard
            id="projects-head"
            eyebrow="Projects"
            title="最近做的几件事。"
            sub="一些正在推进或刚刚完成的项目，欢迎一起聊聊。"
            className="h-[260px] mb-2"
          />
        </Reveal>

        {/* Projects: 3 cards */}
        <div id="projects" className="grid md:grid-cols-3 gap-2 mb-2">
          <Reveal delay={0}>
            <ProductCard
              theme="dark"
              eyebrow="个人项目"
              title="环游城市海岛"
              sub="用一年时间走过城市周边的每一座海岛，把它们写成可分享的旅行笔记。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="h-[520px]"
            >
              <IslandVisual />
            </ProductCard>
          </Reveal>
          <Reveal delay={100}>
            <ProductCard
              eyebrow="社群运营"
              title="AI × 女性社群"
              sub="策划线上线下活动，连接对 AI 感兴趣的女性创造者，沉淀工具与内容资产。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="h-[520px]"
            >
              <div className="mt-8 pb-12 px-6 flex justify-center">
                <div className="relative w-44 h-44">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-12 rounded-full border border-border bg-white shadow-[var(--shadow-card)] flex items-center justify-center text-lg"
                      style={{
                        top: `${50 - 38 * Math.cos((i / 5) * Math.PI * 2)}%`,
                        left: `${50 + 38 * Math.sin((i / 5) * Math.PI * 2)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {["✨", "💡", "🌸", "🎨", "📚"][i]}
                    </div>
                  ))}
                  <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[hsl(var(--apple-blue))] text-white flex items-center justify-center text-xl font-semibold">
                    AI
                  </div>
                </div>
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={200}>
            <ProductCard
              eyebrow="培训设计"
              title="新媒体工作坊"
              sub="围绕选题、表达与节奏设计培训内容，帮助新人建立可持续的输出系统。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="h-[520px]"
            >
              <div className="mt-8 pb-12 px-6">
                <div className="mx-auto max-w-xs space-y-2">
                  {["选题 · 找到值得说的事", "表达 · 用人话讲清楚", "节奏 · 长期稳定输出"].map(
                    (line, i) => (
                      <div
                        key={i}
                        style={{ animationDelay: `${i * 120}ms` }}
                        className="animate-fade-up rounded-xl bg-white border border-border px-4 py-3 text-[15px] text-foreground shadow-[var(--shadow-card)]"
                      >
                        <span className="text-muted-foreground mr-2">0{i + 1}</span>
                        {line}
                      </div>
                    )
                  )}
                </div>
              </div>
            </ProductCard>
          </Reveal>
        </div>

        {/* Contact */}
        <Reveal>
          <ProductCard
            id="contact"
            eyebrow="Contact"
            title={<>如果你也在做<br className="md:hidden" />有温度的事。</>}
            sub="欢迎找我聊聊合作、共创，或者只是分享一个让你心动的想法。"
            primaryCta={{ label: "复制微信号", href: "#contact" }}
            secondaryCta={{ label: "发送邮件", href: "mailto:hello@astrid.me" }}
            className="min-h-[560px]"
          >
            <ContactVisual />
          </ProductCard>
        </Reveal>
      </main>

      {/* Footer — apple style */}
      <footer className="bg-[hsl(var(--page))] border-t border-border/80">
        <div className="max-w-[1024px] mx-auto px-6 py-6 text-[12px] text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <div>Copyright © {new Date().getFullYear()} Astrid 鱼仔. 保留所有权利。</div>
          <div>慢一点，好一点。</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
