import "./App.css";
import HomePage from "./pages/index";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";

import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<HomePage />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogPost />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
		</>
	)
);

function App() {
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
