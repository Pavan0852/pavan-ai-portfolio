export type ProjectCategory =
  | "LLM / Agents"
  | "Web Apps"
  | "ML / DL"
  | "Cloud"
  | "Research";


export type ProjectStatus = "online" | "ongoing" | "planned";

export interface ProjectRelease {
  version: string;
  date?: string;
  notes: string[];
}

export interface ProjectRoadmapItem {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
}

export interface ProjectLifecycle {
  status: ProjectStatus;
  currentVersion?: string;
  developmentVersion?: string;
  latestReleaseNotes?: string[];
  roadmap?: ProjectRoadmapItem[];
  releases?: ProjectRelease[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  featured: boolean;
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  lifecycle?: ProjectLifecycle;
}

export type RoadmapStatus =
  | "completed"
  | "in-progress"
  | "planned";