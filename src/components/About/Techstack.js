import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1, DiMysql, DiPostgresql, DiRedis, DiReact } from "react-icons/di";
import { SiVuedotjs, SiDjango, SiFastapi, SiNextdotjs, SiTypescript, SiLangchain } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

function Techstack() {
  const items = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiLangchain />, name: "LangChain" },
    { icon: <FaProjectDiagram />, name: "LangGraph" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <DiRedis />, name: "Redis" },
    { icon: <DiMysql />, name: "MySQL" },
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
