import { Link } from "react-router-dom";
import orangeCollage from "@/assets/orange-collage.png";

const Orange = () => (
  <div className="relative min-h-screen w-full bg-muted flex items-center justify-center py-6 px-3 overflow-hidden">
    <Link
      to="/more"
      aria-label="返回 /more"
      className="fixed top-5 left-5 md:top-7 md:left-7 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 text-white text-2xl flex items-center justify-center hover:bg-black/60 transition"
    >
      ←
    </Link>

    <img
      src={orangeCollage}
      alt="Orange · 愈合"
      className="max-w-full max-h-screen w-auto h-auto object-contain"
    />
  </div>
);

export default Orange;
