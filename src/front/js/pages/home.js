import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import CardVet from "../component/home/cardVet";
import CardUser from "../component/home/cardUser";
import "../../styles/home.scss";

import Welcome from "../component/home/welcome";
import ServicesMain from "../pages/services";
import Contact from "../pages/contact";

export const Home = () => {
	return (
		<Container fluid>
			<Welcome />
			<section className="cards">
				<Container fluid>
					<Row className="mx-5">
						<Col xs={12} md={6} className="mx-auto pt-5">
							<CardVet />
						</Col>
						<Col xs={12} md={6} className="mx-auto pt-5">
							<CardUser />
						</Col>
						<Col className="mx-auto py-5">
							<Button className="petBtn btn-lg my-4" href="/register">
								Regístrate!
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<ServicesMain />
			<Contact />
		</Container>
	);
};
