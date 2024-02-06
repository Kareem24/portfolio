import { BiMenuAltRight } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const [hideNav, setHideNav] = useState(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHideNav(true);
		} else {
			setHideNav(false);
		}
	});

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: {
					y: "-100%",
					transition: { duration: 0.4, ease: "easeIn" },
				},
			}}
			animate={hideNav ? "hidden" : "visible"}
			className="flex items-center bg-black w-full px-4  z-[12]  md:px-20 lg:px-[7.5rem] py-6 md:py-8 justify-between fixed top-0 left-0 mb-0 ">
			<Link to={"/"}>
				<img
					src={logo}
					alt=" logo image"
					className="md:w-16 w-10"
					width={40}
					height={40}
				/>
			</Link>
			<button
				aria-label="hamburger menu button"
				className=" text-5xl mix-blend-difference text-white z-[12] transition ease-in duration-1000"
				onClick={() => setShowNav((nav) => !nav)}>
				{!showNav ? <BiMenuAltRight /> : <CgClose />}
			</button>
			<div
				className={`absolute top-0 left-0 bg-white w-full min-h-screen  text-black flex items-center justify-center ${
					showNav ? "translate-x-0" : "translate-x-full"
				} transition ease-in duration-300 z-10`}>
				<div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-x-[15.73rem] gap-y-[5.75rem] ">
					<div className="py-[15.88] flex place-items-start">
						<p className="-rotate-90 w-fit h-fit font-medium text-lg sm:text-xl md:text-2xl uppercase mt-2">
							menu
						</p>
						<ul className="flex flex-col gap-6">
							<li className="font-spartan text-3xl sm:text-5xl md:text-[4rem] font-bold uppercase">
								<NavLink to={"/"}>home</NavLink>
							</li>
							<li className="font-spartan text-3xl sm:text-5xl md:text-[4rem] font-bold uppercase">
								<NavLink to={"/projects"}>projects</NavLink>
							</li>
							<li className="font-spartan text-3xl sm:text-5xl md:text-[4rem] font-bold uppercase">
								<NavLink to={"/about"}>about</NavLink>
							</li>
							<li className="font-spartan text-3xl sm:text-5xl md:text-[4rem] font-bold uppercase">
								<NavLink to={"/contact"}>contacts</NavLink>
							</li>
						</ul>
					</div>
					<div className="md:self-end font-semibold font-spartan text-2xl">
						<p>kareemolakunleh@gmail.com</p>
						<ul className="flex gap-6 mt-4">
							<li className="text-3xl">
								<a
									aria-label="link to  my x (formerly known as twitter) profile "
									href="https://twitter.com/adekunle1855">
									<FaXTwitter />
								</a>
							</li>
							<li className="text-3xl">
								<a
									aria-label="link to github profile"
									href=" https://github.com/kareem24">
									<TbBrandGithub />
								</a>
							</li>
							<li className="text-3xl">
								<a
									aria-label="link to my linkedin profile"
									href="https://linkedin.com/in/kareem-horlah">
									<CiLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}

export default Navbar;
