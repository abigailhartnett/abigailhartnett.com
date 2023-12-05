import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="nav">
      <Link to="/about" alt="test">
        Resume
      </Link>
      <Link to="/about" alt="test">
        About
      </Link>
    </div>
  );
};

export default TopNav;
