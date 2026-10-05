import { Check, ArrowRight, X } from 'lucide-react';
import ModalWrapper from './ModalWrapper';
import MarketingMedia from './MarketingMedia';

export type PortfolioProject = {
  title: string; eyebrow: string; description: string; fullDescription: string;
  coverImage: string; tech: string[]; year: string; scope: string;
  headline: string; status: string; challenge: string; approach: string;
  features: { title: string; copy: string }[];
  workflow: string[]; gallery: { src: string; alt: string; caption: string }[];
  next: string; mobile?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Atlas Studio', eyebrow: 'Vídeo com IA · Automação de produção',
    description: 'Da pesquisa ao vídeo final: um estúdio que conecta roteiro, mídia, narração, montagem e publicação de vídeos e Shorts.',
    fullDescription: 'O Atlas Studio organiza a produção de conteúdo audiovisual em um painel central. Uma pauta percorre pesquisa com fontes, roteiro, seleção de imagens e filmagens, narração, capa e montagem programática. O mesmo fluxo prepara um vídeo principal e cinco Shorts.\n\nO sistema mantém etapas, históricos e arquivos para permitir revisão e retomada. Integrações com YouTube e Facebook conectam a produção à fila de publicação, com controle de concorrência e tratamento de respostas incertas.',
    coverImage: '/projects/atlas-cover.webp', tech: ['Node.js', 'SQLite', 'Remotion', 'React', 'FFmpeg', 'Vertex AI', 'OpenCode', 'Fish Audio'], year: '2026', scope: 'IA, vídeo e automação',
    headline: 'Uma pauta. Um fluxo completo de produção.', status: 'Sistema implementado · qualidade audiovisual em validação contínua',
    challenge: 'Coordenar pesquisa, produção e distribuição sem perder o contexto editorial entre ferramentas e etapas.',
    approach: 'Um pipeline persistente, com revisão visual das mídias, recuperação de falhas e filas separadas de produção e publicação.',
    features: [
      { title: 'Pesquisa e roteiro', copy: 'Pautas, fontes e direção editorial reunidas antes da montagem.' },
      { title: 'Mídia com contexto', copy: 'Busca e avaliação de filmagens e imagens por assunto, com controle de repetição e cobertura.' },
      { title: 'Vídeo programático', copy: 'Remotion e FFmpeg conectam cenas, narração, trilha, legendas e formatos verticais.' },
      { title: 'Operação rastreável', copy: 'Histórico, retomada de etapas, agendamento e confirmação de IDs externos de publicação.' },
    ], workflow: ['Pesquisa', 'Roteiro e mídia', 'Voz e montagem', 'Revisão e publicação'],
    gallery: [{ src: '/projects/atlas-dashboard.webp', alt: 'Hub Central de Produção do Atlas Studio', caption: 'Interface real em ambiente de demonstração, sem produções carregadas. Os indicadores de conexão exibidos pela interface não comprovam integrações ativas.' }],
    next: 'A evolução concentra-se na medição completa do custo por produção, no orçamento global e na validação visual do vídeo principal e dos Shorts.',
  },
  {
    title: 'Achadinhos Bot', eyebrow: 'Afiliados · Operação de ofertas',
    description: 'Monitoramento de preços, revisão de ofertas, criação de conteúdo e distribuição no Telegram e Instagram em uma operação integrada.',
    fullDescription: 'O Achadinhos Bot reúne coleta e importação de produtos, histórico de preços, filtros de qualidade e preparação de conteúdo para afiliados. O painel permite acompanhar ofertas, mídias, publicações e falhas da operação.\n\nTexto, cards, carrosséis e vídeos de produto compõem a produção de conteúdo. O agendador coordena as filas do Telegram e Instagram; integrações e parâmetros de afiliado dependem da configuração de cada serviço.',
    coverImage: '/projects/achadinhos-cover.webp', tech: ['Python', 'FastAPI', 'SQLite', 'SQLAlchemy', 'APScheduler', 'Remotion', 'Pillow', 'Telegram API', 'Instagram API'], year: '2026', scope: 'Automação comercial',
    headline: 'Da oferta ao conteúdo. Do conteúdo ao canal.', status: 'Sistema implementado · integrações dependem de configuração',
    challenge: 'Transformar produtos e preços de diferentes fontes em uma fila de conteúdo organizada, revisável e pronta para distribuição.',
    approach: 'Separar coleta, avaliação, geração de mídia e publicação, com histórico de preços, critérios de seleção e limites por canal.',
    features: [
      { title: 'Triagem de ofertas', copy: 'Histórico de preços, desconto, avaliações e frete compõem os critérios de seleção. Sem histórico, pode ser usado o preço de referência do anúncio.' },
      { title: 'Conteúdo de produto', copy: 'Cards, carrosséis e comerciais com fotos do anúncio, com locução opcional.' },
      { title: 'Distribuição multicanal', copy: 'Filas e horários de publicação para Telegram e Instagram, com registro de resultados.' },
      { title: 'Painel operacional', copy: 'Revisão de ofertas, gestão de mídias, parâmetros do robô e autenticação opcional para produção.' },
    ], workflow: ['Coleta e importação', 'Preço e qualidade', 'Conteúdo e mídia', 'Fila e publicação'],
    gallery: [
      { src: '/projects/achadinhos-dashboard.webp', alt: 'Painel de operações do Achadinhos Bot', caption: 'Interface real sem dados operacionais carregados. Captura de apresentação do painel.' },
      { src: '/projects/achadinhos-content.webp', alt: 'Exemplo de carrossel produzido pelos templates do Achadinhos', caption: 'Template de conteúdo do projeto. Produtos e valores são exemplos visuais, não ofertas atuais.' },
    ], next: 'Próximos refinamentos: distinguir desconto histórico de preço de referência, unificar os controles de publicação automática e melhorar a execução dos testes no Windows.',
  },
  {
    title: 'Radar', eyebrow: 'Carreira · Vagas, clientes e conteúdo',
    description: 'Um portal pessoal que reúne busca de vagas, comparação com o currículo, prospecção de clientes e planejamento de posts profissionais.',
    fullDescription: 'O Radar trabalha em três frentes: encontrar vagas compatíveis com o perfil, organizar campanhas de prospecção e preparar conteúdo profissional a partir de experiências reais. O usuário acompanha essas oportunidades em um único espaço de trabalho.\n\nA busca reúne fontes e elimina duplicidades. A comparação aponta requisitos presentes no currículo, enquanto o histórico registra decisões e candidaturas. Na prospecção, empresas recebem critérios de prioridade e mensagens revisáveis; no conteúdo, há planejamento, imagens e integração com o LinkedIn.',
    coverImage: '/projects/radar-cover.webp', tech: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'SerpApi', 'LinkedIn OAuth', 'IA generativa', 'SMTP'], year: '2026', scope: 'Produto e inteligência de oportunidades',
    headline: 'Três frentes. Um espaço de trabalho.', status: 'Portal implementado · cobertura depende das fontes disponíveis',
    challenge: 'Reduzir a dispersão entre sites de emprego, contatos comerciais e ferramentas de publicação profissional.',
    approach: 'Unir descoberta, priorização e acompanhamento, mantendo a revisão da pessoa nas candidaturas e contatos.',
    features: [
      { title: 'Vagas e currículo', copy: 'Busca por região e modalidade, deduplicação e comparação dos requisitos com o perfil. A correspondência não representa chance de contratação.' },
      { title: 'Campanhas de clientes', copy: 'Pesquisa de empresas, critérios de prioridade, mensagens e etapas de acompanhamento comercial.' },
      { title: 'Conteúdo profissional', copy: 'Entrevista, histórias reais, pauta semanal, escolha de imagens e revisão dos posts.' },
      { title: 'Acesso e integrações', copy: 'Login, sessões, proteção de senha e integração OAuth com o LinkedIn para publicação.' },
    ], workflow: ['Configura o perfil', 'Descobre oportunidades', 'Revisa e decide', 'Acompanha resultados'],
    gallery: [{ src: '/projects/radar-dashboard.webp', alt: 'Visão geral do Radar com vagas, publicações e clientes', caption: 'Interface real com vagas de exemplo. A captura demonstra o fluxo, sem comprovar resultados de uma busca ao vivo.' }],
    next: 'A evolução inclui ampliar os testes de busca, autenticação e prospecção e fortalecer a persistência e proteção das configurações sensíveis.',
  },
  {
    title: 'Rebrotar', eyebrow: 'Livre App · Aplicativo mobile com IA',
    description: 'Um aplicativo de apoio à mudança de hábitos, com diário, progresso, áudios guiados e conversas com a assistente Lia.',
    fullDescription: 'O Rebrotar, inicialmente chamado Livre App, propõe um acompanhamento diário para quem deseja mudar a relação com apostas, pornografia ou excesso de celular. A experiência combina entrevista inicial, pequenos passos, diário, lições, áudios e registro de recomeços.\n\nA Lia conecta o aplicativo a um servidor de IA para conversas contextualizadas. A identidade visual usa tons de floresta e creme, tipografia editorial e um jardim como metáfora de progresso. É uma ferramenta de apoio; não substitui acompanhamento profissional.',
    coverImage: '/projects/rebrotar-cover.webp', tech: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'AsyncStorage', 'Node.js', 'Cloud Run', 'Vertex AI'], year: '2026', scope: 'Produto mobile e experiência de uso',
    headline: 'Pequenos passos. Um novo começo.', status: 'Protótipo mobile · assistente integrada à IA', mobile: true,
    challenge: 'Criar uma experiência acolhedora, simples e consistente para acompanhar hábitos e registrar momentos difíceis sem julgamento.',
    approach: 'Organizar a jornada em ações diárias, com conteúdo contextualizado, apoio conversacional e uma linguagem visual própria.',
    features: [
      { title: 'Jornada personalizada', copy: 'Entrevista inicial, escolha de foco, lições e acompanhamento do progresso.' },
      { title: 'Diário e recomeços', copy: 'Registro de situações, emoções e ações, com um fluxo específico para recaídas.' },
      { title: 'Lia e áudios', copy: 'Assistente de IA integrada a um backend, respostas de reserva e conteúdos guiados em áudio.' },
      { title: 'Experiência mobile', copy: 'Navegação por abas, identidade própria e demonstrações de limites, bloqueio e comunidade.' },
    ], workflow: ['Conhece a pessoa', 'Define pequenos passos', 'Acompanha o dia', 'Registra e recomeça'],
    gallery: [
      { src: '/projects/rebrotar-home.webp', alt: 'Tela inicial do Rebrotar com progresso e acesso à Lia', caption: 'Início e progresso — dados de demonstração.' },
      { src: '/projects/rebrotar-diary.webp', alt: 'Diário do aplicativo Rebrotar', caption: 'Diário — registro de emoções e situações.' },
      { src: '/projects/rebrotar-lia.webp', alt: 'Tela de acolhimento do Rebrotar', caption: 'Acolhimento — exemplo da experiência de apoio.' },
    ], next: 'Bloqueio nativo, medição de uso, cobrança, comunidade compartilhada e widget ainda são demonstrações. A próxima etapa inclui integrações nativas e proteção dos dados sensíveis.',
  },
];

