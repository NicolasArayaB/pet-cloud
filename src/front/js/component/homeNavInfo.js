import React from "react";
import { Nav } from "react-bootstrap";

const HomeNavInfo = () => {
	return (
		<Nav className="pt-3">
			<Nav.Item>
				<Nav.Link href="/" className="mx-5">
					Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/services" className="mx-5">
					Nuestros Servicios
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/contact-us" className="mx-5">
					Contáctanos
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default HomeNavInfo;
