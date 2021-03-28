import React from "react";
import { Nav } from "react-bootstrap";

const HomeNavInfo = () => {
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link href="/" className="mx-4">
					Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/services" className="mx-4">
					Nuestros Servicios
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/contactanos">Contactanos</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default HomeNavInfo;
