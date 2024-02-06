import { ScrollRestoration } from "react-router-dom";
import Animate from "../components/Animate";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";

function About() {
	return (
		<>
			<Navbar />
			<ScrollRestoration />
			<TopSection heading={"about me"} subHeading={"it's me kareem"} />
			<section className="bg-white pt-[3.75rem] px-[2.56rem]  md:px-20 lg:px-[7.5rem] pb-[6rem]">
				<article className="text-black max-w-xl m-auto mb-[6.69rem] ">
					<Animate>
						<h2 className="text-4xl font-spartan font-bold capitalize ">
							my background
						</h2>
						<p className="font-roboto mt-5 mb-4 ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr,
						</p>
						<p className="font-roboto  mb-4 ">
							sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
							aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
							duo dolores et ea rebum. Stet clita kasd gubergren, no sea
							takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
							sit amet,
						</p>
					</Animate>
					<Animate>
						<p className="font-roboto mb-[3.75rem] ">
							consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor sit amet. At vero eos et accusam et justo duo dolores et ea
							rebum. Stet clita kasd gubergren, no sea takimata sanctus est
							Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
							hendrerit in vulputate velit esse molestie consequat, vel illum
							dolore eu feugiat nulla
						</p>
					</Animate>
					<Animate>
						<h2 className="text-4xl font-spartan font-bold capitalize ">
							my hobbies and interests
						</h2>
						<p className="font-roboto mt-5 mb-4 ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr,
						</p>
					</Animate>
					<Animate>
						<p className="font-roboto  mb-[3.75rem] ">
							sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
							aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
							duo dolores et ea rebum. Stet clita kasd gubergren, no sea
							takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
							sit amet,
						</p>
					</Animate>
				</article>
				<div className="flex item-center justify-center">
					<Animate>
						<Button
							text={"contact me"}
							className={"mb-[6.25rem] w-full md:w-max"}
						/>
					</Animate>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default About;
