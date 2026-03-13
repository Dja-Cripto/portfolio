import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-1"
          onClick={() => scrollTo('hero')}
        >
          <span className="text-white">D</span>
          <span className="text-cyan-400">J</span>
          <span className="text-white">A</span>
          <span className="text-purple-500">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-mono">
          <button onClick={() => scrollTo('about')} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">01.</span> Sobre
          </button>
          <button onClick={() => scrollTo('projects')} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">02.</span> Projetos
          </button>
          <button onClick={() => scrollTo('skills')} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">03.</span> Habilidades
          </button>
          <button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">04.</span> Contato
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
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
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-sm font-mono">
              <button onClick={() => scrollTo('about')} className="text-left text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                <span className="text-cyan-400 mr-2">01.</span> Sobre
              </button>
              <button onClick={() => scrollTo('projects')} className="text-left text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                <span className="text-cyan-400 mr-2">02.</span> Projetos
              </button>
              <button onClick={() => scrollTo('skills')} className="text-left text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                <span className="text-cyan-400 mr-2">03.</span> Habilidades
              </button>
              <button onClick={() => scrollTo('contact')} className="text-left text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                <span className="text-cyan-400 mr-2">04.</span> Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
