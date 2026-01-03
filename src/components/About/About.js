import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
// import Github from "./Github"; // <- attivalo solo se ti serve davvero

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* TOP SECTION */}
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "15px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            className="about-img"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "360px" }}
            />
          </Col>
        </Row>

        {/* SKILLS */}
        <h1 className="project-heading" style={{ marginTop: "20px" }}>
          Tech <strong className="purple">Stack</strong>
        </h1>
        <Techstack />

        {/* TOOLS */}
        <h1 className="project-heading">
          Tools & <strong className="purple">Workflow</strong>
        </h1>
        <Toolstack />

        {/* OPTIONAL: GitHub section (consiglio: toglierla se è un template) */}
        {/*
        <h1 className="project-heading">
          My <strong className="purple">GitHub</strong>
        </h1>
        <Github />
        */}
      </Container>
    </Container>
  );
}

export default About;
