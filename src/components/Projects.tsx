import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Bot, Image as ImageIcon, LayoutDashboard, FolderGit2, X, ArrowRight, Sparkles, Wand2, Zap, Camera, Share2, Cpu } from 'lucide-react';
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
    title: "Chat2 - AI Generator",
    description: "Ferramenta de automação que permite gerar imagens e textos prontos para redes sociais em poucos segundos utilizando inteligência artificial.",
    fullDescription: "Chat2 é uma ferramenta de automação que permite gerar imagens e textos prontos para redes sociais em poucos segundos utilizando inteligência artificial.\n\nO sistema funciona através de comandos enviados em Telegram ou WhatsApp, permitindo que o usuário descreva o conteúdo desejado e escolha o formato da imagem.\n\nA ferramenta então gera automaticamente:\n• imagem criada por IA\n• legenda otimizada para redes sociais\n• conteúdo pronto para publicação\n\nO projeto foi pensado para uso rápido em dispositivos móveis, permitindo gerar conteúdo para marketing de forma simples e acessível diretamente pelo celular.",
    tech: ["n8n", "AI APIs", "Telegram Bot", "Automation"],
    icon: Bot,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    featured: true,
    coverImage: "/capaChat2.png",
    coverFallback: "/print1.jpg",
    images: ["/print1.jpg", "/print2.jpg", "/print3.jpg"]
  },
  {
    title: "SimPost (Cast)",
    description: "Aplicativo em desenvolvimento que utiliza inteligência artificial para transformar qualquer foto de produto em um post profissional pronto para redes sociais.",
    fullDescription: "SimPost é um aplicativo em desenvolvimento que utiliza inteligência artificial para transformar qualquer foto de produto em um post profissional pronto para redes sociais.\n\nO usuário simplesmente tira uma foto pelo celular e o sistema gera automaticamente uma versão otimizada para marketing, com melhorias visuais, composição profissional e estilo de anúncio.\n\nO aplicativo foi pensado principalmente para uso em dispositivos móveis, permitindo que qualquer pessoa transforme rapidamente uma foto comum em um criativo visual profissional.",
    tech: ["AI Image Gen", "React", "Node.js", "Automation"],
    icon: Wand2,
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    featured: false,
    beta: true,
    coverImage: "/capaCast.png",
    coverFallback: "/simpost-print1.jpg",
    status: {
      label: "Beta Version",
      description: "Lançamento previsto nos próximos meses."
    },
    beforeAfters: [
      { before: "/simpost-before.jpg", after: "/simpost-after.jpg" },
      { before: "/simpost-befor2.jpg", after: "/simpost-after2.jpg" }
    ],
    features: [
      { icon: Wand2, title: "Geração automática", desc: "Criativos para anúncios gerados por IA" },
      { icon: Sparkles, title: "Melhoria visual", desc: "Aprimoramento automático de produtos" },
      { icon: Zap, title: "Criação rápida", desc: "Conteúdo para marketing em segundos" },
      { icon: Camera, title: "Uso simples", desc: "Basta uma fotografia do produto" },
      { icon: Share2, title: "Pronto para postar", desc: "Imagens otimizadas para redes sociais" }
    ],
    images: ["/simpost-print1.jpg", "/simpost-print2.jpg", "/simpost-print3.jpg", "/simpost-print3.1.jpg"]
  },
  {
    title: "Enage AI",
    description: "Sistema focado na geração automatizada de anúncios em grande escala utilizando inteligência artificial e processamento em GPU.",
    fullDescription: "Enage AI é um sistema focado na geração automatizada de anúncios em grande escala utilizando inteligência artificial.\n\nO objetivo da ferramenta é permitir a criação de mais de 100 vídeos publicitários em aproximadamente uma hora com apenas um clique, após o processo automatizado.\n\nO sistema funciona através de um dashboard onde o usuário envia:\n• imagem do produto\n• imagem de modelos\n• parâmetros de criação\n\nA inteligência artificial gera diversas variações visuais e, em seguida, transforma essas variações em múltiplos vídeos de anúncios utilizando processamento em GPU.\n\nEste projeto foi desenvolvido para ser utilizado principalmente em computador, através de um dashboard de automação.",
    tech: ["React", "Node.js", "GPU Processing", "AI Automation"],
    icon: LayoutDashboard,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    featured: false,
    beta: true,
    coverImage: "/capaEnage.png",
    coverFallback: "/ugc-print1.jpg",
    imageOrientation: 'horizontal' as const,
    status: {
      label: "Early Beta",
      description: "Projeto em desenvolvimento inicial.",
      current: ["dashboard inicial criado", "planejamento da automação", "APIs já integradas"],
      next: ["criação das automações", "início dos testes de geração", "otimização do fluxo de produção de anúncios"]
    },
    features: [
      { icon: Zap, title: "Geração automatizada", desc: "Criativos gerados de forma automática" },
      { icon: ImageIcon, title: "Múltiplas variações", desc: "Diversas versões de anúncios" },
      { icon: Wand2, title: "Vídeos publicitários", desc: "Automação de criação de vídeos" },
      { icon: Cpu, title: "Processamento GPU", desc: "Alta performance na geração" },
      { icon: LayoutDashboard, title: "Larga escala", desc: "Criação de mais de 100 anúncios" }
    ],
    images: ["/ugc-print1.jpg", "/ugc-print2.jpg", "/ugc-print3.jpg", "/ugc-print4.jpg"]
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
            <div className="lg:col-span-3 prose prose-invert max-w-none">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-6 font-mono">Sobre o Projeto</p>
              {project.fullDescription.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 whitespace-pre-line font-light">
                  {paragraph}
                </p>
              ))}
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
    <section id="projects" className="py-16 lg:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
            <div className="flex-1">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Portfolio</motion.span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                Selected<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>Projects.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed font-light border-l border-white/10 pl-8">
              Projetos reais: automação, produto com IA e interfaces que suportam operação — do protótipo ao fluxo em produção.
            </p>
          </div>

          {/* ── Project Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* ── Vision Quote ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-16">
             <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                   Vision & Research
                </span>
                <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic">
                  "Quero que time e cliente enxerguem resultado rápido: menos clique manual, mais dado útil e produto que responde."
                </p>
             </div>
             <div className="text-gray-500 leading-relaxed font-light text-lg">
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
