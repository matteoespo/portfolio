import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Simulation & Automated Systems",
          "Robotics / Automated Driving",
          "Python • C/C++ • Linux",
          "Tooling • Pipelines • CI/CD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
