import { ScrollRestoration, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TopSection from "../components/TopSection";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import SkillList from "../components/SkillList";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Animate from "../components/Animate";
import { projects } from "../project";
import ProjectLayout from "../components/ProjectLayout";

function Home() {
	const navigate = useNavigate();
	const topProjects = projects.filter((project) => project.tag === "top");

	return (
		<>
			<Navbar />
			<ScrollRestoration />

			<TopSection
				heading={"Kareem Roqib O."}
				subHeading={"front end developer"}
			/>

			<section className="bg-white pt-[3.75rem] px-[2.56rem]  md:px-20 lg:px-[7.5rem] pb-[6rem] ">
				<article className="text-black max-w-xl m-auto mb-[6.69rem] ">
					<Animate>
						<h2 className="text-4xl font-spartan font-bold "> About me</h2>
						<p className="font-roboto mt-5 mb-[3.75rem] ">
							my name is kareem , and {"i'm "}a competent frontend developer who
							specializes in creating pixel-perfect websites and integrating
							APIs. As a frontend developer , I create engaging and user
							friendly websites and applications, with my skills I bring ideas
							to life, ensuring smooth functionality and visually appealing
							designs. I focus on delivering a seamless user experience, helping
							bussiness attract and retain customers while staying ahead in
							{"today's"} digital landscape.
						</p>
					</Animate>

					<h2 className="text-4xl font-spartan font-bold mb-[1.37rem] ">
						Skills
					</h2>
					<ul className="flex flex-wrap gap-x-12 gap-y-4">
						<SkillList icon={<ImHtmlFive />} skill={"html"} />
						<SkillList icon={<FaCss3Alt />} skill={"css"} />
						<SkillList icon={<FaReact />} skill={"react"} />
						<SkillList icon={<FaGitAlt />} skill={"git"} />
						<SkillList icon={<SiJavascript />} skill={"javascript"} />
					</ul>
				</article>
				<h2 className="text-4xl font-spartan font-bold mb-[1.37rem] text-center">
					Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
					{topProjects.map((project) => {
						return (
							<Animate key={project.id}>
								<ProjectLayout project={project} />
							</Animate>
						);
					})}
				</div>
				<div className="flex items-center justify-center gap-x-14 gap-y-4 flex-col md:flex-row ">
					<Button
						text={"all projects"}
						className={"w-full"}
						onClick={() => {
							navigate("./projects");
						}}
					/>{" "}
					<Button
						text={"contact"}
						className={"w-full"}
						onClick={() => {
							navigate("./contact");
						}}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Home;
