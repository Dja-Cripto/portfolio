import { useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import ProgrammingHero from './components/ProgrammingHero';
import ProgrammingView from './views/ProgrammingView';
import DesignHero from './components/design/DesignHero';
import DesignView from './views/DesignView';
import DesignBackground from './components/design/DesignBackground';
import FloatingWhatsApp from './components/FloatingWhatsApp';

type ViewMode = 'programming' | 'design';

// ─── TRANSITION DESIGN ───────────────────────────────────────────────────────
//
// ATMOSPHERIC MORPH — the site transforms itself, not covers itself.
//
// Strategy:
//   1. Both BACKGROUNDS always mounted (fixed, z-0).
//      Crossfade via CSS opacity transition at 900ms.
//      Preserves Background3D WebGL context (no remount cost).
//
//   2. NAVBAR always mounted. Morphs internally via `mode` prop
//      using CSS transitions on colors/fonts — already implemented.
//
//   3. CONTENT swaps via AnimatePresence mode="wait":
//      • Exit: 280ms — content blurs + fades + slightly shrinks.
//        Background is already visibly morphing underneath.
//      • Scroll happens at t=280ms (peak of blur) — invisible.
//      • Enter: 680ms — new content unblurs + fades in + unscales.
//        Background finishes its 900ms morph as content settles.
//
//   This sequence creates the sensation of the atmosphere changing
//   first, then the content materializing in the new identity.
//   No heavy overlay. No third layer. No double render. No flicker.
//
// ─────────────────────────────────────────────────────────────────────────────

const EXIT_MS = 280;
const ENTER_MS = 680;
const BG_MS   = 900;

export default function App() {
  const [activeMode, setActiveMode] = useState<ViewMode>('programming');
  const busy = useRef(false);

  const startTransition = useCallback((targetMode: ViewMode, e: React.MouseEvent) => {
    if (activeMode === targetMode || busy.current) return;
    busy.current = true;

    // Mode swap happens immediately — backgrounds begin morphing right away
    setActiveMode(targetMode);

    // Scroll to top at the peak of exit blur (invisible at this moment)
    setTimeout(() => window.scrollTo({ top: 0 }), EXIT_MS);

    // Release lock after full sequence completes
    setTimeout(() => { busy.current = false; }, EXIT_MS + ENTER_MS + 50);
  }, [activeMode]);

  const inDesign = activeMode === 'design';

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        // Root background colour also morphs — handles any gap between sections
        backgroundColor: inDesign ? '#fdfaf7' : '#050505',
        transition: `background-color ${BG_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {/* ── ALWAYS-MOUNTED BACKGROUNDS ──────────────────────────────────────
          Both are position:fixed (see their own CSS), so they never
          affect document flow or scroll height.
          We simply crossfade their opacity — lightweight, no remount.        */}
      <div
        aria-hidden="true"
        style={{
          opacity: inDesign ? 0 : 1,
          transition: `opacity ${BG_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          pointerEvents: 'none',
        }}
      >
        <Background3D />
      </div>

      <div
        aria-hidden="true"
        style={{
          opacity: inDesign ? 1 : 0,
          transition: `opacity ${BG_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          pointerEvents: 'none',
        }}
      >
        <DesignBackground />
      </div>

      {/* ── NAVBAR ─────────────────────────────────────────────────────────
          Always mounted. Its internal CSS transitions handle the morph.   */}
      <Navbar mode={activeMode} />

      {/* ── CONTENT ATMOSPHERIC MORPH ───────────────────────────────────────
          mode="wait" ensures the old content exits fully before the new
          content enters — no simultaneous layout clash.

          Exit is intentionally fast (280ms): content dissolves quickly,
          revealing the morphing backgrounds underneath. This is the
          "atmospheric" moment — user sees the environment changing.

          Enter is slower (680ms): new identity materialises gracefully
          from the transformed atmosphere into crisp content.            */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMode}
          className="relative z-10"
          style={{ willChange: 'opacity, filter, transform' }}

          initial={{
            opacity: 0,
            filter: 'blur(16px)',
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
              duration: ENTER_MS / 1000,
              ease: [0.25, 0.46, 0.45, 0.94],
              filter: { duration: (ENTER_MS * 0.85) / 1000 },
              scale:  { duration: ENTER_MS / 1000, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
          exit={{
            opacity: 0,
            filter: 'blur(16px)',
            scale: 0.97,
            transition: {
              duration: EXIT_MS / 1000,
              ease: [0.4, 0, 1, 1],
            },
          }}
        >
          {activeMode === 'programming' ? (
            <div className="text-white selection:bg-cyan-500/30 selection:text-cyan-50">
              <ProgrammingHero startTransition={startTransition} />
              <ProgrammingView />
            </div>
          ) : (
            <div className="text-[#18181B] selection:bg-orange-500/20 selection:text-orange-900">
              <DesignHero startTransition={startTransition} />
              <DesignView />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <FloatingWhatsApp />
    </div>
  );
}
