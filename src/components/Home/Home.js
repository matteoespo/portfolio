import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi, I’m{" "}
                <strong className="main-name">Matteo Esposito Marroccella</strong>
              </h1>

              <div style={{ paddingTop: 15, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ color: "white", marginTop: 18, maxWidth: "520px" }}>
                Software Engineer focused on simulation, automated systems, and
                robotics/automated driving — building reliable tools and pipelines
                with clean engineering and measurable results.
              </p>

              <div style={{ marginTop: 22, display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button as={Link} to="/projects" variant="primary">
                  View Projects
                </Button>

                <Button
                  as={Link}
                  to="/resume"
                  variant="outline-light"
                  style={{ borderWidth: "2px" }}
                >
                  View Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
