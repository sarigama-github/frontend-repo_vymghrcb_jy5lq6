import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CATEGORIES = [
  'Website Projects',
  'Poster Designs',
  'Logo Designs',
  'Video Editing Works',
];

const PROJECTS = [
  // Website Projects
  {
    id: 'nv-saas',
    category: 'Website Projects',
    title: 'NeuroVault – AI SaaS Landing',
    desc: 'Futuristic portfolio + SaaS layout with Spline 3D, motion, and dark neon aesthetic.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    tools: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Spline'],
    demo: '#',
    stack: ['React', 'Tailwind', 'Spline'],
    thumbAlt: 'NeuroVault landing preview'
  },
  {
    id: 'ecom-ai',
    category: 'Website Projects',
    title: 'E‑commerce AI Storefront',
    desc: 'Conversion‑oriented product pages with AI recommendations and crisp motion cues.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1600&auto=format&fit=crop',
    tools: ['Next.js', 'Stripe', 'Tailwind'],
    demo: '#',
    stack: ['Next.js', 'Stripe']
  },
  {
    id: 'biz-portfolio',
    category: 'Website Projects',
    title: 'Business Portfolio',
    desc: 'Responsive brochure site with strong typography and subtle 3D accents.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    tools: ['Vite', 'Framer', 'Netlify'],
    demo: '#',
    stack: ['Vite', 'Framer']
  },
  // Poster Designs
  {
    id: 'poster-event',
    category: 'Poster Designs',
    title: 'Event Launch Poster',
    desc: 'High‑impact visual with neon gradients and bold grid layout.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    tools: ['Photoshop', 'Illustrator'],
    demo: '#',
    stack: ['PS', 'AI']
  },
  {
    id: 'poster-brand',
    category: 'Poster Designs',
    title: 'Brand Social Carousel',
    desc: 'Swipeable carousel pack for product storytelling and engagement.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
    tools: ['Figma', 'Photoshop'],
    demo: '#',
    stack: ['Figma']
  },
  // Logo Designs
  {
    id: 'logo-neurovault',
    category: 'Logo Designs',
    title: 'NeuroVault',
    desc: 'Hyper‑modern monogram with circuit‑inspired geometry.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    tools: ['Figma'],
    demo: '#',
    stack: ['Figma'],
    brandContext: 'AI services platform logo system.'
  },
  {
    id: 'logo-constellation',
    category: 'Logo Designs',
    title: 'Code Constellation',
    desc: 'Star‑mapped logotype with modular grid.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    tools: ['Figma'],
    demo: '#',
    stack: ['Figma'],
    brandContext: 'Dev community identity set.'
  },
  {
    id: 'logo-exploits',
    category: 'Logo Designs',
    title: 'Exploits',
    desc: 'Angular badge with stealth tech feel.',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    tools: ['Figma'],
    demo: '#',
    stack: ['Figma'],
    brandContext: 'Cyber product suite branding.'
  },
  // Videos
  {
    id: 'reel-cinematic',
    category: 'Video Editing Works',
    title: 'Cinematic AI Reel',
    desc: 'Fast‑cut cinematic reel featuring generative shots and kinetic type.',
    mediaType: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tools: ['After Effects', 'Premiere'],
    demo: 'https://youtu.be/dQw4w9WgXcQ',
    stack: ['AE', 'PR']
  },
  {
    id: 'product-demo',
    category: 'Video Editing Works',
    title: 'Product Demo',
    desc: 'Explainer with UI breakdowns and feature highlights.',
    mediaType: 'video',
    src: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    tools: ['Premiere', 'After Effects'],
    demo: 'https://youtu.be/oHg5SJYRHA0',
    stack: ['PR']
  },
];

function CardMedia({ mediaType, src, alt }) {
  if (mediaType === 'video') {
    return (
      <div className="aspect-video overflow-hidden">
        <iframe
          className="h-full w-full"
          src={src}
          title={alt || 'Video preview'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="aspect-[16/10] overflow-hidden">
      <img src={src} alt={alt || 'Project preview'} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(CATEGORIES[0]);
  const filtered = PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyan-50">Projects</h2>
            <p className="mt-2 text-cyan-200/80">Showcasing the core of the portfolio — across web, design, branding, and video.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === cat
                    ? 'bg-[#00D3C4] text-slate-950 border-[#00D3C4] shadow-[0_6px_20px_rgba(0,211,196,0.35)]'
                    : 'bg-slate-900/50 text-cyan-100 border-cyan-500/20 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur">
                <CardMedia mediaType={p.mediaType} src={p.src} alt={p.thumbAlt || p.title} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-cyan-50">{p.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-wide text-cyan-200/60">{p.category}</p>
                    </div>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#00D3C4] hover:brightness-110">
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-cyan-200/80">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span key={t} className="rounded-full border border-cyan-500/30 bg-slate-800/70 px-2.5 py-1 text-xs text-cyan-100">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2 text-xs text-cyan-200/70">
                      {p.stack?.map((s) => (
                        <span key={s} className="rounded bg-slate-800/70 px-2 py-1">{s}</span>
                      ))}
                    </div>
                    <a href={p.demo || '#'} className="rounded-full bg-[#00D3C4] text-slate-950 px-3 py-1.5 text-sm font-medium hover:brightness-95">View Project</a>
                  </div>
                </div>

                {p.category === 'Logo Designs' && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-cyan-50">
                      <p className="text-sm">{p.brandContext}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
