export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} NeuroVault.ai. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
          <a href="#works" className="text-slate-600 hover:text-slate-900">Works</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
