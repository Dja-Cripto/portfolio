import { motion } from 'motion/react';

const skillGroups = [
  {
    title: "Desenvolvimento & Apps",
    skills: [
      { name: "Python", level: 85, desc: "Automações escaláveis e processamento inteligente de dados.", color: "from-cyan-500 to-blue-500" },
      { name: "React & TypeScript", level: 82, desc: "Interfaces performáticas e sistemas modernos (Vite/Next).", color: "from-emerald-400 to-cyan-500" },
      { name: "Integrações & APIs", level: 88, desc: "Conexão entre plataformas e arquitetura de backends leves.", color: "from-yellow-400 to-orange-500" },
    ]
  },
  {
    title: "Dados & Inteligência",
    skills: [
      { name: "SQL & Modelagem", level: 90, desc: "Estruturação eficiente de bancos e consultas transacionais.", color: "from-purple-500 to-pink-500" },
      { name: "Power BI", level: 85, desc: "Dashboards estratégicos e storytelling com dados de negócio.", color: "from-amber-400 to-orange-500" },
      { name: "Cursor & Stack IA", level: 92, desc: "Desenvolvimento assistido para máxima velocidade de entrega.", color: "from-orange-400 to-pink-500" },
    ]
  },
  {
    title: "Automação & Processos",
    skills: [
      { name: "n8n & Workflow", level: 95, desc: "Orquestração de fluxos complexos sem intervenção manual.", color: "from-cyan-500 to-purple-600" },
      { name: "Bots / WhatsApp", level: 88, desc: "Criação de agentes e fluxos de atendimento automatizados.", color: "from-indigo-500 to-blue-500" },
      { name: "Otimização Tech", level: 80, desc: "Migração de processos analógicos para esteiras digitais.", color: "from-teal-400 to-emerald-500" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* ── Faixa Superior ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start mb-20 lg:mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  Technical<br/>Stack.
                </h2>
                <div className="h-px bg-cyan-500/30 flex-grow" />
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Um ecossistema focado em resolver problemas de negócio através de código, automação de ponta e análise de dados estratégica.
              </p>
            </div>
            
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group">
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px]" />
               <p className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.4em] mb-4">Abordagem Técnica</p>
               <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-200 mb-6 tracking-tight italic">
                 "IA para acelerar a entrega, arquitetura sólida para sustentar o fluxo."
               </h3>
               <p className="text-gray-500 leading-relaxed font-light text-lg">
                 Foco em criar sistemas que não apenas funcionam, mas que são fáceis de manter e escalam conforme a necessidade da operação. Otimização de tempo através de automação inteligente.
               </p>
            </div>
          </div>

          {/* ── Faixa Inferior (Cards Grid) ── */}
          <div className="space-y-24">
            {skillGroups.map((group, gIndex) => (
              <div key={group.title} className="space-y-12">
                <div className="flex items-center gap-8">
                   <h4 className="text-xs font-mono text-cyan-500/60 uppercase tracking-[0.5em] whitespace-nowrap">{group.title}</h4>
                   <div className="h-px bg-white/5 w-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
                  {group.skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-8 md:p-10 rounded-[2.2rem] bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute -inset-24 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.03] blur-[60px] transition-opacity duration-700`} />
                      
                      <div className="relative z-10 space-y-8">
                        <div className="flex justify-between items-start">
                          <h5 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors uppercase">{skill.name}</h5>
                          <span className="font-mono text-[10px] text-gray-600 group-hover:text-cyan-500/80 transition-colors">{skill.level}%</span>
                        </div>
                        
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light min-h-[4rem]">
                          {skill.desc}
                        </p>

                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: (gIndex * 3 + index) * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 opacity-40"
                              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)', animation: 'shimmer 4s ease-in-out infinite' }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
