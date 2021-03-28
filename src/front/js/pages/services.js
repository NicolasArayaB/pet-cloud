import React from "react";
import { Container } from "react-bootstrap";
import CardInfo from "../component/services/cardServices";
import CardInfoVet from "../component/services/cardServicesVet";

function ServicesMain() {
	return (
		<div>
			<Container>
				<br />
				<br />
				<h1>SERVICIOS</h1>
				<br />
				<br />
				<h2>¿Eres dueño de mascota?</h2>
				<br />
				<br />
				<br />
				<br />
				<CardInfo />
				<br />
				<br />
				<h2>¿Eres veterinaria?</h2>
				<br />
				<br />
				<br />
				<br />
				<CardInfoVet />
			</Container>
		</div>
	);
}

export default ServicesMain;
