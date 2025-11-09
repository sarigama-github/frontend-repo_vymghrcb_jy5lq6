import { Rocket, Bot, PenTool, Palette, Video, Zap, Settings, Megaphone, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: Rocket, title: 'Web & App Development', desc: 'High‑performance, accessible, and animated apps built with modern stacks.' },
  { icon: PenTool, title: 'SaaS Product Design', desc: 'From UX flows to production‑ready UI systems with motion principles.' },
  { icon: Bot, title: 'AI Chatbot & Automation Systems', desc: 'Custom GPTs, support bots, and workflow automation for ops.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Design libraries, prototyping, and usability‑driven interfaces.' },
  { icon: PenTool, title: 'Branding & Logo Design', desc: 'Distinct identities and guidelines that scale across platforms.' },
  { icon: Megaphone, title: 'Poster & Carousel Creation', desc: 'Event, brand, and social campaigns with conversion‑led visuals.' },
  { icon: Video, title: 'Video Editing & Motion Graphics', desc: 'Cinematic reels, promos, and product walkthroughs.' },
  { icon: Zap, title: 'Digital Marketing Automation', desc: 'Lead capture, drip flows, and analytics‑powered funnels.' },
  { icon: Cloud, title: 'Tech Consulting (Cloud, API, AI)', desc: 'Architecture, integrations, and best‑practice guidance.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      {/* Floating iridescent orbs (non-interactive, decorative) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,211,196,0.55), rgba(59,130,246,0.25))' }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(0,211,196,0.45), rgba(56,189,248,0.2))' }}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyan-50">Services</h2>
          <p className="mt-2 text-cyan-200/80 max-w-2xl mx-auto">Tell us what you need — these are the core ways we can help you ship and scale.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="[transform-style:preserve-3d] rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-[#00D3C4] to-cyan-400 flex items-center justify-center text-slate-950 shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-cyan-50">{title}</h3>
              <p className="mt-2 text-sm text-cyan-200/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
