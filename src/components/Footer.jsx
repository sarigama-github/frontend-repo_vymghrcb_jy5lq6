export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-cyan-200/80">© {new Date().getFullYear()} NeuroVault.ai. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="text-cyan-200/80 hover:text-cyan-50">Services</a>
          <a href="#home" className="text-cyan-200/80 hover:text-cyan-50">Back to top</a>
          <a href="#contact" className="text-cyan-200/80 hover:text-cyan-50">Contact</a>
        </div>
      </div>
    </footer>
  );
}
