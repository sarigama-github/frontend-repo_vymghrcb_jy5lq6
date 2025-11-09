import { useMemo, useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sampleProjects = [
  { id: 1, title: 'AI SaaS Dashboard', category: 'Web', tools: ['React', 'Tailwind'], image: 'https://images.unsplash.com/photo-1677044983562-5bfc4af692e4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMFNhYVMlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjY4MTIyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Product Promo', category: 'Videos', tools: ['After Effects'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Modern Logo', category: 'Logos', tools: ['Figma'], image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Carousel Concept', category: 'Carousels', tools: ['Illustrator'], image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Poster Design', category: 'Posters', tools: ['Photoshop'], image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Portfolio Site', category: 'Web', tools: ['Vite', 'Framer'], image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop' },
];

const categories = ['All', 'Web', 'Posters', 'Carousels', 'Logos', 'Videos'];

export default function Works() {
  const [active, setActive] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.9]);

  const filtered = useMemo(() => {
    if (active === 'All') return sampleProjects;
    return sampleProjects.filter((p) => p.category === active);
  }, [active]);

  // Prefetch images for smoother parallax
  useEffect(() => {
    filtered.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, [filtered]);

  return (
    <section id="works" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600">Browse by category to explore diverse deliverables.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${active === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div ref={containerRef} style={{ y, opacity }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.category} • {p.tools.join(', ')}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
