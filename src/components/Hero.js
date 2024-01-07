import React from "react";

const Hero = () => {
  return (
    <div className="nav">
      <div>
        <div
          style={{ borderBottom: "#2E4D55 1px solid", marginBottom: "1rem" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="../logo.png"
              style={{ maxWidth: "32px", marginRight: "1rem" }}
              alt="Logo"
            ></img>
            <h1 className="heading-2">Abigail Hartnett</h1>
          </div>
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
        <div className="ero-link">
          <a href="../resources/resume.pdf" alt="resume" className="button-secondary hero-link">
            <i
              class="fa-solid fa-download"
              style={{ marginRight: ".5rem", color: "#b8bfc7" }}
            ></i>
            Resume
          </a>
        </div>
      </div>

      <div className="nav">
        <div>
          <a
            href="https://hartnett.notion.site/Production-Journal-03cd543a0d054a9fa8539033127d9ecc?pvs=4"
            alt="Production Journal"
            style={{ marginRight: "1rem" }}
            className="nav-button-secondary"
          >
            <i
              class="fa-solid fa-i-cursor"
              style={{ marginRight: ".5rem", color: "#b8bfc7"}}
            ></i>
            Journal
          </a>
          <a href="../resources/resume.pdf" alt="resume" className="nav-button-secondary">
            <i
              class="fa-solid fa-download"
              style={{ marginRight: ".5rem", color: "#b8bfc7" }}
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
