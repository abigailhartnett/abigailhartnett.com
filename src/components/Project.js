import projects from "../data/projects";
import { useParams } from "react-router-dom";

const Project = () => {
  const { slug } = useParams();

  const filteredProjects = projects.filter((project) => project.slug === slug);

  return filteredProjects.map((project) => (
    <div key={project.id} className="project-card">
      <p className="heading">{project.name}</p>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
      <ul className="tags">
        {project.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      {project.site ? (
        <a href={project.site}>
          <p>Check it out</p>
        </a>
      ) : (
        ""
      )}
      {project.gitHub ? (
        <a href={project.gitHub}>
          <p>Explore the code</p>
        </a>
      ) : (
        ""
      )}
    </div>
  ));
};

export default Project;
