import { Trophy, Award, Users, GitPullRequest, CodeXml } from "lucide-react";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const iconMap = {
    CodeXml,
    Users,
    GitPullRequest,
    Trophy,
    Award,
  };

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="section-title">
            Validated by <span className="font-serif-italic font-normal text-slate-200">competitions and leadership.</span>
          </h2>
          <p className="section-subtitle">
            A track record of community technical leadership, open source honors, and hackathon podium finishes.
          </p>
        </div>

        {/* Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <div
                key={ach.id}
                className="card-noir p-7 flex flex-col justify-between space-y-5"
              >
                {/* Header & Category */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="badge text-[10px] text-slate-300">
                      {ach.category}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans tracking-tight">
                      {ach.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      {ach.badge}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Metric Box */}
                <div className="pt-3 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold font-sans text-white tracking-tight">
                      {ach.metric}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {ach.metricLabel}
                    </span>
                  </div>
                  
                  {ach.secondaryMetric && (
                    <div className="text-right">
                      <span className="text-sm font-bold font-mono text-slate-200">
                        {ach.secondaryMetric}
                      </span>
                      <div className="text-[10px] font-mono text-slate-400">
                        {ach.secondaryLabel}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
