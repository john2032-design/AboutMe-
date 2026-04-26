import { motion } from 'framer-motion';
import { Terminal, Globe, Lock, Webhook, Server, Layout, Bot } from 'lucide-react';

const skills = [
  { name: 'Node.js', icon: Terminal, color: '#39FF14' },
  { name: 'Discord.js', icon: Bot, color: '#00D9FF' },
  { name: 'Python', icon: Globe, color: '#FFD700' },
  { name: 'REST APIs', icon: Globe, color: '#B829DD' },
  { name: 'OAuth2', icon: Lock, color: '#FF2E93' },
  { name: 'Webhook', icon: Webhook, color: '#00D9FF' },
  { name: 'Bot Hosting', icon: Server, color: '#39FF14' },
  { name: 'Web Frontends', icon: Layout, color: '#FFD700' },
];

export function SkillsSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">Skills & Tools</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            The technologies I use to build powerful Discord solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-container p-6 md:p-10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="neu-btn flex flex-col items-center gap-3 p-4 md:p-5 group"
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                  }}
                >
                  <skill.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
                </div>
                <span className="text-sm md:text-base font-semibold text-[var(--text-primary)] text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
