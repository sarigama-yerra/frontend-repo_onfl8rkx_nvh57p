function Showcase() {
  const shots = [
    {
      title: 'Ultrasonic A‑Scan',
      img: 'https://images.unsplash.com/photo-1545153996-81458f53cfe4?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Industrial Pipeline',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Radiography Lab',
      img: 'https://images.unsplash.com/photo-1559757175-08c6d5b3a906?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Precision Thickness',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Magnetic Particle Test',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Aerospace Composite',
      img: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative py-24">
      {/* animated backdrop accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">UI/UX Visuals & Field Imagery</h2>
          <p className="mt-3 text-slate-300">A modern visual language: clean scans, precise overlays, and data‑first dashboards.</p>
        </div>

        {/* carousel grid */}
        <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...shots, ...shots].map((s, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[22rem] max-w-[22rem]">
                <img src={s.img} alt={s.title} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
                  <div className="text-sm text-slate-300">{s.title}</div>
                </figcaption>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />
                  <div className="absolute -inset-px rounded-2xl border border-transparent [background:linear-gradient(#0b1220,#0b1220)_padding-box,linear-gradient(120deg,rgba(34,211,238,.5),rgba(16,185,129,.5))_border-box]" />
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* micro cards row */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["HUD Overlays","Glass Panels","Neumorphic Controls","Pass/Warning States"].map((label, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{label}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="mt-4 h-24 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.2),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.18),transparent_60%)] animate-[floatBG_8s_ease-in-out_infinite]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-white/10 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur flex items-center justify-center text-slate-300">UI</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }
        @keyframes floatBG { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } }
      `}</style>
    </section>
  );
}

export default Showcase;
