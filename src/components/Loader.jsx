function Loader() {
	return (
		<div className="w-full h-screen  bg-black flex items-center justify-center">
			<div className="loader">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			{/* <h1 className="font-bold text-white text-6xl uppercase">loading ...</h1> */}
		</div>
	);
}

export default Loader;
