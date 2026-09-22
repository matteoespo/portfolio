import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ padding: "0 0 1rem 0" }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.75" }}>
            Hi, I'm <span className="purple">Matteo Esposito Marroccella</span>.
            I'm from <span className="purple">Verona, Italy</span> and currently based in{" "}
            <span className="purple">Munich, Germany</span>.
            <br />
            <br />
            I'm a software engineer with a strong focus on{" "}
            <span className="purple">Full Stack Engineering</span>,{" "}
            <span className="purple">Backend Architecture</span>, and{" "}
            <span className="purple">Cloud Infrastructure</span>. Lately, I have been deeply focused on{" "}
            <span className="purple">AI Agents</span> and{" "}
            <span className="purple">AI-Driven Automation</span>.
            <br />
            <br />
            I enjoy building scalable architectures, production-ready backend services, and reliable 
            deployment workflows, with a strong emphasis on clean engineering, reproducibility, and system resilience.
          </p>

          <p className="purple" style={{ marginBottom: "14px", fontWeight: "600", marginTop: "24px" }}>
            Core focus areas:
          </p>

          <ul style={{ paddingLeft: 0 }}>
            <li className="about-activity">
              <ImPointRight /> <span>Full Stack Development (Python, TypeScript, FastAPI, Django, React/Vue)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span>AI Agents & Reasoning (LangChain, LangGraph, Pydantic, RAG, Open-source LLMs)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span>Cloud Deployment & Automation (Docker, Kubernetes, CI/CD, Microservices)</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
