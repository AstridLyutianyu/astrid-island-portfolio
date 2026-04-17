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
    <div className="mt-10 px-6 pb-14">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {skills.map((s, i) => (
          <span
            key={s}
            style={{ animationDelay: `${i * 80}ms` }}
            className="animate-fade-up rounded-full bg-[hsl(0_0%_96%)] px-5 py-2.5 text-[15px] font-medium text-foreground"
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
    { label: "AI 与女性社群", desc: "AI 工具如何赋能女性创造者" },
    { label: "新媒体培训", desc: "持续学习内容策略与表达" },
    { label: "自然与人", desc: "走到自然里，慢下来" },
  ];
  return (
    <div className="mt-10 px-8 pb-12 max-w-md mx-auto text-left space-y-5">
      {items.map((it, i) => (
        <div
          key={it.label}
          style={{ animationDelay: `${i * 100}ms` }}
          className="animate-fade-up flex items-start gap-4"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--apple-blue))] shrink-0" />
          <div>
            <div className="text-[16px] font-medium text-foreground">{it.label}</div>
            <div className="text-[14px] text-muted-foreground mt-0.5">{it.desc}</div>
          </div>
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
        {/* Row 1: About — clean split, photo right */}
        <Reveal>
          <article className="rounded-[18px] bg-white mb-2 grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center px-8 md:px-14 py-12 md:py-16">
            <div className="text-left">
              <div className="apple-eyebrow text-[hsl(var(--apple-blue))] mb-3">About</div>
              <h2 className="apple-card-title mb-5 text-foreground">
                认识一下，<br />
                我是 Astrid。
              </h2>
              <p className="apple-card-sub text-muted-foreground max-w-md mb-8">
                运营管理是日常，但我喜欢在工作之外保留一点野生的好奇心 ——
                关注 AI、女性社群、新媒体表达，也愿意走到自然里去。
              </p>

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

            <div className="flex justify-center md:justify-end">
              <img
                src={portrait}
                alt="Astrid 鱼仔"
                className="w-full max-w-[320px] aspect-[4/5] object-cover rounded-[20px]"
                loading="eager"
              />
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

        {/* Row 3: Projects header — clean */}
        <Reveal>
          <ProductCard
            id="projects-head"
            eyebrow="Projects"
            title="最近做的几件事。"
            sub="一些正在推进或刚刚完成的项目，欢迎一起聊聊。"
            className="py-14 md:py-16 mb-2"
          />
        </Reveal>

        {/* Projects: 3 cards */}
        <div id="projects" className="grid md:grid-cols-3 gap-2 mb-2">
          <Reveal delay={0}>
            <ProductCard
              eyebrow="个人项目"
              title="环游城市海岛"
              sub="用一年时间走过城市周边的每一座海岛，把它们写成可分享的旅行笔记。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12"
            >
              <div className="mt-8 px-8 text-left">
                <div className="text-[13px] text-muted-foreground mb-2">已走过</div>
                <div className="text-[44px] font-semibold leading-none text-foreground">
                  12<span className="text-[20px] text-muted-foreground font-normal"> / 24 座岛</span>
                </div>
                <div className="mt-4 h-1 rounded-full bg-[hsl(0_0%_92%)] overflow-hidden">
                  <div className="h-full w-1/2 bg-[hsl(var(--apple-blue))] rounded-full" />
                </div>
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={100}>
            <ProductCard
              eyebrow="社群运营"
              title="AI × 女性社群"
              sub="策划线上线下活动，连接对 AI 感兴趣的女性创造者，沉淀工具与内容资产。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12"
            >
              <div className="mt-8 px-8 text-left grid grid-cols-3 gap-3 max-w-xs mx-auto">
                {[
                  { n: "20+", l: "活动" },
                  { n: "500+", l: "成员" },
                  { n: "8", l: "城市" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-[24px] font-semibold leading-none text-foreground">{s.n}</div>
                    <div className="text-[12px] text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={200}>
            <ProductCard
              eyebrow="培训设计"
              title="新媒体工作坊"
              sub="围绕选题、表达与节奏设计培训内容，帮助新人建立可持续的输出系统。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12"
            >
              <div className="mt-8 px-8 max-w-xs mx-auto text-left space-y-3">
                {["选题 · 找到值得说的事", "表达 · 用人话讲清楚", "节奏 · 长期稳定输出"].map(
                  (line, i) => (
                    <div key={i} className="flex items-baseline gap-3">
                      <span className="text-[12px] text-muted-foreground tabular-nums">0{i + 1}</span>
                      <span className="text-[15px] text-foreground">{line}</span>
                    </div>
                  )
                )}
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
