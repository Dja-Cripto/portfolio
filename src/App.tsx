import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import RetroPortfolio from './components/RetroPortfolio';
import DesignHero from './components/design/DesignHero';
import DesignView from './views/DesignView';
import DesignBackground from './components/design/DesignBackground';

export default function App() {
  const [mode, setMode] = useState<'programming' | 'design'>('programming');
  const changeMode = (target: 'programming' | 'design') => {
    if (target === mode) return;
    window.scrollTo({ top: 0 });
    setMode(target);
  };

  return (
    <div className={mode === 'design' ? 'design-mode-root' : 'programming-mode-root'}>
      {mode === 'design' && <DesignBackground />}
      <AnimatePresence mode="wait">
        {mode === 'programming' ? (
          <motion.div key="programming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }}>
            <RetroPortfolio onDesign={() => changeMode('design')} />
          </motion.div>
        ) : (
          <motion.div key="design" className="relative z-10" initial={{ opacity: 0, filter: 'blur(12px)' }} animate={{ opacity: 1, filter: 'blur(0)' }} exit={{ opacity: 0 }}>
            <DesignHero startTransition={(target) => changeMode(target)} />
            <DesignView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
