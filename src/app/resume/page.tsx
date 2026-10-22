
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Resume | Pavan Kumar Gudla",
  description:
    "View or download Pavan Kumar Gudla's resume and professional experience.",
};

const resumeUrl = "/resume/Pavan_Gudla_Resume.pdf";

export default function ResumePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-5 pb-12 pt-28 text-slate-900 dark:bg-[#080b14] dark:text-white sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
                Professional Profile
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                My Resume
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Explore my experience, technical skills, and AI engineering
                projects. You can download a copy below.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                download="Pavan-Kumar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
              >
                <Download size={17} />
                Download Resume
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
              >
                <ExternalLink size={16} />
                Open PDF
              </a>
            </div>
          </div>

          <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <iframe
              src={`${resumeUrl}#view=FitH`}
              title="Pavan Kumar Gudla resume preview"
              className="h-[75vh] min-h-[600px] w-full sm:h-[85vh]"
            />
          </section>

          <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
            If the preview does not load in your browser, use Open PDF or
            Download Resume above.
          </p>
        </div>
      </main>
    </>
  );
}
