import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Matteo Esposito Marroccella</span>.
            I'm from <span className="purple">Verona, Italy</span> and currently based in{" "}
            <span className="purple">Munich, Germany</span>.
            <br />
            <br />
            I'm a software engineer with a strong focus on{" "}
            <span className="purple">Full Stack Engineering</span>,{" "}
            <span className="purple">Backend Architecture</span> and{" "}
            <span className="purple">Cloud Infrastructure</span>.
            And, lately focusing on agentic AI:
            <br />  
            <span className="purple">AI Agents</span>, <span className="purple">MLOps</span>, and{" "}
            <span className="purple">AI-Driven Automation</span>.
            <br />
            <br />
            I enjoy building scalable systems, production-ready backend services, and reliable 
            deployment workflows, with a focus on clean engineering and data integrity.
            <br />
            <br />
            Currently, I work as a <span className="purple">Software Engineer (Working Student)</span> at{" "}
            <span className="purple">Siemens AG</span> while completing my{" "}
            <span className="purple">M.Sc. in Informatics</span> at{" "}
            <span className="purple">TUM</span>.
          </p>

          <p style={{ color: "rgb(155 126 255)", marginBottom: "8px" }}>
            What I like working on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Development (Python, JavaScript, Django, Vue.js)
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Agents (Python, FastAPI, LangChain, LangGram, RAG)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Deployment & Automation (Docker, Kubernetes, CI/CD)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
