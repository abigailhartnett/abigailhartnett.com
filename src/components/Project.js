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
              <p className="heading">{project.name}</p>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              {project.site ? (
                <a href={project.site} className="text-link">
                  <p>Go to site</p>
                </a>
              ) : (
                ""
              )}
              {project.gitHub ? (
                <a href={project.gitHub} className="text-link">
                  <p>Explore the code</p>
                </a>
              ) : (
                ""
              )}
              {project.figma ? (
                <a href={project.figma} className="text-link">
                  <p>See the Figma</p>
                </a>
              ) : (
                ""
              )}
            </div>
          ))
        : projects.map((project) => (
            <div key={project.id} className="project-card">
              <p className="heading">{project.name}</p>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              {project.site ? (
                <a href={project.site} className="text-link">
                  <p>Go to site</p>
                </a>
              ) : (
                ""
              )}
              {project.gitHub ? (
                <a href={project.gitHub} className="text-link">
                  <p>Explore the code</p>
                </a>
              ) : (
                ""
              )}
              {project.figma ? (
                <a href={project.figma} className="text-link">
                  <p>See the Figma</p>
                </a>
              ) : (
                ""
              )}
            </div>
          ))}
    </>
  );
};

export default Project;
