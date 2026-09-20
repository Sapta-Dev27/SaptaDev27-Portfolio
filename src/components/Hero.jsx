import { useState } from "react";
import { ArrowRight, FileText, Mail, Check, Sparkles, Layers, Cpu, Server, Activity, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeDeckTab, setActiveDeckTab] = useState("pinggy");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    triggerSubtleConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleResume = () => {
    triggerSubtleConfetti();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.open(personalInfo.resumePath, "_blank");
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="status-dot" />
              <span>{personalInfo.status.label}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Engineering resilient systems for{" "}
              <span className="font-serif-italic font-normal text-slate-200">
                high-scale reality.
              </span>
            </h1>

            {/* Positioning Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              I'm <strong className="text-white font-semibold">{personalInfo.name}</strong> — a software engineer and competitive programmer turning complex distributed backends, modern React applications, and generative AI models into fast, maintainable software.
            </p>

            {/* Verified Quick Signal Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                SWE Intern @ Pinggy
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                750+ LeetCode Solved
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Tech Lead @ GDG TMSL
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn btn-primary w-full sm:w-auto text-xs"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleResume}
                className="btn btn-secondary w-full sm:w-auto text-xs flex items-center gap-2"
                aria-label="View & Download Official Resume"
              >
                <FileText className="w-3.5 h-3.5 text-slate-300" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary w-full sm:w-auto text-xs flex items-center gap-2"
                title="Click to copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-300" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Profiles Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-slate-400 mr-1">Profiles:</span>
              
              <a
                href="https://leetcode.com/u/SaptaDev27/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 text-slate-300 text-xs font-mono border border-white/8 transition-all"
                title="LeetCode: 750+ Solved"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode (750+)</span>
              </a>

              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-white/[0.08] hover:text-white hover:border-white/20 text-slate-300 text-xs font-mono border border-white/8 transition-all"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub (@Sapta-Dev27)</span>
              </a>

              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30 text-slate-300 text-xs font-mono border border-white/8 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Engineering Deck & Architecture Blueprint */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="card-noir p-5 sm:p-6 space-y-4 border-white/10 bg-[#0c0e15] shadow-2xl">
              
              {/* Deck Header */}
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    Engineering Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  ACTIVE • PINGGY
                </span>
              </div>

              {/* Interactive Deck Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-black/40 border border-white/5">
                {[
                  { id: "pinggy", label: "Work @ Pinggy" },
                  { id: "architecture", label: "Core Stack" },
                  { id: "dsa", label: "DSA Rigor" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDeckTab(tab.id)}
                    className={`py-1.5 text-[11px] font-mono rounded transition-all ${
                      activeDeckTab === tab.id
                        ? "bg-white/10 text-white font-semibold shadow-sm border border-white/10"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Deck Tab Content Panels */}
              {activeDeckTab === "pinggy" && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-bold">Software Engineer Intern</span>
                      <span className="text-slate-400 text-[10px]">Sep 2026 – Present</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Developing resilient frontend components and Node.js microservices. Resolving performance bottlenecks and optimizing REST API response times for distributed user traffic.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-slate-400 text-[10px]">Focus Area:</span>
                      <div className="text-slate-200 font-semibold">Service Reliability & Latency</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-slate-400 text-[10px]">Stack in Prod:</span>
                      <div className="text-slate-200 font-semibold">React, Node, MongoDB, REST</div>
                    </div>
                  </div>
                </div>
              )}

              {activeDeckTab === "architecture" && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-white flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>Production Architecture Pipeline</span>
                    </div>
                    
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-slate-400">Client:</span>
                        <span className="text-slate-200 font-semibold">React 19, Vanilla CSS, Vite</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-slate-400">API Layer:</span>
                        <span className="text-slate-200 font-semibold">Node.js, Express, JWT, MPIN</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-slate-400">Database:</span>
                        <span className="text-slate-200 font-semibold">MongoDB, SQL, PostgreSQL</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-slate-400">AI / LLM:</span>
                        <span className="text-slate-200 font-semibold">Gemini 1.5, Stability, Agents</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDeckTab === "dsa" && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-400 font-bold">Competitive Programming</span>
                      <span className="text-slate-300">1577 Contest Rating</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      750+ algorithmic challenges solved on LeetCode. Daily problem-solving focused on graphs, dynamic programming, trees, and time-space optimization.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                      <div className="text-white font-extrabold">750+</div>
                      <div className="text-[10px] text-slate-400">Solved</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                      <div className="text-white font-extrabold">1577</div>
                      <div className="text-[10px] text-slate-400">Rating</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                      <div className="text-white font-extrabold">25+</div>
                      <div className="text-[10px] text-slate-400">Contests</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Deck Footer Note */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Engineering Portfolio
                </span>
                <span className="text-slate-400">Kolkata, India</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
