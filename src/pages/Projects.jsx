import { ScrollRestoration, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";
import Animate from "../components/Animate";
import { projects } from "../project";
import ProjectLayout from "../components/ProjectLayout";

function Projects() {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<ScrollRestoration />

			<TopSection heading={"my projects"} subHeading={"made with love"} />
			<section className="bg-white pt-[3.75rem] px-[2.56rem]  md:px-20 lg:px-[7.5rem] pb-[6rem]">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-[5.13rem] mx-auto">
					{projects.map((project) => {
						return (
							<Animate key={project.id}>
								<ProjectLayout project={project} />
							</Animate>
						);
					})}
				</div>
				<div className="flex item-center justify-center">
					<Animate>
						<Button
							text={"contact"}
							className={"mb-[6.25rem]"}
							onClick={() => {
								navigate("/contact");
							}}
						/>
					</Animate>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Projects;
