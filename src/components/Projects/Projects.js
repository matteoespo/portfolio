import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiPypi } from "react-icons/si";
import ProjectCard from "./ProjectCards";

import omniLocalLlm from "../../Assets/Projects/omni-local-llm.webp";
import founderx from "../../Assets/Projects/founderx.webp";
import docuragagent from "../../Assets/Projects/docuragagent.webp";
import ecoSorter from "../../Assets/Projects/eco-sorter.webp";
import thesis from "../../Assets/Projects/thesis.webp";
import idp from "../../Assets/Projects/idp.webp";

const personalProjects = [
  {
    title: "omni-local-llm",
    imgPath: omniLocalLlm,
    ghLink: "https://github.com/matteoespo/omni-local-llm",
    demoLink: "https://pypi.org/project/omni-local-llm/",
    demoLabel: "PyPI",
    demoIcon: <SiPypi style={{ marginRight: "6px" }} />,
    description:
      "Open-source Python CLI and SDK, published on PyPI, that finds which local LLM your machine can actually run. It reads GGUF headers over HTTP to recommend the right quantization and GPU layer split. Then it serves Ollama, llama.cpp, vLLM and LM Studio behind one OpenAI-compatible API. On a 4 GB GTX 1650, predicted VRAM was within 0.09–0.37 GB of measured use.",
    tags: ["Python", "FastAPI", "llama.cpp", "Ollama", "vLLM", "GGUF", "CI/CD"],
  },
  {
    title: "FounderX",
    imgPath: founderx,
    ghLink: "https://github.com/matteoespo/FounderX",
    description:
      "AI venture-sourcing platform built for the Hack-Nation × Maschmeyer Group Challenge. Investors find and screen early-stage founders through natural-language search, web research and founder, market and fund-fit scoring. It produces evidence-backed investment memos with claim-level trust scores.",
    tags: ["React", "TypeScript", "TanStack Start", "FastAPI", "MongoDB", "LLM Agents"],
  },
  {
    title: "DocuQuery RAG Agent",
    imgPath: docuragagent,
    ghLink: "https://github.com/matteoespo/docuquery-rag-agent",
    description:
      "Agentic RAG system for querying technical PDFs that runs fully on-premise with open-source LLMs. Microservices split the frontend, the API layer and the reasoning engine. Documents are ingested, embedded and retrieved to give context-aware answers grounded in their content.",
    tags: ["TypeScript", "Python", "RAG", "Vector DB", "Open-source LLMs", "Docker"],
  },
  {
    title: "Eco-Sorter",
    imgPath: ecoSorter,
    ghLink: "https://github.com/matteoespo/eco-sorter",
    description:
      "Real-time waste-sorting assistant. Point a webcam at an object and YOLO-World detects it, then a local Gemma model running on Ollama sorts it into the right European recycling category and explains how to dispose of it. No cloud API needed.",
    tags: ["Python", "FastAPI", "YOLO-World", "Ollama", "Next.js", "WebSockets", "Docker"],
  },
];

const universityProjects = [
  {
    title: "Assessment of Static Environment Fidelity on Automated Driving",
    imgPath: thesis,
    description:
      "Master's thesis. Measured how static environment fidelity in CARLA (object density, textures, lighting, weather) affects an automated driving stack. Compared environment variants on lane-keeping, collision avoidance and comfort to find where extra fidelity actually changes safety outcomes.",
    tags: ["CARLA", "Python", "Simulation", "Automated Driving"],
  },
  {
    title: "Static Scenario Generation for Automated Driving",
    imgPath: idp,
    ghLink: "https://github.com/matteoespo/static-scenario-generation",
    description:
      "Semester project. Pipeline that turns real-world camera, LiDAR, GNSS and odometry data into realistic static CARLA scenarios. It combines LiDAR clustering, photogrammetry-based 3D reconstruction and YOLO detections fused with 3D clusters for assisted labeling.",
    tags: ["Python", "LiDAR", "YOLO", "Photogrammetry", "CARLA"],
  },
];

function ProjectGrid({ projects }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {projects.map((project) => (
        <Col md={6} lg={5} className="project-card" key={project.title}>
          <ProjectCard isBlog={false} {...project} />
        </Col>
      ))}
    </Row>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Personal </strong>Projects
        </h1>
        <ProjectGrid projects={personalProjects} />

        <h1 className="project-heading">
          Projects at <strong className="purple">University</strong>
        </h1>
        <ProjectGrid projects={universityProjects} />
      </Container>
    </Container>
  );
}

export default Projects;
