import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Foundational <span className="font-serif-italic font-normal text-slate-200">computer science education.</span>
          </h2>
          <p className="section-subtitle">
            Formal grounding in data science, software engineering principles, and core computer science fundamentals.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto card-noir p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/8 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  {education.institution}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-0.5">
                  {education.degree}
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {education.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {education.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="sm:text-right bg-white/[0.02] sm:bg-transparent p-3 sm:p-0 rounded-xl border border-white/5 sm:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold font-sans text-white tracking-tight">
                {education.cgpa}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Cumulative GPA
              </div>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
              Academic Specialization & Leadership:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              {education.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
