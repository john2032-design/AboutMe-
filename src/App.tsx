import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { ThemeProvider } from '@/hooks/useTheme';
import { ClickToOpen } from '@/components/ClickToOpen';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { WhatIBuildSection } from '@/sections/WhatIBuildSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ServerSection } from '@/sections/ServerSection';
import { BotsSection } from '@/sections/BotsSection';
import './App.css';

function AppContent() {
  const { device, isMobile } = useDeviceDetect();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        device === 'iphone' ? 'iphone-optimized' : ''
      } ${device === 'ipad' ? 'ipad-optimized' : ''} ${
        device === 'samsung' ? 'samsung-optimized' : ''
      } ${device === 'desktop' ? 'desktop-optimized' : ''}`}
      style={{ background: 'var(--bg-primary)' }}
    >
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="builds">
          <WhatIBuildSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="server">
          <ServerSection />
        </div>
        <div id="bots">
          <BotsSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center glass-card border-b-0 border-l-0 border-r-0 rounded-none">
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} VortixWorld — Discord Bot Developer
        </p>
        <p className="text-xs text-[var(--text-secondary)] opacity-60 mt-1">
          Device: {device} {isMobile ? '(Mobile)' : '(Desktop)'}
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ClickToOpen>
        <AppContent />
      </ClickToOpen>
    </ThemeProvider>
  );
}

export default App;
