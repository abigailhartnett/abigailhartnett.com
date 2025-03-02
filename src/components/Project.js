import projects from "../data/projects";

const Project = () => {
	return (
		<>
			{projects.map((project) => (
				<div key={project.id} className="project-card">
					{project.site ? (
						<>
							<p className="heading-4">{project.name}</p>
							<p>{project.description}</p>
							<a href={project.site} className="button-secondary">
								View project
								<span class="material-symbols-outlined ml-1">arrow_forward</span>
							</a>
						</>
					) : (
						<>
							<p className="heading-4">{project.name}</p>
							<p>{project.description}</p>
						</>
					)}
					
				</div>
			))}
		</>
	);
};

export default Project;
