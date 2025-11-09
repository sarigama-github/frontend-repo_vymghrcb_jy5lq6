import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple front-end validation
    if (!form.name || !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message) {
      alert('Please fill in all fields with a valid email.');
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Thanks for reaching out!</h2>
          <p className="mt-2 text-slate-600">We'll get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let's build something intelligent</h2>
            <p className="mt-2 text-slate-600">Share a bit about your project and we'll follow up within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ada Lovelace" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your goals, timeline, and budget." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto">
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Contact</h3>
              <p className="mt-2 text-sm text-slate-600">Prefer email? Reach us directly.</p>
              <a href="mailto:hello@neurovault.ai" className="mt-3 inline-block text-blue-600 hover:underline">hello@neurovault.ai</a>
              <div className="mt-6">
                <h4 className="font-medium text-slate-900">Social</h4>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <a className="text-slate-600 hover:text-slate-900" href="#" aria-label="Twitter">Twitter</a>
                  <span className="text-slate-300">•</span>
                  <a className="text-slate-600 hover:text-slate-900" href="#" aria-label="LinkedIn">LinkedIn</a>
                  <span className="text-slate-300">•</span>
                  <a className="text-slate-600 hover:text-slate-900" href="#" aria-label="Dribbble">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
