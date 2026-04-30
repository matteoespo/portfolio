import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1, DiMysql } from "react-icons/di";
import {SiVuedotjs, SiDjango } from "react-icons/si";

function Techstack() {
  const items = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiMysql />, name: "SQL/MySQL" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((item) => (
        <Col
          key={item.name}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "15px 0",
          }}
        >
          <div style={{ fontSize: "3rem", lineHeight: 1 }}>{item.icon}</div>
          <div style={{ color: "white", fontSize: "0.95rem" }}>{item.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
