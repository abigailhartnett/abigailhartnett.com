import React from "react";
// import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="nav">
      <button href="../resources/resume.pdf" alt="resume" className="button">
        See Resume
      </button>
      {/* <Link to="/about" alt="about page">
        About
      </Link> */}
    </div>
  );
};

export default TopNav;
