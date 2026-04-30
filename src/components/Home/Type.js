import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack & AI",
          "Scalable Architectures",
          "DevOps & Cloud Infrastructure",
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
