import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import ModalWrapper from '../ModalWrapper';

// ─── KAST CASE DATA ──────────────────────────────────────────────────────────
const kastCase = {
  num: '01',
  client: 'KAST',
  category: 'Identidade Visual & Social Media',
  tagline: 'Comunicação visual premium para uma marca em crescimento.',
  coverImage: '/capa-kast.png',
  heroImage: '/capa-kast.png',
  accentColor: '#f97316',
  accentLight: 'orange',
  about:
    'Desenvolvi diversas peças visuais para campanhas e divulgações da KAST, criando conteúdos promocionais, posts informativos e criativos voltados para apresentação do produto, ofertas e comunicação visual da marca. O trabalho teve foco em elevar a percepção visual dos materiais, aumentar a qualidade da apresentação e gerar conteúdos mais atrativos para divulgação digital.',
  deliverables: [
    'Posts promocionais para redes sociais',
    'Campanhas visuais de produto',
    'Criativos para divulgação digital',
    'Adaptação de peças para diferentes formatos',
    'Direção visual aplicada à identidade da marca',
    'Comunicação visual de ofertas e lançamentos',
  ],
  gallery: [
    '/kast-1.png', '/kast-2.png', '/kast-3.png', '/kast-4.png', '/kast-5.png',
    '/kast-6.png', '/kast-7.png', '/kast-8.png', '/kast-9.png', '/kast-10.png',
  ],
};

// ─── TRAP BURGUER CASE DATA ───────────────────────────────────────────────────
const trapCase = {
  num: '02',
  client: 'Trap Burguer',
  category: 'Social Media / Design Promocional / Negócio Local',
  tagline: 'Presença digital forte para uma hamburgueria física.',
  coverImage: '/capa-trapburguer.png',
  heroImage: '/capa-trapburguer.png',
  accentColor: '#dc2626',
  accentLight: 'red',
  about:
    'A Trap Burguer é uma hamburgueria física para a qual desenvolvi conteúdos visuais voltados para redes sociais. O trabalho incluiu posts promocionais, stories, campanhas visuais e materiais para fortalecer a comunicação da marca, divulgar produtos e tornar a presença digital do negócio mais atrativa e consistente.',
  deliverables: [
    'Criação de posts para Instagram',
    'Desenvolvimento de stories promocionais',
    'Peças para divulgação de produtos e campanhas',
    'Adaptação de identidade visual para diferentes formatos',
    'Apoio visual na comunicação digital da marca',
    'Conteúdo para presença recorrente nas redes sociais',
  ],
  result:
    'O projeto ajudou a tornar a comunicação visual da Trap Burguer mais profissional, consistente e atrativa, com conteúdos voltados para divulgação de produtos, fortalecimento da marca e presença mais ativa nas redes sociais.',
  cardFront: '/ctrap-13.jpg',
  cardBack: '/ctrap-14.jpg',
  galleryGroups: [
    {
      label: 'Identidade Visual',
      images: ['/itrap-1.png', '/itrap-2.png', '/itrap-3.png', '/itrap12.png'],
    },
    {
      label: 'Posts Promocionais',
      images: ['/ptrap-4.png', '/ptrap-5.mp4', '/ptrap-6.png', '/ptrap-7.png'],
    },
    {
      label: 'Software & Sistema (E)',
      images: ['/etrap-8.mp4', '/etrap-9.png', '/etrap-10.png', '/etrap-11.png'],
    },
  ],
};

// ─── WERATE BRASIL CASE DATA ──────────────────────────────────────────────────
const werateCase = {
  num: '03',
  client: 'weRate Brasil',
  category: 'Campanha Visual / Vídeo Promocional / App Disclosure',
  tagline: 'Criação de conteúdos visuais e vídeo de apresentação para app de recompensas.',
  coverImage: '/capa-werate.png',
  heroImage: '/werate-6.png',
  featuredVideo: '/werate-video.mp4',
  accentColor: '#3b82f6',
  accentLight: 'blue',
  about:
    'O weRate é um aplicativo em que usuários podem avaliar locais, acumular pontos e trocar essas recompensas por benefícios. Neste projeto, atuei na criação de materiais visuais e de um vídeo de apresentação voltado para divulgação da proposta do app no Brasil.',
  role:
    'Além de atuar como embaixador do projeto no Brasil, desenvolvi conteúdos visuais para fortalecer a apresentação da marca e criei um vídeo promocional com foco em comunicar de forma clara e atrativa o funcionamento e os diferenciais do aplicativo.',
  deliverables: [
    'Atuação como embaixador oficial no Brasil',
    'Criação de vídeo promocional de alta fidelidade',
    'Desenvolvimento de criativos visuais para divulgação',
    'Comunicação clara de diferenciais e funcionamento',
    'Fortalecimento da apresentação visual da marca',
    'Estratégia de conteúdo visual para lançamento',
  ],
  gallery: [
    '/werate-1.png', '/werate-2.png', '/werate-3.png', '/werate-4.png', '/werate-5.png', '/werate-6.png',
  ],
  result:
    'O trabalho ajudou a apresentar o projeto de forma mais visual, acessível e profissional, reunindo identidade, divulgação e vídeo em uma comunicação mais forte para o público.',
};

