import { motion } from 'motion/react';
import { MapPin, Languages, Terminal, Cpu, Sparkles, Workflow, Video, Image as ImageIcon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-3 sm:gap-4">
              <span className="text-cyan-400 font-mono text-xl sm:text-2xl md:text-4xl">01.</span> Sobre Mim
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-2 sm:ml-4" />
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] shrink-0">
                    <Terminal className="text-cyan-400 w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">Conheça minha trajetória</h3>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6">
                  <p>
                    Sou um desenvolvedor autodidata com grande interesse em tecnologia, inteligência artificial e automação de processos. Ao longo da minha trajetória profissional tive experiências em diferentes áreas como atendimento, marketing e criação de conteúdo digital, o que contribuiu para desenvolver uma visão prática sobre soluções tecnológicas e comunicação digital.
                  </p>
                  <p>
                    Atualmente concentro meus projetos no desenvolvimento de aplicações utilizando inteligência artificial, automações e ferramentas modernas de desenvolvimento assistido por IA. Busco criar soluções que simplifiquem tarefas, aumentem produtividade e transformem ideias em aplicações reais.
                  </p>
                  <p>
                    Além dos projetos de automação e inteligência artificial, também desenvolvo aplicações e sites modernos utilizando técnicas de Vibe Coding, criando interfaces interativas, dashboards e experiências digitais completas. Esse site é um exemplo desse tipo de desenvolvimento.
                  </p>
                  <p>
                    Além do desenvolvimento tecnológico, também atuo com edição profissional de vídeo e edição de imagens, criando conteúdos visuais e materiais digitais para diferentes projetos e plataformas.
                  </p>
                </div>
              </div>

              {/* Info Cards */}
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
                    <p className="font-medium text-gray-200">Português<br/><span className="text-sm text-gray-400">Inglês (Intermediário)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-black/80 p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-colors group">
                  <div className="p-3 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                    <Sparkles className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Especialidades</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-300">
                        <Cpu className="w-4 h-4 text-emerald-500/70" />
                        Inteligência Artificial
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-300">
                        <Workflow className="w-4 h-4 text-emerald-500/70" />
                        Automação
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-300 leading-tight">
                        <Terminal className="w-4 h-4 text-emerald-500/70 shrink-0" />
                        Desenvolvimento Assistido por IA
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-300">
                        <Video className="w-4 h-4 text-emerald-500/70" />
                        Edição de Vídeo
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-300">
                        <ImageIcon className="w-4 h-4 text-emerald-500/70" />
                        Edição de Imagem
                      </li>
                    </ul>
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
