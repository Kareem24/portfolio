import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";

function Contact() {
	return (
		<>
			<Navbar />
			<TopSection heading={"contact me"} subHeading={"say hello to me"} />
			<section className="bg-white pt-[3.75rem] px-[2.56rem]  md:px-20 lg:px-[7.5rem] pb-[6rem]">
				<h2 className="text-4xl font-spartan font-bold capitalize mb-20">
					contact me
				</h2>
				<form action="">
					<div className="grid md:grid-cols-2 gap-x-[7.19rem] mb-10 md:mb-16">
						<div className="inputs mb-10 md:mb-0">
							<label htmlFor="name">name</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="enter your name here"
							/>
						</div>
						<div className="inputs">
							<label htmlFor="email">email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="yourmail@gmail.com"
							/>
						</div>
					</div>
					<div className="inputs mb-20">
						<label htmlFor="message"> your message</label>
						<input
							type="text"
							name="message"
							id="message"
							placeholder="enter your message here"
						/>
					</div>
					<div className="flex item-center justify-center">
						<Button
							text={"contact me"}
							className={"mb-[6.25rem] w-full md:w-max"}
							type={"submit"}
						/>
					</div>
				</form>
			</section>
			<Footer />
		</>
	);
}

export default Contact;
