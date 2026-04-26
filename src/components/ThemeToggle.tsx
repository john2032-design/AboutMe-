import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="neu-btn relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" />
        ) : (
          <Sun className="w-5 h-5 md:w-6 md:h-6 text-[var(--gold)]" />
        )}
      </motion.div>
      
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 12px ${theme === 'dark' ? 'var(--glow-primary)' : 'var(--glow-gold)'}`,
        }}
      />
    </button>
  );
}
