import React from "react";
import Page from "../components/Page";
import ProjectIndex from "../components/ProjectIndex";

const HomePage = ({ slug }) => {
	return (
		<Page>
			<div className="mb-8">
				<h1>I'm Abigail,</h1>
				<span className="heading-2">
					a budding React developer <br className="hidden md:block" /> creating
					mobile-first productivity apps
				</span>
				<br />
				<span className="heading-3 leading-10">
					and writing about what I learn along the way
				</span>
				<a href="/blog" alt="resume" className="button-secondary pt-8 w-fit">
					Check out my blog
					<span class="material-symbols-outlined ml-1">arrow_forward</span>
				</a>
			</div>
			<ProjectIndex slug={slug} />
		</Page>
	);
};

export default HomePage;
