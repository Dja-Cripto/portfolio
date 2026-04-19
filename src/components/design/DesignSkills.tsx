import { motion } from 'motion/react';

const skills = [
  { name: 'Photoshop', cat: 'Edição de imagem', bg: 'bg-blue-50 border-blue-200', text: 'text-blue-800' },
  { name: 'DaVinci Resolve', cat: 'Motion & vídeo', bg: 'bg-sky-50 border-sky-200', text: 'text-sky-800' },
  { name: 'CapCut', cat: 'Vídeo rápido & social', bg: 'bg-cyan-50 border-cyan-200', text: 'text-cyan-900' },
  { name: 'Figma', cat: 'UI & prototipagem', bg: 'bg-purple-50 border-purple-200', text: 'text-purple-800' },
  { name: 'Sites & landings', cat: 'Produto digital', bg: 'bg-indigo-50 border-indigo-200', text: 'text-indigo-900' },
  { name: 'Identidade visual', cat: 'Branding', bg: 'bg-orange-50 border-orange-200', text: 'text-orange-800' },
  { name: 'Social & ads', cat: 'Criativos digitais', bg: 'bg-pink-50 border-pink-200', text: 'text-pink-800' },
  { name: 'Direção de arte', cat: 'Campanha', bg: 'bg-rose-50 border-rose-200', text: 'text-rose-800' },
  { name: 'Vídeo promocional', cat: 'Apresentação', bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800' },
  { name: 'Power BI', cat: 'Visualização de dados', bg: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-900' },
  { name: 'IA generativa', cat: 'Acelerador criativo', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-800' },
];

export default function DesignSkills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 relative z-10 bg-[#fdfaf7] font-sans">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-6"
        >
          03 — Toolkit
        </motion.p>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-tighter leading-[1] shrink-0">
            Ferramentas<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #f97316' }}>& Poder.</span>
          </h3>
          <p className="text-gray-500 text-xl max-w-lg leading-relaxed font-light mt-4">
            Um ecossistema completo — do tradicional ao generativo — para executar qualquer visão criativa com velocidade e precisão.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`px-6 py-5 rounded-2xl border ${skill.bg} cursor-default`}
            >
              <p className={`font-black text-lg ${skill.text}`}>{skill.name}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">{skill.cat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
