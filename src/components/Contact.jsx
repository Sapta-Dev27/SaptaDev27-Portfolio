import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import { triggerSubtleConfetti, triggerBigCelebration } from "../utils/confetti";

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    triggerSubtleConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResume = () => {
    triggerBigCelebration();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.open(personalInfo.resumePath, "_blank");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">
            Let's build something <span className="font-serif-italic font-normal text-slate-200">enduring together.</span>
          </h2>
          <p className="section-subtitle">
            Available for Software Engineering roles, high-impact internships, and architectural collaboration.
          </p>
        </div>

        {/* Contact Master Card */}
        <div className="max-w-4xl mx-auto card-noir p-8 sm:p-12 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Direct Info */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight mt-1">
                  Ready to engineer real impact.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Feel free to reach out directly via email for engineering positions, technical discussions, or code review.
                </p>
              </div>

              <div className="space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive CTAs */}
            <div className="flex flex-col justify-center space-y-3">
              
              {/* Primary Email Mailto CTA */}
              <a
                href={personalInfo.socials.email.url}
                className="btn btn-primary w-full py-3 text-xs flex items-center justify-center gap-2"
                onClick={() => triggerSubtleConfetti()}
              >
                <Send className="w-4 h-4" />
                <span>Send Email Directly</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary w-full py-3 text-xs flex items-center justify-center gap-2"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              {/* Download Resume Button */}
              <button
                onClick={handleResume}
                className="btn btn-outline w-full py-3 text-xs flex items-center justify-center gap-2"
                aria-label="Download official resume"
              >
                <FileText className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </button>

            </div>

          </div>

          {/* Social Profiles Strip */}
          <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Verified Developer Profiles:
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://leetcode.com/u/SaptaDev27/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSubtleConfetti()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 text-slate-300 text-xs font-mono border border-white/8 transition-all"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSubtleConfetti()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white text-slate-300 text-xs font-mono border border-white/8 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSubtleConfetti()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30 text-slate-300 text-xs font-mono border border-white/8 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
