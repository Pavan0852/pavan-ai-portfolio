import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { SkillsSection } from "@/features/skills/components/SkillsSection";

export const metadata: Metadata = {
  title: "Skills | Pavan Kumar",
  description:
    "Technical skills and technologies Pavan Kumar works with across AI, LLM engineering, backend development, data, and cloud technologies.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />
      <SkillsSection />
    </main>
  );
}
