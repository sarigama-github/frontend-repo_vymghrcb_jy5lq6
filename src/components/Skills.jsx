import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Web Development',
    items: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 86 },
      { name: 'Next.js', level: 78 },
      { name: 'Node.js', level: 72 },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'Python', level: 80 },
      { name: 'OpenAI API', level: 76 },
      { name: 'Automation', level: 74 },
    ],
  },
  {
    title: 'Design & Media',
    items: [
      { name: 'Figma', level: 88 },
      { name: 'Photoshop', level: 82 },
      { name: 'Premiere Pro', level: 75 },
      { name: 'After Effects', level: 70 },
    ],
  },
  {
    title: 'Branding & Marketing',
    items: [
      { name: 'SEO', level: 72 },
      { name: 'Analytics', level: 68 },
      { name: 'Automation Tools', level: 70 },
    ],
  },
  {
    title: 'Cloud & Database',
    items: [
      { name: 'Firebase', level: 65 },
      { name: 'Supabase', level: 60 },
      { name: 'MongoDB', level: 66 },
      { name: 'AWS (Basics)', level: 55 },
    ],
  },
];

function Ring({ level }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <circle cx="50" cy="50" r={radius} stroke="rgba(8,145,178,0.25)" strokeWidth="10" fill="none" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#00D3C4"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cyan-50">Skills</h2>
          <p className="mt-2 text-cyan-200/80">A snapshot of the toolset powering design, code, and automation.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-cyan-50">{g.title}</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {g.items.map((it) => (
                  <div key={it.name} className="flex items-center gap-4">
                    <Ring level={it.level} />
                    <div>
                      <p className="font-medium text-cyan-100">{it.name}</p>
                      <p className="text-sm text-cyan-200/70">{it.level}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
