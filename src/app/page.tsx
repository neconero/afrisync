import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
            A
          </div>
          <span className="font-bold tracking-tight text-white text-lg">AfriSync</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
          >
            Get Early Access
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-24 text-center my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
          <span>✨ Phase 1: High School Google Workspace Integration</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
          The Universal Integration Engine for Sub-Saharan Africa
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto text-balance">
          Automate student account provisioning, Google Classroom roster syncing, and local SIS connections—built for low-bandwidth resilience.
        </p>

        {/* Call to Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10"
          >
            Request School Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Feature Grid */}
        <div id="features" className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Zap className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white">Instant Sync</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Automate roster updates directly into Google Workspace and Classroom without manual CSV uploads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white">Low-Bandwidth Native</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Batching queue system designed specifically to handle intermittent connectivity and local network drops.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Layers className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white">Multi-Vendor Future</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Modular adapter framework engineered to expand into banking APIs and AgTech data systems.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AfriSync Technologies. All rights reserved.
      </footer>
    </div>
  );
}