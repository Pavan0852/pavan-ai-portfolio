
import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Skills & Certifications | Pavan Kumar",
  description:
    "Explore Pavan Kumar's technical skills and professional certifications across AI engineering, Microsoft Azure, and Neo4j.",
};

const certifications = [
  {
    name: "Claude Certified Architect Professional",
    issuer: "Anthropic",
    category: "AI Engineering",
    logo: "/icons/certifications/anthropic-light.svg",
    darkLogo: "/icons/certifications/anthropic-dark.svg",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    category: "Artificial Intelligence",
    logo: "/icons/certifications/azure-ai-engineer.png",
  },
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    category: "Data Science & Machine Learning",
    logo: "/icons/certifications/azure-data-scientist-associate.webp",
  },
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    category: "Graph Databases",
    logo: "/icons/certifications/neo4j.svg",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar />

      {/* Technical Skills */}
      <SkillsSection />

      {/* Certifications */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Professional Development"
            title="Certifications"
            description="Professional credentials reflecting my learning across AI engineering, cloud-based AI, machine learning, and graph database technologies."
          />

          <div className="mt-8 sm:mt-10">
            {certifications.map((certification, index) => (
              <article
                key={certification.name}
                className={`group grid gap-4 py-6 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7 ${
                  index !== certifications.length - 1
                    ? "border-b border-slate-200/80 dark:border-white/10"
                    : ""
                }`}
              >
                {/* Certification logo */}
                
                {/* Certification logo — no circle or container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  {certification.darkLogo ? (
                    <>
                      <Image
                        src={certification.logo}
                        alt={`${certification.issuer} logo`}
                        width={48}
                        height={48}
                        className="h-10 w-10 object-contain dark:hidden"
                      />

                      <Image
                        src={certification.darkLogo}
                        alt={`${certification.issuer} logo`}
                        width={48}
                        height={48}
                        className="hidden h-10 w-10 object-contain dark:block"
                      />
                    </>
                  ) : (
                    <Image
                      src={certification.logo}
                      alt={`${certification.issuer} logo`}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                </div>


                {/* Certification details */}
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-950 dark:text-white sm:text-lg">
                    {certification.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span>{certification.issuer}</span>
                    <span aria-hidden="true">·</span>
                    <span>{certification.category}</span>
                  </div>
                </div>

                {/* Credential status label */}
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
                  <Award className="h-3.5 w-3.5" />
                  Certification
                </span>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Credential links will be added soon.
          </p>
        </PageContainer>
      </Section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
