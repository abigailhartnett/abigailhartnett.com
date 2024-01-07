import React from "react";

const Footer = () => {
  return (
    <div className="nav">
      <div className="top-nav-links">
        <a
          href="https://www.linkedin.com/in/abigail-hartnett-ba336758/"
          className="icon"
        >
          <i class="fa-brands fa-linkedin" style={{ color: "#B8BFC7" }}></i>
        </a>
        <a href="https://github.com/abigailhartnett" className="icon">
          <i class="fa-brands fa-github" style={{ color: "#B8BFC7" }}></i>
        </a>
      </div>
      <a
        href="https://github.com/abigailhartnett/abigailhartnett.com"
        className="button-secondary"
      >
        Watch me bulid this site
        <i
          className="fa-solid fa-square-arrow-up-right"
          style={{ marginLeft: "0.5rem" }}
        ></i>
      </a>
    </div>
  );
};

export default Footer;
