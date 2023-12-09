import React from "react";
import Project from "./Project";
import Heading from "./Heading";
import NavBar from "./NavBar";

const ProjectIndex = () => {
  return (
    <div>
      <Heading />
      <NavBar />
      <div className="grid">
        <Project />
      </div>
    </div>
  );
};

export default ProjectIndex;
