import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ mode = 'programming' }: { mode?: 'programming' | 'design' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  const handleMobileNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const isDesign = mode === 'design';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen 
          ? isDesign ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' 
                     : 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div 
          className="text-2xl font-bold cursor-pointer flex items-center gap-1 relative group"
          onClick={() => scrollTo('hero')}
        >
          {isDesign ? (
            <motion.div className="flex items-center gap-1 font-sans tracking-tight text-gray-900">
              <span className="font-black">Design</span>
              <span className="text-pink-500 font-light mx-1">/</span>
              <span className="font-medium">DJA</span>
            </motion.div>
          ) : (
            <div className="font-mono tracking-tighter">
              <span className="text-white">D</span>
              <span className="text-cyan-400">J</span>
              <span className="text-white">A</span>
              <span className="text-purple-500">.</span>
            </div>
          )}
        </div>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 ${isDesign ? 'font-sans text-sm font-medium' : 'font-mono text-sm'}`}>
          <button onClick={() => scrollTo('about')} className={`transition-colors ${isDesign ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-cyan-400'}`}>
            Sobre
          </button>
          <button onClick={() => scrollTo('projects')} className={`transition-colors ${isDesign ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-cyan-400'}`}>
            Projetos
          </button>
          <button onClick={() => scrollTo('skills')} className={`transition-colors ${isDesign ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-cyan-400'}`}>
            Habilidades
          </button>
          <button onClick={() => scrollTo('contact')} className={`transition-colors ${isDesign ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-cyan-400'}`}>
            Contato
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden transition-colors ${isDesign ? 'text-gray-800' : 'text-gray-300 hover:text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden backdrop-blur-xl border-b ${isDesign ? 'bg-white/95 border-gray-100 shadow-xl shadow-black/5' : 'bg-[#0a0a0a]/95 border-white/10'}`}
          >
            <div className={`flex flex-col px-6 py-6 gap-2 text-sm ${isDesign ? 'font-sans' : 'font-mono'}`}>
              <button
                type="button"
                onClick={() => handleMobileNavClick('about')}
                className={`text-left transition-colors text-lg py-4 min-h-[48px] w-full -mx-2 px-4 rounded-lg touch-manipulation ${isDesign ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Sobre
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick('projects')}
                className={`text-left transition-colors text-lg py-4 min-h-[48px] w-full -mx-2 px-4 rounded-lg touch-manipulation ${isDesign ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Projetos
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick('skills')}
                className={`text-left transition-colors text-lg py-4 min-h-[48px] w-full -mx-2 px-4 rounded-lg touch-manipulation ${isDesign ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Habilidades
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick('contact')}
                className={`text-left transition-colors text-lg py-4 min-h-[48px] w-full -mx-2 px-4 rounded-lg touch-manipulation ${isDesign ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 hover:text-cyan-400'}`}
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
