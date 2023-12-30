import React from "react";

const Footer = () => {
  return (
    <div className="nav">
      <div>
        <a
          href="https://www.linkedin.com/in/abigail-hartnett-ba336758/"
          className="icon"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/abigailhartnett" className="icon">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <a
        href="https://github.com/abigailhartnett/abigailhartnett.com"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Watch me bulid this site</p>
        <i
          className="fa-solid fa-arrow-up-right-from-square"
          style={{ marginLeft: "0.75rem" }}
        ></i>
      </a>
    </div>
  );
};

export default Footer;
