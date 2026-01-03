import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Personal / placeholders
import comingSoon from "../../Assets/Projects/coming-soon.png";

// University project images (assicurati che i path siano corretti)
import thesis from "../../Assets/Projects/thesis.png";
import idp from "../../Assets/Projects/idp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* PERSONAL PROJECTS */}
        <h1 className="project-heading">
          <strong className="purple">Personal </strong>projects
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming soon"
              description="New personal projects will be added here soon."
              // niente link perché non è ancora pubblicato
            />
          </Col>
        </Row>

        {/* UNIVERSITY PROJECTS */}
        <h1 className="project-heading">
          Projects at <strong className="purple">University</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thesis}
              isBlog={false}
              title="Assessment of Static Environment Fidelity on Automated Driving"
              description={`Master's Thesis — Investigated how different levels of static environment fidelity in simulation (object density, textures, lighting, weather) affect the behavior of an automated driving software stack.

• Developed multiple variants of a simulated environment in CARLA with systematically varied static fidelity.
• Designed and ran scenarios with an automated driving system, combining objective metrics (lane-keeping, collision avoidance, comfort).
• Analyzed results to quantify when increased fidelity meaningfully impacts safety and comfort, and when it does not.`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idp}
              isBlog={false}
              title="Static Scenario Generation for Automated Driving"
              description={`Semester Project — Built a pipeline to generate realistic static driving scenarios in CARLA using multimodal sensor data from real-world driving (camera, LiDAR, GNSS, odometry).

• Created concatenated LiDAR point clouds (GLIM), removed ground planes and applied clustering to extract edges and roadside objects.
• Used photogrammetry (Agisoft Metashape) to reconstruct 3D buildings/maps and integrated them into CARLA via Python API.
• Applied YOLO-based detection + clustering to label assets and fused 2D detections with 3D clusters, with support for assisted labeling.`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
