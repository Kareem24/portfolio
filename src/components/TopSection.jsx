import PropTypes from "prop-types";
import Headings from "./Headings";

function TopSection({ heading, subHeading }) {
	return (
		<section className="bg-black w-full top-section h-screen  md:px-20 lg:px-[7.5rem]  pt-4 mt-0">
			<Headings heading={heading} subHeading={subHeading} />
		</section>
	);
}

TopSection.propTypes = {
	heading: PropTypes.string,
	subHeading: PropTypes.string,
};

export default TopSection;
