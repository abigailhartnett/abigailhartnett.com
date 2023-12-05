import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="nav">
      <Link to="/about" alt="about page">
        Resume
      </Link>
      <Link to="/resume" alt="resume">
        About
      </Link>
    </div>
  );
};

export default TopNav;
