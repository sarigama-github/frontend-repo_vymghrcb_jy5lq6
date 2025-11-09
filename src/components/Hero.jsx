import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Full-bleed, stable height container to prevent collapse */}
      <div className="relative w-full h-[80vh] md:h-screen min-h-[620px]">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Non-blocking visual overlays for depth; keep interactive scene clickable */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,211,196,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
      </div>

      {/* Centered content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#00D3C4] drop-shadow-[0_2px_8px_rgba(0,211,196,0.35)]"
          >
            NeuroVault.ai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-[#00D3C4]"
          >
            A living grid of metallic cubes powered by intelligence. Build modern experiences that move with purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#works" className="inline-flex items-center justify-center rounded-full bg-[#00D3C4] text-white px-6 py-3 font-semibold hover:brightness-95 transition-colors shadow-[0_8px_30px_rgba(0,211,196,0.35)]">
              Explore Work
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold border border-[#00D3C4]/60 hover:bg-[#00D3C4]/5 transition-colors">
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
