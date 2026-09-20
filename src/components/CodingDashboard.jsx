import { useState, useEffect } from "react";
import { ArrowUpRight, Flame, Trophy, Award, CheckCircle2, RefreshCw, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { codingProfiles } from "../data/portfolioData";
import { fetchLeetCodeStats, transformCalendarToGrid } from "../utils/leetcodeApi";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function CodingDashboard() {
  const [gridData, setGridData] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [totalYearSubmissions, setTotalYearSubmissions] = useState(0);

  useEffect(() => {
    let mounted = true;
    async function loadHeatmap() {
      setLoading(true);
      const data = await fetchLeetCodeStats("SaptaDev27");
      if (mounted) {
        setIsFallback(data.isFallback);
        setTotalYearSubmissions(data.totalSubmissionsInYear);
        const transformed = transformCalendarToGrid(data.submissionCalendar);
        setGridData(transformed);
        setLoading(false);
      }
    }
    loadHeatmap();
    return () => {
      mounted = false;
    };
  }, []);

  const getCellColor = (intensity) => {
    switch (intensity) {
      case 0:
        return "bg-white/[0.03] border border-white/[0.04]";
      case 1:
        return "bg-emerald-950/70 border border-emerald-800/30";
      case 2:
        return "bg-emerald-800/80 border border-emerald-600/40";
      case 3:
        return "bg-emerald-600 border border-emerald-400/50";
      case 4:
        return "bg-emerald-400 border border-emerald-200 shadow-sm";
      default:
        return "bg-white/[0.03]";
    }
  };

  const topicMastery = [
    { topic: "Dynamic Programming & Recursion", solved: "180+", level: "Advanced" },
    { topic: "Graphs, BFS, DFS & Dijkstra", solved: "140+", level: "Advanced" },
    { topic: "Binary Trees & BST", solved: "120+", level: "Advanced" },
    { topic: "Arrays, Two-Pointers & Sliding Window", solved: "200+", level: "Mastery" },
  ];

  return (
    <section id="coding" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Algorithmic Rigor & Practice</span>
          </div>
          <h2 className="section-title">
            Verifiable depth in <span className="font-serif-italic font-normal text-slate-200">algorithms & complexity.</span>
          </h2>
          <p className="section-subtitle">
            Consistent competitive programming track record validating strong foundational problem-solving and optimization skills.
          </p>
        </div>

        {/* Big 3 Metrics Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {codingProfiles.stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-noir p-6 text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto transition-transform group-hover:scale-105">
                {idx === 0 && <LeetCodeIcon className="w-5 h-5 text-amber-400" />}
                {idx === 1 && <Trophy className="w-5 h-5 text-amber-400" />}
                {idx === 2 && <Flame className="w-5 h-5 text-rose-400" />}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Activity Heatmap Card */}
        <div className="max-w-5xl mx-auto card-noir p-6 sm:p-8 space-y-6 mb-10">
          
          {/* Heatmap Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/8 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  LeetCode Submission Activity (Last 12 Months)
                </span>
                {totalYearSubmissions > 0 && (
                  <span className="badge text-[10px] text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                    {totalYearSubmissions}+ Active Solves
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing daily submission cadence across algorithmic problems and contests.
              </p>
            </div>

            <a
              href="https://leetcode.com/u/SaptaDev27/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-xs flex items-center gap-1.5 self-start sm:self-auto"
              onClick={() => triggerSubtleConfetti()}
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Verify on LeetCode</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-3 hide-scrollbar">
            {loading ? (
              <div className="py-12 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <RefreshCw className="w-4 h-4 animate-spin text-slate-400" />
                <span>Synchronizing submission telemetry...</span>
              </div>
            ) : (
              <div className="min-w-[700px] space-y-2">
                
                {/* Month Labels Header */}
                <div className="flex text-[10px] font-mono text-slate-400 pl-7 relative h-4">
                  {gridData?.monthLabels?.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="absolute"
                      style={{ left: `${28 + m.index * 13.5}px` }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {/* Grid with Day of Week indicator */}
                <div className="flex items-start gap-1.5">
                  <div className="flex flex-col justify-between text-[9px] font-mono text-slate-400 pr-1 select-none h-[96px] pt-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Weeks columns */}
                  <div className="flex gap-1">
                    {gridData?.weeks?.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((day, dIdx) => (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`w-3 h-3 rounded-[2.5px] transition-all cursor-pointer ${getCellColor(
                              day.intensity
                            )} hover:ring-1 hover:ring-white/50`}
                            title={`${day.displayDate || day.date}: ${day.count} submissions`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3">
                  <div>
                    {hoveredDay ? (
                      <span className="text-slate-200">
                        <strong>{hoveredDay.count} submissions</strong> on {hoveredDay.displayDate || hoveredDay.date}
                      </span>
                    ) : (
                      <span>Hover over cells to view daily activity</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.03] border border-white/5" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/70" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800/80" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Topic Distribution Grid */}
          <div className="pt-4 border-t border-white/8 space-y-3">
            <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
              Algorithmic Problem Domains:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {topicMastery.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-mono">{item.solved}</span>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">{item.level}</span>
                  </div>
                  <div className="text-xs text-slate-300">{item.topic}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
