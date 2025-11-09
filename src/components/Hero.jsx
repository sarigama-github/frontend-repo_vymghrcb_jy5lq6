import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,30,46,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Built by Code. Powered by AI.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600"
          >
            NeuroVault.ai crafts intelligent digital experiences that blend engineering precision with creative flair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#works" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition-colors">
              Explore Work
            </a>
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold border border-slate-300 hover:bg-slate-50 transition-colors">
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
