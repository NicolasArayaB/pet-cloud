import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";

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
	console.log(store.login, "<-- store.login");

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
									<div className="text-center ">Hola {store.login.username}!</div>
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
