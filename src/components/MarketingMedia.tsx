import { useState } from 'react';
import { Play, Check } from 'lucide-react';

export const marketingFilms = [
  { id: 'geral', title: 'Conheça o Rebrotar', duration: '56 s', description: 'Um filme de apresentação que conecta a proposta do aplicativo às situações do dia a dia e mostra sua experiência de uso.', focus: 'Apresentação de produto', music: ['Inspired'] },
  { id: 'bets', title: 'Uma nova relação com as apostas', duration: '51 s', description: 'Uma peça com gancho narrativo, informação visual e demonstração das ferramentas do app para o público de apostas.', focus: 'Campanha por público', music: ['Inspired'] },
  { id: 'celular', title: 'Menos tela, mais presença', duration: '51 s', description: 'Narrativa sobre o tempo de tela, com visualização de dados e apresentação do plano de limites do protótipo.', focus: 'Storytelling com dados', music: ['Beauty Flow', 'Inspired'] },
  { id: 'pornografia', title: 'Um recomeço possível', duration: '45 s', description: 'Uma campanha de tom acolhedor que apresenta o SOS, o diário e outros recursos da jornada do aplicativo.', focus: 'Narrativa e demonstração', music: ['Inspired'] },
];

export default function MarketingMedia({ dark = false }: { dark?: boolean }) {
  const [selected, setSelected] = useState(0);
  const film = marketingFilms[selected];
  return <div className={`marketing-media ${dark ? 'marketing-media-dark' : ''}`}>
    <div className="marketing-player-wrap">
      <video key={film.id} controls playsInline preload="none" poster={`/marketing/rebrotar-${film.id}-poster.webp`} aria-label={`Vídeo de portfólio: ${film.title}`}>
        <source src={`/marketing/rebrotar-${film.id}.mp4`} type="video/mp4" />
        Seu navegador não suporta vídeo. <a href={`/marketing/rebrotar-${film.id}.mp4`}>Abrir o filme</a>
      </video>
      <span className="marketing-player-label">9:16 · Full HD · {film.duration}</span>
    </div>
    <div className="marketing-film-copy">
      <span className="marketing-eyebrow">FILMES DO MEU APLICATIVO</span>
      <h3>{film.title}</h3><p>{film.description}</p>
      <div className="marketing-film-tabs" aria-label="Escolher vídeo">
        {marketingFilms.map((item, index) => <button key={item.id} type="button" aria-pressed={index === selected} onClick={() => setSelected(index)}><span>{index === selected ? <Check /> : <Play />}</span><span><strong>{item.title}</strong><small>{item.focus} · {item.duration}</small></span></button>)}
      </div>
      <p className="marketing-demo-note">Peças de portfólio de um protótipo. Telas, valores e perfis de exemplo demonstram a experiência; bloqueio, comunidade e outros recursos ainda estão em desenvolvimento.</p>
      <details className="marketing-credits"><summary>Créditos e origem dos materiais</summary><div><p>Direção criativa e produção: Daniel de Jesus. Roteiro, narração, efeitos, animação e montagem com IA e ferramentas programáticas. Voz Matilda e efeitos: ElevenLabs. Composição: Remotion. Telas do Rebrotar e filmagens de banco Pexels; o fluxo com IA não significa que todas as filmagens foram sintetizadas.</p><p>Música: {film.music.map(name => `“${name}”`).join(' e ')} — Kevin MacLeod (<a href="https://incompetech.com/" target="_blank" rel="noreferrer">incompetech.com</a>). Licença <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons BY 4.0</a>.</p>{film.id === 'bets' && <p>Fontes indicadas na peça: Itaú BBA (gasto líquido, até junho de 2024) e Datafolha (julho de 2026). Valores de saldo e perfil do app são demonstrações.</p>}{film.id === 'celular' && <p>Fonte indicada na peça: Digital 2025: Brazil, DataReportal / We Are Social / Meltwater. O plano de uso e o bloqueio exibidos são demonstrações do protótipo.</p>}</div></details>
    </div>
  </div>;
}
