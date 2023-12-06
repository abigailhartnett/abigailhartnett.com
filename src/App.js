import "./App.css";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path=":slug" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
