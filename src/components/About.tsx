import { motion } from 'motion/react';
import { MapPin, Languages, Terminal, Cpu, Sparkles, Workflow, Database, LayoutTemplate } from 'lucide-react';

const oQueFaco = [
  'Aplicativos e sistemas web sob medida (interfaces modernas, painéis e fluxos reais de uso).',
  'Automação de tarefas e de processos de negócio — integrações, bots e pipelines que reduzem trabalho manual.',
  'Modelagem e consultas em SQL; organização de dados preparada para relatórios e decisão.',
  'Dashboards e visualização em Power BI, conectando bases de dados a indicadores claros para o time.',
  'Orquestração com APIs, n8n e ferramentas de IA aplicadas a produto (não só experimento, mas entrega).',
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-3 sm:gap-4">
              Sobre Mim
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-2 sm:ml-4" />
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-12">
              {/* O que eu faço — resumo objetivo para quem rola rápido */}
              <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.06] p-6 md:p-10">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400/90 mb-4">O que eu faço</p>
                <h3 className="text-xl md:text-3xl font-black text-white tracking-tight mb-8">
                  Da ideia ao fluxo no ar: apps, automações e dados trabalhando juntos
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  {oQueFaco.map((item) => (
                    <li key={item} className="flex gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-colors group/item">
                      <span className="text-cyan-500/80 shrink-0 mt-1 group-hover/item:text-cyan-400 transition-colors">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20">
                {/* Column 1: Info Cards (Sidebar) */}
                <div className="flex flex-col gap-5 order-2 lg:order-1">
                  <div className="flex items-start gap-4 bg-black/80 p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors group">
                    <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <MapPin className="text-purple-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">Localização</p>
                      <p className="font-medium text-gray-200">Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-black/80 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors group">
                    <div className="p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                      <Languages className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">Idiomas</p>
                      <p className="font-medium text-gray-200">Português<br /><span className="text-sm text-gray-400">Inglês (intermediário)</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-black/80 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-colors group">
                    <div className="p-4 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                      <Sparkles className="text-emerald-400 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Especialidades (tech)</p>
                      <ul className="grid grid-cols-1 gap-2.5">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                          <Cpu className="w-4 h-4 text-emerald-500/70" />
                          IA aplicada a produto
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                          <Workflow className="w-4 h-4 text-emerald-500/70" />
                          Automação & integrações
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300 leading-tight">
                          <LayoutTemplate className="w-4 h-4 text-emerald-500/70 shrink-0" />
                          Apps, sites e painéis
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                          <Database className="w-4 h-4 text-emerald-500/70" />
                          SQL, dados & Power BI
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 2: Main Text */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.1)] shrink-0">
                      <Terminal className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">Trajetória e foco</h3>
                  </div>

                  <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-xl leading-relaxed space-y-6 lg:space-y-8 font-light">
                    <p>
                      Sou desenvolvedor com forte interesse em produto digital, inteligência artificial aplicada e automação. Já atuei em atendimento, marketing e conteúdo — experiências que me deram senso de prazo, clareza na comunicação com cliente e visão de negócio ao propor soluções técnicas.
                    </p>
                    <p>
                      Hoje concentro entregas em <strong className="text-white font-black uppercase tracking-tight">aplicações e painéis</strong>, <strong className="text-white font-black uppercase tracking-tight">automações para empresas</strong> (fluxos, integrações, bots) e <strong className="text-white font-black uppercase tracking-tight">camada de dados</strong>: SQL para estruturar e consultar informação, Power BI para tornar isso legível para decisões. Uso stack web moderna e ferramentas de desenvolvimento assistido por IA com disciplina de revisão e testes — este portfólio é um exemplo vivo desse tipo de entrega.
                    </p>
                    <p>
                      No lado visual, atuo no <strong className="text-white font-black uppercase tracking-tight">modo Design</strong> deste site: lá estão cases, toolkit e narrativa específicos para criativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
