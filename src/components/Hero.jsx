import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Subtle parallax for the overlay content as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.1]);

  return (
    <section id="home" ref={ref} className="relative w-full overflow-hidden bg-slate-950">
      {/* Full-bleed, stable height container to prevent collapse */}
      <div className="relative w-full h-[80vh] md:h-screen min-h-[620px]">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Non-blocking visual overlays for depth; keep interactive scene clickable */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,211,196,0.14), transparent 60%)'
        }} />
        {/* Top fade to improve text contrast on darker theme */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        {/* Bottom vignette for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
      </div>

      {/* Centered content overlay with subtle parallax */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#00D3C4] drop-shadow-[0_2px_24px_rgba(0,211,196,0.35)]"
          >
            NeuroVault.ai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-cyan-100/90"
          >
            Tech-forward, interactive, and modern — AI-powered web, brand, and motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-[#00D3C4] text-slate-950 px-6 py-3 font-semibold hover:brightness-95 transition-colors shadow-[0_8px_40px_rgba(0,211,196,0.45)]">
              View Projects
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-transparent text-cyan-100 px-6 py-3 font-semibold border border-[#00D3C4]/60 hover:bg-[#00D3C4]/10 transition-colors">
              Our Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Ambient accent glow following scroll subtly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-[100%] blur-3xl"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,211,196,0.55), transparent 60%)', opacity: glowOpacity }}
      />
    </section>
  );
}
