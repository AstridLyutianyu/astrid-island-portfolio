import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MessageCircle, Sparkles, Users, Leaf, Compass, Camera, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/astrid-portrait.jpg";

const skills = [
  { label: "运营管理", size: "lg" },
  { label: "新媒体", size: "md" },
  { label: "社群运营", size: "lg" },
  { label: "AI 应用", size: "md" },
  { label: "内容策划", size: "sm" },
  { label: "项目协作", size: "sm" },
];

const focuses = [
  {
    icon: Sparkles,
    title: "AI 与女性社群",
    desc: "探索 AI 工具如何赋能女性创造者，推动更有温度的社群协作。",
    bg: "bg-cool-gradient",
  },
  {
    icon: BookOpen,
    title: "新媒体培训",
    desc: "持续学习内容策略与表达方式，把所学转化为可分享的方法论。",
    bg: "bg-warm-gradient",
  },
  {
    icon: Leaf,
    title: "自然与人",
    desc: "相信自然能让人慢下来。关注人与环境之间真实而细腻的连接。",
    bg: "bg-soft-gradient",
  },
];

const projects = [
  {
    title: "环游城市海岛计划",
    desc: "用一年时间，独自走过城市周边的每一座海岛，把它们变成可被分享的旅行笔记。",
    tag: "个人项目",
    icon: Compass,
  },
  {
    title: "AI × 女性社群共创",
    desc: "策划线上线下活动，连接对 AI 感兴趣的女性创造者，沉淀工具与内容资产。",
    tag: "社群运营",
    icon: Users,
  },
  {
    title: "新媒体内容工作坊",
    desc: "围绕选题、表达与节奏设计培训内容，帮助新人建立可持续的输出系统。",
    tag: "培训设计",
    icon: Camera,
  },
];

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
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
      className={`transition-smooth ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const skillSize = (s: string) =>
    s === "lg" ? "text-2xl md:text-3xl px-7 py-3" : s === "md" ? "text-lg md:text-xl px-5 py-2.5" : "text-base px-4 py-2";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">Astrid 鱼仔</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-quick">关于</a>
            <a href="#focus" className="hover:text-foreground transition-quick">在做的事</a>
            <a href="#skills" className="hover:text-foreground transition-quick">技能</a>
            <a href="#projects" className="hover:text-foreground transition-quick">项目</a>
            <a href="#contact" className="hover:text-foreground transition-quick">联系</a>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-quick"
          >
            合作
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-hero overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              开放合作 · 欢迎来聊
            </div>
            <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] mb-6">
              你好，我是<br />
              <span className="bg-accent-gradient bg-clip-text text-transparent">Astrid 鱼仔</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
              运营管理 · 内容策划 · 社群共创者
            </p>
            <p className="text-base md:text-lg text-muted-foreground/90 mb-10 max-w-xl leading-relaxed">
              用结构化的运营思维，做有温度的项目。相信好的内容、好的社群，都是慢慢长出来的。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
                <a href="#contact">
                  和我聊聊 <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 text-base border-border">
                <a href="#projects">看看我做过什么</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-accent-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant bg-surface-muted animate-float">
              <img
                src={portrait}
                alt="Astrid 鱼仔的肖像照"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-soft border border-border/60 hidden sm:block">
              <div className="text-xs text-muted-foreground mb-1">最近在做</div>
              <div className="text-sm font-semibold">环游城市每一个海岛 🌊</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-sm font-medium text-accent mb-4 uppercase tracking-widest">About</div>
            <h2 className="text-headline text-4xl md:text-5xl mb-8">关于我</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
              我是 Astrid 鱼仔，目前从事运营管理。
              喜欢把复杂的事情拆成可执行的步骤，也喜欢在工作之外保留一点野生的好奇心——
              关注 <span className="text-foreground font-medium">AI 与女性社群</span>、学习
              <span className="text-foreground font-medium"> 新媒体内容</span>、
              在 <span className="text-foreground font-medium">自然</span> 里找回节奏。
              如果你也在做有温度、有想法的事情，欢迎找我聊聊。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Focus / 在做的事 */}
      <section id="focus" className="py-24 md:py-32 bg-surface-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-sm font-medium text-accent mb-4 uppercase tracking-widest">Now</div>
            <h2 className="text-headline text-4xl md:text-5xl mb-4">我在做的事</h2>
            <p className="text-lg text-muted-foreground mb-14 max-w-2xl">
              一些正在持续投入的方向，它们让我保持新鲜感，也塑造着我看世界的方式。
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {focuses.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className={`group h-full rounded-3xl p-8 ${f.bg} border border-border/40 transition-smooth hover:shadow-elegant hover:-translate-y-1`}>
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mb-6 shadow-soft">
                    <f.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-sm font-medium text-accent mb-4 uppercase tracking-widest">Skills</div>
            <h2 className="text-headline text-4xl md:text-5xl mb-14">我的技能</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {skills.map((s, i) => (
                <span
                  key={s.label}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={`animate-fade-up rounded-full bg-surface border border-border font-medium text-foreground shadow-soft transition-smooth hover:shadow-glow hover:-translate-y-0.5 hover:border-accent/40 ${skillSize(s.size)}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 bg-surface-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-sm font-medium text-accent mb-4 uppercase tracking-widest">Projects</div>
            <h2 className="text-headline text-4xl md:text-5xl mb-4">最近的项目</h2>
            <p className="text-lg text-muted-foreground mb-14 max-w-2xl">
              一些我正在推进或刚刚完成的事情。
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group h-full flex flex-col rounded-3xl bg-surface border border-border p-8 transition-smooth hover:shadow-elegant hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-glow">
                      <p.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{p.desc}</p>
                  <Button variant="ghost" className="self-start rounded-full -ml-3 group-hover:text-accent transition-quick">
                    了解更多 <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="text-sm font-medium text-accent mb-4 uppercase tracking-widest">Contact</div>
            <h2 className="text-display text-5xl md:text-6xl mb-6">
              如果你也在做<br />
              <span className="bg-accent-gradient bg-clip-text text-transparent">有温度的事</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              欢迎找我聊聊合作、共创，或者只是分享一个让你心动的想法。
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigator.clipboard?.writeText("ltyuu_"); }}
                className="group inline-flex items-center gap-3 px-7 h-14 rounded-full bg-primary text-primary-foreground font-medium transition-smooth hover:shadow-glow hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                微信：ltyuu_
              </a>
              <a
                href="mailto:hello@astrid.me"
                className="inline-flex items-center gap-3 px-7 h-14 rounded-full bg-surface border border-border font-medium transition-smooth hover:border-accent/40 hover:shadow-soft"
              >
                <Mail className="w-5 h-5" />
                hello@astrid.me
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">点击微信号即可复制 ✨</p>
          </Reveal>
        </div>
      </section>

      <footer className="py-10 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Astrid 鱼仔 · Made with care</div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> 慢一点，好一点
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
