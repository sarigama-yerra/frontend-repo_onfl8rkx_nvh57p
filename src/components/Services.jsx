import { useState } from 'react';

const services = [
  { key: 'vt', title: 'Vizualna preiskava (VT)', icon: '👁️', desc: 'Vizualni pregled površin za prepoznavo nepravilnosti in poškodb.', anim: 'scan' },
  { key: 'pt', title: 'Penetrantska preiskava (PT)', icon: '💧', desc: 'Barvni ali fluorescentni penetrant razkrije površinske razpoke.', anim: 'seep' },
  { key: 'mt', title: 'Magnetna preiskava (MT)', icon: '🧲', desc: 'Magnetno polje izpostavi napake, kjer se zbirajo delci.', anim: 'field' },
  { key: 'ut', title: 'Ultrazvočna preiskava (UT)', icon: '🌊', desc: 'Ultrazvočni pulz razkrije notranje napake z eho odbojem.', anim: 'echo' },
  { key: 'utt', title: 'Merjenje debelin (UTT)', icon: '📏', desc: 'Natančna meritev debelin z ultrazvočnim odbojem.', anim: 'thickness' },
  { key: 'lt', title: 'Preiskava tesnosti (LT)', icon: '🫧', desc: 'Odtkrivanje puščanj z mehurčki ali plinskim sledilom.', anim: 'leak' },
  { key: 'rt', title: 'Radiografska preiskava (RT)', icon: '❌', desc: 'X‑žarek prikaže notranje strukture in praznine.', anim: 'xray' },
  { key: 'film', title: 'Evaluacija radiografskih filmov', icon: '🎞️', desc: 'Analiza filmov na svetlobni mizi z označenimi področji.', anim: 'film' },
  { key: 'uci', title: 'Merjenje trdote (UCI)', icon: '💎', desc: 'Vibracijska sonda meri trdoto materiala.', anim: 'uci' },
  { key: 'leeb', title: 'Merjenje trdote (Leeb)', icon: '↗️', desc: 'Meritev z odbojem udarnega telesa.', anim: 'leeb' },
];

function MicroAnim({ type }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)]" />

      {type === 'scan' && (
        <div className="absolute inset-3 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 via-amber-400/10 to-amber-400/0 animate-[scanline_2.4s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-2/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm opacity-70" />
        </div>
      )}

      {type === 'seep' && (
        <div className="absolute inset-3">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-2/3 bg-slate-600" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-1 bg-cyan-400 animate-[seep_2.6s_ease-in-out_infinite] rounded" />
        </div>
      )}

      {type === 'field' && (
        <div className="absolute inset-3">
          <div className="absolute inset-0 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 animate-[field_2.8s_ease-in-out_infinite]" />
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 animate-[field_2.8s_ease-in-out_infinite] delay-200" />
          </div>
        </div>
      )}

      {type === 'echo' && (
        <div className="absolute inset-3 flex items-center justify-center">
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[pingSoft_2.2s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-cyan-400/30 animate-[pingSoft_2.2s_linear_infinite] delay-150" />
            <div className="absolute bottom-0 left-0 right-0 mx-auto h-1 w-2/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
          </div>
        </div>
      )}

      {type === 'thickness' && (
        <div className="absolute inset-3">
          <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-slate-700" />
          <div className="absolute left-6 right-6 top-1/2">
            <div className="h-1 w-1/5 bg-emerald-400 animate-[thick_2.6s_ease-in-out_infinite]" />
          </div>
          <div className="absolute bottom-3 right-3 rounded-md bg-slate-900/70 px-2 py-1 text-emerald-300 text-xs border border-emerald-400/20">6.3 mm</div>
        </div>
      )}

      {type === 'leak' && (
        <div className="absolute inset-x-6 bottom-5 top-5">
          <div className="absolute inset-x-0 bottom-0 h-4 bg-cyan-400/10 rounded-b-xl overflow-hidden">
            <div className="absolute left-1/2 bottom-0 h-2 w-2 bg-cyan-300 rounded-full animate-[bubble_2.8s_ease-in-out_infinite]" />
            <div className="absolute left-[52%] bottom-0 h-2 w-2 bg-cyan-300 rounded-full animate-[bubble_3.2s_ease-in-out_infinite] delay-150" />
          </div>
        </div>
      )}

      {type === 'xray' && (
        <div className="absolute inset-3">
          <div className="absolute inset-y-0 left-1/2 w-1 bg-amber-300/40 animate-[xray_2.6s_linear_infinite]" />
          <div className="absolute inset-6 border border-slate-600/60" />
          <div className="absolute inset-10 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      )}

      {type === 'film' && (
        <div className="absolute inset-4 rounded-lg bg-slate-900/70 border border-slate-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0 animate-[reveal_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent" />
        </div>
      )}

      {type === 'uci' && (
        <div className="absolute inset-3 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full border border-slate-600 relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-1 bg-emerald-400 animate-[uci_1.8s_ease-in-out_infinite]" />
          </div>
        </div>
      )}

      {type === 'leeb' && (
        <div className="absolute inset-3">
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-400 animate-[leeb_2.2s_cubic-bezier(0.3,0.7,0.4,1.2)_infinite]" />
        </div>
      )}

      <style>{`
        @keyframes scanline { 0%{transform:translateY(-120%)} 100%{transform:translateY(120%)} }
        @keyframes seep { 0%,100%{height:0} 50%{height:16px} }
        @keyframes field { 0%,100%{transform:translateX(-10%)} 50%{transform:translateX(10%)} }
        @keyframes pingSoft { 0%{opacity:0.8} 70%{transform:scale(1.1);opacity:0} 100%{opacity:0} }
        @keyframes thick { 0%{transform:translateX(0)} 50%{transform:translateX(250%)} 100%{transform:translateX(0)} }
        @keyframes bubble { 0%{transform:translateY(0);opacity:0.8} 70%{opacity:0.1} 100%{transform:translateY(-60px);opacity:0} }
        @keyframes xray { 0%{transform:translateX(-60px)} 100%{transform:translateX(60px)} }
        @keyframes reveal { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        @keyframes uci { 0%,100%{height:6px} 50%{height:18px} }
        @keyframes leeb { 0%{transform:translate(-50%,0)} 50%{transform:translate(-50%,-22px)} 100%{transform:translate(-50%,0)} }
      `}</style>
    </div>
  );
}

function ServiceCard({ s }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_20px_60px_-20px_rgba(34,211,238,0.25)]"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-xl">{s.icon}</div>
          <h3 className="font-semibold text-white leading-tight">{s.title}</h3>
        </div>
        <p className="mt-3 text-sm text-slate-300/90">{s.desc}</p>
      </div>
      {hover && <MicroAnim type={s.anim} />}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_10%,rgba(34,211,238,0.10),transparent),radial-gradient(500px_250px_at_80%_90%,rgba(16,185,129,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Specialized NDT Services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Interactive cards explain each method in simple terms with micro‑animations.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.key} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;