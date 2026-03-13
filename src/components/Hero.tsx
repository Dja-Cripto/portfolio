import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
      {/* 3D Background Element */}
      <Hero3D />

      {/* Subtle glowing orb behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 md:mb-6"
        >
          Daniel de Jesus <span className="text-gradient">Alves</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-6 text-xs md:text-lg text-cyan-100/70 mb-6 md:mb-8 font-mono"
        >
          <span>AI Developer</span>
          <span className="hidden md:inline text-cyan-500/50">•</span>
          <span>Automation Builder</span>
          <span className="hidden md:inline text-cyan-500/50">•</span>
          <span>Vibe Coding Enthusiast</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0"
        >
          Desenvolvedor focado em inteligência artificial, automação e criação de aplicações modernas utilizando ferramentas de desenvolvimento assistido por IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 w-full sm:w-auto font-medium"
          >
            Ver Projetos
          </button>
          <button 
            onClick={() => scrollTo('about')}
            className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto font-medium"
          >
            Sobre Mim
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto font-medium"
          >
            Contato
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors z-10"
        onClick={() => scrollTo('about')}
      >
        <ChevronDown className="w-8 h-8 text-cyan-500/50" />
      </motion.div>
    </section>
  );
}
