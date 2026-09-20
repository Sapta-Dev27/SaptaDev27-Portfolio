import { Code2, Cpu, Layers, ShieldCheck, Sparkles, MapPin, Building, Award } from "lucide-react";
import { personalInfo, education } from "../data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: "Full-Stack System Architecture",
      description: "Building responsive, modern React frontends coupled with high-throughput Node.js/Express REST microservices and structured MongoDB/SQL persistence layers.",
      tag: "React • Node.js • Express • MongoDB",
    },
    {
      icon: Cpu,
      title: "Algorithmic Rigor & Problem Solving",
      description: "750+ LeetCode problems solved with 1577 contest rating. Designing optimal data structures and algorithms with strict time and space complexity boundaries.",
      tag: "750+ Solved • 1577 Rating • DSA",
    },
    {
      icon: Sparkles,
      title: "AI Integration & Multi-Modal Pipelines",
      description: "Implementing generative AI workflows with Google Gemini and Stability AI, alongside autonomous agents that parse repositories and conduct mock evaluations.",
      tag: "Gemini 1.5 • Stability AI • Agent Workflows",
    },
    {
      icon: ShieldCheck,
      title: "Security & Operational Reliability",
      description: "Securing financial and user endpoints with JWT and multi-stage MPIN authorization, debugging bottlenecks, and ensuring production service uptime.",
      tag: "JWT • MPIN Auth • Error Boundaries",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="section-title">
            Building with <span className="font-serif-italic font-normal text-slate-200">clarity, rigor, and discipline.</span>
          </h2>
          <p className="section-subtitle">
            Bridging algorithmic precision with real-world full-stack product engineering.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-5 card-noir p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>Background & Background Focus</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
                Software engineered for real-world reliability.
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a Computer Science undergraduate at <strong>{education.institution}</strong> (Data Science specialization, CGPA 7.7/10) and currently a <strong>Software Engineer Intern at Pinggy</strong>.
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether architecting multi-stage payment security in <strong>uPay</strong>, developing AI career platforms in <strong>HireBuddy</strong>, or mentoring developers as <strong>Tech Lead of GDG on Campus TMSL</strong>, I focus on building maintainable software with clean separation of concerns.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/6 text-xs font-mono text-slate-300 space-y-1">
                <div className="text-slate-200 font-semibold">Core Engineering Mindset:</div>
                <div className="text-slate-400">
                  "Write readable code, respect algorithmic constraints, and design systems that fail gracefully."
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="text-emerald-400">Active Builder</span>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="card-interactive p-6 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 group-hover:border-white/25 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white font-sans tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-mono text-slate-300 bg-white/[0.03] px-2.5 py-1 rounded border border-white/6">
                      {pillar.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
