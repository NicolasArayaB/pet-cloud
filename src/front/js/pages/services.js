import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardInfo from "../component/services/cardServices";
import CardInfoVet from "../component/services/cardServicesVet";
import "../../styles/services.scss";

function ServicesMain() {
	return (
<<<<<<< HEAD
		<section className="services justify-content-center">
			<Container>
=======
		<section className="services pt-2 justify-content-center">
			<Container fluid>
>>>>>>> 285faf4510edbcdc94b176660fc3e4b8ead87e23
				<Row>
					<Col>
						<h1 className="my-5">Servicios</h1>
					</Col>
				</Row>
				<Row>
					<Col className="pt-1 order-xs-1">
						<h2 className="my-5">¿Eres dueño de mascota?</h2>
						<CardInfo />
					</Col>
				</Row>
				<Row className="mt-5 pb-5">
					<Col className="pt-5">
						<h2 className="my-5">¿Eres médico veterinario?</h2>
						<CardInfoVet />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ServicesMain;
