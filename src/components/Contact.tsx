import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-3 sm:gap-4">
              <span className="text-cyan-400 font-mono text-xl sm:text-2xl md:text-4xl">04.</span> Próximos Passos
            </h2>
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-500">
            Vamos Trabalhar Juntos?
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
            Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores envolvendo IA e automação. Sinta-se à vontade para entrar em contato.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
            <div className="flex flex-col items-center gap-2 text-gray-300 bg-black/80 px-8 py-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors w-full sm:w-auto">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2">
                <Mail className="text-cyan-400 w-6 h-6" />
              </div>
              <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email</span>
              <a href="mailto:contact@setupdja.website" className="hover:text-cyan-400 transition-colors font-mono text-lg">
                contact@setupdja.website
              </a>
            </div>
            
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-purple-500/50" />
            
            <div className="flex flex-col items-center gap-2 text-gray-300 bg-black/80 px-8 py-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors w-full sm:w-auto">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <MapPin className="text-purple-400 w-6 h-6" />
              </div>
              <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Localização</span>
              <span className="font-mono text-lg">Brasil</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mb-16">
            <motion.a
              href="https://wa.me/5575982414860?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-shadow relative overflow-hidden group w-full sm:w-auto justify-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Falar no WhatsApp</span>
            </motion.a>

            <div className="flex flex-col items-center gap-1 text-sm text-gray-500 font-mono mt-4">
              <p>Disponível para oportunidades, projetos e colaborações.</p>
              <p className="opacity-70">Open to opportunities and collaborations.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 font-mono flex flex-col items-center gap-3 w-full px-6 text-center">
        <p className="max-w-2xl leading-relaxed">
          Este portfólio foi desenvolvido por mim utilizando técnicas de Vibe Coding e ferramentas de inteligência artificial para construção de interfaces modernas e interativas.
        </p>
        <p>© {new Date().getFullYear()} Daniel Jesus Alves.</p>
      </div>
    </section>
  );
}
