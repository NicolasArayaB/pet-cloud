import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardInfo from "../component/services/cardServices";
import CardInfoVet from "../component/services/cardServicesVet";
import "../../styles/services.scss";

function ServicesMain() {
	return (
		<div className="centerElements">
			<Container>
				<Row className="justify-content-center my-4">
					<Col xs={12} md={4}>
						<h1>Servicios</h1>
						<h2>¿Eres dueño de mascota?</h2>
					</Col>
					<CardInfo />
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} md={4}>
						<h2>¿Eres veterinaria?</h2>
					</Col>
					<CardInfoVet />
				</Row>
			</Container>
		</div>
	);
}

export default ServicesMain;
