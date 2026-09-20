import { useEffect } from "react";
import { X, ExternalLink, Layers, CheckCircle2, AlertCircle, ArrowUpRight, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="modal-content max-w-3xl p-6 sm:p-8 space-y-6 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge text-slate-300">{project.category}</span>
              <span className="badge text-emerald-400 bg-emerald-500/10 border-emerald-500/20">{project.metrics}</span>
            </div>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Problem vs Solution Architecture Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>Engineering Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>Architected Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Flow Breakdown */}
        {project.architecture && (
          <div className="p-5 rounded-xl bg-black/40 border border-white/8 space-y-3">
            <div className="flex items-center gap-2 text-slate-200 font-mono text-xs font-semibold uppercase">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>System Architecture Breakdown</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(project.architecture).map(([layer, desc]) => (
                <div key={layer} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="font-mono text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                    // {layer}
                  </div>
                  <div className="text-slate-400 leading-relaxed">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
            Key Architectural Implementations:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix in Modal */}
        <div className="pt-2">
          <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider mb-2">
            Technologies & Frameworks:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 font-mono text-xs border border-white/6"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="pt-4 border-t border-white/8 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500">
            Source Code & Demonstrations
          </span>

          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs flex items-center gap-2"
                onClick={() => triggerSubtleConfetti()}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs flex items-center gap-2"
                onClick={() => triggerSubtleConfetti()}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
