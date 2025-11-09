import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-cyan-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#00D3C4] to-cyan-400 shadow-inner" />
            <span className="font-semibold tracking-tight text-cyan-50">NeuroVault.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-cyan-200/80 hover:text-cyan-50 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#00D3C4] text-slate-950 px-4 py-2 font-medium hover:brightness-95 transition-colors shadow-[0_8px_24px_rgba(0,211,196,0.4)]">
              Get in touch
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-cyan-100" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-cyan-100 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg px-3 py-2 bg-[#00D3C4] text-slate-950 text-center" onClick={() => setOpen(false)}>
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
