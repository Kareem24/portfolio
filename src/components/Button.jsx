import PropTypes from "prop-types";
function Button({ text, className, type = "button", onClick }) {
	return (
		<button
			type={type}
			className={`bg-btn-bg hover:bg-gray-600 hover:text-white text-black py-[1.32rem] px-[3.78rem] capitalize font-roboto flex gap-4 items-center justify-center rounded-lg ${className}`}
			onClick={onClick}>
			<span>&rarr;</span>
			<span>{text}</span>
		</button>
	);
}
Button.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
