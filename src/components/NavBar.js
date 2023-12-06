import React from "react";
import projectTypes from "../data/projectTypes";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="nav-links flex">
        <li>
          <NavLink to={"/"}>All projects</NavLink>
        </li>
        {projectTypes.map((projectType) => (
          <li key={projectType.type}>
            <NavLink to={`/${projectType.slug}`} key={projectType.type}>
              {projectType.type}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
