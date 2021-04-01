import React from "react";
import { Container } from "react-bootstrap";
import CardInfo from "../component/services/cardServices";
import CardInfoVet from "../component/services/cardServicesVet";
import "../../styles/services.scss";

function ServicesMain() {
	return (
		<div className="centerElements">
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
				<br />
				<br />
			</Container>
		</div>
	);
}

export default ServicesMain;
