function Process() {
  const steps = [
    { title: 'Consultation', desc: 'We define scope, standards and acceptance criteria.', icon: '🧭' },
    { title: 'On‑Site Scanning', desc: 'Certified technicians perform inspections.', icon: '📡' },
    { title: 'Data Analysis', desc: 'Indications evaluated by Level II/III experts.', icon: '📊' },
    { title: 'Detailed Report', desc: 'Clear findings with repair recommendations.', icon: '📑' },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How It Works</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="group rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 backdrop-blur">
                <div className="text-2xl">{s.icon}</div>
                <h3 className="mt-3 font-semibold text-white">{i + 1}. {s.title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">{s.desc}</p>
                <div className="mt-6 h-1 w-full bg-slate-800 overflow-hidden rounded">
                  <div className="h-full w-0 bg-gradient-to-r from-cyan-500 to-emerald-400 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;