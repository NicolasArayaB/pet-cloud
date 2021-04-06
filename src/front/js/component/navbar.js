import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, DropdownButton, Dropdown } from "react-bootstrap";

import { Context } from "../store/appContext";
import HomeNavInfo from "./homeNavInfo";
import LoginModal from "./login/loginModal";

export const MyNavbar = () => {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);

	const handleShow = () => setShow(!show);

	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<>
			<LoginModal show={show} close={handleShow} />
			<Navbar collapseOnSelect expand="lg" className="petCloudBar" variant="light">
				<Navbar.Brand href="#home">
					<Link to="/">
						<img
							className="logo"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/navbar/src/front/img/petcloud-logo.png"
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
								{store.login.token != null ? (
									<Dropdown>
										<Dropdown.Toggle id="loggedButton">
											Hola {store.login.first_name}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item href="/" onClick={localStorage.clear()}>
												Cerrar sesión
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								) : (
									<Button onClick={handleShow} className="mx-4 btn petBtn">
										Login
									</Button>
								)}
							</Col>
						</Row>
					</Container>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