export default function PortfolioCase({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  return <ModalWrapper isOpen onClose={onClose}>
    <article className="case-shell portfolio-case">
      <header className="case-hero compact-hero"><img src={project.coverImage} alt={`Apresentação do ${project.title}`} /><div className="case-hero-shade" /><div className="case-hero-copy"><span className="terminal-kicker">{project.eyebrow}</span><h2>{project.title}</h2></div></header>
      <div className="case-body">
        <p className="portfolio-status"><span />{project.status}</p>
        <div className="case-intro-grid"><div><span className="terminal-kicker">Visão geral</span><h3>{project.headline}</h3></div><div className="case-prose">{project.fullDescription.split('\n\n').map(p => <p key={p}>{p}</p>)}</div></div>
        <section className="portfolio-context"><div><span className="terminal-kicker">O desafio</span><p>{project.challenge}</p></div><div><span className="terminal-kicker">A solução</span><p>{project.approach}</p></div></section>
        <section className="case-section"><div className="case-section-heading"><span className="terminal-kicker">Por dentro do produto</span><h3>O que conecta a ideia à execução.</h3></div><div className="engine-grid">{project.features.map((feature, i) => <div className="engine-card" key={feature.title}><span>0{i + 1}</span><h4>{feature.title}</h4><p>{feature.copy}</p></div>)}</div></section>
        <section className="case-section"><div className="case-section-heading compact"><span className="terminal-kicker">Fluxo do produto</span><h3>Etapas que trabalham juntas.</h3></div><div className="pipeline-grid">{project.workflow.map((step, i) => <div className="pipeline-step" key={step}><span>0{i + 1}</span><ArrowRight /><strong>{step}</strong></div>)}</div></section>
        <section className="case-section"><div className="case-section-heading"><span className="terminal-kicker">Interface e conteúdo</span><h3>Uma janela para o projeto.</h3></div><div className={`portfolio-gallery ${project.mobile ? 'mobile-gallery' : ''}`}>{project.gallery.map(item => <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /><figcaption>{item.caption}</figcaption></figure>)}</div></section>
        {project.title === 'Rebrotar' && <section className="case-section"><div className="case-section-heading"><span className="terminal-kicker">Produto + marketing</span><h3>Também produzi os filmes do aplicativo.</h3></div><p className="portfolio-marketing-intro">Quatro peças de divulgação com roteiro, voz, animação e montagem em um fluxo com IA sob minha direção. Um mesmo projeto reúne o desenvolvimento do produto e sua apresentação audiovisual.</p><MarketingMedia dark /></section>}
        {project.title === 'Atlas Studio' && <section className="case-section"><div className="case-section-heading"><span className="terminal-kicker">Produção audiovisual</span><h3>Vídeos para conteúdo. Filmes para campanhas.</h3></div><p className="portfolio-marketing-intro">O Atlas conecta geração de conteúdo, montagem programática e distribuição. Na área de Design, a campanha autoral do Rebrotar mostra outro trabalho meu: filmes promocionais com IA, direção criativa e demonstração de produto.</p></section>}
        <aside className="portfolio-next"><Check /><div><span className="terminal-kicker">Estado atual e evolução</span><p>{project.next}</p></div></aside>
        <section className="stack-marquee" aria-label="Tecnologias utilizadas">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</section>
        <footer className="case-footer"><p>Projeto de Daniel de Jesus · {project.year}</p><button type="button" onClick={onClose}>Fechar case <X /></button></footer>
      </div>
    </article>
  </ModalWrapper>;
}
