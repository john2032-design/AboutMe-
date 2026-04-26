import { motion } from 'framer-motion';
import { Bot, Link2, Smartphone, ArrowRight } from 'lucide-react';

const builds = [
  {
    icon: Bot,
    title: 'Custom Discord Bots',
    desc: 'Tailored bots for server needs including moderation, utilities, and automation.',
    color: 'var(--primary)',
  },
  {
    icon: Link2,
    title: 'API Integrations',
    desc: 'Bridge third-party services with Discord for seamless data flow and interactions.',
    color: 'var(--secondary)',
  },
  {
    icon: Smartphone,
    title: 'Platform Helpers & Panels',
    desc: 'iOS / Android / PC helpers and distribution panels for automation workflows.',
    color: 'var(--accent)',
  },
];

export function WhatIBuildSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">What I Build</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Solutions designed to extend and enhance your Discord server experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {builds.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Claymorphism + Glassmorphism hybrid card */}
              <div className="clay-card glass-card p-6 md:p-8 h-full group cursor-default">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: item.color }}>
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
