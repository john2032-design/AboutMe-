import { motion } from 'framer-motion';
import { Bot, Shield, Smartphone, Monitor, ArrowUpRight, Sparkles } from 'lucide-react';

export function BotsSection() {
  return (
    <section className="relative section-padding overflow-hidden pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">My Bots</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            If you'd like to see my bots or join the server, use the links below
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card glass-card p-6 md:p-10 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Bot Icon */}
            <div className="relative flex-shrink-0">
              <div className="clay-card w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--secondary)] to-[var(--primary)] flex items-center justify-center animate-pulse-glow">
                  <Bot className="w-10 h-10 md:w-14 md:h-14 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--lime)] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">
                VortixWorld Bypass
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Bypass bot with sideload panel for DNS cert direct install and an executor panel for iOS/Android/PC.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                <span className="glass-card px-3 py-1 text-xs font-medium flex items-center gap-1 text-[var(--primary)]">
                  <Shield className="w-3 h-3" />
                  Bypass
                </span>
                <span className="glass-card px-3 py-1 text-xs font-medium flex items-center gap-1 text-[var(--secondary)]">
                  <Smartphone className="w-3 h-3" />
                  iOS
                </span>
                <span className="glass-card px-3 py-1 text-xs font-medium flex items-center gap-1 text-[var(--accent)]">
                  <Smartphone className="w-3 h-3" />
                  Android
                </span>
                <span className="glass-card px-3 py-1 text-xs font-medium flex items-center gap-1 text-[var(--lime)]">
                  <Monitor className="w-3 h-3" />
                  PC
                </span>
              </div>

              <a
                href="https://discord.com/oauth2/authorize?client_id=1355400268103290910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 clay-card px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] hover:opacity-90 transition-opacity"
              >
                <Bot className="w-5 h-5" />
                Invite VortixWorld Bypass
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
