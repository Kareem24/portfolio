import { BiMenuAltRight } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
	const [showNav, setShowNav] = useState(false);
	return (
		<nav className="flex items-center bg-black w-full px-4  md:px-20 lg:px-[7.5rem] pt-[3.75rem] justify-between overflow-hidden ">
			<Link to={"/"}>
				<img src={logo} alt=" logo image" />
			</Link>
			<button
				className=" text-5xl mix-blend-difference text-white z-10 transition ease-in duration-1000"
				onClick={() => setShowNav((nav) => !nav)}>
				{!showNav ? <BiMenuAltRight /> : <CgClose />}
			</button>
			<div
				className={`absolute top-0 left-0 bg-white w-full min-h-screen  text-black flex items-center justify-center ${
					showNav ? "translate-x-0" : "translate-x-full"
				} transition ease-in duration-300`}>
				<div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-x-[15.73rem] gap-y-[5.75rem] ">
					<div className="py-[15.88] flex place-items-start">
						<p className="-rotate-90 w-fit h-fit font-medium text-xl md:text-2xl uppercase mt-8">
							menu
						</p>
						<ul className="flex flex-col justify-between">
							<li className="font-spartan text-5xl md:text-[4rem] font-bold uppercase">
								<Link to={"/"}>home</Link>
							</li>
							<li className="font-spartan text-5xl md:text-[4rem] font-bold uppercase">
								<Link to={"/projects"}>projects</Link>
							</li>
							<li className="font-spartan text-5xl md:text-[4rem] font-bold uppercase">
								<Link to={"/about"}>about</Link>
							</li>
							<li className="font-spartan text-5xl md:text-[4rem] font-bold uppercase">
								<Link to={"/contact"}>contacts</Link>
							</li>
						</ul>
					</div>
					<div className="md:self-end font-semibold font-spartan text-2xl">
						<p>email@gmail.com</p>
						<ul className="flex gap-4 mt-4">
							<li className="text-2xl">
								<a href="https://twitter.com/adekunle1855">
									<FaXTwitter />
								</a>
							</li>
							<li className="text-2xl">
								<a href=" https://github.com/kareem24">
									<TbBrandGithub />
								</a>
							</li>
							<li className="text-2xl">
								<a href="https://linkedin.com/in/kareem-horlah">
									<CiLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
