import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const githubUrl = props.ghLink || props.GithubLink;

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title ? `${props.title} preview` : "Project preview"}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>{props.description}</Card.Text>

        {props.tags && props.tags.length > 0 && (
          <ul className="project-tags" aria-label="Tech stack">
            {props.tags.map((tag) => (
              <li key={tag} className="project-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {githubUrl && (
            <Button variant="primary" href={githubUrl} target="_blank" rel="noreferrer">
              <BsGithub style={{ marginRight: "6px" }} />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
              {props.demoIcon || <CgWebsite style={{ marginRight: "6px" }} />}
              {props.demoLabel || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
