import { useState, useEffect, useRef } from "react";
import { 
  Search, 
  FileText, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Copy, 
  Check, 
  X, 
  Sparkles,
  Terminal,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { triggerSubtleConfetti, triggerBigCelebration } from "../utils/confetti";

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    triggerSubtleConfetti();
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const actions = [
    {
      id: "resume-modal",
      group: "Quick Actions",
      label: "View ATS Resume (In-Browser)",
      icon: FileText,
      badge: "Action",
      perform: () => {
        onClose();
        if (onOpenResume) onOpenResume();
      },
    },
    {
      id: "resume-download",
      group: "Quick Actions",
      label: "Download Official Resume PDF",
      icon: FileText,
      badge: "PDF",
      perform: () => {
        triggerBigCelebration();
        window.open(personalInfo.resumePath, "_blank");
        onClose();
      },
    },
    {
      id: "copy-email",
      group: "Quick Actions",
      label: copiedEmail ? "Email Copied to Clipboard!" : "Copy Email (saptarshi2027paul@gmail.com)",
      icon: copiedEmail ? Check : Copy,
      badge: "Clipboard",
      perform: () => handleCopy(personalInfo.email, "email"),
    },
    {
      id: "nav-projects",
      group: "Navigation",
      label: "Explore Featured Case Studies & Projects",
      icon: Layers,
      badge: "Section",
      perform: () => {
        onClose();
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-coding",
      group: "Navigation",
      label: "View 750+ LeetCode Stats & Heatmap",
      icon: Code2,
      badge: "750+ Solved",
      perform: () => {
        onClose();
        document.querySelector("#coding")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-experience",
      group: "Navigation",
      label: "View Experience & Pinggy Role",
      icon: Briefcase,
      badge: "Timeline",
      perform: () => {
        onClose();
        document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-skills",
      group: "Navigation",
      label: "Inspect Technical Skills Matrix",
      icon: Sparkles,
      badge: "Stack",
      perform: () => {
        onClose();
        document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-achievements",
      group: "Navigation",
      label: "View Milestones & Hackathon Honors",
      icon: Trophy,
      badge: "Honors",
      perform: () => {
        onClose();
        document.querySelector("#achievements")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-education",
      group: "Navigation",
      label: "Academic Background (TMSL BTech CSE)",
      icon: GraduationCap,
      badge: "Education",
      perform: () => {
        onClose();
        document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "nav-contact",
      group: "Navigation",
      label: "Initiate Direct Contact",
      icon: Mail,
      badge: "Contact",
      perform: () => {
        onClose();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "link-leetcode",
      group: "External Profiles",
      label: "Open LeetCode Profile (@SaptaDev27)",
      icon: LeetCodeIcon,
      badge: "1577 Rating",
      perform: () => {
        window.open("https://leetcode.com/u/SaptaDev27/", "_blank");
        onClose();
      },
    },
    {
      id: "link-github",
      group: "External Profiles",
      label: "Open GitHub Profile (@Sapta-Dev27)",
      icon: GithubIcon,
      badge: "Repositories",
      perform: () => {
        window.open(personalInfo.socials.github.url, "_blank");
        onClose();
      },
    },
    {
      id: "link-linkedin",
      group: "External Profiles",
      label: "Open LinkedIn Profile",
      icon: LinkedinIcon,
      badge: "Network",
      perform: () => {
        window.open(personalInfo.socials.linkedin.url, "_blank");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.group.toLowerCase().includes(query.toLowerCase()) ||
    action.badge.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="modal-content max-w-2xl bg-[#090b10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#0d1017]">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections (e.g. resume, leetcode, pinggy, projects)..."
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Command List Area */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 scrollbar-thin">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-slate-500">
              No matching commands or sections found for "{query}".
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white/[0.08] text-white border border-white/10"
                      : "text-slate-300 hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-white/15 text-white" : "bg-white/5 text-slate-400"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium">{action.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                      {action.badge}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#07080c] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↓</kbd> navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↵</kbd> select</span>
          </div>
          <span>Saptarshi Paul Portfolio</span>
        </div>
      </div>
    </div>
  );
}
