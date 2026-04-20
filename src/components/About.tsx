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
              <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.06] p-6 md:p-8">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400/90 mb-3">O que eu faço</p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-5">
                  Da ideia ao fluxo no ar: apps, automações e dados trabalhando juntos
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  {oQueFaco.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-cyan-500/80 shrink-0 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] shrink-0">
                      <Terminal className="text-cyan-400 w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">Trajetória e foco</h3>
                  </div>

                  <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6">
                    <p>
                      Sou desenvolvedor autodidata com forte interesse em produto digital, inteligência artificial aplicada e automação. Já atuei em atendimento, marketing e conteúdo — experiências que me deram senso de prazo, clareza na comunicação com cliente e visão de negócio ao propor soluções técnicas.
                    </p>
                    <p>
                      Hoje concentro entregas em <strong className="text-white font-semibold">aplicações e painéis</strong>, <strong className="text-white font-semibold">automações para empresas e criadores</strong> (fluxos, integrações, bots) e <strong className="text-white font-semibold">camada de dados</strong>: SQL para estruturar e consultar informação, Power BI para tornar isso legível para decisões. Uso stack web moderna e ferramentas de desenvolvimento assistido por IA com disciplina de revisão e testes — este portfólio é um exemplo vivo desse tipo de entrega.
                    </p>
                    <p>
                      No lado visual (identidade, vídeo e peças para redes), atuo no <strong className="text-white font-semibold">modo Design</strong> deste site: lá estão cases, toolkit e narrativa específicos para criativo.
                    </p>
                  </div>
                </div>

                <div className="lg:w-80 flex flex-col gap-4">
                  <div className="flex items-start gap-4 bg-black/80 p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors group">
                    <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <MapPin className="text-purple-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">Localização</p>
                      <p className="font-medium text-gray-200">Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-black/80 p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors group">
                    <div className="p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                      <Languages className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">Idiomas</p>
                      <p className="font-medium text-gray-200">Português<br /><span className="text-sm text-gray-400">Inglês (intermediário)</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-black/80 p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-colors group">
                    <div className="p-3 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                      <Sparkles className="text-emerald-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Especialidades (tech)</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <Cpu className="w-4 h-4 text-emerald-500/70" />
                          IA aplicada a produto
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <Workflow className="w-4 h-4 text-emerald-500/70" />
                          Automação & integrações
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300 leading-tight">
                          <LayoutTemplate className="w-4 h-4 text-emerald-500/70 shrink-0" />
                          Apps, sites e painéis
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <Database className="w-4 h-4 text-emerald-500/70" />
                          SQL, dados & Power BI
                        </li>
                      </ul>
                    </div>
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
