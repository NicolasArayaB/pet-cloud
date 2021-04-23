import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CardUser = () => {
	return (
		<Card border="0" className="mx-auto mt-5" style={{ width: "20rem", backgroundColor: "transparent" }}>
			<Card.Img
				variant="top"
				src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/18.1-front-proposal/src/front/img/pet-amico.png"
				style={{ width: "300px" }}
			/>
			<Card.Body>
				<Card.Title style={{ color: "#66b9bf" }}>Dueño de mascota</Card.Title>
			</Card.Body>
			<ListGroup className="list-group-flush" style={{ color: "#66b9bf" }}>
				<ListGroupItem className="card-li-item">&#10004; Conoce a tu mascota</ListGroupItem>
				<ListGroupItem className="card-li-item">
					&#10004; Próximamente: Revisa sus próximos controles{" "}
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default CardUser;
