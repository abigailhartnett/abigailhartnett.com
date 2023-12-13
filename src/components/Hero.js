import React from "react";

const Hero = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h1>Abigail Hartnett</h1>
      <p>
        Sr. Manager of Content & Web Experience at{" "}
        <a href="https://www.maxio.com">Maxio</a>
      </p>
      <p style={{ marginBottom: "2rem" }}>
        A marketing copywriter turned web developer, I'm passionate about
        building beautiful, functional digital experiences that users love.
      </p>

      <a href="../resources/resume.pdf" alt="resume" className="button">
        See Resume
      </a>
    </div>
  );
};

export default Hero;
