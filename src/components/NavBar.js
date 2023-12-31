import React from "react";
import projectTypes from "../data/projectTypes";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 className="heading-2">Projects</h2>
      <ul className="nav-links flex">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `filter-button ${isActive ? "filter-button-active" : ""}`
            }
          >
            All projects
          </NavLink>
        </li>
        {projectTypes.map((projectType) => (
          <li key={projectType.type}>
            <NavLink
              to={`/${projectType.slug}`}
              key={projectType.type}
              className={({ isActive }) =>
                `filter-button ${isActive ? "filter-button-active" : ""}`
              }
            >
              {projectType.type}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
