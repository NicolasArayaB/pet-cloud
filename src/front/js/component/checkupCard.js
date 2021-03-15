import React from "react";
import { Card } from "react-bootstrap";

const CheckupCard = () => {
	return (
		<Card>
			<Card.Text>Ultimo Control</Card.Text>
			<Card.Body>
				<Card.Text>Fecha: 15/03/2021</Card.Text>
				<Card.Text>Motivo: Control sano</Card.Text>
				<Card.Text>Peso: 15 kg</Card.Text>
				<Card.Text>Enfermedades: Ninguna</Card.Text>
				<Card.Text>Esterelizado: No</Card.Text>
				<Card.Text>Observaciones: Esta sano</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CheckupCard;
