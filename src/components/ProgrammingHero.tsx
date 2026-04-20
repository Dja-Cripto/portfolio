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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden lg:py-0">
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

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(520px,760px)_1fr] gap-8 items-center">
          
          {/* Left Decorative Column (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-4 opacity-40 hover:opacity-70 transition-opacity duration-700">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
              </div>
              <div className="font-mono text-[10px] space-y-1.5 text-cyan-400/60 font-light">
                <p>const stack = [</p>
                <p className="pl-3">"TypeScript",</p>
                <p className="pl-3">"n8n", "Python",</p>
                <p className="pl-3">"AI_Integrated"</p>
                <p>];</p>
              </div>
            </div>
            <div className="h-24 w-px bg-gradient-to-b from-cyan-500/30 to-transparent ml-6" />
          </motion.div>

          {/* Main Central Content */}
          <div className="text-center">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-8 md:mb-10"
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
                  WebkitTextStroke: '1.5px rgba(34,211,238,0.7)',
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
              className="text-sm md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0"
            >
              Construo aplicativos e fluxos digitais que rodam no dia a dia: automações para empresas, integrações, camada de dados em SQL e painéis em Power BI — com IA como acelerador.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <div
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-cyan-500/70 text-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-default"
              >
                <Code2 className="w-5 h-5" />
                Programação
              </div>

              <button
                onClick={(e) => startTransition('design', e)}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg border border-white/8 bg-white/[0.03] text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/5 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                <PenTool className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
                Design
              </button>
            </motion.div>
          </div>

          {/* Right Decorative Column (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:flex flex-col items-end gap-6"
          >
            <div className="w-48 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-3 opacity-30 hover:opacity-60 transition-opacity duration-700">
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] font-mono text-cyan-400/40 uppercase tracking-tighter">
                  <span>System load</span>
                  <span>92%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-cyan-500/40" 
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] font-mono text-purple-400/40 uppercase tracking-tighter">
                  <span>API Uptime</span>
                  <span>99.9%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '99.9%' }}
                    transition={{ duration: 2, delay: 1.2 }}
                    className="h-full bg-purple-500/40" 
                  />
                </div>
              </div>
            </div>
            <div className="mr-6 flex flex-col gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="w-16 h-[1px] bg-gradient-to-l from-purple-500/40 to-transparent" 
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint handled separately to maintain position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 md:mt-24 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo('about')}
        >
          <span className="text-xs text-gray-600 font-mono uppercase tracking-widest group-hover:text-cyan-500 transition-colors">scroll</span>
          <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 animate-bounce transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
