import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";

import HomeNavInfo from "./homeNavInfo";
import LoginModal from "./loginModal";

export const MyNavbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<LoginModal show={show} close={handleClose} />
			<Navbar collapseOnSelect expand="lg" className="petCloudBar" variant="light">
				<Navbar.Brand href="#home">
					<Link to="/">
						<img
							className="logo"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/navbar/src/front/img/petcloudlogo.png"
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Container fluid className="navContainer">
						<Row>
							<Col sm={10} className="d-flex justify-content-center">
								<HomeNavInfo />
							</Col>
							<Col sm={2}>
								<Button onClick={handleShow} className="mx-4 btn petBtn">
									Login
								</Button>
							</Col>
						</Row>
					</Container>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
