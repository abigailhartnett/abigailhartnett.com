import projects from "../data/projects";
import { useParams } from "react-router-dom";

const Project = () => {
  const { slug } = useParams();

  const filteredProjects = projects.filter((project) => project.slug === slug);

  return (
    <>
      {slug
      //Delete excess code
        ? filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
          {project.site ? 
          
            <a href={project.site} className="button-secondary">
              <p className="heading-4" >{project.name}</p>
              <i class="fa-solid fa-square-arrow-up-right"
              style={{ marginLeft: ".5rem" }}
              ></i>
            </a>
          : 
            <p className="heading-4">{project.name}</p>} 
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <ul className="tags">
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div style={{ marginTop: "0.5rem" }}>
            {project.caseStudy ? 
            <a href={project.caseStudy} className="button-secondary">
              <i class="fa-solid fa-bookmark"
              style={{ marginRight: ".5rem" }}></i>
              <p>Read the case study</p></a> : ""}
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            {project.gitHub ? (
              <a href={project.gitHub} className="button-secondary" >
              <i class="fa-brands fa-github"></i>
              <p style={{ marginLeft: ".5rem" }}>Explore the code</p></a>
            ) : (
              ""
            )}
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            {project.figma ? <a 
              href={project.figma}
              className="button-secondary"
              >
            <i class="fa-brands fa-figma"
              style={{ marginRight: ".5rem" }}></i>
              <p>See the Figma</p>
              </a> : ""}
          </div>
        </div>
          ))
        : projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.site ? 
              
                <a href={project.site} className="button-secondary">
                  <p className="heading-4" >{project.name}</p>
                  <i class="fa-solid fa-square-arrow-up-right"
                  style={{ marginLeft: ".5rem" }}
                  ></i>
                </a>
              : 
                <p className="heading-4">{project.name}</p>} 
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <div style={{ marginTop: "0.5rem" }}>
                {project.caseStudy ? 
                <a href={project.caseStudy} className="button-secondary">
                  <i class="fa-solid fa-bookmark"
                  style={{ marginRight: ".5rem" }}></i>
                  <p>Read the case study</p></a> : ""}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.gitHub ? (
                  <a href={project.gitHub} className="button-secondary" >
                  <i class="fa-brands fa-github"></i>
                  <p style={{ marginLeft: ".5rem" }}>Explore the code</p></a>
                ) : (
                  ""
                )}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.figma ? <a 
                  href={project.figma}
                  className="button-secondary"
                  >
                <i class="fa-brands fa-figma"
                  style={{ marginRight: ".5rem" }}></i>
                  <p>See the Figma</p>
                  </a> : ""}
              </div>
            </div>
          ))}
    </>
  );
};

export default Project;
