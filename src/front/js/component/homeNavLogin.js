import React from "react";
import { Nav } from "react-bootstrap";

const HomeNavLogin = () => {
	return (
		<Nav className="nav-pills">
			<Nav.Link href="#" className="mx-4 btn active">
				Login
			</Nav.Link>
			<Nav.Link href="#" className="mx-4 btn active">
				Registrate
			</Nav.Link>
		</Nav>
	);
};

export default HomeNavLogin;
