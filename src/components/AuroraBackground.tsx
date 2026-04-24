/**
 * AuroraBackground
 *
 * A mostly-white background with soft blue gradient orbs that shimmer in and out
 * of different parts of the screen at different tempos. Each orb runs its own
 * `orb-breathe` animation (drift + scale + opacity pulse) with a unique duration
 * and negative delay so no two orbs peak at the same time — creating a living,
 * breathing gradient that dances across the page rather than saturating it.
 *
 * Motion is disabled automatically via the global `prefers-reduced-motion`
 * guard in index.css.
 */
const AuroraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      {/* Top-left sky orb */}
      <div
        className="absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full animate-orb-breathe-a"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, hsl(var(--aurora-sky) / 1), hsl(var(--aurora-sky) / 0) 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Top-right indigo orb */}
      <div
        className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full animate-orb-breathe-b"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, hsl(var(--aurora-indigo) / 1), hsl(var(--aurora-indigo) / 0) 70%)",
          filter: "blur(110px)",
        }}
      />

      {/* Mid-right teal orb */}
      <div
        className="absolute right-[15%] top-[45%] h-[22rem] w-[22rem] rounded-full animate-orb-breathe-c"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--teal-accent) / 1), hsl(var(--teal-accent) / 0) 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Bottom-left mint orb */}
      <div
        className="absolute -left-20 top-[70%] h-[30rem] w-[30rem] rounded-full animate-orb-breathe-d"
        style={{
          background:
            "radial-gradient(circle at 45% 45%, hsl(var(--aurora-mint) / 1), hsl(var(--aurora-mint) / 0) 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Lower-center sky orb */}
      <div
        className="absolute left-[40%] bottom-[-6rem] h-[28rem] w-[28rem] rounded-full animate-orb-breathe-e"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--aurora-sky) / 1), hsl(var(--aurora-sky) / 0) 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
