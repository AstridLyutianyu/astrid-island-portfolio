import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/astrid-portrait.jpg";
import { getAsset } from "@/lib/assets";

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
      className={`h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
      className={`relative overflow-hidden rounded-[18px] flex flex-col ${
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
      <div className="flex-1 flex flex-col justify-center">{children}</div>
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
  const skills = ["运营管理", "社群运营", "新媒体", "AI 应用", "内容策划", "项目协作", "AIGC 内容创作", "市场营销"];
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
    { label: "和平主义", desc: "相信温柔与对话的力量" },
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
  <div className="mt-10 pb-12 px-6">
    <div className="mx-auto max-w-sm flex flex-col gap-5 items-center">
      <div className="text-center">
        <div className="text-[12px] text-muted-foreground mb-1">微信</div>
        <div className="text-[19px] font-medium text-foreground tracking-wide">ltyuu_</div>
      </div>
      <div className="text-center">
        <div className="text-[12px] text-muted-foreground mb-1">邮箱</div>
        <div className="text-[19px] font-medium text-foreground">astridlty@foxmail.com</div>
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
          <a href="/more" className="font-medium hover:text-foreground transition-quick">Astrid 鱼仔</a>
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
                  { k: "城市", v: "深圳" },
                  { k: "角色", v: "操盘手 / 市场主管" },
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
              className="pb-12 h-full"
            >
              <FocusVisual />
            </ProductCard>
          </Reveal>
          <Reveal delay={150}>
            <ProductCard
              eyebrow="Skills"
              title="我擅长的事。"
              sub="把复杂的事拆解、组织、推进，并让团队一起跑起来。"
              className="pb-8 h-full"
            >
              <SkillsVisual />
              {(() => {
                const logoWall = getAsset("logo-wall.png");
                return (
                  <div className="px-6 pb-6 -mt-6">
                    <div className="text-center text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
                      Partners · 合作过的品牌
                    </div>
                    {logoWall ? (
                      <img
                        src={logoWall}
                        alt="合作过的品牌 Logo 墙"
                        className="w-full h-auto rounded-lg max-w-[260px] mx-auto"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[6/1] rounded-lg bg-[hsl(0_0%_96%)] flex items-center justify-center text-[12px] text-muted-foreground max-w-[260px] mx-auto">
                        Logo 墙占位
                      </div>
                    )}
                  </div>
                );
              })()}
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
        <div id="projects" className="grid md:grid-cols-2 gap-2 mb-2">
          <Reveal delay={100}>
            <ProductCard
              eyebrow="现在职"
              title="AI 产品应用及投放"
              sub="擅长 AI 视频、AI 漫剧、AI 智能体产品效果营销以及广告投放。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12 h-full"
            >
              <div className="mt-8 px-8 max-w-xs mx-auto text-left flex flex-wrap gap-2 justify-center">
                {["AI 视频", "AI 漫剧", "AI 智能体", "效果营销", "广告投放"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[hsl(0_0%_96%)] px-3.5 py-1.5 text-[13px] text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={150}>
            <ProductCard
              eyebrow="社群 / 工作坊"
              title="大湾区 AI 共创社群"
              sub="立足大湾区，聚焦 AI 共创、女性创业与多元文化交流，线上线下双轨运作。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12 h-full"
            >
              <div className="mt-8 px-8 max-w-md mx-auto text-left">
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {["Herstory 大湾区", "AI 共创", "女性创业", "文化交流", "线上 + 线下"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[hsl(0_0%_96%)] px-3.5 py-1.5 text-[13px] text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Herstory 大湾区活动负责人 · 社群 5000+ 成员",
                    "每周 1 次线下活动 · 深圳 / 广州 / 香港",
                    "线上共学社群：每月一个 AI 落地主题",
                    "女性创业者互助 × 多元文化对谈",
                  ].map((line, i) => (
                    <div key={i} className="flex items-baseline gap-3">
                      <span className="text-[12px] text-muted-foreground tabular-nums">0{i + 1}</span>
                      <span className="text-[15px] text-foreground">{line}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/60 text-center">
                  <div className="text-[12px] text-muted-foreground mb-1">公众号</div>
                  <div className="text-[15px] font-medium text-foreground tracking-wide">0xHerstory</div>
                </div>
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={200}>
            <ProductCard
              eyebrow="新媒体 / 电商培训"
              title="0 → 1 搭建变现系统"
              sub="面向个人与企业，搭建可持续的变现系统，可接单。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12 h-full"
            >
              <div className="mt-8 px-8 max-w-md mx-auto text-left space-y-3">
                {[
                  "商家运营 · 效果营销 + 割草变现 · 咨询 299/h",
                  "新媒体培训 · 个人项目账号陪跑 · 166/h",
                  "女性商业公益互助",
                ].map((line, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="text-[12px] text-muted-foreground tabular-nums">0{i + 1}</span>
                    <span className="text-[15px] text-foreground">{line}</span>
                  </div>
                ))}
              </div>
            </ProductCard>
          </Reveal>
          <Reveal delay={250}>
            <ProductCard
              eyebrow="脱口秀 / 内容创作"
              title="舞台上的另一面。"
              sub="在线下脱口秀和线上博主之间切换，用幽默和真诚记录每一天。"
              secondaryCta={{ label: "了解更多", href: "#" }}
              className="pb-12 h-full"
            >
              <div className="mt-8 px-8 max-w-md mx-auto text-left">
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {["跳海脱口秀", "活动路演", "开放麦嘉宾", "小红书博主", "视频号博主"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[hsl(0_0%_96%)] px-3.5 py-1.5 text-[13px] text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "跳海脱口秀 · 各大活动路演",
                    "周周黑客松 开放麦嘉宾",
                    "小红书 / 视频号博主：As 的每一天",
                  ].map((line, i) => (
                    <div key={i} className="flex items-baseline gap-3">
                      <span className="text-[12px] text-muted-foreground tabular-nums">0{i + 1}</span>
                      <span className="text-[15px] text-foreground">{line}</span>
                    </div>
                  ))}
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
            secondaryCta={{ label: "发送邮件", href: "mailto:astridlty@foxmail.com" }}
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
