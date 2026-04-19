import { motion } from 'motion/react';
import { Code2, ArrowDownRight } from 'lucide-react';

interface DesignHeroProps {
  startTransition: (mode: 'programming' | 'design', e: React.MouseEvent) => void;
}

export default function DesignHero({ startTransition }: DesignHeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden font-sans flex flex-col"
      style={{ background: 'linear-gradient(135deg, #fff0e8 0%, #fce4ec 40%, #ede7f6 100%)' }}
    >
      {/* —— ORGANIC BLOB SHAPES (NO particles, NO wireframe, NO tech) —— */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(236,72,153,0.18) 50%, transparent 80%)' }}
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.15) 55%, transparent 80%)' }}
      />
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -60, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(249,115,22,0.1) 60%, transparent 80%)' }}
      />

      {/* —— DECORATIVE TEXT TICKER (editorial luxury feel) —— */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 text-[10rem] font-black opacity-[0.05] text-gray-900 tracking-tighter uppercase leading-none"
        >
          {['DESIGN', '•', 'BRANDING', '•', 'IDENTITY', '•', 'VISUAL', '•', 'DESIGN', '•', 'BRANDING', '•', 'IDENTITY', '•', 'VISUAL', '•'].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </motion.div>
      </div>

      {/* —— MAIN HERO CONTENT —— */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20">

        {/* Top row: mode tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">Design Visual — Direção Criativa</span>
        </motion.div>

        {/* Giant name — completely different treatment from Programming */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[clamp(2rem,10vw,11rem)] font-black tracking-tighter leading-[0.85] text-gray-950"
          >
            Daniel
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="text-[clamp(2rem,10vw,11rem)] font-black tracking-tighter leading-[0.85] text-transparent"
            style={{
              WebkitTextStroke: '2px #18181b',
            }}
          >
            de Jesus
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="text-[clamp(2rem,10vw,11rem)] font-black tracking-tighter leading-[0.85]"
            style={{
              background: 'linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Alves.
          </motion.h1>
        </div>

        {/* Description row — side by side with scrolldown */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed font-light"
          >
            Identidade de ponta a ponta, social com foco em resultado, vídeo promocional e sites que parecem produto — com IA acelerando produção, não substituindo critério de marca.
          </motion.p>

          {/* CTA BUTTONS — completely different style from programming */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            {/* Active button (Design) */}
            <button
              onClick={() => scrollTo('projects')}
              className="group px-8 py-5 rounded-2xl font-bold text-lg text-white flex items-center gap-3 transition-all duration-300 hover:gap-5 hover:shadow-[0_20px_60px_rgba(249,115,22,0.4)] hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)' }}
            >
              Ver Projetos
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            {/* Switch to Programming button */}
            <button
              onClick={(e) => startTransition('programming', e)}
              className="group px-6 py-5 rounded-2xl font-medium text-base text-gray-500 border border-gray-300 bg-white/60 backdrop-blur-sm flex items-center gap-3 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
            >
              <Code2 className="w-4 h-4 text-cyan-500" />
              Modo Programação
            </button>
          </motion.div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 flex items-center gap-4 cursor-pointer group"
          onClick={() => scrollTo('about')}
        >
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-300">
            <ArrowDownRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <span className="text-sm text-gray-400 tracking-widest uppercase font-medium group-hover:text-orange-500 transition-colors">Explorar</span>
        </motion.div>
      </div>

      {/* —— ROTATING DECORATIVE LABEL (bottom-right, editorial feel) —— */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center justify-center w-32 h-32 z-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circle-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="10.5" fontWeight="600" letterSpacing="3" className="fill-gray-400 uppercase" fontFamily="sans-serif">
            <textPath href="#circle-path">Design Visual • Branding • Motion • IA •&nbsp;</textPath>
          </text>
        </svg>
        <div className="absolute w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)' }}>
          <span className="text-white font-black text-sm">DJA</span>
        </div>
      </motion.div>
    </section>
  );
}
