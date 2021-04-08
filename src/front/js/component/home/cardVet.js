import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../../styles/home.scss";

const CardVet = () => {
	return (
		<Card border="0" className="mx-auto" style={{ width: "20rem", backgroundColor: "", marginTop: "20px" }}>
			<Card.Header className="bg-danger" style={{ color: "white", borderRadius: "40px" }}>
				¿No tienes la información de las mascotas que atiendes?
			</Card.Header>
			<Card.Img
				variant="top"
				src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/01-view-home-change-images/src/front/img/veterinary_card.png"
				style={{ height: "200px" }}
			/>
			<Card.Body>
				<Card.Title style={{ color: "#07889B" }}> Veterinari@</Card.Title>
				<Card.Text />
			</Card.Body>
			<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
				<ListGroupItem>Ficha estandarizada</ListGroupItem>
				<ListGroupItem>Control de tus registros</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default CardVet;
