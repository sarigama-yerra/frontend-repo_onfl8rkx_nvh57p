function FooterCTA() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(0deg,transparent_0,transparent_96%,rgba(34,211,238,0.1)_100%),linear-gradient(90deg,transparent_0,transparent_96%,rgba(34,211,238,0.08)_100%)] bg-[length:40px_40px] animate-[gridmove_14s_linear_infinite]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur px-8 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Secure Your Project’s Safety</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Contact our experts today. We respond within one business day.</p>

          <form className="mt-8 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <input className="rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
            <input type="email" className="rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Work email" />
            <button type="submit" className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 transition">Request Consultation</button>
          </form>

          <p className="mt-4 text-xs text-slate-400">By submitting, you agree to our privacy policy.</p>
        </div>
      </div>

      <style>{`
        @keyframes gridmove { from{background-position:0 0,0 0} to{background-position:40px 0,0 40px} }
      `}</style>
    </footer>
  );
}

export default FooterCTA;