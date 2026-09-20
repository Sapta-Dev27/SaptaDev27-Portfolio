import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="section-title">
            Where I've <span className="font-serif-italic font-normal text-slate-200">built & shipped.</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software engineering delivering full-stack features, debugging production systems, and optimizing real-world service performance.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent" 
            aria-hidden="true" 
          />

          <div className="space-y-8 relative">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node Indicator */}
                <div 
                  className={`absolute left-2 sm:left-6 -translate-x-1/2 top-5 w-5 h-5 rounded-full border flex items-center justify-center transition-transform group-hover:scale-110 ${
                    exp.isCurrent
                      ? "bg-[#07080b] border-white/40"
                      : "bg-[#07080b] border-white/20"
                  }`}
                  aria-hidden="true"
                >
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? "bg-emerald-400" : "bg-slate-400"
                    }`} 
                  />
                </div>

                {/* Experience Card */}
                <div className="card-noir p-6 sm:p-8 space-y-5">
                  
                  {/* Card Header: Role, Company & Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/8 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.isCurrent ? (
                          <span className="badge text-emerald-400 bg-emerald-500/10 border-emerald-500/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {exp.badge}
                          </span>
                        ) : (
                          <span className="badge text-slate-300">{exp.badge}</span>
                        )}
                      </div>
                      
                      <div className="text-sm font-semibold text-slate-200 mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.workMode}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                      Key Contributions & Engineering Scope:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Chips */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/6"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
