import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Bot, Image as ImageIcon, LayoutDashboard, FolderGit2, X, ArrowRight, Sparkles, Wand2, Zap, Camera, Share2, Cpu, Gamepad2, Github } from 'lucide-react';
import ModalWrapper from './ModalWrapper';

function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    
    if (foregroundRef.current) {
      foregroundRef.current.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    }
    if (sliderLineRef.current) {
      sliderLineRef.current.style.left = `${percent}%`;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden select-none group border border-white/10 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-cyan-500/30 transition-all duration-300 touch-none cursor-ew-resize"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Depois (Gerado por IA)" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
        loading="lazy"
        draggable={false}
      />
      
      {/* Before Image (Foreground, clipped) */}
      <div 
        ref={foregroundRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)`, willChange: 'clip-path' }}
      >
        <img 
          src={beforeImage} 
          alt="Antes (Foto Original)" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div 
        ref={sliderLineRef}
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `50%`, transform: 'translateX(-50%)', willChange: 'left' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
          <div className="flex gap-1.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
            <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-mono border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        Antes
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-cyan-500/60 backdrop-blur-md rounded-lg text-white text-xs font-mono border border-cyan-500/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        Depois
      </div>
    </div>
  );
}

function DraggableGallery({ images, beforeAfters, orientation = 'vertical' }: { images: string[], beforeAfters?: { before: string, after: string }[], orientation?: 'horizontal' | 'vertical' }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalItems = (beforeAfters?.length || 0) + images.length;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progress = parseFloat(e.target.value);
    setScrollProgress(progress);
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollTo({ left: progress * maxScroll, behavior: 'auto' });
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center group/gallery">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 px-4 sm:px-2 -mx-4 sm:mx-0 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {beforeAfters && beforeAfters.map((ba, i) => (
          <div key={`ba-${i}`} className="snap-center shrink-0 w-[90vw] sm:w-[320px] md:w-[360px] aspect-[9/16]">
            <BeforeAfterSlider beforeImage={ba.before} afterImage={ba.after} />
          </div>
        ))}
        {images.map((img, i) => (
          <div key={i} className={`snap-center shrink-0 ${orientation === 'horizontal' ? 'w-[85vw] sm:w-[600px] md:w-[800px] aspect-video' : 'w-[90vw] sm:w-[320px] md:w-[360px] aspect-[9/16]'} rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-cyan-500/30 transition-all duration-300 group`}>
            <img 
              src={img} 
              alt={`Galeria ${i + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              loading="lazy"
              draggable={false}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/720x1280/1a1a1a/00f0ff?text=Imagem+${i + 1}`;
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Custom Slider */}
      {totalItems > 1 && (
        <div className="w-full max-w-xs sm:max-w-md mt-6 mb-2 flex flex-col items-center justify-center gap-4">
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={scrollProgress}
            onChange={handleSliderChange}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:hover:bg-cyan-300 [&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          />
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalItems }).map((_, i) => {
              const activeIndex = Math.round(scrollProgress * (totalItems - 1));
              return (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30'}`}
                />
              );
            })}
          </div>
        </div>
      )}
      
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        input[type=range]::-moz-range-thumb {
          width: 32px;
          height: 12px;
          border-radius: 9999px;
          background-color: #22d3ee;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        input[type=range]::-moz-range-thumb:hover {
          background-color: #67e8f9;
        }
      `}</style>
    </div>
  );
}

const projects = [
  {
    title: "Currículo Dash",
    description: "Um endless runner baseado na stack web (HTML, CSS, JS) desenvolvido em 2 dias com auxílio de IA. Desvie de obstáculos reais da busca de emprego e arremesse currículos nos sites.",
    fullDescription: "Currículo Dash é um jogo no estilo endless runner divertido e interativo inspirado no clássico Chrome Dino. O jogador controla um jovem em busca de sua primeira oportunidade de emprego que precisa correr pelas ruas de uma cidade pixelizada.\n\nO grande diferencial são os obstáculos, que representam as dificuldades reais enfrentadas na busca por uma vaga de emprego, como falta de experiência, o temido ghosting do RH, entrevistas complexas, escala 6x1 e vagas já preenchidas. Para pontuar, o jogador precisa saltar esses desafios e arremessar currículos em painéis de sites de emprego integrados (LinkedIn, InfoJobs, Indeed e Gupy). Quanto mais tempo sobreviver e mais currículos enviar, maior será a pontuação.\n\nO projeto demonstra de forma prática o poder do desenvolvimento moderno assistido por IA:\n• Stack 100% Web: Desenvolvido utilizando apenas as tecnologias fundamentais da web (HTML5, CSS3 e JavaScript puro), mantendo-o leve e acessível.\n• Entrega em 2 Dias: O jogo foi concebido e finalizado em apenas dois dias graças ao suporte da inteligência artificial para agilizar e estruturar a escrita do código. Sem o auxílio da IA, um projeto desse escopo levaria facilmente cerca de uma semana para ser concluído.\n• Alta Performance de Entrega: Um caso prático de como ferramentas inteligentes podem potencializar o desempenho do programador, permitindo focar na lógica de jogo e na experiência do usuário mesmo com uma stack simples e pura.",
    tech: ["HTML5", "CSS3", "JavaScript", "AI Assisted Dev"],
    icon: FolderGit2,
    color: "from-yellow-500/20 to-amber-500/20",
    border: "group-hover:border-yellow-500/50",
    featured: true,
    coverImage: "/capa-curriculo-dash.png",
    coverFallback: "/capa-curriculo-dash.png",
    playLink: "https://dashdoemprego.vercel.app/",
    githubLink: "https://github.com/Dja-Cripto/dashdoemprego",
    images: []
  }
];

function ProjectModal({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#0f0f0f] w-full flex flex-col relative font-sans">
        <div className="relative w-full h-[40vw] min-h-[250px] max-h-[500px] overflow-hidden">
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (project.coverFallback && img.src !== window.location.origin + project.coverFallback) {
                img.src = project.coverFallback;
              } else {
                img.src = `https://placehold.co/1200x500/111827/00f0ff?text=${project.title}`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <project.icon className="w-6 h-6 text-cyan-400" />
               </div>
               {project.beta && (
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Beta
                  </span>
               )}
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">{project.title}</h3>
          </div>
        </div>

        <div className="p-8 md:p-16 space-y-16">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="text-xs font-mono px-4 py-2 rounded-lg bg-white/5 text-cyan-100/70 border border-white/10">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 prose prose-invert max-w-none flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-6 font-mono">Sobre o Projeto</p>
                {project.fullDescription.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 whitespace-pre-line font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {(project.playLink || project.githubLink) && (
                <div className="flex flex-wrap gap-4">
                  {project.playLink && (
                    <motion.a
                      href={project.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-black text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all"
                    >
                      <Gamepad2 className="w-5 h-5" />
                      Jogar Jogo / Acessar
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 font-bold text-sm tracking-wider uppercase transition-all"
                    >
                      <Github className="w-5 h-5" />
                      Repositório GitHub
                    </motion.a>
                  )}
                </div>
              )}
            </div>

            {project.status && (
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                    <FolderGit2 className="text-cyan-400 w-5 h-5" />
                    Status: <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider ml-2">{project.status.label}</span>
                  </h4>
                  {(project.status.current || project.status.next) && (
                    <div className="space-y-6">
                      {project.status.current && (
                        <div>
                          <p className="text-white text-sm font-bold mb-3 uppercase tracking-tighter">Concluído:</p>
                          <ul className="space-y-2">
                            {project.status.current.map((item: string, i: number) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-emerald-500/50 mt-0.5">✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.status.next && (
                        <div>
                          <p className="text-white text-sm font-bold mb-3 uppercase tracking-tighter">Próximos passos:</p>
                          <ul className="space-y-2">
                            {project.status.next.map((item: string, i: number) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-cyan-500/50 mt-0.5">→</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {project.features && (
            <div className="space-y-8">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-500 font-mono">Funcionalidades</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.images?.length > 0 || project.beforeAfters?.length > 0) && (
            <div className="space-y-10">
               <p className="text-xs font-bold uppercase tracking-widest text-cyan-500 font-mono">Visualização & Galeria</p>
              <DraggableGallery images={project.images || []} beforeAfters={project.beforeAfters} orientation={project.imageOrientation} />
            </div>
          )}

          <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500 font-mono">© {new Date().getFullYear()} — {project.title} Case Research</p>
            <button onClick={onClose} className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest">Fechar Case <X className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

function ProjectCard({ project, index, onClick }: { project: any, index: number, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <div style={{ perspective: 1500 }} className="h-full group cursor-pointer" onClick={onClick}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative h-full glass-panel rounded-[2rem] p-6 border ${project.featured ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.05)]' : 'border-white/5'} flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,240,255,0.15)]`}
      >
        <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-900 border border-white/5">
           <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (project.coverFallback && img.src !== window.location.origin + project.coverFallback) {
                img.src = project.coverFallback;
              } else {
                img.src = `https://placehold.co/600x400/111827/00f0ff?text=${project.title}`;
              }
            }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
           <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                 <project.icon className="w-5 h-5 text-cyan-400" />
              </div>
           </div>
        </div>

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-black text-white tracking-tighter uppercase leading-tight">{project.title}</h3>
          {project.featured && (
            <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest shrink-0 ml-2">Destaque</div>
          )}
        </div>
        
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed font-light line-clamp-3 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
           <span>Ver detalhes</span>
           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-16 lg:py-32 px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ── Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-end mb-16 lg:mb-24">
            <div className="space-y-4">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Portfolio</motion.span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none uppercase">
                Selected<br /><span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}>Projects.</span>
              </h2>
            </div>
            <div className="space-y-6 border-l border-white/10 pl-8 pb-2">
              <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Projetos reais: automação, produto com IA e interfaces que suportam operação — do protótipo ao fluxo em produção.
              </p>
              <div className="h-px w-24 bg-cyan-500/30" />
            </div>
          </div>

          {/* ── Project Cards Grid ── */}
          <div className={`${projects.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'} mb-12 lg:mb-16`}>
            {projects.map((project, index) => (
              <div key={index} className={projects.length === 1 ? 'w-full max-w-2xl' : ''}>
                <ProjectCard 
                  project={project} 
                  index={index} 
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          {/* ── Vision Quote ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden group/vision">
             {/* Decorative glow inside */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover/vision:bg-cyan-500/10 transition-colors duration-1000" />
             
             <div className="space-y-8 relative z-10">
                <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">
                   <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                   Vision & Research
                </span>
                <p className="text-3xl md:text-4xl xl:text-5xl font-light text-gray-200 leading-tight italic tracking-tight">
                  "Quero que time e cliente enxerguem resultado rápido: menos clique manual, mais dado útil e produto que responde."
                </p>
             </div>
             <div className="text-gray-500 leading-relaxed font-light text-lg md:text-xl xl:text-2xl border-l lg:border-l-0 lg:border-t border-white/10 pt-8 lg:pt-12 relative z-10 mt-8 lg:mt-0">
                Cada case mistura decisão de arquitetura, integração e interface — sempre com o olho no que o usuário final precisa fazer em menos passos.
             </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject ?? projects[0]} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
