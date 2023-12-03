import PropTypes from "prop-types";
function Headings({ heading, subHeading }) {
	return (
		<header className="text-center mt-[12.12rem]">
			<h1 className="text-6xl lg:text-8xl text-white uppercase font-gothic font-normal gothic">
				{heading}
			</h1>
			<p className="text-white font-normal text-center uppercase font-spartan text-2xl md:text-4xl spartan">
				{subHeading}
			</p>
		</header>
	);
}

Headings.propTypes = {
	heading: PropTypes.string,
	subHeading: PropTypes.string,
};
export default Headings;
