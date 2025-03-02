import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/index";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import BitesizeAppPage from "./pages/projects/bitesizeapp";

const routes = (
	<>
		<Route path="/" element={<HomePage />} />
		<Route path="/blog" element={<Blog />}>
			<Route path=":slug" element={<BlogPost />} />
		</Route>
		<Route path="/about" element={<AboutPage />} />
		<Route path="/projects" element={<ProjectsPage />}>
			<Route path="bitesize-app" element={<BitesizeAppPage />} />
		</Route>
	</>
);

export default routes;
