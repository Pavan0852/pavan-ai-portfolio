
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const metadata: Metadata = {
  title: "Contact | Pavan Kumar Gudla",
  description:
    "Contact Pavan Kumar Gudla about AI engineering opportunities, Agentic AI, Generative AI, and engineering collaborations.",
};

const contactLinks = [
  {
    title: "Email",
    description: "For opportunities and professional enquiries",
    value: "pavan.gudla31@gmail.com",
    href: "mailto:pavan.gudla31@gmail.com",
    icon: Mail,
    label: "Send an email",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "Pavan Kumar Gudla",
    href: "https://www.linkedin.com/in/pavan-kumar-gudla-058857167/",
    icon: LinkedInIcon,
    label: "Visit LinkedIn",
  },
  {
    title: "GitHub",
    description: "Explore my projects and code",
    value: "Pavan0852",
    href: "https://github.com/Pavan0852",
    icon: GitHubIcon,
    label: "Explore GitHub",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#080b14] dark:text-white">
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-300/25 blur-[120px] dark:bg-violet-500/10" />
          <div className="absolute -right-24 top-96 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-500/10" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-200/20 blur-[110px] dark:bg-pink-500/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
          {/* Hero */}
          <section className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300 sm:text-sm">
              Get in Touch
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s start a
              <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text pb-2 text-transparent dark:from-violet-300 dark:via-blue-300 dark:to-cyan-300">
                conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Interested in AI engineering, intelligent products, or
              collaborative opportunities? I&apos;d be happy to connect.
              Reach out through any of the channels below.
            </p>

            <a
              href="mailto:pavan.gudla31@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
            >
              <Mail size={17} />
              Email me
              <ArrowUpRight size={16} />
            </a>
          </section>

          {/* Contact cards */}
          <section className="mt-16 sm:mt-20">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
                Contact Channels
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Find me online
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target={
                      contact.title === "Email" ? undefined : "_blank"
                    }
                    rel={
                      contact.title === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex min-h-64 flex-col rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-xl transition-colors hover:border-violet-300 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-400/30 dark:hover:bg-white/[0.06] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 text-violet-700 dark:from-violet-400/15 dark:to-blue-400/10 dark:text-violet-300">
                        <Icon size={23} />
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-300"
                      />
                    </div>

                    <h3 className="mt-7 text-lg font-semibold">
                      {contact.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {contact.description}
                    </p>

                    <p className="mt-5 break-words text-sm font-medium text-violet-700 dark:text-violet-300">
                      {contact.value}
                    </p>

                    <span className="mt-auto pt-5 text-xs font-medium text-slate-500 transition-colors group-hover:text-violet-700 dark:text-slate-400 dark:group-hover:text-violet-300">
                      {contact.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Interests */}
          <section className="mt-16 sm:mt-20">
            <div className="grid gap-8 rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-100/70 via-blue-50/70 to-cyan-50/70 p-6 dark:border-violet-400/15 dark:from-violet-400/[0.08] dark:via-blue-400/[0.04] dark:to-cyan-400/[0.06] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-violet-700 dark:bg-white/[0.07] dark:text-violet-300">
                    <MessageCircle size={22} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                    Areas of Interest
                  </p>
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Let&apos;s build something meaningful.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                  I&apos;m particularly interested in AI product engineering,
                  Agentic AI, Generative AI, knowledge graphs, and applied
                  machine learning.
                </p>
              </div>

              <a
                href="mailto:pavan.gudla31@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-violet-400 hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>
          </section>

          {/* Back to projects */}
          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-7 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Want to see what I&apos;ve been working on?
            </p>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
            >
              Explore my projects
              <ArrowDownRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
