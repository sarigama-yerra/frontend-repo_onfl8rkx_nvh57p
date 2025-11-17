import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 backdrop-blur bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30" />
            <span className="font-semibold text-white">Megama d.o.o.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="https://megama.si" target="_blank" className="text-cyan-300 hover:text-cyan-200">Website ↗</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 text-sm">Consultation</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Services grid with micro-animations */}
      <Services />

      {/* Process timeline */}
      <div id="process">
        <Process />
      </div>

      {/* Technology & trust stats */}
      <Stats />

      {/* CTA footer */}
      <FooterCTA />
    </div>
  );
}

export default App;