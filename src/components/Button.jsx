import PropTypes from "prop-types";
function Button({ text, className, type = "button" }) {
  return (
    <button
      type={type}
      className={`bg-btn-bg text-black py-[1.32rem] px-[3.78rem] capitalize font-roboto flex gap-4 items-center justify-center ${className}`}
    >
      <span>&rarr;</span>
      <span>{text}</span>
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
