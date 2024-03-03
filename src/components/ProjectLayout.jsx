import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

function ProjectLayout({ project }) {
	const { title, description, image, live_url, github_url, technologies } =
		project;
	return (
		<div className=" rounded-lg overflow-hidden border border-black">
			<div className="w-full md:max-h-[242px]">
				<img
					src={image}
					alt={`${title} image representation`}
					className="w-full h-60"
				/>
			</div>
			<div className="px-4  py-5">
				<h2 className="text-3xl font-spartan font-bold capitalize">{title}</h2>
				<p className="font-roboto mt-5 mb-10">{description}</p>
				<ul className="flex gap-4 flex-wrap mb-8">
					{technologies.map((technology) => (
						<li
							className="bg-btn-bg px-2 py-1 rounded-xl capitalize font-roboto"
							key={technology}>
							{technology}
						</li>
					))}
				</ul>
				<div className="flex justify-between items-center">
					<a
						href={github_url}
						className="border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-white flex items-center gap-3 capitalize">
						<span>
							<TbBrandGithub />
						</span>
						<span> github</span>
					</a>
					<a
						href={live_url}
						className="border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-white   flex items-center gap-3 capitalize">
						<span>
							<FaExternalLinkAlt />
						</span>
						<span> live</span>
					</a>
				</div>
			</div>
		</div>
	);
}
ProjectLayout.propTypes = {
	project: PropTypes.object,
};
export default ProjectLayout;
