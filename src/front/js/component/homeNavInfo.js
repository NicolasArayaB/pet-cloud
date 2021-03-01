import React from "react";
import { Nav } from "react-bootstrap";

const HomeNavInfo = () => {
	return (
		<Nav className="justify-content-end">
			<Nav.Link href="#">Home</Nav.Link>
			<Nav.Link href="#">Quienes Somos</Nav.Link>
			<Nav.Link href="#">Nuestros Servicios</Nav.Link>
			<Nav.Link href="#">Contactanos</Nav.Link>
		</Nav>
	);
};

export default HomeNavInfo;
