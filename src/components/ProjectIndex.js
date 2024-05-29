import React from "react";
import Project from "./Project";

const ProjectIndex = ({ slug }) => {
	return (
		<div className="pt-4">
			<h2 className="heading-2 border-b solid border-medium-blue">
				Current projects
			</h2>
			<div>
				<Project slug={slug} />
			</div>
		</div>
	);
};

export default ProjectIndex;
