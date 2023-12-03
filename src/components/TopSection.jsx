import PropTypes from "prop-types";
import Headings from "./Headings";

function TopSection({ heading, subHeading }) {
	return (
		<section className="bg-black w-full px-4 min-h-screen  md:px-20 lg:px-[7.5rem] pb-[12rem] pt-1">
			<Headings heading={heading} subHeading={subHeading} />
		</section>
	);
}

TopSection.propTypes = {
	heading: PropTypes.string,
	subHeading: PropTypes.string,
};

export default TopSection;
