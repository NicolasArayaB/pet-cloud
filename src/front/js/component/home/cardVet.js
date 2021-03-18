import React from "react";
import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../../styles/home.scss";

const CardVet = () => {
	return (
		<Card border="0" style={{ width: "20rem", backgroundColor: "", marginTop: "20px" }}>
			<Card.Header className="bg-danger" style={{ color: "white" }}>
				¿No tienes el historial de las mascotas que atiendes?
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
			<Card.Body>
				<Button
					className="button-card"
					variant="outline-secondary"
					style={{ backgroundColor: "#66b9bf", border: 0 }}
					href="/vet">
					Me interesa!!
				</Button>
			</Card.Body>
		</Card>
	);
};

export default CardVet;
