import PropTypes from "prop-types";
function SkillList({ icon, skill }) {
	return (
		<li className=" skill-list">
			<span className="capitalize text-3xl">{skill}</span>
			<span className="text-2xl">{icon}</span>
		</li>
	);
}

SkillList.propTypes = {
	icon: PropTypes.any,
	skill: PropTypes.string,
};
export default SkillList;
