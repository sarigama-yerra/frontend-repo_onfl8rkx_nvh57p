import { useEffect, useRef, useState } from 'react';

function useCountUp(target = 100, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let start;
    let raf;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function Counter({ label, target, suffix = '' }) {
  const value = useCountUp(target, 1400);
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-center backdrop-blur">
      <div className="text-4xl font-extrabold text-white">
        {value}{suffix}
      </div>
      <div className="mt-2 text-slate-300/90 text-sm">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Counter label="Years of Experience" target={15} />
          <Counter label="Industrial Projects" target={420} />
          <Counter label="Client Satisfaction" target={99} suffix="%" />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-90">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 rounded-xl border border-slate-700/60 bg-slate-900/40 backdrop-blur flex items-center justify-center text-slate-300/80 text-sm">
              Client {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;