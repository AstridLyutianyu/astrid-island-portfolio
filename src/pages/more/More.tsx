import { Link } from "react-router-dom";
import moreBg from "@/assets/more-bg.jpg";

/**
 * /more 跳转页：背景图本身已经画好了 7 个区域（回到主页 + 6 个色彩入口）。
 * 我们只在图上叠加透明的可点击热区做跳转，不再绘制额外色块。
 *
 * 热区坐标基于 1440×1920 原图，按百分比定位，自适应任何屏幕。
 */

type Hotspot = {
  to: string;
  label: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

const hotspots: Hotspot[] = [
  { to: "/", label: "回到主页", left: "3%", top: "3.5%", width: "14%", height: "5%" },
  { to: "/more/orange", label: "橙·玫瑰与她们", left: "9%", top: "21%", width: "29%", height: "16%" },
  { to: "/more/yellow", label: "黄·猫与万物", left: "44%", top: "21%", width: "35%", height: "14%" },
  { to: "/more/red", label: "红·自我认同", left: "3%", top: "43%", width: "28%", height: "20%" },
  { to: "/more/green", label: "绿·蘑菇与和平", left: "61%", top: "47%", width: "32%", height: "20%" },
  { to: "/more/purple", label: "紫·去活去制作", left: "5%", top: "65%", width: "33%", height: "19%" },
  { to: "/more/blue", label: "蓝·生态与海洋", left: "51%", top: "70%", width: "35%", height: "17%" },
];

const More = () => {
  return (
    <div className="min-h-screen w-full bg-muted flex items-center justify-center py-6 px-3">
      <div
        className="relative w-full max-w-[820px] shadow-2xl rounded-md overflow-hidden"
        style={{ aspectRatio: "1440 / 1920" }}
      >
        <img
          src={moreBg}
          alt="更多元、更多彩、更多面 —— 点开任意一道光，进入我的另一面"
          className="absolute inset-0 w-full h-full object-cover select-none"
          draggable={false}
        />

        {/* 透明热区：覆盖图上画好的 7 个区域 */}
        {hotspots.map((h) => (
          <Link
            key={h.to + h.label}
            to={h.to}
            aria-label={h.label}
            title={h.label}
            className="absolute rounded-[14%] transition-transform duration-300 hover:scale-[1.04] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70"
            style={{
              left: h.left,
              top: h.top,
              width: h.width,
              height: h.height,
            }}
          >
            <span className="sr-only">{h.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default More;
