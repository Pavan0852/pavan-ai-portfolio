import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          h-[95%]
          w-[95%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_28%_28%,rgba(167,139,250,0.42),transparent_34%),radial-gradient(circle_at_72%_28%,rgba(125,211,252,0.42),transparent_38%),radial-gradient(circle_at_72%_72%,rgba(244,114,182,0.28),transparent_36%),radial-gradient(circle_at_28%_72%,rgba(129,140,248,0.26),transparent_40%)]
          blur-3xl
        "
      />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="
          absolute
          -left-2
          top-10
          h-24
          w-24
          rounded-full
          bg-gradient-to-br
          from-cyan-300
          via-indigo-400
          to-violet-500
          opacity-70
          blur-[1px]
          shadow-[0_20px_50px_rgba(99,102,241,0.25)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -right-2
          top-28
          h-20
          w-20
          rounded-full
          bg-pink-200/70
          blur-2xl
        "
      />

      {/* Portrait frame */}
      <div
        className="
          relative
          mx-auto
          w-[82%]
          overflow-hidden
          rounded-[3rem]
          border
          border-white/70
          bg-white/40
          shadow-[0_30px_80px_-30px_rgba(79,70,229,0.3)]
          backdrop-blur-2xl
          dark:border-white/10
          dark:bg-white/[0.05]
        "
      >
        {/* Profile image */}
        <div className="relative aspect-[0.82] w-full overflow-hidden">
        <Image
            src="/images/profile/pavan-profile.png"
            alt="Pavan Kumar"
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 40vw"
            className="object-cover object-[68%_center]"
        />
        </div>
      </div>

      {/* Availability card */}
      <div
        className="
          absolute
          -bottom-5
          left-1/2
          w-[76%]
          -translate-x-1/2
          rounded-2xl
          border
          border-white/70
          bg-white/75
          px-4
          py-3
          shadow-[0_20px_50px_-20px_rgba(15,23,42,0.22)]
          backdrop-blur-2xl
          dark:border-white/10
          dark:bg-slate-950/65
          dark:shadow-black/20
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/80 dark:border-emerald-400/10 dark:bg-emerald-400/10">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-slate-400">
              Open to Opportunities
            </p>

            <p className="mt-0.5 truncate text-xs font-semibold text-slate-700 dark:text-slate-200">
              AI Engineer · Product · Research
            </p>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
        </div>
      </div>

      {/* Location detail */}
      <div
        className="
          absolute
          -bottom-16
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-1.5
          text-xs
          font-medium
          text-slate-500
          dark:text-slate-400
        "
      >
        <MapPin className="h-3.5 w-3.5" />
        Hyderabad, India
      </div>
    </div>
  );
}