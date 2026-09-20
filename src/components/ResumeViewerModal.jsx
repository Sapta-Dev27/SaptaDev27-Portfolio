import { useEffect } from "react";
import { X, Download, Printer, FileText, MapPin, Briefcase, GraduationCap, Award, Layers, CodeXml, Mail, Phone } from "lucide-react";
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from "./Icons";
import { personalInfo, education, experiences, projects, skillCategories, achievements } from "../data/portfolioData";
import { triggerBigCelebration } from "../utils/confetti";

export default function ResumeViewerModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleDownload = () => {
    triggerBigCelebration();
    window.open(personalInfo.resumePath, "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="modal-content max-w-4xl p-6 sm:p-8 space-y-6 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-white font-sans tracking-tight">
                Saptarshi Paul — Verified ATS Resume
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Software Engineer • Full-Stack • AI • DSA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="btn btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5 shadow-sm"
              title="Download PDF version"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn btn-secondary text-xs py-1.5 px-3 hidden sm:flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted ATS-Grade Resume Document */}
        <div className="bg-[#090b10] border border-white/8 rounded-xl p-6 sm:p-8 space-y-6 text-slate-200 text-xs sm:text-sm font-sans max-h-[70vh] overflow-y-auto print:max-h-none print:overflow-visible scrollbar-thin">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-4 text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-slate-300 font-medium text-xs sm:text-sm">
              {personalInfo.role} | Full-Stack Developer | AI Systems | Competitive Programmer
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-300 pt-1">
              <a href={personalInfo.socials.leetcode.url} target="_blank" rel="noreferrer" className="underline hover:text-white">
                LeetCode: @SaptaDev27 (750+ Solved, 1577 Rating)
              </a>
              <a href={personalInfo.socials.github.url} target="_blank" rel="noreferrer" className="underline hover:text-white">
                GitHub: @Sapta-Dev27
              </a>
              <a href={personalInfo.socials.linkedin.url} target="_blank" rel="noreferrer" className="underline hover:text-white">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/8 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="flex justify-between items-start pt-1">
              <div>
                <div className="font-bold text-white text-sm">{education.institution}</div>
                <div className="text-slate-300">{education.degree}</div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">CGPA: {education.cgpa}</div>
              </div>
              <div className="text-right text-xs font-mono text-slate-400">
                <div>{education.location}</div>
                <div>{education.duration}</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/8 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 pt-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-slate-400"> — {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 text-right">
                    {exp.period} | {exp.workMode}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/8 pb-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Key Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 pt-1">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-white">
                    {proj.title} <span className="text-slate-400 font-normal">({proj.techStack.join(", ")})</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{proj.description}</p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-400 pl-2">
                  {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/8 pb-1 flex items-center gap-1.5">
              <CodeXml className="w-4 h-4" />
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs">
              <div>
                <strong className="text-slate-200">Programming Languages:</strong> Java, C++, JavaScript (ES6+), SQL
              </div>
              <div>
                <strong className="text-slate-200">Frontend & UI:</strong> ReactJS, HTML5, CSS3, Component Systems, Responsive Design
              </div>
              <div>
                <strong className="text-slate-200">Backend & APIs:</strong> NodeJS, Express, RESTful APIs, JWT Authentication, Microservices
              </div>
              <div>
                <strong className="text-slate-200">Databases:</strong> MongoDB, SQL, PostgreSQL, Data Modeling & Indexing
              </div>
              <div>
                <strong className="text-slate-200">CS Core Fundamentals:</strong> Data Structures & Algorithms (750+ Solved), System Design, OOPS, Computer Networks, Operating Systems
              </div>
              <div>
                <strong className="text-slate-200">DevOps & Tools:</strong> Git, Docker, Postman, CI/CD, VS Code
              </div>
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/8 pb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Key Achievements & Leadership
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              {achievements.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-white">{ach.title}:</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Official Candidate ATS Record</span>
          <button onClick={onClose} className="hover:text-white underline">
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
