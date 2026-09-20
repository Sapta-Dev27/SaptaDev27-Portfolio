import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Search, Command } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { triggerSubtleConfetti } from "../utils/confetti";

export default function Navbar({ onOpenResume, onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "DSA & Rigor", href: "#coding" },
    { name: "Milestones", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = () => {
    triggerSubtleConfetti();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.open(personalInfo.resumePath, "_blank");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-white/8 py-3 shadow-md shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* Brand Monogram & Subtitle */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group flex items-center gap-3 font-bold tracking-tight text-white focus:outline-none"
          aria-label="Saptarshi Paul Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/12 flex items-center justify-center font-mono text-xs font-bold text-slate-200 group-hover:border-white/30 group-hover:text-white transition-all shadow-sm">
            <span>SP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-slate-200 transition-colors">
              Saptarshi Paul
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Island */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0d1017]/80 p-1.5 rounded-full border border-white/8 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/8 hover:border-white/20 text-slate-400 hover:text-slate-200 text-xs font-mono transition-all"
            title="Open Command Palette (Cmd+K / Ctrl+K)"
            aria-label="Open Command Palette"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-slate-400">Search</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/8 text-[9px] text-slate-400">
              ⌘K
            </span>
          </button>

          {/* Minimalist Resume CTA */}
          <button
            onClick={handleResumeClick}
            className="btn btn-primary text-xs py-1.5 px-3.5 rounded-lg font-medium flex items-center gap-1.5"
            aria-label="View and download Saptarshi Paul's Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Mobile Search */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/8 text-slate-300 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/8 text-slate-300 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0c12]/95 backdrop-blur-xl border-b border-white/8 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-1.5 mb-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/8 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleResumeClick();
              }}
              className="btn btn-primary w-full py-2.5 text-xs font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download ATS Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
