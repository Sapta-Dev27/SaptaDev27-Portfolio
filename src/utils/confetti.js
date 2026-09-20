import confetti from "canvas-confetti";

export function triggerSubtleConfetti() {
  try {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00F0FF", "#38BDF8", "#6366F1", "#A855F7", "#FFFFFF"],
      disableForReducedMotion: true,
    });
  } catch (e) {
    // Graceful fallback if canvas-confetti is unsupported
  }
}

export function triggerBigCelebration() {
  try {
    const end = Date.now() + 1000;
    const colors = ["#00F0FF", "#38BDF8", "#6366F1", "#10B981"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (e) {
    // Graceful fallback
  }
}
