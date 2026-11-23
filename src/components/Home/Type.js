import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Software Engineer",
          "React • TypeScript • Next.js",
          "Python • FastAPI • Django",
          "PostgreSQL • Redis • REST APIs",
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
