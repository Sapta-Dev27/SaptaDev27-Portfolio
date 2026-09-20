import { ArrowUp, Heart, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/8 bg-[#050608] py-12 relative z-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-sm text-white tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              Software Engineer
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Crafted with React 19, Vanilla CSS & JetBrains Mono.
          </p>
        </div>

        {/* Center: Nav Anchors */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#coding" className="hover:text-white transition-colors">LeetCode</a>
        </div>

        {/* Right: Scroll to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
