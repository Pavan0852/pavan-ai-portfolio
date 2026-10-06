import { ArrowRight, GraduationCap, MapPin } from "lucide-react";

import { ProfileCard } from "./ProfileCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        pt-28
        sm:pt-32
        lg:pt-36
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_25%,rgba(129,140,248,0.12),transparent_30%),radial-gradient(circle_at_78%_25%,rgba(125,211,252,0.12),transparent_32%),radial-gradient(circle_at_45%_100%,rgba(167,139,250,0.16),transparent_34%)]
          dark:bg-[radial-gradient(circle_at_20%_25%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_78%_25%,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_45%_100%,rgba(139,92,246,0.12),transparent_34%)]
        "
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:72px_72px]
          dark:opacity-[0.025]
          dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-20">
          {/* Left content */}
          <div className="max-w-2xl">
            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-slate-500
                dark:text-slate-400
              "
            >
              About Me
            </p>

            <h1
              className="
                max-w-2xl
                text-4xl
                font-bold
                leading-[1.04]
                tracking-[-0.05em]
                text-slate-950
                sm:text-5xl
                lg:text-[3.5rem]
                dark:text-white
              "
            >
              AI Engineer
              <br />
              Passionate about
              <br />
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                What&apos;s Next.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
                dark:text-slate-400
              "
            >
              I&apos;m Pavan Kumar, an AI Engineer with a background in Mechanical Engineering, 
              Artificial Intelligence and Machine Learning and a strong passion for building
              intelligent systems using LLMs, agents, and modern cloud
              technologies.
            </p>

            {/* Information chips */}
            <div className="mt-6 flex max-w-xl flex-wrap gap-2">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200/80
                  bg-white/55
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-slate-600
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-slate-300
                  dark:shadow-none
                "
              >
                <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                Hyderabad, India
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200/80
                  bg-white/55
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-slate-600
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-slate-300
                  dark:shadow-none
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                Open to Opportunities
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200/80
                  bg-white/55
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-slate-600
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-slate-300
                  dark:shadow-none
                "
              >
                <GraduationCap className="h-3.5 w-3.5 text-violet-500" />
                M.Tech (AI &amp; ML) – BITS Pilani
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/resume/Pavan-Kumar-Resume.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-950
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-slate-950/10
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  dark:bg-white
                  dark:text-slate-950
                  dark:shadow-none
                  dark:hover:bg-slate-200
                "
              >
                Download Resume
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:pl-2 xl:pl-6">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}