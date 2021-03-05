import React from "react";
import { Nav } from "react-bootstrap";

const HomeNavLogin = () => {
	return (
		<Nav className="nav-pills">
			<Nav.Link href="#" className="mx-4 btn active login">
				Login
			</Nav.Link>
		</Nav>
	);
};

export default HomeNavLogin;
