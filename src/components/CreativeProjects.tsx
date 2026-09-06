import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Play, X } from 'lucide-react';
import ModalWrapper from './ModalWrapper';

type CreativeCase = { name: string; category: string; tagline: string; cover: string; about: string; role?: string; result?: string; gallery: string[]; video?: string; deliverables: string[]; accent: string };

const cases: CreativeCase[] = [
  { name:'KAST', category:'Identidade visual & social media', tagline:'Comunicação visual premium para uma marca em crescimento.', cover:'/capa-kast.png', accent:'#ff7a30', about:'Desenvolvi peças visuais para campanhas e divulgações da KAST, com conteúdos promocionais, posts informativos e criativos voltados à apresentação do produto, ofertas e comunicação da marca.', deliverables:['Posts promocionais','Campanhas de produto','Criativos digitais','Adaptação de formatos','Direção visual','Comunicação de lançamentos'], gallery:['/kast-1.png','/kast-2.png','/kast-3.png','/kast-4.png','/kast-5.png','/kast-6.png','/kast-7.png','/kast-8.png','/kast-9.png','/kast-10.png'] },
  { name:'Trap Burguer', category:'Social media & negócio local', tagline:'Presença digital forte para uma hamburgueria física.', cover:'/capa-trapburguer.png', accent:'#ff4d6d', about:'Para a Trap Burguer, desenvolvi uma comunicação recorrente para redes sociais: posts promocionais, stories, campanhas e materiais que fortalecem a marca e tornam a presença digital mais consistente.', result:'Uma comunicação visual mais profissional, reconhecível e preparada para divulgar produtos e campanhas.', deliverables:['Posts para Instagram','Stories promocionais','Campanhas de produto','Identidade aplicada','Conteúdo recorrente','Material impresso'], gallery:['/itrap-1.png','/itrap-2.png','/itrap-3.png','/itrap12.png','/ptrap-4.png','/ptrap-6.png','/ptrap-7.png'] },
  { name:'weRate Brasil', category:'Campanha visual & vídeo', tagline:'Conteúdo e apresentação para um app de recompensas.', cover:'/capa-werate.png', accent:'#62e8ff', about:'O weRate permite avaliar locais, acumular pontos e trocar recompensas por benefícios. Atuei como embaixador do projeto no Brasil e criei materiais para comunicar sua proposta de forma clara e atraente.', role:'Embaixador oficial no Brasil, responsável por criativos visuais e vídeo promocional de apresentação.', result:'A identidade, a divulgação e o vídeo passaram a funcionar como uma comunicação única e mais profissional para o público.', video:'/werate-video.mp4', deliverables:['Embaixador no Brasil','Vídeo promocional','Criativos visuais','Comunicação do produto','Apresentação da marca','Estratégia de lançamento'], gallery:['/werate-1.png','/werate-2.png','/werate-3.png','/werate-4.png','/werate-5.png','/werate-6.png'] },
];

function Gallery({ items, video }: { items: string[]; video?: string }) {
  const all = video ? [video, ...items] : items;
  const [active, setActive] = useState(0);
  const move = (amount: number) => setActive((active + amount + all.length) % all.length);
  const source = all[active];
  return <div className="creative-gallery"><div className="creative-stage">{source.endsWith('.mp4') ? <video src={source} controls playsInline /> : <img src={source} alt={`Visual do projeto ${active + 1}`} />}<button onClick={()=>move(-1)} aria-label="Anterior"><ArrowLeft /></button><button onClick={()=>move(1)} aria-label="Próximo"><ArrowRight /></button><span>{String(active+1).padStart(2,'0')} / {String(all.length).padStart(2,'0')}</span></div><div className="creative-thumbs">{all.map((item,i)=><button className={i===active?'active':''} onClick={()=>setActive(i)} key={item}>{item.endsWith('.mp4')?<Play/>:<img src={item} alt=""/>}</button>)}</div></div>;
}

function CreativeModal({ project, onClose }: { project: CreativeCase; onClose: () => void }) {
  return <ModalWrapper isOpen onClose={onClose}><article className="creative-case" style={{'--project-accent':project.accent} as React.CSSProperties}>
    <header><img src={project.cover} alt={project.name}/><div/><section><span className="terminal-kicker">// creative_case</span><h2>{project.name}</h2><p>{project.category}</p></section></header>
    <main><div className="creative-intro"><div><span className="terminal-kicker">O projeto</span><h3>Imagem com<br/><em>intenção.</em></h3></div><div><p>{project.about}</p>{project.role&&<blockquote>{project.role}</blockquote>}</div></div>
      <div className="deliverable-grid">{project.deliverables.map((item,i)=><div key={item}><span>0{i+1}</span><Check/><strong>{item}</strong></div>)}</div>
      <Gallery items={project.gallery} video={project.video}/>
      {project.result&&<div className="creative-result"><span className="terminal-kicker">Resultado</span><p>“{project.result}”</p></div>}
      <footer className="case-footer"><p>Direção criativa · Daniel de Jesus Alves</p><button onClick={onClose}>Fechar case <X/></button></footer>
    </main>
  </article></ModalWrapper>;
}

export default function CreativeProjects(){const[selected,setSelected]=useState<CreativeCase|null>(null);return <section id="creative" className="creative-section"><div className="creative-heading"><div><span className="terminal-kicker">// direção criativa</span><h2>Design que<br/><em>segura o olhar.</em></h2></div><p>Identidade, social, campanhas e vídeo — o mesmo cuidado de produto aplicado à comunicação visual.</p></div><div className="creative-list">{cases.map((item,i)=><motion.button type="button" onClick={()=>setSelected(item)} className="creative-card" key={item.name} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} style={{'--project-accent':item.accent} as React.CSSProperties}><span className="creative-number">0{i+1}</span><div className="creative-card-media"><img src={item.cover} alt={item.name}/></div><div className="creative-card-copy"><span>{item.category}</span><h3>{item.name}</h3><p>{item.tagline}</p><div>Ver projeto <ArrowUpRight/></div></div></motion.button>)}</div><AnimatePresence>{selected&&<CreativeModal project={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence></section>}
