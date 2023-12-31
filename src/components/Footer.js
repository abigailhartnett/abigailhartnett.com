import React from "react";

const Footer = () => {
  return (
    <div className="nav">
      <div>
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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#B8BFC7",
        }}
      >
        Watch me bulid this site
        <i
          className="fa-solid fa-arrow-up-right-from-square"
          style={{ marginLeft: "0.75rem", color: "#B8BFC7" }}
        ></i>
      </a>
    </div>
  );
};

export default Footer;
