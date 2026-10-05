import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Clapperboard, Workflow, X } from 'lucide-react';
import ModalWrapper from '../ModalWrapper';
import MarketingMedia from '../MarketingMedia';

const systems = [
  { name: 'Atlas Studio', channels: 'YouTube + Facebook', image: '/projects/atlas-dashboard.webp', description: 'Pesquisa, roteiro, narração, montagem do vídeo principal e cinco Shorts, com fila e agendamento de publicação.', caption: 'Interface de demonstração do estúdio de produção audiovisual.' },
  { name: 'Achadinhos Bot', channels: 'Instagram + Telegram', image: '/projects/achadinhos-dashboard.webp', description: 'Ofertas viram textos, cards, carrosséis e vídeos de produto. O painel coordena mídias, horários e resultados de publicação.', caption: 'Painel de operação sem dados carregados. Publicação depende de credenciais e configuração.' },
  { name: 'Radar', channels: 'LinkedIn', image: '/projects/radar-dashboard.webp', description: 'Conteúdo profissional baseado em experiências reais, com pauta, seleção de imagens, revisão e publicação pela integração oficial.', caption: 'Interface real com vagas de exemplo. Instagram é uma expansão planejada, não uma integração demonstrada neste case.' },
];

function AutomationCase() {
  const [selected, setSelected] = useState(0);
  const system = systems[selected];
  return <>
    <div className="marketing-intro"><span className="marketing-eyebrow">CRIAÇÃO + OPERAÇÃO</span><h3>O conteúdo também precisa chegar ao público.</h3><p>Além de criar as peças, desenvolvo sistemas que organizam a produção e conectam conteúdo às filas de publicação. Cada projeto combina canais e regras próprios, conforme o objetivo da operação.</p></div>
    <div className="marketing-system-tabs" aria-label="Escolher sistema de marketing">{systems.map((item, i) => <button type="button" key={item.name} aria-pressed={i === selected} onClick={() => setSelected(i)}>{item.name}<small>{item.channels}</small></button>)}</div>
    <div className="marketing-system-detail"><div><span className="marketing-eyebrow">{system.channels}</span><h3>{system.name}</h3><p>{system.description}</p><span className="marketing-channel-status">Integrações implementadas no código · configuração por conta e canal</span></div><figure><img src={system.image} alt={`Painel do ${system.name}`} loading="lazy" /><figcaption>{system.caption}</figcaption></figure></div>
    <div className="marketing-deliverables">{[
      ['Planejamento', 'Pautas, públicos, formatos e cadência de conteúdo.'],
      ['Produção', 'Texto, identidade, criativos, narração e vídeo programático.'],
      ['Distribuição', 'Filas, horários e integrações específicas por plataforma.'],
      ['Acompanhamento', 'Histórico, alertas e resultados dos envios para manter a operação visível.'],
    ].map(([title, copy], i) => <div key={title}><span>0{i + 1}</span><h4>{title}</h4><p>{copy}</p></div>)}</div>
    <aside className="marketing-project-note"><strong>Integrações sob medida</strong><p>O escopo pode incluir novos canais e fluxos conforme as APIs e a configuração disponíveis. WhatsApp automático e Instagram no Radar não são apresentados aqui como integrações concluídas.</p></aside>
  </>;
}

export default function DesignMarketing() {
  const [open, setOpen] = useState<'films' | 'automation' | null>(null);
  const cards = [
    { id: 'films' as const, title: 'Rebrotar — filmes com IA', label: 'VÍDEO PROMOCIONAL / DIREÇÃO CRIATIVA', copy: 'Meu aplicativo, minha campanha: quatro filmes produzidos de ponta a ponta com IA, sob minha direção.', image: '/marketing/rebrotar-campaign-cover.webp', icon: Clapperboard },
    { id: 'automation' as const, title: 'Marketing que entra em operação', label: 'CONTEÚDO / AUTOMAÇÃO MULTICANAL', copy: 'Da ideia à fila de publicação: sistemas próprios conectando criação, rotina e distribuição.', image: '/marketing/automation-cover.webp', icon: Workflow },
  ];
  return <>
    <div className="design-marketing-cards">{cards.map(card => <motion.button key={card.id} type="button" onClick={() => setOpen(card.id)} className="design-marketing-card" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><img src={card.image} alt={card.title} loading="lazy" decoding="async" /><div className="design-marketing-card-copy"><span><card.icon />{card.label}</span><h4>{card.title}</h4><p>{card.copy}</p><strong>Explorar o case <ArrowUpRight /></strong></div></motion.button>)}</div>
    <AnimatePresence>{open && <ModalWrapper isOpen closeButtonTone="light" onClose={() => setOpen(null)}><article className="design-marketing-case"><header className="marketing-case-header"><span className="marketing-eyebrow">{open === 'films' ? 'REBROTAR / CAMPANHA AUTORAL' : 'SISTEMAS PRÓPRIOS / MARKETING DIGITAL'}</span><h2>{open === 'films' ? 'Do aplicativo à campanha.' : 'Criar. Organizar. Publicar.'}</h2><p>{open === 'films' ? 'Produzi os vídeos de divulgação do meu próprio aplicativo, unindo direção criativa, narrativa, voz, motion e demonstração do produto em um fluxo com IA.' : 'Direção criativa e desenvolvimento trabalhando juntos para transformar conteúdo em uma operação recorrente.'}</p></header><div className="marketing-case-body">{open === 'films' ? <>
      <div className="marketing-case-stats"><div><strong>04</strong><span>filmes de campanha</span></div><div><strong>9:16</strong><span>formato vertical</span></div><div><strong>1080p</strong><span>qualidade dos arquivos</span></div><div><strong>IA</strong><span>produção de ponta a ponta</span></div></div>
      <MarketingMedia />
      <div className="marketing-intro"><span className="marketing-eyebrow">MEU PAPEL</span><h3>Uma linguagem visual. Diferentes histórias.</h3><p>Da proposta do app ao corte final, conduzi a direção dos roteiros, o ritmo da narração, a escolha de materiais, a identidade visual e a montagem. Cada filme conversa com um público ou apresenta uma parte da experiência do Rebrotar.</p></div>
      <div className="marketing-deliverables">{[['Roteiro e direção', 'Gancho, narrativa, demonstração do produto e chamada para ação.'], ['Voz e som', 'Narração com IA, trilha e efeitos sincronizados à história.'], ['Motion e interface', 'Tipografia em movimento, gráficos e telas do aplicativo na identidade da marca.'], ['Variações de campanha', 'Filmes de apresentação e peças específicas por público, adaptáveis a outros produtos e serviços.']].map(([title, copy], i) => <div key={title}><span>0{i + 1}</span><h4>{title}</h4><p>{copy}</p></div>)}</div>
      <aside className="marketing-project-note"><strong>Do meu produto ao seu próximo lançamento</strong><p>Essa abordagem pode ser aplicada a aplicativos, serviços, produtos e campanhas com um briefing próprio: roteiro, identidade, produção audiovisual e versões para redes sociais.</p></aside>
    </> : <AutomationCase />}<a className="marketing-contact-link" href="#contact" onClick={() => setOpen(null)}>Conversar sobre uma campanha <ArrowRight /></a><footer className="marketing-case-footer"><span>Daniel de Jesus · Direção criativa, vídeo e automação · 2026</span><button type="button" onClick={() => setOpen(null)}>Fechar case <X /></button></footer></div></article></ModalWrapper>}</AnimatePresence>
  </>;
}
