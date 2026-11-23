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
            I'm a <span className="purple">Full Stack Software Engineer</span>. I work across the
            whole stack, from <span className="purple">frontend interfaces</span> and{" "}
            <span className="purple">backend services</span> to the{" "}
            <span className="purple">cloud infrastructure</span> they are deployed on. More and
            more, that includes integrating <span className="purple">AI features</span> such as
            LLM agents and RAG into real products.
            <br />
            <br />
            I enjoy shipping complete products: clean code, production-ready APIs and
            reliable deployment workflows, with a strong emphasis on maintainability and reproducibility.
          </p>

          <p className="purple" style={{ marginBottom: "14px", fontWeight: "600", marginTop: "24px" }}>
            Core focus areas:
          </p>

          <ul style={{ paddingLeft: 0 }}>
            <li className="about-activity">
              <ImPointRight /> <span>Frontend Development (React, Next.js, Vue, TypeScript)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span>Backend & APIs (Python, FastAPI, Django, PostgreSQL, Redis)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span>Cloud Deployment & Automation (Docker, Kubernetes, CI/CD, Microservices)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span>AI Integrations (LangChain, LangGraph, Pydantic, RAG, local LLMs)</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
