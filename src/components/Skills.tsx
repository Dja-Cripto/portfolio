import { motion } from 'motion/react';

const skills = [
  { name: "Python", level: 78, color: "from-cyan-500 to-blue-500" },
  { name: "SQL & modelagem de dados", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Power BI", level: 80, color: "from-amber-400 to-orange-500" },
  { name: "React & front-end", level: 82, color: "from-emerald-400 to-cyan-500" },
  { name: "Automação (n8n, bots, APIs)", level: 90, color: "from-cyan-500 to-purple-600" },
  { name: "Cursor & stack com IA", level: 92, color: "from-orange-400 to-pink-500" },
  { name: "Integrações & backends leves", level: 80, color: "from-yellow-400 to-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-4">
              Habilidades
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent flex-grow ml-4" />
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden shadow-2xl">
            {/* Premium glow accents inside panel */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-base md:text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.8 }}
                      className="text-xs font-mono text-gray-600 group-hover:text-cyan-400 transition-colors duration-300"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      {/* Shimmer */}
                      <div className="absolute inset-0 opacity-60"
                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)', animation: 'shimmer 2.5s ease-in-out infinite' }}
                      />
                      {/* Glow dot at end */}
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} blur-[2px] scale-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
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
