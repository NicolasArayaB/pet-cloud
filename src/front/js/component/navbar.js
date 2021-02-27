import React from "react";
import { Link } from "react-router-dom";

import HomeNavInfo from "./homeNavInfo";

export const Navbar = () => {
	return (
		<div>
			<div className="collapse" id="toggleMenu">
				<HomeNavInfo />
			</div>
			<nav className="navbar navbar-light petCloudBar mb-3">
				<div className="container-fluid">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">PetCloud</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#toggleMenu"
						aria-expanded="false"
						aria-controls="toggleMenu">
						<span className="navbar-toggler-icon" />
					</button>
				</div>
			</nav>
		</div>
	);
};
