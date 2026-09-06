import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import RetroPortfolio from './components/RetroPortfolio';
import DesignHero from './components/design/DesignHero';
import DesignView from './views/DesignView';
import DesignBackground from './components/design/DesignBackground';

export default function App() {
  const [mode, setMode] = useState<'programming' | 'design'>('programming');
  const [targetMode, setTargetMode] = useState<'programming' | 'design' | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const changeMode = (target: 'programming' | 'design') => {
    if (target === mode || targetMode) return;
    setTargetMode(target);
    timers.current.push(window.setTimeout(() => {
      window.scrollTo({ top: 0 });
      setMode(target);
    }, 520));
    timers.current.push(window.setTimeout(() => setTargetMode(null), 1120));
  };

  return (
    <div className={mode === 'design' ? 'design-mode-root' : 'programming-mode-root'}>
      {mode === 'design' && <DesignBackground />}
      <AnimatePresence mode="wait">
        {mode === 'programming' ? (
          <motion.div key="programming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RetroPortfolio onDesign={() => changeMode('design')} />
          </motion.div>
        ) : (
          <motion.div key="design" className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DesignHero startTransition={(target) => changeMode(target)} />
            <DesignView />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {targetMode && (
          <motion.div
            className={`mode-curtain ${targetMode}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.08, times: [0, .46, .54, 1], ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 1 }}>
              <span>{targetMode === 'design' ? 'VISUAL MODE' : 'CODE MODE'}</span>
              <strong>{targetMode === 'design' ? 'DESIGN' : 'DJA.EXE'}</strong>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
