import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
// Aggiungi questo import per VS Code
import { VscVscode } from "react-icons/vsc"; 
import {
  // Rimuovi SiVisualstudiocode da qui
  SiPostman,
  SiLinux,
  SiDocker,
  SiGitlab,
  SiGithub,
  SiKubernetes
} from "react-icons/si";

function Toolstack() {
  const items = [
    { icon: <SiLinux />, name: "Linux" },
    { icon: <FaWindows />, name: "Windows" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiGithub />, name: "GitHub" },
    // Usa VscVscode qui
    { icon: <VscVscode />, name: "VS Code" }, 
    { icon: <SiPostman />, name: "Postman" },
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

export default Toolstack;