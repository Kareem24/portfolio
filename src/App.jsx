import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/projects",
			element: <Projects />,
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/contact",
			element: <Contact />,
		},
	]);
	return (
		<>
			<Suspense fallback={<Loader />}>
				<AnimatePresence>
					<RouterProvider router={route}></RouterProvider>
				</AnimatePresence>
			</Suspense>
			{/* <Framer /> */}
		</>
	);
}

export default App;
