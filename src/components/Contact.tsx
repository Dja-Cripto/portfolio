import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-40 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Glass card container */}
          <div className="glass-panel rounded-[3rem] p-10 md:p-12 lg:p-20 border border-white/5 relative overflow-hidden shadow-2xl">
            {/* Glow accents */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
              {/* Left Column: Hooks & Info */}
              <div className="relative z-10 text-left space-y-8">
                <div>
                  <h2 className="text-xs font-bold font-mono uppercase tracking-[0.4em] text-cyan-500/60 mb-6">
                    Próximos Passos
                  </h2>
                  <h3 className="text-4xl md:text-6xl xl:text-7xl font-black mb-8 text-white leading-[1.1] tracking-tighter uppercase">
                    Vamos Trabalhar<br/><span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>Juntos?</span>
                  </h3>
                </div>

                <div className="space-y-6 max-w-xl">
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Aberto a projetos de aplicativo, automação de negócio, dados (SQL / Power BI) e integrações — de escopo fechado a parceria contínua.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 pt-4">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Disponível agora</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-none">Consultoria & Dev</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="relative z-10 group/actions">
                <div className="space-y-4 p-8 md:p-10 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-md shadow-inner">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-6 opacity-60">Escolha como prefere falar:</p>
                  
                  <motion.a
                    href="mailto:contact@setupdja.website"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-black text-lg hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all justify-center uppercase tracking-tight"
                  >
                    <Mail className="w-6 h-6" />
                    Enviar E-mail
                  </motion.a>

                  <motion.a
                    href="https://wa.me/5575982414860?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-lg hover:bg-[#25D366]/20 transition-all justify-center"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/daniel-de-jesus-00ab442b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-300 font-medium text-lg hover:bg-white/[0.08] transition-all justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn profissional
                  </motion.a>

                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Resposta em menos de 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-10 pb-8 text-xs text-gray-600 font-mono flex flex-col items-center gap-2 w-full text-center">
        <p>Desenvolvido com Vibe Coding e Inteligência Artificial.</p>
        <p>© {new Date().getFullYear()} Daniel de Jesus Alves.</p>
      </div>
    </section>
  );
}
