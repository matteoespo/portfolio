import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
              I engineer <b className="purple">scalable architectures</b> and{" "}
              <b className="purple">backend infrastructures</b>, with a focus on
              building scalable, reproducible, and easy-to-maintain cloud solutions.
            </p>

            <p className="home-about-body" style={{ marginTop: "10px" }}>
              <span className="purple">•</span> Fullstack Development
              <br />
              <span className="purple">•</span> AI Agents
              <br />
              <span className="purple">•</span> Automation & Cloud Tooling
            </p>

            <div style={{ marginTop: 18, display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button href="#about" variant="outline-light" style={{ borderWidth: "2px" }}>
                More about me
              </Button>
              <Button href="#project" variant="primary">
                Projects
              </Button>
            </div>
          </Col>

          <Col md={4} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
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
                  href="https://x.com/matteoespo99"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <FaTwitter />
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
