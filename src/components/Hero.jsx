import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient wash for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/70 to-slate-950" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/40 px-4 py-1 text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Certified NDT & Technical Diagnostics
          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Ensuring Integrity, Preventing Failure.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Advanced Non-Destructive Testing for Industry and Infrastructure. We turn complex diagnostics into clear, data‑driven decisions.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400">
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
              <span className="relative">Schedule a Consultation</span>
            </a>
            <a href="#services" className="text-cyan-300 hover:text-cyan-200">Explore Services</a>
          </div>
        </div>

        {/* Pass indicator badge */}
        <div className="ml-auto hidden md:flex flex-col items-end gap-3">
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-emerald-400/30 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse mr-1" />
              <span className="text-amber-300 text-sm">Scanning</span>
            </div>
            <div className="mt-3 h-1.5 w-40 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-amber-400 to-emerald-400 animate-[load_2.4s_ease-in-out_infinite]" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-300 text-sm">Pass</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes load { 0%,100%{transform:translateX(-60%)} 50%{transform:translateX(120%)} }
      `}</style>
    </section>
  );
}

export default Hero;