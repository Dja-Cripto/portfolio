import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Bot, CalendarDays, Check, Clapperboard, Gamepad2, Github, Layers3, Network, Share2, Sparkles, WandSparkles, X } from 'lucide-react';
import ModalWrapper from './ModalWrapper';

type Project = {
  title: string; eyebrow: string; description: string; fullDescription: string;
  coverImage: string; tech: string[]; year: string; scope: string;
  githubLink?: string; playLink?: string;
};

const investolq: Project = {
  title: 'Investolq Portal Studio',
  eyebrow: 'Projeto principal · Automação de conteúdo com IA',
  description: 'Uma central autônoma que pesquisa pautas financeiras, cria carrosséis e vídeos, agenda e publica — tudo a partir de um único painel.',
  fullDescription: 'O Investolq transforma uma agenda semanal em uma operação completa de conteúdo. O usuário escolhe horários, formatos e, se quiser, um tema. A plataforma pesquisa notícias, seleciona a pauta com mais potencial, evita repetições, cria o roteiro e conduz a produção até a publicação.\n\nNão é apenas um agendador ou editor: é uma pequena central de produção autônoma. O projeto reúne dois produtos dentro do mesmo ecossistema — um motor para carrosséis, posts e Stories e outro para vídeos verticais programáticos com narração, animação e identidade visual.',
  coverImage: '/investolq-cover.png',
  tech: ['n8n', 'Python', 'FastAPI', 'Remotion', 'React', 'TypeScript', 'FFmpeg', 'TTS', 'Next.js'],
  year: '2026', scope: 'Produto, automação e vídeo',
};

const curriculumDash: Project = {
  title: 'Currículo Dash', eyebrow: 'Jogo web · IA aplicada ao desenvolvimento',
  description: 'Um endless runner criado em dois dias: supere os obstáculos reais da busca de emprego e envie currículos para pontuar.',
  fullDescription: 'Currículo Dash é um jogo leve inspirado no clássico Chrome Dino. O jogador corre por uma cidade pixelizada, desvia de obstáculos como ghosting do RH, falta de experiência e vagas já preenchidas, e arremessa currículos em plataformas de emprego.\n\nO projeto foi desenvolvido em HTML, CSS e JavaScript puro em apenas dois dias, usando IA como acelerador de implementação sem abrir mão da lógica, performance e experiência do jogador.',
  coverImage: '/capa-curriculo-dash.png', tech: ['HTML5', 'CSS3', 'JavaScript', 'AI-assisted dev'],
  year: '2026', scope: 'Game design e front-end',
  playLink: 'https://dashdoemprego.vercel.app/', githubLink: 'https://github.com/Dja-Cripto/dashdoemprego',
};

const pipeline = [
  { icon: CalendarDays, label: 'Planeja', copy: 'Agenda, formato e tema' },
  { icon: Sparkles, label: 'Pesquisa', copy: 'Tendências e notícias' },
  { icon: WandSparkles, label: 'Produz', copy: 'Texto, imagem e vídeo' },
  { icon: Share2, label: 'Publica', copy: 'Instagram e YouTube' },
];

const capabilities = ['Agenda semanal de conteúdo', 'Pesquisa e seleção de pautas com IA', 'Histórico para evitar repetições', 'Roteiros, legendas e hashtags', 'Narração, música e efeitos sonoros', 'Publicação automática e logs'];

