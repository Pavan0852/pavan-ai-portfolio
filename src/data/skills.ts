import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Boxes,
  Cloud,
  Database,
  Layers3,
  Workflow,
} from "lucide-react";

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / LLM",
    icon: BrainCircuit,
    skills: [
      { name: "Python", icon: "/icons/technologies/python.svg"},
      { name: "LangChain", icon: "/icons/technologies/langchain.svg"},
      { name: "LangGraph", icon: "/icons/technologies/langgraph.svg"},
      { name: "CrewAI", icon: "/icons/technologies/crewai.svg"},
      { name: "OpenAI", icon: "/icons/technologies/openai-light.svg"},
      { name: "Azure OpenAI", icon: "/icons/technologies/azure-openai.svg"},
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: "/icons/technologies/azure.svg"},
      { name: "AWS", icon: "/icons/technologies/aws.svg"},
      { name: "Docker", icon: "/icons/technologies/docker.svg"},
      { name: "Kubernetes", icon: "/icons/technologies/kubernetes.svg"},
      { name: "Terraform", icon: "/icons/technologies/terraform.svg"},
      { name: "Git", icon: "/icons/technologies/git.svg"},
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "Neo4j", icon: "/icons/technologies/neo4j.svg"},
      { name: "PostgreSQL", icon: "/icons/technologies/postgresql.svg"},
      { name: "SQL", icon: "/icons/technologies/azure-sql-database.svg"},
      { name: "Chroma DB", icon: "/icons/technologies/chroma.svg"},
      { name: "MongoDB", icon: "/icons/technologies/mongodb.svg"},
    ],
  },
  {
    title: "Frameworks",
    icon: Layers3,
    skills: [
      { name: "LangGraph", icon: "/icons/technologies/langgraph.svg"},
      { name: "FastAPI", icon: "/icons/technologies/fastapi.svg"},
      { name: "Spring Boot", icon: "/icons/technologies/spring-boot.svg"},
      { name: "React", icon: "/icons/technologies/react.svg"},
      { name: "NodeJS", icon: "/icons/technologies/nodejs.svg"},
      { name: "Streamlit", icon: "/icons/technologies/streamlit.svg"},
    ],
  },
  {
    title: "ML / Data",
    icon: Workflow,
    skills: [
      { name: "Scikit-learn", icon: "/icons/technologies/scikit-learn.svg"},
      { name: "Pandas", icon: "/icons/technologies/pandas.svg"},
      { name: "NumPy", icon: "/icons/technologies/numpy.svg"},
      { name: "PyTorch", icon: "/icons/technologies/pytorch.svg"},
      { name: "Tensorflow", icon: "/icons/technologies/tensorflow-light.svg"},
      { name: "Langsmith", icon: "/icons/technologies/langsmith-langchain.svg"},
    ],
  },
  {
    title: "Tools",
    icon: Boxes,
    skills: [
      { name: "Git", icon: "/icons/technologies/git.svg"},
      { name: "Swagger", icon: "/icons/technologies/swagger.svg"},
      { name: "Jupyter", icon: "/icons/technologies/jupyter.svg"},
      { name: "MCP", icon: "/icons/technologies/model-context-protocol-light.svg"},
      { name: "Langsmith", icon: "/icons/technologies/langsmith-langchain.svg"},
      { name: "Linux", icon: "/icons/technologies/linux.svg"},
    ],
  },
];
