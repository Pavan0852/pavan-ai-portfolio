
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import ProjectsSection from "@/features/projects/components/ProjectsSection";


export const metadata: Metadata = {
  title: "Projects | Pavan Kumar",
  description:
    "Explore projects in applied AI, multi-agent systems, machine learning, and software engineering by Pavan Kumar.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsSection />
    </>
  );
}
