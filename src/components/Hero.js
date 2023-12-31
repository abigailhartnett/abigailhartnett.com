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
        <div>
          <a href="../resources/resume.pdf" alt="resume">
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
            href="https://hartnett.notion.site/2e82e0808a154ea29b690ddda47840c1?v=d7b08c983e4b42899b3b4970f7ee914c"
            alt="Production Journal"
            style={{ marginRight: "1rem" }}
          >
            <i
              class="fa-solid fa-i-cursor"
              style={{ marginRight: ".5rem", color: "#b8bfc7" }}
            ></i>
            Journal
          </a>
          <a href="../resources/resume.pdf" alt="resume">
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
