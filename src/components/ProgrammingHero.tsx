import { motion } from 'motion/react';
import { ChevronDown, Code2, PenTool, Zap } from 'lucide-react';
import Hero3D from './Hero3D';

interface ProgrammingHeroProps {
  startTransition: (mode: 'programming' | 'design', e: React.MouseEvent) => void;
}

const roles = ['Apps & sistemas sob medida', 'Automação para negócios', 'Dados, SQL & Power BI'];

export default function ProgrammingHero({ startTransition }: ProgrammingHeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
      {/* 3D Background Element */}
      <Hero3D />

      {/* Multi-layer ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/[0.09] rounded-full blur-[80px] pointer-events-none" />

      {/* Horizontal scan lines (subtle, premium) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 4px)', backgroundSize: '100% 4px' }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30 pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-500/30 pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-500/30 pointer-events-none" />

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <Zap className="w-3 h-3" />
          Disponível para projetos
        </motion.div>

        {/* Main name — slide up per line */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1]"
          >
            Daniel de Jesus
          </motion.div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] text-transparent"
            style={{
              WebkitTextStroke: '2px rgba(34,211,238,0.7)',
            }}
          >
            Alves.
          </motion.div>
        </div>

        {/* Roles - animated tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-8 font-mono"
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-2">
              <span className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-white/10 bg-white/[0.04] text-cyan-300 font-medium">
                {role}
              </span>
              {i < roles.length - 1 && <span className="text-white/10 hidden md:inline">•</span>}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-sm md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed px-4 md:px-0"
        >
          Construo aplicativos e fluxos digitais que rodam no dia a dia: automações para empresas, integrações, camada de dados em SQL e painéis em Power BI — com IA como acelerador, não como substituto de qualidade.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Active mode indicator */}
          <div
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-cyan-500/70 text-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-default"
          >
            <Code2 className="w-5 h-5" />
            Programação
          </div>

          {/* Switch to Design */}
          <button
            onClick={(e) => startTransition('design', e)}
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg border border-white/8 bg-white/[0.03] text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/5 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300"
          >
            <PenTool className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
            Design
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo('about')}
        >
          <span className="text-xs text-gray-600 font-mono uppercase tracking-widest group-hover:text-cyan-500 transition-colors">scroll</span>
          <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 animate-bounce transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
