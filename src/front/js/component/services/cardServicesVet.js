import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CardInfoVet = () => {
	return (
		<div>
			<CardGroup>
				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Enrola facilmente a los veterinario en nuestra aplicación</Card.Text>
					</Card.Body>
				</Card>

				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Busca los controles de tus mascotas atendidas</Card.Text>
					</Card.Body>
				</Card>

				<Card border="light">
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Text>Edita y crea nuevos controles para las mascotas</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CardInfoVet;
