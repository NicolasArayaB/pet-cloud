import React from "react";
import { Nav } from "react-bootstrap";
import "../../styles/home.scss";

const HomeNavInfo = () => {
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link style={{ color: "white", opacity: "0.9" }} href="/" className="mx-4">
					Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link style={{ color: "white", opacity: "0.9" }} href="/services" className="mx-4">
					Nuestros Servicios
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link style={{ color: "white", opacity: "0.9" }} href="/contact-us">
					Contáctanos
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default HomeNavInfo;
