import projects from "../data/projects";

const Project = () => {
	return (
		<>
			{projects.map((project) => (
				<div key={project.id} className="project-card">
					{project.site ? (
						// <a href={project.site} className="button-secondary w-fit">
						<p className="heading-4">{project.name}</p>
					) : (
						// <i
						// 	class="fa-solid fa-square-arrow-up-right"
						// 	style={{ marginLeft: ".5rem" }}
						// ></i>
						// </a>
						<p className="heading-4">{project.name}</p>
					)}
					<p>{project.description}</p>
				</div>
			))}
		</>
	);
};

export default Project;
