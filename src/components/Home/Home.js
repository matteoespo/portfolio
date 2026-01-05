import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          {/* AGGIUNTA QUI: style={{ alignItems: "center" }} 
             Questo forza l'allineamento verticale al centro tra testo e immagine
          */}
          <Row style={{ alignItems: "center" }}> 
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MATTEO ESPOSITO MARROCCELLA</strong>
              </h1>
              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="myAvtar" style={{ textAlign: "center" }}>
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{ maxHeight: "400px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;