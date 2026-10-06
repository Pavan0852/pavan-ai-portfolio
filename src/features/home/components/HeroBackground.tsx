export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Primary ambient glow */}
      <div
        className="
          absolute
          left-[8%]
          top-[8%]
          h-72
          w-72
          rounded-full
          bg-indigo-400/15
          blur-3xl
          dark:bg-indigo-500/10
        "
      />

      {/* Secondary cyan glow */}
      <div
        className="
          absolute
          right-[8%]
          top-[18%]
          h-80
          w-80
          rounded-full
          bg-cyan-300/15
          blur-3xl
          dark:bg-cyan-400/10
        "
      />

      {/* Lower violet/pink atmosphere */}
      <div
        className="
          absolute
          bottom-[-10%]
          left-1/2
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-violet-300/10
          blur-3xl
          dark:bg-violet-500/10
        "
      />

      {/* Very subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          dark:opacity-[0.025]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:72px_72px]
          dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />
    </div>
  );
}