import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="nav">
      <Link to="/resume" alt="about page">
        Resume
      </Link>
      <Link to="/about" alt="resume">
        About
      </Link>
    </div>
  );
};

export default TopNav;
