import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Headings({ heading, subHeading }) {
	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="text-center mt-[12.12rem]">
			<div className="overflow-hidden">
				<motion.h1
					initial={{ y: "100%" }}
					animate={{ y: "0" }}
					transition={{ duration: 1, ease: "backInOut" }}
					className="text-6xl lg:text-8xl text-white uppercase font-gothic font-normal gothic">
					{heading}
				</motion.h1>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1.3 }}
				transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
				className="text-white font-normal text-center uppercase font-spartan text-2xl md:text-4xl spartan">
				{subHeading}
			</motion.p>
		</motion.header>
	);
}

Headings.propTypes = {
	heading: PropTypes.string,
	subHeading: PropTypes.string,
};
export default Headings;
