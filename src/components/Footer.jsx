import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Animate from "./Animate";

function Footer() {
	return (
		<footer className="bg-black text-white px-[2.56rem]  md:px-20 lg:px-[7.5rem] py-28 md:py-40 grid gap-y-[3.75rem] justify-center md:grid-cols-2">
			<Animate>
				<ul className="flex gap-[1.88rem]">
					<li className="font-roboto font-bold uppercase">
						<Link to={"/projects"}>projects</Link>
					</li>
					<li className="font-roboto font-bold uppercase">
						<Link to={"/about"}>about</Link>
					</li>
					<li className="font-roboto font-bold uppercase">
						<Link to={"/contact"}>contact</Link>
					</li>
				</ul>
			</Animate>
			<div className="flex gap-12 md:justify-between">
				<Animate>
					<p className="font-roboto font-bold md:-order-2">
						yourmail@gmail.com
					</p>
				</Animate>
				<Animate>
					<img src={logo} alt=" logo image" className="-order-1" />
				</Animate>
			</div>
		</footer>
	);
}

export default Footer;
