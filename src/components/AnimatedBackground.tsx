import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    resize();
    window.addEventListener('resize', resize);

    // Flowing lines
    const lines: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      amplitude: number;
      frequency: number;
      offset: number;
      color: string;
      width: number;
    }> = [];

    const colors = theme === 'dark'
      ? ['#00D9FF', '#B829DD', '#FF2E93', '#39FF14', '#FFD700']
      : ['#00A8CC', '#9333EA', '#E11D74', '#22C55E', '#D97706'];

    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * w,
        y: Math.random() * h,
        length: 100 + Math.random() * 300,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.8,
        amplitude: 20 + Math.random() * 60,
        frequency: 0.002 + Math.random() * 0.005,
        offset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: 1 + Math.random() * 2,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.globalAlpha = 0.3 + Math.sin(time + line.offset) * 0.15;

        for (let i = 0; i <= line.length; i += 2) {
          const px = line.x + Math.cos(line.angle) * i;
          const py = line.y + Math.sin(line.angle) * i + Math.sin((px + time * 100) * line.frequency) * line.amplitude;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.stroke();

        // Update position slowly
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Wrap around
        if (line.x < -line.length) line.x = w + line.length;
        if (line.x > w + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = h + line.length;
        if (line.y > h + line.length) line.y = -line.length;
      });

      // Add glowing orbs
      for (let i = 0; i < 5; i++) {
        const ox = (Math.sin(time * 0.5 + i * 1.2) * 0.5 + 0.5) * w;
        const oy = (Math.cos(time * 0.3 + i * 0.8) * 0.5 + 0.5) * h;
        const radius = 80 + Math.sin(time + i) * 40;

        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        gradient.addColorStop(0, colors[i % colors.length] + '20');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
