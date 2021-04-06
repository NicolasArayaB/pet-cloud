import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const CardUser = () => {
	return (
		<Card border="0" className="mx-auto" style={{ width: "20rem", backgroundColor: "", marginTop: "20px" }}>
			<Card.Header className="bg-danger" style={{ color: "white" }}>
				¿No tienes el historial clínico de tus mascotas en línea?
			</Card.Header>
			<Card.Img
				variant="top"
				src="https://image.flaticon.com/icons/png/512/53/53086.png"
				style={{ height: "200px" }}
			/>
			<Card.Body>
				<Card.Title style={{ color: "#07889B" }}> Dueñ@ de mascota</Card.Title>
				<Card.Text />
			</Card.Body>
			<ListGroup className="list-group-flush" style={{ color: "#E37222" }}>
				<ListGroupItem>Conoce a tu mascota</ListGroupItem>
				<ListGroupItem>Próximamente: Revisa sus próximos controles </ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default CardUser;
