import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 px-6 relative z-10 flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Section number */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl md:text-3xl">04.</span>
            <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent flex-grow" />
          </div>

          {/* Glass card */}
          <div className="glass-panel rounded-[2rem] p-10 md:p-16 text-center border border-white/5 relative overflow-hidden shadow-2xl">
            {/* Glow accents */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

            <h2 className="relative z-10 text-xs font-bold font-mono uppercase tracking-[0.3em] text-cyan-500/60 mb-6">
              Próximos Passos
            </h2>

            <h3 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-gray-500 leading-tight">
              Vamos Trabalhar<br/>Juntos?
            </h3>

            <p className="relative z-10 text-base sm:text-lg text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed">
              Aberto a projetos de aplicativo, automação de negócio, dados (SQL / Power BI) e integrações — de escopo fechado a parceria contínua.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:contact@setupdja.website"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Entrar em Contato
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </motion.a>

              <motion.a
                href="https://wa.me/5575982414860?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base hover:shadow-[0_0_40px_rgba(37,211,102,0.35)] transition-all w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/daniel-de-jesus-00ab442b5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#0A66C2] text-white font-bold text-base hover:shadow-[0_0_40px_rgba(10,102,194,0.35)] transition-all w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
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
