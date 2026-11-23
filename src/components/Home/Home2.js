import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              What I’m <span className="purple">building</span>
            </h1>

            <p className="home-about-body">
              I build <b className="purple">full stack web applications</b> end to end, from{" "}
              <b className="purple">React and TypeScript frontends</b> to{" "}
              <b className="purple">Python backends and APIs</b>, and the cloud infrastructure
              they run on. I care about software that is reliable, reproducible and easy to maintain.
            </p>

            <p className="home-about-body" style={{ marginTop: "14px" }}>
              <span className="purple" style={{ marginRight: "8px" }}>•</span> Frontend: React, Next.js, TypeScript
              <br />
              <span className="purple" style={{ marginRight: "8px" }}>•</span> Backend & APIs: Python, FastAPI, Django, PostgreSQL
              <br />
              <span className="purple" style={{ marginRight: "8px" }}>•</span> DevOps & Cloud: Docker, Kubernetes, CI/CD
              <br />
              <span className="purple" style={{ marginRight: "8px" }}>•</span> AI features: LLM integrations, agents and RAG
            </p>

            <div style={{ marginTop: 24, display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Button href="#about" variant="outline-light">
                More about me
              </Button>
              <Button href="#project" variant="primary">
                Projects
              </Button>
            </div>
          </Col>

          <Col md={4} style={{ paddingBottom: 20, textAlign: "center" }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "420px" }}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col md={12} className="home-about-social">
            <h1>Connect</h1>
            <p>Feel free to reach out for collaborations or opportunities.</p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:matteoespositomarroccella@gmail.com"
                  rel="noreferrer"
                  className="home-social-icons"
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
                  className="home-social-icons"
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
                  className="home-social-icons"
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
                  className="home-social-icons"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
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