function InvestolqCase({ onClose }: { onClose: () => void }) {
  return (
    <ModalWrapper isOpen onClose={onClose}>
      <article className="case-shell">
        <header className="case-hero">
          <img src="/investolq-cover.png" alt="Interface do Investolq Portal Studio" />
          <div className="case-hero-shade" />
          <div className="case-hero-copy"><span className="terminal-kicker">// flagship_case_01</span><h2>Investolq<br />Portal Studio</h2><p>Uma operação de conteúdo financeiro, do insight à publicação.</p></div>
        </header>
        <div className="case-body">
          <div className="case-intro-grid">
            <div><span className="terminal-kicker">Visão geral</span><h3>Um produto.<br /><span>Dois motores.</span><br />Uma operação.</h3></div>
            <div className="case-prose">{investolq.fullDescription.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <div className="case-stats" aria-label="Resumo do projeto">
            <div><strong>05</strong><span>formatos de conteúdo</span></div><div><strong>02</strong><span>motores de produção</span></div><div><strong>01</strong><span>painel central</span></div><div><strong>24/7</strong><span>operação automatizada</span></div>
          </div>
          <section className="case-section">
            <div className="case-section-heading"><span className="terminal-kicker">Demo do produto</span><h3>Veja a central em operação.</h3></div>
            <div className="vimeo-frame"><iframe src="https://player.vimeo.com/video/1224398089?title=0&byline=0&portrait=0" title="Demonstração do Investolq Portal Studio" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowFullScreen /></div>
          </section>
          <section className="case-section">
            <div className="case-section-heading"><span className="terminal-kicker">Arquitetura do produto</span><h3>Dois estúdios especializados, coordenados por uma só inteligência.</h3></div>
            <div className="engine-grid">
              <div className="engine-card"><div className="engine-icon"><Layers3 /></div><span>MOTOR 01</span><h4>Carousel Studio</h4><p>Python e FastAPI transformam uma pauta em carrosséis, posts únicos e Stories prontos para publicação.</p><ul><li><Check /> Composição automática</li><li><Check /> Identidade visual consistente</li><li><Check /> Legendas e hashtags</li></ul></div>
              <div className="engine-card engine-card-purple"><div className="engine-icon"><Clapperboard /></div><span>MOTOR 02</span><h4>Motion Studio</h4><p>Remotion, React, TTS e FFmpeg convertem o roteiro em vídeos verticais animados e narrados.</p><ul><li><Check /> Vídeo programático</li><li><Check /> Narração e trilha</li><li><Check /> Cenas adaptadas ao roteiro</li></ul></div>
            </div>
          </section>
          <section className="case-section">
            <div className="case-section-heading compact"><span className="terminal-kicker">Fluxo autônomo</span><h3>Quatro etapas. Quase nenhum trabalho manual.</h3></div>
            <div className="pipeline-grid">{pipeline.map((item, index) => <div className="pipeline-step" key={item.label}><span>0{index + 1}</span><item.icon /><strong>{item.label}</strong><small>{item.copy}</small></div>)}</div>
          </section>
          <section className="case-gallery">
            <div className="gallery-copy"><span className="terminal-kicker">Painel e automação</span><h3>Controle humano.<br />Execução automática.</h3><p>O painel torna a automação visível: agenda, produções, publicações e erros permanecem acessíveis sem abrir o n8n.</p><div className="capability-list">{capabilities.map((item) => <span key={item}><Check /> {item}</span>)}</div></div>
            <div className="gallery-stack"><figure><img src="/investolq-dashboard.png" alt="Painel de acompanhamento do Investolq" /><figcaption>01 — Painel de operação</figcaption></figure><figure><img src="/investolq-agenda.png" alt="Agenda semanal do Investolq" /><figcaption>02 — Agenda inteligente</figcaption></figure><figure><img src="/investolq-n8n.png" alt="Fluxo de automação no n8n" /><figcaption>03 — Orquestração n8n</figcaption></figure></div>
          </section>
          <section className="stack-marquee" aria-label="Tecnologias utilizadas">{investolq.tech.map((tech) => <span key={tech}>{tech}</span>)}</section>
          <footer className="case-footer"><p>Case desenvolvido por Daniel de Jesus Alves · {investolq.year}</p><button onClick={onClose}>Fechar case <X /></button></footer>
        </div>
      </article>
    </ModalWrapper>
  );
}

function StandardCase({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <ModalWrapper isOpen onClose={onClose}>
      <article className="case-shell standard-case">
        <header className="case-hero compact-hero"><img src={project.coverImage} alt={project.title} /><div className="case-hero-shade" /><div className="case-hero-copy"><span className="terminal-kicker">// selected_work</span><h2>{project.title}</h2></div></header>
        <div className="case-body"><div className="case-intro-grid"><div><span className="terminal-kicker">Sobre o projeto</span><h3>Ideia rápida.<br /><span>Execução afiada.</span></h3></div><div className="case-prose">{project.fullDescription.split('\n\n').map((p) => <p key={p}>{p}</p>)}</div></div>
          <div className="project-actions">{project.playLink && <a href={project.playLink} target="_blank" rel="noreferrer"><Gamepad2 /> Jogar agora <ArrowUpRight /></a>}{project.githubLink && <a className="secondary" href={project.githubLink} target="_blank" rel="noreferrer"><Github /> Ver código <ArrowUpRight /></a>}</div>
          <section className="stack-marquee">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</section><footer className="case-footer"><p>Case desenvolvido por Daniel de Jesus Alves · {project.year}</p><button onClick={onClose}>Fechar case <X /></button></footer>
        </div>
      </article>
    </ModalWrapper>
  );
}

function FeaturedProject({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.button type="button" className="featured-project" onClick={onOpen} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
      <div className="featured-project-media"><img src={investolq.coverImage} alt="Investolq Portal Studio" /><div className="featured-orbit"><Bot /><span>AI</span></div></div>
      <div className="featured-project-copy"><div className="project-index"><span>01</span><small>PROJETO PRINCIPAL</small></div><span className="terminal-kicker">{investolq.eyebrow}</span><h3>Investolq<br /><em>Portal Studio</em></h3><p>{investolq.description}</p><div className="dual-engine"><span><Layers3 /> Carousel Studio</span><span><Clapperboard /> Motion Studio</span></div><div className="view-case">Explorar o case <ArrowRight /></div></div>
    </motion.button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="projects-section"><div className="projects-inner">
      <header className="section-editorial-heading"><div><span className="terminal-kicker">// trabalhos selecionados</span><h2>Projetos que<br /><em>fazem o trabalho.</em></h2></div><p>Sistemas reais, automações e experiências digitais construídas da estratégia à entrega.</p></header>
      <FeaturedProject onOpen={() => setSelected(investolq)} />
      <div className="secondary-projects"><motion.button type="button" onClick={() => setSelected(curriculumDash)} className="secondary-project" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="secondary-project-image"><img src={curriculumDash.coverImage} alt={curriculumDash.title} /><span>02</span></div><div className="secondary-project-copy"><span className="terminal-kicker">{curriculumDash.eyebrow}</span><h3>{curriculumDash.title}</h3><p>{curriculumDash.description}</p><div className="project-meta"><span>{curriculumDash.year}</span><span>{curriculumDash.scope}</span><ArrowUpRight /></div></div></motion.button>
        <div className="manifesto-card"><Network /><span className="terminal-kicker">Próximo desafio</span><h3>Do problema ao produto — conectando código, dados e operação.</h3><a href="#contact">Iniciar um projeto <ArrowRight /></a></div></div>
    </div><AnimatePresence>{selected?.title === investolq.title && <InvestolqCase onClose={() => setSelected(null)} />}{selected?.title === curriculumDash.title && <StandardCase project={curriculumDash} onClose={() => setSelected(null)} />}</AnimatePresence></section>
  );
}
