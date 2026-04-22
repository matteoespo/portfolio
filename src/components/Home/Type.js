import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data & Backend Engineer",
          "Scalable Data Pipelines (ETL)",
          "MLOps & Cloud Infrastructure",
          "Python • SQL • Django",
          "Docker • Kubernetes • CI/CD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
