import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import HomeNavInfo from "./homeNavInfo";
import LoginModal from "./login/loginModal";

export const MyNavbar = props => {
	const [show, setShow] = useState(false);
	const { store } = useContext(Context);

	const handleShow = () => setShow(!show);
	console.log("estamos esperando el history", history);
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
								{store.role.token != null ? (
									<Dropdown>
										<Dropdown.Toggle style={{ color: "#f4eaea" }} id="loggedButton">
											Hola {store.role.firstName}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												style={{ color: "#07889B" }}
												href="/"
												onClick={() => localStorage.clear()}>
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
