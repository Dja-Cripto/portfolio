import { motion } from 'motion/react';

const oQueFacoDesign = [
  'Identidade visual completa: logo, paleta, peças derivadas e aplicação consistente em vários formatos.',
  'Social media e criativos para anúncios — estático e motion — pensados para conversão e leitura rápida no feed.',
  'Criação e edição de imagem (Photoshop, IA generativa como acelerador) e edição de vídeo (DaVinci Resolve, CapCut).',
  'Vídeos promocionais, apresentação de app/produto e cortes para campanha.',
  'Sites e experiências web como este portfólio: narrativa visual, tipografia e microinterações alinhadas à marca.',
  'Visualização de dados e relatórios em Power BI quando o projeto pede storytelling com gráficos e identidade aplicada.',
];

export default function DesignAbout() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24 relative z-10 font-sans bg-[#fdfaf7]">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-6"
        >
          01 — Sobre Mim
        </motion.p>

        <div className="rounded-3xl border border-orange-200/80 bg-white/70 backdrop-blur-sm p-6 md:p-10 mb-16 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-2">O que eu faço</p>
          <h3 className="text-2xl md:text-3xl font-black text-gray-950 tracking-tight mb-6">
            Direção visual, peças que vendem e vídeo com ritmo de marca
          </h3>
          <ul className="space-y-3 text-gray-600 text-base md:text-lg leading-relaxed font-light">
            {oQueFacoDesign.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-orange-500 font-bold shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="sticky top-28"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-950 leading-[1] mb-8">
              Design que<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #f97316' }}
              >
                converte.
              </span>
            </h2>

            <div className="flex flex-wrap gap-4 mt-12">
              {[
                { label: 'Identidade & logo', color: 'bg-orange-100 text-orange-700 border-orange-200' },
                { label: 'Social & ads', color: 'bg-pink-100 text-pink-700 border-pink-200' },
                { label: 'Motion & vídeo', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { label: 'Sites & produto digital', color: 'bg-sky-100 text-sky-800 border-sky-200' },
                { label: 'IA criativa', color: 'bg-amber-100 text-amber-700 border-amber-200' },
              ].map((tag) => (
                <span key={tag.label} className={`px-4 py-2 rounded-full text-sm font-bold border ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-8 text-lg text-gray-600 font-light leading-relaxed"
          >
            <p>
              Trabalho na criação de <strong className="text-gray-900 font-semibold">identidades visuais completas</strong> — do conceito do logo às variações para papelaria, redes, fachada e peças promocionais em volume, sempre com manual implícito de uso para a marca não “desandar” no digital.
            </p>
            <p>
              Em social, o foco é <strong className="text-gray-900 font-semibold">parar o scroll</strong>: posts de oferta, stories com hierarquia clara, carrosséis explicativos e criativos para tráfego pago com mensagem única e CTA evidente.
            </p>
            <p>
              No vídeo, produzo <strong className="text-gray-900 font-semibold">apresentações de app, vídeos promocionais e cortes de campanha</strong> com direção de arte coerente com a marca — DaVinci Resolve e CapCut no fluxo, mais IA onde acelera rotina sem diluir o resultado.
            </p>
            <p>
              Também desenho e implemento <strong className="text-gray-900 font-semibold">sites e landings</strong> (como este portfólio): narrativa, tipografia, responsivo e sensação de produto acabado. Quando o briefing inclui performance de dados, encaixo <strong className="text-gray-900 font-semibold">Power BI</strong> com visual alinhado à identidade.
            </p>

            <div
              className="mt-10 p-8 rounded-3xl border-l-4 border-orange-400"
              style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fce7f3 100%)' }}
            >
              <p className="text-2xl font-semibold text-gray-800 leading-snug italic">
                "IA acelera o processo; decisão de marca, ritmo e mensagem continuam humanos."
              </p>
              <p className="mt-3 text-sm text-gray-400 not-italic font-medium">— Como eu trabalho o criativo</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
