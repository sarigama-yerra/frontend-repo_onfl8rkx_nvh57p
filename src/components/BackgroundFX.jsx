function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: large gradient blobs */}
      <div className="absolute -top-1/3 -left-1/4 h-[120vmax] w-[120vmax] rounded-full opacity-40 blur-3xl"
           style={{
             background:
               "radial-gradient(closest-side, rgba(34,211,238,0.18), transparent 60%), radial-gradient(closest-side, rgba(16,185,129,0.14), transparent 70%)",
             transform: "translate3d(0,0,0)",
           }} />

      {/* Layer 2: cyan beam sweep */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <div className="absolute -inset-x-20 top-1/3 h-32 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent blur-2xl animate-[beam_12s_linear_infinite]" />
      </div>

      {/* Layer 3: subtle moving grid */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridshift_30s_linear_infinite]" />
      </div>

      {/* Layer 4: star / particle field */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${(6 + Math.random() * 6).toFixed(1)}s ease-in-out ${(
                Math.random() * 6
              ).toFixed(2)}s infinite`,
              boxShadow: "0 0 8px rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Layer 5: vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent,rgba(2,6,23,0.85))]" />

      <style>{`
        @keyframes gridshift { from { background-position: 0 0, 0 0; } to { background-position: 40px 0, 0 40px; } }
        @keyframes beam { 0%{transform:translateX(-40%)} 50%{transform:translateX(40%)} 100%{transform:translateX(-40%)} }
        @keyframes twinkle { 0%,100%{opacity:.2; transform:scale(.8)} 50%{opacity:.8; transform:scale(1.2)} }
      `}</style>
    </div>
  );
}

export default BackgroundFX;
