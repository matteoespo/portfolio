import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matteo Esposito Marroccella </span>
            from <span className="purple"> Verona, Italy</span>, currently living in <span className="purple">Munich, Germany.</span>
            <br /> I am a second year Master Student in Informatics
             at Technische Universität München (TUM).
            <br />
            Additionally, I am currently employed as a Working Student Developer at
            Siemens AG.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Doing my best to contribute to the pioneering of the tomorrow's society!"{" "}
          </p>
          <footer className="blockquote-footer">Matteo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
