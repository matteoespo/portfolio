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
            I'm a software engineer with a strong interest in{" "}
            <span className="purple">simulation</span>,{" "}
            <span className="purple">automated systems</span> and{" "}
            <span className="purple">robotics/automated driving</span>.
            I enjoy building reliable tools and pipelines, from backend/services to
            simulation workflows, with a focus on clean engineering and measurable results.
            <br />
            <br />
            Currently, I work as a <span className="purple">Working Student Developer</span> at{" "}
            <span className="purple">Siemens AG</span> while completing my{" "}
            <span className="purple">M.Sc. in Informatics</span> at{" "}
            <span className="purple">TUM</span>.
          </p>

          <p style={{ color: "rgb(155 126 255)", marginBottom: "8px" }}>
            What I like working on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Simulation & scenario generation
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend tools and automation (Python, CI/CD)
            </li>
            <li className="about-activity">
              <ImPointRight /> Robotics software stacks (ROS2, sensors, mapping)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
