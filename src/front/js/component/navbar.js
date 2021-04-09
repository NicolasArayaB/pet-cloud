import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import LoginModal from "./login/loginModal";

export const MyNavbar = props => {
	const [show, setShow] = useState(false);
	const { store } = useContext(Context);

	const handleShow = () => setShow(!show);
	return (
		<>
			<LoginModal show={show} close={handleShow} />
			<Navbar collapseOnSelect className="petCloudBar fixed-top">
				<Navbar.Brand href="#home">
					<Link to="/">
						<img
							className="logo"
							src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/18.1-front-proposal/src/front/img/PetCloud-removebg.png"
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Container className="navContainer">
						<Row>
							<Col className="pt-3 text-right">
								{store.role.token != null ? (
									<Dropdown>
										<Dropdown.Toggle id="loggedButton">Hola {store.role.firstName}</Dropdown.Toggle>
										<Dropdown.Menu className="navDropDn">
											<Dropdown.Item
												className="log-off"
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
