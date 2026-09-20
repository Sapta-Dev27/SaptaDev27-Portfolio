import { useState } from "react";
import { FolderGit2, ExternalLink, ArrowRight, Layers, Sparkles, Bot, Wallet, Cpu, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const getProjectIcon = (id) => {
    switch (id) {
      case "hirebuddy":
        return <Bot className="w-5 h-5 text-slate-200" />;
      case "upay":
        return <Wallet className="w-5 h-5 text-slate-200" />;
      case "inspiroai":
        return <Sparkles className="w-5 h-5 text-slate-200" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-200" />;
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return p.category.toLowerCase().includes("ai");
    if (activeFilter === "backend") return p.category.toLowerCase().includes("backend") || p.category.toLowerCase().includes("fintech");
    return true;
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="font-serif-italic font-normal text-slate-200">scale, security, and utility.</span>
          </h2>
          <p className="section-subtitle">
            Deep-dive into full-stack platforms, financial transaction microservices, and multi-modal AI systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Case Studies" },
            { id: "ai", label: "AI & Agents" },
            { id: "backend", label: "Backend & FinTech" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === tab.id
                  ? "bg-white text-slate-950 font-bold shadow-sm"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/8 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-noir flex flex-col justify-between group"
            >
              {/* Card Body */}
              <div className="p-7 space-y-5">
                
                {/* Category & Status Bar */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="badge text-[10px] text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tagline / Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Metrics Highlight Pill */}
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/6 flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 font-mono text-[11px] border border-white/6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-5 bg-black/40 border-t border-white/8 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                  aria-label={`View architecture details for ${project.title}`}
                >
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                      onClick={() => triggerSubtleConfetti()}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="Live Demo"
                      aria-label={`${project.title} live demo`}
                      onClick={() => triggerSubtleConfetti()}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-200" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
