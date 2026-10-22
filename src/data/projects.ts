
import type { Project } from "@/types/project";

export const projects: Project[] = [

    {
    slug: "incidentpilot",
    title: "IncidentPilot AI",
    description:
      "A multi-agent incident analysis application that uses AI workflows to support incident triage, diagnosis, and resolution guidance.",
    categories: ["LLM / Agents", "Web Apps"],
    featured: true,
    image: "/images/projects/incidentpilot/cover1.png",
    technologies: ["Next.js", "FastAPI", "LangGraph", "Gemini"],
    links: {},
        
    lifecycle: {
      status: "online",
      currentVersion: "1.0.1",
      developmentVersion: "1.1.0",
      latestReleaseNotes: [
        "Current stable release: v1.0.1.",
        "See the project roadmap for planned improvements.",
      ],
      releases: [
        {
          version: "1.0.0(major)",
          notes: ["Past release"],
        },
        {
          version: "1.0.1(patch)",
          notes: ["Latest release"],
        },
      ],
      roadmap: [
        {
          title: "Current release",
          description: "Maintain the existing v1.0.1 release.",
          status: "completed",
        },
        {
          title: "Next release",
          description:
            "Plan and implement the next set of incident triage, diagnosis, and resolution improvements.",
          status: "planned",
        },
      ],
    },
  },


  {
    slug: "recomart",
    title: "RecoMart Recommendation",
    description:
      "A recommendation pipeline combining collaborative filtering and content-based methods to generate relevant movie recommendations.",
    categories: ["ML / DL"],
    featured: true,
    image: "/images/projects/recomart/cover2.png",
    technologies: ["Python", "Scikit-learn", "TMDB API"],
    links: {},

    lifecycle: {
      status: "ongoing",
      developmentVersion: "1.0.0",
      roadmap: [
        {
          title: "Recommendation pipeline foundation",
          description:
            "Establish the movie recommendation workflow using MovieLens data and TMDB metadata.",
          status: "completed",
        },
        {
          title: "Recommendation quality improvements",
          description:
            "Evaluate collaborative filtering and content-based recommendations to improve relevance.",
          status: "in-progress",
        },
        {
          title: "Reusable recommendation architecture",
          description:
            "Structure the recommendation pipeline so it can be adapted to other domains and datasets.",
          status: "planned",
        },
        {
          title: "Deployment and evaluation",
          description:
            "Prepare a deployable application and evaluate recommendation quality using appropriate metrics.",
          status: "planned",
        },
      ],
    },
        
  },


  {
    slug: "scoutmind",
    title: "AI Research Scout",
    description:
      "An AI research assistant that discovers relevant research, organizes papers, and generates concise research digests.",
    categories: ["LLM / Agents", "Research", "Web Apps"],
    featured: true,
    image: "/images/projects/scoutmind/cover3.png",
    technologies: ["Streamlit", "LangChain", "Gemini"],
    links: {},

    lifecycle: {
      status: "online",
      currentVersion: "1.0.0",
      developmentVersion: "2.0.0",
      latestReleaseNotes: [
        "Current stable release: v1.0.1.",
        "See the project roadmap for planned improvements.",
      ],
      releases: [
        {
          version: "1.0.0(major)",
          notes: ["Past release"],
        },
      ],
      roadmap: [
        {
          title: "Research discovery and collection",
          description:
            "Improve arXiv paper discovery and collection based on configured research interests.",
          status: "completed",
        },
        {
          title: "LLM-powered paper analysis",
          description:
            "Refine research paper analysis to extract key contributions, methodologies, findings, and limitations.",
          status: "in-progress",
        },
        {
          title: "Research digest generation",
          description:
            "Improve structured research insights and generate concise, readable research digests.",
          status: "planned",
        },
        {
          title: "Production-oriented architecture",
          description:
            "Continue separating the frontend and backend and prepare the application for a cost-conscious Azure deployment.",
          status: "planned",
        },
      ],
    },

  },
  

  {
    slug: "mastercraft-ai",
    title: "Mastercraft AI Agents",
    description:
      "Agentic AI capabilities for a low-code development environment, combining knowledge retrieval, Neo4j, and multi-agent orchestration.",
    categories: ["LLM / Agents", "Cloud"],
    featured: false,
    image: "/images/projects/mastercraft-ai/cover.png",
    technologies: ["React", "Node.js", "Azure OpenAI", "Neo4j"],
    links: {},
        
  },
  {
    slug: "developer-operations-mcp",
    title: "Developer Operations MCP Server",
    description:
      "An MCP server project planned to connect developer operations tools with AI workflows and agent orchestration.",
    categories: ["LLM / Agents", "Cloud"],
    featured: false,
    image: "/images/projects/developer-operations-mcp/cover1.png",
    technologies: ["Python", "MCP", "LangGraph", "Azure"],
    links: {},
    
    lifecycle: {
      status: "ongoing",
      developmentVersion: "0.1.0",
      roadmap: [
        {
          title: "MCP server foundation",
          description:
            "Establish the server structure, tool contracts, and core request handling.",
          status: "in-progress",
        },
        {
          title: "Developer tool integrations",
          description:
            "Connect selected developer operations tools through MCP.",
          status: "planned",
        },
        {
          title: "Agent workflow integration",
          description:
            "Integrate the MCP server with LangGraph-based workflows.",
          status: "planned",
        },
        {
          title: "Deployment",
          description:
            "Prepare a cost-conscious Azure deployment with appropriate testing.",
          status: "planned",
        },
      ],
    },

  },

  {
    slug: "conversational-ai",
    title: "Conversational AI",
    description:
      "A multi-agent conversational application that orchestrates AI workflows to answer user queries and support task execution.",
    categories: ["LLM / Agents", "Web Apps"],
    featured: false,
    image: "/images/projects/conversational-ai/cover.png",
    technologies: ["Next.js", "FastAPI", "LangGraph", "Gemini"],
    links: {},

    lifecycle: {
      status: "ongoing",
      developmentVersion: "1.0.0",
      latestReleaseNotes: [
        "Initial development is in progress.",
        "The first release will establish the conversational interface and multi-agent workflow.",
      ],
      roadmap: [
        {
          title: "Conversational interface",
          description:
            "Build a responsive chat interface that supports user messages and displays AI-generated responses.",
          status: "in-progress",
        },
        {
          title: "Multi-agent orchestration",
          description:
            "Implement a LangGraph workflow to coordinate agents and route user queries to appropriate tasks.",
          status: "planned",
        },
        {
          title: "Backend and LLM integration",
          description:
            "Integrate the FastAPI backend with Gemini and implement reliable request handling and response validation.",
          status: "planned",
        },
        {
          title: "Testing and deployment",
          description:
            "Validate the end-to-end conversational workflow and prepare the application for deployment.",
          status: "planned",
        },
      ],
    },
  },
];
