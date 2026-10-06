import { ArrowUpRight, BrainCircuit } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1.05/1] w-full max-w-xl">
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[105%]
          w-[105%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_32%_28%,rgba(129,140,248,0.62),transparent_34%),radial-gradient(circle_at_76%_30%,rgba(34,211,238,0.58),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(244,114,182,0.58),transparent_36%),radial-gradient(circle_at_30%_76%,rgba(139,92,246,0.48),transparent_42%)]
          blur-2xl
          dark:opacity-70
        "
      />

      {/* Large orbital ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[108%]
          w-[108%]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[18deg]
          rounded-[48%]
          border
          border-cyan-300/45
          shadow-[0_0_45px_rgba(56,189,248,0.12)]
          dark:border-cyan-400/20
        "
      />

      {/* Secondary orbital ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[94%]
          w-[94%]
          -translate-x-1/2
          -translate-y-1/2
          -rotate-[22deg]
          rounded-[45%]
          border
          border-violet-300/40
          dark:border-violet-400/20
        "
      />

      {/* Floating gradient sphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-2%]
          top-[12%]
          h-[5.5rem]
          w-[5.5rem]
          rounded-full
          bg-[radial-gradient(circle_at_32%_28%,rgba(125,211,252,0.95),rgba(99,102,241,0.85)_52%,rgba(124,58,237,0.9))]
          shadow-[0_15px_45px_rgba(79,70,229,0.25)]
          blur-[0.2px]
        "
      />

      {/* Small atmospheric sphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[62%]
          h-10
          w-10
          rounded-full
          bg-pink-300/40
          blur-xl
          dark:bg-pink-400/20
        "
      />

      {/* Main glass card */}
      <div
        className="
          absolute
          left-[25%]
          top-[15%]
          w-[67%]
          overflow-hidden
          rounded-[2rem]
          border
          border-white/75
          bg-white/45
          p-6
          shadow-[0_30px_80px_-25px_rgba(79,70,229,0.28)]
          backdrop-blur-2xl
          dark:border-white/10
          dark:bg-white/[0.055]
          dark:shadow-[0_30px_80px_-25px_rgba(99,102,241,0.18)]
        "
      >
        {/* Card atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_78%_20%,rgba(125,211,252,0.28),transparent_42%),radial-gradient(circle_at_30%_72%,rgba(167,139,250,0.22),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(244,114,182,0.16),transparent_40%)]
          "
        />

        <div className="relative">
          {/* Card header */}
          <div className="flex items-start justify-between">
            {/* AI cube */}
            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/70
                bg-white/45
                shadow-[0_10px_25px_rgba(79,70,229,0.12)]
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/[0.06]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  h-7
                  w-7
                  rotate-45
                  rounded-[7px]
                  border
                  border-cyan-200/80
                  bg-gradient-to-br
                  from-cyan-100/80
                  via-indigo-100/70
                  to-violet-200/70
                  shadow-inner
                  dark:border-cyan-300/20
                  dark:from-cyan-400/20
                  dark:via-indigo-400/20
                  dark:to-violet-400/20
                "
              />

              <BrainCircuit className="relative z-10 h-5 w-5 text-slate-700 dark:text-slate-200" />
            </div>

            {/* Arrow */}
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/55
                text-slate-500
                shadow-sm
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/[0.06]
                dark:text-slate-300
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Main message */}
          <div className="mt-8">
            <h2
              className="
                max-w-[18rem]
                text-[2rem]
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-slate-950
                sm:text-[2.15rem]
                dark:text-white
              "
            >
              Ideas
              <br />
              to Intelligent
              <br />
              Products
            </h2>

            <p className="mt-4 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
              LLMs <span className="mx-1.5">·</span> Agents{" "}
              <span className="mx-1.5">·</span> RAG{" "}
              <span className="mx-1.5">·</span> Real Impact
            </p>
          </div>

          {/* Current work status */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/70
              bg-white/45
              px-3
              py-3
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-white/65
                shadow-sm
                dark:bg-white/[0.06]
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_14px_rgba(52,211,153,0.9)]
                "
              />
            </div>

            <div>
              <p className="text-[10px] font-medium text-slate-400">
                Currently working on
              </p>

              <p className="mt-0.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                Agentic AI &amp; Generative AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle lower glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[2%]
          left-[35%]
          h-20
          w-48
          rounded-full
          bg-violet-400/20
          blur-3xl
          dark:bg-violet-500/10
        "
      />
    </div>
  );
}