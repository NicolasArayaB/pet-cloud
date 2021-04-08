import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardInfo from "../component/services/cardServices";
import CardInfoVet from "../component/services/cardServicesVet";
import "../../styles/services.scss";

function ServicesMain() {
	return (
		<section className="services p-5">
			<Container fluid>
				<Row>
					<Col>
						<h1 className="my-5">Servicios</h1>
					</Col>
				</Row>
				<Row>
					<Col className="pt-5">
						<h2>¿Eres dueño de mascota?</h2>
					</Col>
					<CardInfo />
				</Row>
				<Row className="mt-5">
					<CardInfoVet />
					<Col className="pt-5">
						<h2>¿Eres medico veterinario?</h2>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ServicesMain;
