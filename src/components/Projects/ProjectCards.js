import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const githubUrl = props.ghLink || props.GithubLink;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title || "card-img"} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          {/* GitHub button */}
          {githubUrl && (
            <Button variant="primary" href={githubUrl} target="_blank" rel="noreferrer">
              <BsGithub style={{ marginRight: "6px" }} />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Demo button */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: githubUrl ? "10px" : "0px" }}
            >
              <CgWebsite style={{ marginRight: "6px" }} /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
