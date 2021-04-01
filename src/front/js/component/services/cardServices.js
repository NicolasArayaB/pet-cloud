import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../../styles/services.scss";

const CardInfo = () => {
	return (
		<div>
			<CardGroup>
				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services1.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text>Identifica rapidamente a tu mascota</Card.Text>
					</Card.Body>
				</Card>

				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services2.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text>Obten el historial de tu mascota a un click</Card.Text>
					</Card.Body>
				</Card>

				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services3.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text>Recibe notificaciones de los proximos controles</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CardInfo;
