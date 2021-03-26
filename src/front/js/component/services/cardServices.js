import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CardInfo = () => {
	return (
		<div>
			<CardGroup>
				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Identifica rapidamente a tu mascota</Card.Text>
					</Card.Body>
				</Card>

				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Obten el historial de tu mascota a un click</Card.Text>
					</Card.Body>
				</Card>

				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Recibe notificaciones de los proximos controles</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CardInfo;
