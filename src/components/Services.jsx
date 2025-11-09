import { Rocket, Sparkles, Cog, Video } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'AI-Ready Websites',
    desc: 'Fast, accessible, and thoughtfully animated frontends that scale.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Identity',
    desc: 'Logos, palettes, and systems that communicate your ethos.',
  },
  {
    icon: Video,
    title: 'Motion & Content',
    desc: 'Micro-interactions, promos, and content carousels that convert.',
  },
  {
    icon: Cog,
    title: 'Automation',
    desc: 'Integrations and workflows to connect apps and ship faster.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A focused set of capabilities designed to take ideas from concept to production.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
