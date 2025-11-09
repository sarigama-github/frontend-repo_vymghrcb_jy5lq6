import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-1">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop"
                alt="Founder portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyan-50">About</h2>
          <p className="mt-4 text-cyan-200/80">
            I build interactive, intelligent experiences that fuse design, motion, and code. NeuroVault evolved from a
            passion for crafting high‑polish products with systems thinking and playful interactivity.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              <h3 className="font-semibold text-[#00D3C4]">Mission</h3>
              <p className="mt-1 text-cyan-200/80">To build intelligent, automated, and creative solutions.</p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              <h3 className="font-semibold text-[#00D3C4]">Vision</h3>
              <p className="mt-1 text-cyan-200/80">To become the #1 AI service brand in the world.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-cyan-50">Milestones</h3>
            <ol className="mt-3 space-y-3 border-l-2 border-cyan-500/30 pl-4">
              <li>
                <p className="text-sm text-cyan-200/80"><span className="text-[#00D3C4] font-medium">Code Constellation</span> — community projects and open source motion kits.</p>
              </li>
              <li>
                <p className="text-sm text-cyan-200/80"><span className="text-[#00D3C4] font-medium">AI Workflows</span> — automation pipelines for content and support.</p>
              </li>
              <li>
                <p className="text-sm text-cyan-200/80"><span className="text-[#00D3C4] font-medium">NeuroVault Launch</span> — end‑to‑end studio for web, brand, and AI.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
