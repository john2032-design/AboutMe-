import { motion } from 'framer-motion';
import { Globe, Users, MessageSquare, ArrowUpRight } from 'lucide-react';

export function ServerSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">Server</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Join the community for support, updates and announcements
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
            {/* Server Icon */}
            <div className="clay-card w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] flex items-center justify-center">
                <Globe className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">
                VortixWorld Sideload & Bypass
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Server for support, updates and announcements.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-[var(--text-secondary)]">
                  <Users className="w-3.5 h-3.5" />
                  Community
                </span>
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-[var(--text-secondary)]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Support
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                <a
                  href="https://vortixworld.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn px-6 py-3 text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://vortixworld.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-card px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Users className="w-4 h-4" />
                  Join Server
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
