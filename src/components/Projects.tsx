import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useMotionTemplate } from 'motion/react';
import { Bot, Image as ImageIcon, LayoutDashboard, FolderGit2, X, ArrowRight, Sparkles, Wand2, Zap, Camera, Share2, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

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
              // Calculate which item is active based on progress
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
        /* Firefox slider thumb */
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
    title: "AI Social Content Generator",
    description: "Ferramenta de automação que permite gerar imagens e textos prontos para redes sociais em poucos segundos utilizando inteligência artificial.",
    fullDescription: "AI Social Content Generator é uma ferramenta de automação que permite gerar imagens e textos prontos para redes sociais em poucos segundos utilizando inteligência artificial.\n\nO sistema funciona através de comandos enviados em Telegram ou WhatsApp, permitindo que o usuário descreva o conteúdo desejado e escolha o formato da imagem.\n\nA ferramenta então gera automaticamente:\n• imagem criada por IA\n• legenda otimizada para redes sociais\n• conteúdo pronto para publicação\n\nO projeto foi pensado para uso rápido em dispositivos móveis, permitindo gerar conteúdo para marketing de forma simples e acessível diretamente pelo celular.",
    tech: ["n8n", "AI APIs", "Telegram Bot", "Automation"],
    icon: ImageIcon,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    featured: true,
    images: [
      "/print1.jpg", 
      "/print2.jpg", 
      "/print3.jpg"  
    ]
  },
  {
    title: "SimPost",
    description: "Aplicativo em desenvolvimento que utiliza inteligência artificial para transformar qualquer foto de produto em um post profissional pronto para redes sociais.",
    fullDescription: "SimPost é um aplicativo em desenvolvimento que utiliza inteligência artificial para transformar qualquer foto de produto em um post profissional pronto para redes sociais.\n\nO usuário simplesmente tira uma foto pelo celular e o sistema gera automaticamente uma versão otimizada para marketing, com melhorias visuais, composição profissional e estilo de anúncio.\n\nO aplicativo foi pensado principalmente para uso em dispositivos móveis, permitindo que qualquer pessoa transforme rapidamente uma foto comum em um criativo visual profissional.",
    tech: ["AI Image Gen", "React", "Node.js", "Automation"],
    icon: Wand2,
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    featured: false,
    beta: true,
    status: {
      label: "Beta Version",
      description: "Lançamento previsto nos próximos meses."
    },
    beforeAfters: [
      {
        before: "/simpost-before.jpg",
        after: "/simpost-after.jpg"
      },
      {
        before: "/simpost-befor2.jpg",
        after: "/simpost-after2.jpg"
      }
    ],
    features: [
      { icon: Wand2, title: "Geração automática", desc: "Criativos para anúncios gerados por IA" },
      { icon: Sparkles, title: "Melhoria visual", desc: "Aprimoramento automático de produtos" },
      { icon: Zap, title: "Criação rápida", desc: "Conteúdo para marketing em segundos" },
      { icon: Camera, title: "Uso simples", desc: "Basta uma fotografia do produto" },
      { icon: Share2, title: "Pronto para postar", desc: "Imagens otimizadas para redes sociais" }
    ],
    images: [
      "/simpost-print1.jpg",
      "/simpost-print2.jpg",
      "/simpost-print3.jpg",
      "/simpost-print3.1.jpg"
    ]
  },
  {
    title: "AdForge AI",
    description: "Sistema experimental focado na geração automatizada de anúncios em grande escala utilizando inteligência artificial.",
    fullDescription: "AdForge AI é um sistema experimental focado na geração automatizada de anúncios em grande escala utilizando inteligência artificial.\n\nO objetivo da ferramenta é permitir a criação de mais de 100 vídeos publicitários em aproximadamente uma hora com apenas um clique, após o processo automatizado.\n\nO sistema funciona através de um dashboard onde o usuário envia:\n• imagem do produto\n• imagem de modelos\n• parâmetros de criação\n\nA inteligência artificial gera diversas variações visuais e, em seguida, transforma essas variações em múltiplos vídeos de anúncios utilizando processamento em GPU.\n\nEste projeto foi desenvolvido para ser utilizado principalmente em computador, através de um dashboard de automação.",
    tech: ["React", "Node.js", "GPU Processing", "AI Automation"],
    icon: LayoutDashboard,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    featured: false,
    beta: true,
    imageOrientation: 'horizontal',
    status: {
      label: "Early Beta",
      description: "Projeto em desenvolvimento inicial.",
      current: [
        "dashboard inicial criado",
        "planejamento da automação",
        "APIs já integradas"
      ],
      next: [
        "criação das automações",
        "início dos testes de geração",
        "otimização do fluxo de produção de anúncios"
      ]
    },
    features: [
      { icon: Zap, title: "Geração automatizada", desc: "Criativos gerados de forma automática" },
      { icon: ImageIcon, title: "Múltiplas variações", desc: "Diversas versões de anúncios" },
      { icon: Wand2, title: "Vídeos publicitários", desc: "Automação de criação de vídeos" },
      { icon: Cpu, title: "Processamento GPU", desc: "Alta performance na geração" },
      { icon: LayoutDashboard, title: "Larga escala", desc: "Criação de mais de 100 anúncios" }
    ],
    images: [
      "/ugc-print1.jpg",
      "/ugc-print2.jpg",
      "/ugc-print3.jpg",
      "/ugc-print4.jpg"
    ]
  }
];

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 bg-black/95 sm:bg-black/90 backdrop-blur-md"
    >
      {/* Mobile Floating Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="sm:hidden fixed top-4 right-4 w-12 h-12 rounded-full bg-black/80 flex items-center justify-center active:scale-95 transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)] z-[99999] border border-white/20 backdrop-blur-md"
        aria-label="Fechar modal"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0f0f0f] sm:border border-white/10 sm:rounded-2xl w-full h-full sm:h-auto sm:max-w-6xl sm:max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10 custom-scrollbar flex flex-col relative"
      >
        <div className="sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/10 p-4 sm:p-6 flex justify-between items-start sm:items-center z-[60] gap-4">
          <div className="flex items-center gap-3 sm:gap-4 pr-16 sm:pr-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/5 shrink-0">
              <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">{project.title}</h3>
              {project.beta && (
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Beta
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="hidden sm:flex w-10 h-10 rounded-full bg-white/10 items-center justify-center hover:bg-white/20 hover:text-cyan-400 transition-colors shrink-0 shadow-lg z-[70]"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="text-sm font-mono px-4 py-2 rounded-lg bg-white/10 text-cyan-100/90 border border-white/20">
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            {project.fullDescription.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {project.status && (
            <div className="mb-12 bg-cyan-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <FolderGit2 className="text-cyan-400 w-5 h-5" />
                Status do Projeto: <span className="text-cyan-400 font-mono text-xs sm:text-sm uppercase tracking-wider ml-2 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">{project.status.label}</span>
              </h4>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">{project.status.description}</p>
              
              {(project.status.current || project.status.next) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.status.current && (
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Atualmente já existe:
                      </h5>
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
                      <h5 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Os próximos passos incluem:
                      </h5>
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
          )}

          {(project.images?.length > 0 || project.beforeAfters?.length > 0) && (
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <ImageIcon className="text-cyan-400 w-6 h-6" />
                Galeria do Projeto
              </h4>
              <DraggableGallery images={project.images || []} beforeAfters={project.beforeAfters} orientation={project.imageOrientation} />
              <p className="text-center text-sm text-gray-500 mt-4 font-mono flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Arraste para os lados para ver mais imagens.
              </p>
            </div>
          )}

          {project.features && (
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <Wand2 className="text-cyan-400 w-6 h-6" />
                Funcionalidades do Aplicativo
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-black/80 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }: { project: any, index: number, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    // For 3D rotation
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    // For spotlight
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full group cursor-pointer" onClick={onClick}>
      <div className="h-full transition-transform duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 rounded-2xl">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`glass-panel rounded-2xl p-8 relative transition-all duration-300 border ${project.featured ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]' : 'border-white/5'} ${project.border} flex flex-col h-full group-hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)] overflow-hidden`}
        >
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 240, 255, 0.1),
                transparent 40%
              )
            `,
          }}
        />

        <div 
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} 
          style={{ transform: "translateZ(-10px)" }}
        />
        
        <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(40px)" }}>
          <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors border border-white/5">
            <project.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
          </div>
          {project.featured && (
            <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Destaque
            </div>
          )}
          {project.beta && !project.featured && (
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" /> Beta
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all" style={{ transform: "translateZ(30px)" }}>
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-8 flex-grow leading-relaxed" style={{ transform: "translateZ(20px)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10 mb-6" style={{ transform: "translateZ(30px)" }}>
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-md bg-black/60 text-cyan-100/90 border border-white/10 group-hover:border-white/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto flex items-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-wider group-hover:text-cyan-300 transition-colors" style={{ transform: "translateZ(40px)" }}>
          <span className="font-bold">Expandir detalhes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-cyan-400 font-mono text-xl sm:text-2xl md:text-4xl">02.</span> Projetos
              </h2>
              <div className="h-[1px] bg-white/10 flex-grow hidden sm:block ml-4" />
            </div>
            <p className="text-cyan-400/80 font-mono text-sm sm:text-base shrink-0">
              Building AI tools and automation experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="bg-black/80 border border-white/10 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Estes são alguns dos projetos mais avançados que estou desenvolvendo atualmente. Ao longo do meu aprendizado e experimentação com inteligência artificial e automação, desenvolvi diversos outros projetos e ferramentas, porém estes são os que estão mais estruturados e que posso apresentar publicamente no momento.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
