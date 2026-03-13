import { motion } from 'motion/react';

const skills = [
  { name: "Python", level: 70 },
  { name: "SQL", level: 80 },
  { name: "Cursor AI", level: 90 },
  { name: "Vibe Coding", level: 90 },
  { name: "Automação", level: 90 },
  { name: "Ferramentas de IA", level: 95 },
  { name: "CapCut", level: 75 },
  { name: "DaVinci Resolve", level: 75 },
  { name: "Photoshop", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex items-center gap-3 sm:gap-4">
              <span className="text-cyan-400 font-mono text-xl sm:text-2xl md:text-4xl">03.</span> Habilidades
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-2 sm:ml-4" />
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                    <span className="text-sm font-mono text-gray-500 group-hover:text-purple-400 transition-colors">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/50 rounded-full overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
