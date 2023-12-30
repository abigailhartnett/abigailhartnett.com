import React from "react";

const Hero = () => {
  return (
    <div className="nav">
      <div>
        <div
          style={{ borderBottom: "#2b0000 1px solid", marginBottom: "1rem" }}
        >
          <h1 className="heading-2">Abigail Hartnett</h1>
          <div style={{ marginBottom: "1rem" }}>
            <p className="heading-4">
              A front-end developer finding intuitive solutions to complex
              problems
            </p>
            <p className="heading-5">
              Sr. Manager of Content & Web Experience at{" "}
              <a href="https://www.maxio.com">Maxio</a>
            </p>
          </div>
        </div>
        <div>
          <a href="../resources/resume.pdf" alt="resume">
            <i
              class="fa-solid fa-download"
              style={{ marginRight: ".5rem" }}
            ></i>
            Resume
          </a>
        </div>
      </div>

      <div className="nav">
        <div>
          <a href="../resources/resume.pdf" alt="resume">
            <i
              class="fa-solid fa-download"
              style={{ marginRight: ".5rem" }}
            ></i>
            Resume
          </a>
        </div>
        {/* <Link to="/about" alt="about page">
        About
      </Link> */}
      </div>
    </div>
  );
};

export default Hero;
