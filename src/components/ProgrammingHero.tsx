import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight, Braces, CheckCircle2, Code2, PenTool, Sparkles } from 'lucide-react';

interface ProgrammingHeroProps { startTransition: (mode: 'programming' | 'design', e: React.MouseEvent) => void; }

export default function ProgrammingHero({ startTransition }: ProgrammingHeroProps) {
  return (
    <section id="hero" className="retro-hero">
      <div className="retro-grid" aria-hidden="true" />
      <div className="hero-shell">
        <motion.div className="hero-statusbar" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="window-dots"><span /><span /><span /></div><span>dja://portfolio/home</span><span className="hero-clock">SALVADOR, BR · GMT-3</span>
        </motion.div>
        <div className="hero-layout">
          <motion.aside className="hero-rail" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35 }}><span>01 / INTRO</span><div className="rail-line" /><small>DESENVOLVIMENTO<br />AUTOMAÇÃO<br />DADOS</small></motion.aside>
          <div className="hero-main">
            <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}><span /> Disponível para novos projetos</motion.div>
            <motion.p className="hero-overline" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>Desenvolvedor & construtor de produtos digitais</motion.p>
            <div className="hero-title-wrap"><motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}>Daniel de</motion.h1></div>
            <div className="hero-title-wrap hero-title-second"><motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .08, ease: [0.16, 1, 0.3, 1] }}>Jesus <em>Alves.</em></motion.h1></div>
            <motion.div className="hero-bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .7 }}>
              <p>Transformo processos complexos em produtos simples de usar — unindo código, inteligência artificial, automação e visão de negócio.</p>
              <div className="hero-actions"><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Ver projetos <ArrowRight /></button><button className="ghost" onClick={(e) => startTransition('design', e)}><PenTool /> Modo design</button></div>
            </motion.div>
          </div>
          <motion.aside className="hero-console" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .45 }}>
            <div className="console-head"><Braces /><span>profile.json</span></div>
            <div className="console-code"><span className="muted">{'{'}</span><p><i>"focus"</i>: <b>"produtos úteis"</b>,</p><p><i>"stack"</i>: [<b>"web"</b>, <b>"IA"</b>, <b>"dados"</b>],</p><p><i>"status"</i>: <strong>"online"</strong></p><span className="muted">{'}'}</span></div>
            <div className="console-metric"><span><CheckCircle2 /> BUILD</span><strong>PASSING</strong></div><div className="console-stamp"><Sparkles /> IDEIAS EM PRODUTO</div>
          </motion.aside>
        </div>
        <div className="hero-footer"><span><Code2 /> PROGRAMMING MODE</span><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>SCROLL TO EXPLORE <ArrowDownRight /></button><span>© {new Date().getFullYear()}</span></div>
      </div>
    </section>
  );
}
