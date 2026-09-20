import { useEffect, useState } from "react";

export default function BackgroundFX() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />

      {/* Subtle Dot Matrix Accent */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25" />

      {/* Noise Texture */}
      <div className="noise-overlay" />

      {/* Refined Ambient Noir Glows */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, #38bdf8 0%, #1e293b 60%, transparent 100%)" }}
      />
      <div 
        className="absolute top-[35%] -left-32 w-[450px] h-[450px] rounded-full opacity-05 blur-[140px]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      <div 
        className="absolute top-[70%] -right-32 w-[500px] h-[500px] rounded-full opacity-05 blur-[140px]"
        style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
      />

      {/* Subtle Interactive Cursor Light */}
      {!isTouchDevice && (
        <div
          className="absolute w-[360px] h-[360px] rounded-full pointer-events-none opacity-10 blur-[80px] transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${mousePos.x - 180}px, ${mousePos.y - 180}px)`,
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(56, 189, 248, 0.2) 40%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