// ModalWrapper is imported from shared component above

// ─── REUSABLE GALLERY VIEWER ─────────────────────────────────────────────────
function GalleryViewer({
  images,
  accentColor,
  label,
}: {
  images: string[];
  accentColor: string;
  label?: string;
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
          {label}
        </p>
      )}
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200">
        {images[idx].endsWith('.mp4') ? (
          <video src={images[idx]} autoPlay loop muted playsInline className="w-full h-full object-contain bg-black" />
        ) : (
          <img
            src={images[idx]}
            alt={`${label ?? 'gallery'} ${idx + 1}`}
            className="w-full h-full object-contain bg-gray-50"
            onError={e => {
              (e.target as HTMLImageElement).src = `https://placehold.co/800x600/f3f4f6/6b7280?text=${encodeURIComponent((label ?? 'Imagem') + ' ' + (idx + 1))}`;
            }}
          />
        )}
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors">
              <ArrowLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white text-xs font-bold">
          {idx + 1} / {images.length}
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all"
            style={{
              borderColor: i === idx ? accentColor : 'transparent',
              opacity: i === idx ? 1 : 0.55,
            }}
          >
            {images[i].endsWith('.mp4') ? (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[9px] border-l-white border-b-[6px] border-b-transparent ml-1" />
              </div>
            ) : (
              <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover"
                onError={e => { (e.target as HTMLImageElement).src = `https://placehold.co/56x56/f3f4f6/6b7280?text=${i + 1}`; }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── BUSINESS CARD 3D ───────────────────────────────────────────────────────
function BusinessCard3D({ front, back }: { front: string; back: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <div className="group perspective-1000 cursor-pointer w-[300px] h-[170px] sm:w-[450px] sm:h-[250px]" onClick={() => setIsFlipped(!isFlipped)}>
        <motion.div className="relative w-full h-full [transform-style:preserve-3d] transition-all duration-700" animate={{ rotateY: isFlipped ? 180 : 0 }} whileHover={{ rotateX: 5, rotateY: isFlipped ? 185 : 5 }}>
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img src={front} alt="Cartão" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/450x250/111827/ffffff?text=Frente'; }} />
          </div>
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden shadow-2xl border border-gray-200" style={{ transform: 'rotateY(180deg)' }}>
            <img src={back} alt="Cartão" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/450x250/dc2626/ffffff?text=Verso'; }} />
          </div>
        </motion.div>
      </div>
      <p className="text-sm text-gray-400 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Clique para ver o verso</p>
    </div>
  );
}

// ─── KAST MODAL ───────────────────────────────────────────────────────────────
function KastModal({ onClose }: { onClose: () => void }) {
  const imgs = kastCase.gallery;
  return (
    <ModalWrapper isOpen={true} onClose={onClose}>
        <div className="w-full h-[50vw] min-h-[220px] max-h-[460px] overflow-hidden relative bg-gray-900">
          <img src={kastCase.heroImage} alt="KAST" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/1200x420/111827/f97316?text=KAST'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{kastCase.category}</p>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none">KAST</h2>
          </div>
        </div>
        <div className="p-8 md:p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Sobre o Projeto</p>
              <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight uppercase">Uma marca que merecia comunicar melhor.</h3>
            </div>
            <div className="md:col-span-3 text-lg text-gray-600 leading-relaxed font-light">{kastCase.about}</div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-8">O Que Foi Feito</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kastCase.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-3xl border border-gray-100 bg-white hover:border-orange-200 transition-all group">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-transform"><ChevronRight className="w-4 h-4 text-orange-500" /></div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-8 font-sans">Galeria do Projeto</p>
            <GalleryViewer images={imgs} accentColor={kastCase.accentColor} />
          </div>
          <div className="border-t border-gray-100 pt-12 flex items-center justify-between">
            <p className="text-sm text-gray-400">© KAST — Case de Portfólio Daniel de Jesus</p>
            <button onClick={onClose} className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors">Fechar case <X className="w-4 h-4" /></button>
          </div>
        </div>
    </ModalWrapper>
  );
}

// ─── TRAP BURGUER MODAL ───────────────────────────────────────────────────────
function TrapModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalWrapper isOpen={true} onClose={onClose}>
        <div className="w-full h-[50vw] min-h-[220px] max-h-[460px] overflow-hidden relative bg-gray-900">
          <img src={trapCase.heroImage} alt="Trap Burguer" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/1200x420/1a0000/dc2626?text=Trap+Burguer'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">{trapCase.category}</p>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none">Trap Burguer</h2>
          </div>
        </div>
        <div className="p-8 md:p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Sobre o Projeto</p>
              <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight uppercase">Uma hamburgueria com identidade visual forte.</h3>
            </div>
            <div className="md:col-span-3 text-lg text-gray-600 leading-relaxed font-light">{trapCase.about}</div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-8">O Que Foi Feito</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trapCase.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-3xl border border-gray-100 bg-white hover:border-red-200 transition-all group">
                  <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-transform"><ChevronRight className="w-4 h-4 text-red-500" /></div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Material Impresso</p>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Aplicação Física: Cartão de Visita</h3>
              <p className="text-gray-500 font-light mb-8 max-w-xl mx-auto">Desenvolvimento de materiais impressos para fortalecimento da identidade visual no PDV.</p>
            <BusinessCard3D front={trapCase.cardFront} back={trapCase.cardBack} />
          </div>
          <div className="space-y-12">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500">Galeria do Projeto</p>
            {trapCase.galleryGroups.map((group, gi) => (
              <GalleryViewer key={gi} images={group.images} accentColor={trapCase.accentColor} label={group.label} />
            ))}
          </div>
          <div className="rounded-[2rem] p-10 bg-red-50/50 border border-red-100">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Resultado</p>
            <p className="text-2xl font-light text-gray-700 leading-relaxed italic">"{trapCase.result}"</p>
          </div>
          <div className="border-t border-gray-100 pt-12 flex items-center justify-between">
            <p className="text-sm text-gray-400">© Trap Burguer — Case de Portfólio Daniel de Jesus</p>
            <button onClick={onClose} className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors">Fechar case <X className="w-4 h-4" /></button>
          </div>
        </div>
    </ModalWrapper>
  );
}

// ─── WERATE BRASIL MODAL ─────────────────────────────────────────────────────
function WeRateModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalWrapper isOpen={true} onClose={onClose}>
        <div className="w-full h-[50vw] min-h-[220px] max-h-[460px] overflow-hidden relative bg-gray-900">
          <img src={werateCase.heroImage} alt="weRate" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/1200x420/1d4ed8/ffffff?text=weRate+Brasil'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">{werateCase.category}</p>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none">weRate Brasil</h2>
          </div>
        </div>
        <div className="p-8 md:p-16 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Sobre o Projeto</p>
              <p className="text-2xl text-gray-700 leading-relaxed font-light">{werateCase.about}</p>
            </div>
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Meu Papel</p>
              <p className="text-2xl text-gray-700 leading-relaxed font-light italic bg-blue-50/50 p-8 rounded-3xl border border-blue-50">"{werateCase.role}"</p>
            </div>
          </div>
          <div className="space-y-10">
            <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Peça de Destaque</p>
                <h3 className="text-4xl font-black text-gray-900 tracking-tight leading-none">Vídeo de Apresentação</h3>
            </div>
          {/* Vídeo em formato 9:16 (vertical) centralizado */}
          <div className="flex justify-center">
            <div
              className="relative overflow-hidden rounded-[2rem] bg-black shadow-2xl border border-gray-200"
              style={{ width: '100%', maxWidth: '360px', aspectRatio: '9 / 16' }}
            >
              <video
                src={werateCase.featuredVideo}
                controls
                playsInline
                className="w-full h-full object-cover"
                poster={werateCase.heroImage}
              />
            </div>
          </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-10">Entregas do Case</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {werateCase.deliverables.map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><ChevronRight className="w-5 h-5 text-blue-600" /></div>
                  <span className="text-gray-900 font-bold block text-lg leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-10">Galeria de Criativos</p>
            <GalleryViewer images={werateCase.gallery} accentColor={werateCase.accentColor} />
          </div>
          <div className="rounded-[2.5rem] p-12 bg-gray-900 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Conclusão</p>
            <p className="relative z-10 text-lg md:text-3xl font-light leading-relaxed italic">{werateCase.result}</p>
          </div>
          <div className="border-t border-gray-100 pt-12 flex items-center justify-between text-sans">
            <p className="text-sm text-gray-400">© weRate Brasil — Case de Portfólio Daniel de Jesus</p>
            <button onClick={onClose} className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors">Fechar case <X className="w-4 h-4" /></button>
          </div>
        </div>
    </ModalWrapper>
  );
}

