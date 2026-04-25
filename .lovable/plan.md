
## 目标

针对 3 个反馈做精修，不动文案与整体架构：

---

### 1. Skills 卡片：logo 墙太大 → 缩小并填满空白

**问题**：当前 `logo-wall.png` 用 `max-w-md`，但 Skills 卡片下方还有大量空白，比例失衡。

**改动**（`src/pages/Index.tsx`，约第 328–346 行）：
- 把 logo 墙宽度从 `max-w-md`（≈28rem）缩到 `max-w-sm`（≈24rem），更紧凑。
- 在 logo 墙上方加一行小字小标题（如 `合作过的品牌 ·  PARTNERS`，`apple-eyebrow` 风格），让上下留白有内容承接，不再"突兀"。
- 把 logo 墙容器 padding 由 `pb-10` 收紧为 `pb-8`，并去掉 SkillsVisual 与 logo 墙之间多余的空隙。

---

### 2. /more 页面：把用户上传的图作为背景

**素材**：`user-uploads://img_v3_02113_25fa5ade-e448-465b-ab4c-1748f3668e8g.jpg`（marbled 油彩泼洒底图，正是 /more 想要的氛围）。

**改动**：
- 复制到 `src/assets/more-bg.jpg`（默认实施模式步骤）。
- `src/pages/more/More.tsx` 第 86–92 行：把 `radial-gradient` 背景换成该图：
  - `background: url(more-bg.jpg) center/cover no-repeat`
  - 在图上叠一层 `bg-white/30` 或 `mix-blend-soft-light` 滤层，避免背景太抢眼盖过六个色块。
- 因为图本身已经很有"油彩感"，移除 More 页里冗余的两个大 `PaintBlob` 装饰（第 97–106 行），只保留一两道点缀 `BrushStroke`，让背景图主导氛围。

> 注：六个色页（Red/Orange/...）继续保留各自的 radial-gradient 背景，不动 —— 用户只说"跳转页"用图。

---

### 3. /more 六个入口：图片与背景更融合 + 空白处加元素

**问题**：当前色块是高饱和度纯色 SVG，与新的 marbled 背景"硬碰硬"；且色块间空白单调。

**融合做法**（`More.tsx` 色块渲染部分）：
- **降低色块不透明度**：在 `<path d={p.d} fill={p.color} />` 上加 `opacity="0.88"`，让背景的纹理隐隐透出来。
- **加入混合模式**：色块 SVG 容器加 `mix-blend-multiply`，让油彩与背景产生颜料叠加感，而非贴纸感。
- **加纸边毛糙**：色块外圈再描一笔半透明深色 `stroke`（已有白色 highlight，再加一层颜色更深的 `stroke="rgba(0,0,0,0.15)"` 走 `oil-paint` 滤镜），模拟厚涂边缘。
- **去掉 `drop-shadow-2xl`**：阴影是导致"贴上去"硬感的主因，换成更柔的 `filter: drop-shadow(0 8px 24px rgba(0,0,0,0.12))`。

**填补空白**（在六个 portal 之间的空隙处）：
- 加 3–4 个手绘小元素（参考用户上传图：太阳、星点、波浪线、小笔触）：
  - 中心位置一个抽象"光晕太阳"（同心圆 + 放射线，半透明黄白色，参照参考图正中央的元素）。
  - 角落散落 5–6 个小星点 / 颜料飞溅（小 `<circle>` + `oil-paint` 滤镜）。
  - 1–2 道淡色细笔触横穿空白区。
- 这些装饰统一用 `pointer-events-none` 不影响点击。

---

### 不改动

- 简历页文案、结构、字体（保持苹果风）
- 六个色子页（Red/Orange/Yellow/Green/Blue/Purple）的内部设计
- 路由、资源加载逻辑

---

### 涉及文件

- `src/pages/Index.tsx`（缩 logo 墙）
- `src/assets/more-bg.jpg`（新增，复制自上传图）
- `src/pages/more/More.tsx`（换背景 + 色块融合 + 中心装饰）

无需新增依赖。
