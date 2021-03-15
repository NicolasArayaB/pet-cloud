import React from "react";
import { Card } from "react-bootstrap";

const Vaccines = () => {
	return (
		<Card>
			<Card.Title>Vacunas</Card.Title>
			<Card.Body>
				<Card.Text>Antirrábica</Card.Text>
				<Card.Text>Leptospirosis</Card.Text>
				<Card.Text>Desparasitante</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Vaccines;
