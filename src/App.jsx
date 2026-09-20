import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CodingDashboard from "./components/CodingDashboard";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeViewerModal from "./components/ResumeViewerModal";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080b] text-slate-100 font-sans selection:bg-white/20 selection:text-white">
      {/* Ambient Blueprint Atmosphere & Light Mesh */}
      <BackgroundFX />

      {/* Floating Navbar */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Page Landmark */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Engineering Narrative & Philosophy */}
        <About />

        {/* 3. Work Experience Timeline */}
        <Experience />

        {/* 4. Case Studies & Systems Projects */}
        <Projects />

        {/* 5. Technical Capabilities Matrix */}
        <Skills />

        {/* 6. Algorithmic Rigor & LeetCode Heatmap */}
        <CodingDashboard />

        {/* 7. Milestones & Leadership */}
        <Achievements />

        {/* 8. Academic Background */}
        <Education />

        {/* 9. Direct Contact Section */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* 10. Minimalist Footer */}
      <Footer />

      {/* Interactive Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive In-Browser Resume Modal */}
      {resumeOpen && (
        <ResumeViewerModal onClose={() => setResumeOpen(false)} />
      )}
    </div>
  );
}
