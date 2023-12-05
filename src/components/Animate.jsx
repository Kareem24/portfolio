import PropTypes from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
function Animate({ children }) {
	const ref = useRef(null);
	const view = useInView(ref, { once: true });
	const controls = useAnimation();
	useEffect(() => {
		if (view) {
			controls.start("visible");
		}
	}, [view, controls]);
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						ease: "easeIn",
					},
				},
			}}
			initial="hidden"
			animate={controls}
			ref={ref}>
			{children}
		</motion.div>
	);
}
Animate.propTypes = {
	children: PropTypes.any,
};
export default Animate;
