import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';

export function ClickToOpen({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Blurred backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: 'var(--bg-primary)',
              }}
            />

            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
                backgroundSize: '400% 400%',
                animation: 'gradient-shift 8s ease infinite',
              }}
            />

            {/* Click area */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
              onClick={() => setOpened(true)}
              className="relative z-10 flex flex-col items-center gap-6 cursor-pointer group"
            >
              {/* Orb */}
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div
                  className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
                  }}
                />
                <div className="absolute inset-2 rounded-full bg-[var(--bg-primary)] flex items-center justify-center">
                  <Lock className="w-10 h-10 md:w-12 md:h-12 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-2">
                  Click to Open
                </h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base flex items-center gap-2 justify-center">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                  Enter VortixWorld
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                </p>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={opened ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={opened ? 'block' : 'hidden'}
      >
        {children}
      </motion.div>
    </>
  );
}
