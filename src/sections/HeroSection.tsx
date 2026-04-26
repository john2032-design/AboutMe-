import { motion } from 'framer-motion';
import { Code2, Bot, Shield, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full opacity-20 animate-float" style={{ background: 'var(--primary)', animationDelay: '0s' }} />
      <div className="absolute bottom-40 right-20 w-16 h-16 md:w-24 md:h-24 rounded-full opacity-20 animate-float" style={{ background: 'var(--secondary)', animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-20 animate-float" style={{ background: 'var(--accent)', animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar placeholder with claymorphism */}
          <div className="mx-auto w-28 h-28 md:w-36 md:h-36 mb-8 clay-card flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] flex items-center justify-center">
              <Code2 className="w-10 h-10 md:w-14 md:h-14 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text tracking-tight">
            Discord Bot Developer
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            Building reliable, secure bots and API integrations
          </p>

          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="glass-card px-4 py-2 text-sm font-medium text-[var(--primary)]">Node.js</span>
            <span className="glass-card px-4 py-2 text-sm font-medium text-[var(--secondary)]">Python</span>
            <span className="glass-card px-4 py-2 text-sm font-medium text-[var(--accent)]">Discord.js</span>
          </div>
        </motion.div>

        {/* About Me Card - Neumorphism + Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-6 md:p-10 max-w-3xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">About Me</h2>
          </div>
          
          <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
            I'm a Discord bot developer specializing in building reliable, secure bots and API integrations. 
            I work primarily with Node.js and Python, and I integrate with external services and APIs to 
            extend Discord servers' capabilities. My focus is on creating robust automation tools, moderation 
            systems, and utility bots that enhance the Discord experience for communities of all sizes.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-[var(--primary)]">
              <Shield className="w-4 h-4" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--secondary)]">
              <Zap className="w-4 h-4" />
              <span>High Performance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
