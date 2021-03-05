import React from "react";
import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

const HomeNavInfo = () => {
	return (
		<Nav className="justify-content-end">
			<Nav.Link href="#">Home</Nav.Link>
			<Nav.Link href="#">Quienes Somos</Nav.Link>
			<Nav.Link href="#">Nuestros Servicios</Nav.Link>
			<Nav.Link href="/contactanos">Contactanos</Nav.Link>
			{/* <Link to="/contactanos">
					<span>Contactanos</span>
				</Link> */}
		</Nav>
	);
};

export default HomeNavInfo;
