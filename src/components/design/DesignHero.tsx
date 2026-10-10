import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Code2, ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';

interface DesignHeroProps {
  startTransition: (mode: 'programming' | 'design', e: React.MouseEvent) => void;
}

export default function DesignHero({ startTransition }: DesignHeroProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const play = async () => {
    setStarted(true);
    try { await video.current?.play(); } catch { /* Native controls remain available. */ }
  };
  return (
    <section id="hero" className="design-ad-hero font-sans">
      <div className="design-mode-nav">
        <a href="#hero" aria-label="Início">DJA</a>
        <nav aria-label="Navegação do portfólio de design">
          <a href="#about">Sobre</a><a href="#projects">Projetos</a><a href="#skills">Toolkit</a><a href="#contact">Contato</a>
          <button onClick={(e) => startTransition('programming', e)}><Code2 /><span>Modo Programação</span></button>
        </nav>
      </div>
      <div className="design-ad-layout">
        <motion.div className="design-ad-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <span className="design-ad-kicker">Daniel de Jesus · Design & direção criativa</span>
          <h1>Sua ideia.<br />Meu próximo<br /><em>anúncio.</em></h1>
          <p>Vídeos para apresentar sua marca, lançar seu produto e dar vida à sua campanha. Da ideia ao filme, conecto direção criativa, design e inteligência artificial.</p>
          <div className="design-ad-actions">
            <a href="#contact" className="design-ad-primary">Quero um anúncio assim <ArrowUpRight size={20} /></a>
            <a href="#projects" className="design-ad-secondary">Explorar projetos <ArrowDownRight size={19} /></a>
          </div>
          <div className="design-ad-services" aria-label="Serviços"><span>Anúncios & campanhas</span><span>Filmes de produto</span><span>Vídeo com IA</span></div>
        </motion.div>
        <motion.figure className="design-ad-showcase" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>
          <div className="design-ad-video-wrap">
            <video ref={video} controls={started} playsInline preload="none" poster="/marketing/master-link-bio-poster.webp" onPlay={() => setStarted(true)} onError={() => { setFailed(true); setStarted(true); }} aria-label="Anúncio de apresentação dos serviços de criação de vídeos de Daniel de Jesus">
              <source src="/marketing/master-link-bio.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo. <a href="/marketing/master-link-bio.mp4">Abrir o anúncio</a>.
            </video>
            {!started && <button type="button" className="design-ad-play" onClick={play} aria-label="Assistir ao anúncio de 30 segundos"><span><Play fill="currentColor" size={26} /></span><strong>Veja o que posso criar</strong><small>Assistir ao anúncio · 30 segundos</small></button>}
          </div>
          <figcaption><span>Um exemplo do meu trabalho.</span><strong>Imagine uma campanha feita para sua marca.</strong></figcaption>
          {failed && <a className="design-ad-secondary" href="/marketing/master-link-bio.mp4">Abrir vídeo diretamente <ArrowUpRight size={16} /></a>}
        </motion.figure>
      </div>
      <div className="design-accent-line" />
    </section>
  );
}
