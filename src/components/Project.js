import projects from "../data/projects";
import { useParams } from "react-router-dom";

const Project = () => {
  const { slug } = useParams();

  const filteredProjects = projects.filter((project) => project.slug === slug);

  return (
    <>
      {slug
        ? filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <p className="heading-4">{project.name}</p>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <div style={{ marginTop: "0.5rem" }}>
                {project.site ? <a href={project.site}>Go to site</a> : ""}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.gitHub ? (
                  <a href={project.gitHub}>Explore the code</a>
                ) : (
                  ""
                )}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.figma ? (
                  <div className="button-secondary">
                    <a href={project.figma}>
                      <i class="fa-brands fa-figma"></i>
                      See the Figma
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        : projects.map((project) => (
            <div key={project.id} className="project-card">
              <p className="heading-4">{project.name}</p>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <div style={{ marginTop: "0.5rem" }}>
                {project.site ? <a href={project.site}>Go to site</a> : ""}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.gitHub ? (
                  <a href={project.gitHub}>Explore the code</a>
                ) : (
                  ""
                )}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                {project.figma ? <a href={project.figma}>See the Figma</a> : ""}
              </div>
            </div>
          ))}
    </>
  );
};

export default Project;
