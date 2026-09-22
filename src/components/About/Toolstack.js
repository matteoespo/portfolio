import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc"; 
import {
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
    { icon: <VscVscode />, name: "VS Code" }, 
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
            padding: "16px 8px",
          }}
        >
          <div style={{ fontSize: "2.8rem", lineHeight: 1 }}>{item.icon}</div>
          <div style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>{item.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;