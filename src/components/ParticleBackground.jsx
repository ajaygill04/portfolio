import { useCallback, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();
  const animRef = useRef(null);

  const initParticles = useCallback((canvas) => {
    const p = [];
    const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 18000));
    for (let i = 0; i < count; i++) {
      p.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, r: Math.random() * 2 + 1, o: Math.random() * 0.5 + 0.1 });
    }
    return p;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = initParticles(canvas);
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; particles = initParticles(canvas); };
    window.addEventListener('resize', resize);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const c = darkMode ? '99,102,241' : '79,70,229';
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},${p.o})`; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
          if (d < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(${c},${0.1 * (1 - d / 150)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
        }
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animRef.current); };
  }, [darkMode, initParticles]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />;
};

export default ParticleBackground;