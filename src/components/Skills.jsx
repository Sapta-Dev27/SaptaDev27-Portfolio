import { useState } from "react";
import { Code2, Layout, Server, Database, Cpu, Terminal, Wrench, Search, Check, Sparkles } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const iconMap = {
    Code2,
    Layout,
    Server,
    Database,
    Cpu,
    Terminal,
    Wrench,
  };

  const tabs = [
    { id: "all", label: "All Capabilities" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "fundamentals", label: "CS Fundamentals" },
    { id: "devops", label: "DevOps & Tools" },
  ];

  const filteredCategories = skillCategories
    .filter((cat) => {
      if (activeTab === "all") return true;
      if (activeTab === "devops") return cat.id === "devops" || cat.id === "tools";
      return cat.id === activeTab;
    })
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering stack & <span className="font-serif-italic font-normal text-slate-200">foundational depth.</span>
          </h2>
          <p className="section-subtitle">
            Organized across programming languages, full-stack frameworks, database systems, CS fundamentals, and developer tooling.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-slate-950 font-bold shadow-sm"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/8 hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or concept..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/30"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="card-noir p-6 flex flex-col space-y-4"
              >
                {/* Category Header */}
                <div className="space-y-2 border-b border-white/8 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans font-bold text-base text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-normal">
                    {category.description}
                  </p>
                </div>

                {/* Skills In Category */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-3 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-xs">
            No matching technologies found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
