import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function DesignContact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-8 md:px-16 lg:px-24 z-10 min-h-screen flex flex-col justify-center font-sans overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff0e8 0%, #fce4ec 50%, #ede7f6 100%)' }}
    >
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-50"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-40"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-8"
        >
          Contato
        </motion.p>

        {/* Giant headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-950 leading-[0.9]"
          >
            Vamos criar
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            style={{
              background: 'linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            juntos?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-xl leading-relaxed font-light mb-16"
        >
          Aberto para identidade, social/ads, vídeo, sites e relatórios visuais em Power BI quando o projeto pedir narrativa com dados. Escolha o canal que for mais rápido para você.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <a
            href="mailto:contact@setupdja.website"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            style={{ background: 'linear-gradient(135deg, #18181b, #374151)' }}
          >
            <Mail className="w-5 h-5" />
            Mandar E-mail
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/5575982414860?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20de%20design."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg bg-white border border-gray-200 text-gray-900 hover:border-green-500 hover:text-green-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 text-green-500" />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-de-jesus-00ab442b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg bg-white border border-gray-200 text-gray-900 hover:border-[#0077b5] hover:text-[#0077b5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5 text-[#0077b5]" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-10 border-t border-white/50 text-sm text-gray-400 font-light flex flex-col items-center gap-2 w-full text-center relative z-10">
        <p>© {new Date().getFullYear()} Daniel de Jesus Alves — Design Visual & Direção Criativa</p>
      </div>
    </section>
  );
}
