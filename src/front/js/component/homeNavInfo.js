import React from "react";
import { Link } from "react-router-dom";

const HomeNavInfo = () => {
	return (
		<div>
			<Link to="/">
				<p>Home</p>
			</Link>
			<Link to="/">
				<p>Servicios</p>
			</Link>
			<Link to="/">
				<p>Quienes somos</p>
			</Link>
			<Link to="/">
				<p>Contactanos</p>
			</Link>
		</div>
	);
};

export default HomeNavInfo;