// ─── FEATURED CASE CARD ───────────────────────────────────────────────────────
function FeaturedCaseCard({ project, onClick }: { project: any; onClick: () => void; }) {
  const isRed = project.accentLight === 'red';
  const isBlue = project.accentLight === 'blue';
  const borderBase = isRed ? 'border-red-200 hover:border-red-400 hover:shadow-red-50' : isBlue ? 'border-blue-200 hover:border-blue-400 hover:shadow-blue-50' : 'border-orange-200 hover:border-orange-400 hover:shadow-orange-50';
  const badgeBg = isRed ? 'bg-red-500/20 text-red-400 border-red-500/30' : isBlue ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-orange-500/20 text-orange-400 border-orange-500/30';
  const btnHover = isRed ? 'group-hover:bg-red-600 group-hover:border-red-600' : isBlue ? 'group-hover:bg-blue-600 group-hover:border-blue-600' : 'group-hover:bg-orange-500 group-hover:border-orange-500';

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 group cursor-pointer" onClick={onClick}>
      <div className={`relative rounded-3xl overflow-hidden bg-gray-950 border transition-all duration-500 hover:-translate-y-1 ${borderBase}`}>
        <div className="w-full h-52 md:h-[420px] overflow-hidden">
          <img src={project.coverImage} alt={project.client} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" onError={e => { (e.target as HTMLImageElement).src = `https://placehold.co/1200x420/111827/${project.accentColor.replace('#', '')}/ffffff?text=${encodeURIComponent(project.client)}`; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 font-sans">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-700 tracking-tighter leading-none">{project.num}</span>
              <div className="w-px h-12 bg-white/10" />
              <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${badgeBg}`}>{project.category.split('/')[0].trim()}</span>
            </div>
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-3 leading-none">{project.client}</h4>
            <p className="text-white/80 text-sm md:text-lg max-w-lg font-medium leading-relaxed">{project.tagline}</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className={`shrink-0 w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur flex items-center justify-center transition-all duration-300 ${btnHover}`}>
            <ArrowUpRight className="w-7 h-7 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function DesignProjects() {
  const [kastOpen, setKastOpen] = useState(false);
  const [trapOpen, setTrapOpen] = useState(false);
  const [werateOpen, setWerateOpen] = useState(false);

  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative z-10 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-6">02 — Projetos Selecionados</motion.p>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-950 tracking-tighter leading-[1] uppercase">Selected<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px #d1d5db' }}>Works.</span></h3>
          <p className="text-gray-500 text-lg max-w-xs leading-relaxed font-light">Cases reais de branding, social media e direção criativa.</p>
        </div>

        <FeaturedCaseCard project={kastCase} onClick={() => setKastOpen(true)} />
        <FeaturedCaseCard project={trapCase} onClick={() => setTrapOpen(true)} />
        <FeaturedCaseCard project={werateCase} onClick={() => setWerateOpen(true)} />

      </div>

      <AnimatePresence>{kastOpen && <KastModal onClose={() => setKastOpen(false)} />}</AnimatePresence>
      <AnimatePresence>{trapOpen && <TrapModal onClose={() => setTrapOpen(false)} />}</AnimatePresence>
      <AnimatePresence>{werateOpen && <WeRateModal onClose={() => setWerateOpen(false)} />}</AnimatePresence>
    </section>
  );
}
