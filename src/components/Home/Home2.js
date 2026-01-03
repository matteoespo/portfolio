import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaXing } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em" }}>
              What I’m <span className="purple">building</span>
            </h1>

            <p className="home-about-body">
              I work on software for <b className="purple">simulation</b> and{" "}
              <b className="purple">automated systems</b>, with a focus on
              engineering tooling that is reproducible and easy to maintain.
            </p>

            <p className="home-about-body" style={{ marginTop: "10px" }}>
              <span className="purple">•</span> Scenario generation & simulation workflows
              <br />
              <span className="purple">•</span> Robotics/automated driving software stacks
              <br />
              <span className="purple">•</span> Automation & pipelines (Python, CI/CD, Docker)
            </p>

            <div style={{ marginTop: 18, display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button as={Link} to="/about" variant="outline-light" style={{ borderWidth: "2px" }}>
                More about me
              </Button>
              <Button as={Link} to="/projects" variant="primary">
                Projects
              </Button>
            </div>
          </Col>

          <Col md={4} className="myAvtar" style={{ textAlign: "center" }}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ maxHeight: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row style={{ marginTop: "25px" }}>
          <Col md={12} className="home-about-social">
            <h1>Connect</h1>
            <p>Feel free to reach out.</p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto: matteoespositomarroccella@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <AiFillMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/matteoespo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matteo-esposito-marroccella/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.xing.com/profile/Matteo_EspositoMarroccella/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="xing"
                >
                  <FaXing />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
