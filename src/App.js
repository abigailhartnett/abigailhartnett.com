import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import routes from "./routes";

const appRouter = createBrowserRouter(createRoutesFromElements(routes));

function App() {
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
