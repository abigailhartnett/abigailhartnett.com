import React from "react";

const Hero = () => {
  return (
    <>
      <h1>Abigail Hartnett</h1>
      <p>
        Sr. Manager of Content & Web Experience at{" "}
        <a href="https://www.maxio.com">Maxio</a>
      </p>
      <p>
        A marketing copywriter turned web developer, I'm passionate about
        building beautiful, functional digital experiences that users love.
      </p>

      <button
        href="../resources/resume.pdf"
        alt="resume"
        className="button"
        style={{ marginBottom: "1.5rem" }}
      >
        See Resume
      </button>
    </>
  );
};

export default Hero;
