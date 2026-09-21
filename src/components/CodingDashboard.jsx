import { Flame, Trophy } from "lucide-react";
import { LeetCodeIcon } from "./Icons";
import { codingProfiles } from "../data/portfolioData";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function CodingDashboard() {
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

        {/* Topic Distribution Grid */}
        <div className="max-w-5xl mx-auto card-noir p-6 sm:p-8 space-y-4">
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
    </section>
  );
}
