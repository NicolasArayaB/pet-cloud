import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../../styles/home.scss";

const CardVet = () => {
	return (
		<Card border="0" className="mx-auto mt-5" style={{ width: "20rem", backgroundColor: "transparent" }}>
			<Card.Img
				variant="top"
				src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/18.1-front-proposal/src/front/img/Veterinary-amico.png"
				style={{ width: "300px" }}
			/>
			<Card.Body>
				<Card.Title style={{ color: "#66b9bf" }}>Veterinario</Card.Title>
			</Card.Body>
			<ListGroup className="list-group-flush" style={{ color: "#66b9bf" }}>
				<ListGroupItem className="card-li-item">&#10004; Ficha estandarizada</ListGroupItem>
				<ListGroupItem className="card-li-item">&#10004; Historial clinico</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default CardVet;
