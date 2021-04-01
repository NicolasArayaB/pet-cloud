import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../../styles/services.scss";

const CardInfoVet = () => {
	return (
		<div>
			<CardGroup>
				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services4.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text style={{ color: "#E37222" }}>
							Enrola fácilmente a los veterinarios en nuestra aplicación
						</Card.Text>
					</Card.Body>
				</Card>

				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services5.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text style={{ color: "#E37222" }}>
							Agrega mascotas en forma estándar en tu registro clínico
						</Card.Text>
					</Card.Body>
				</Card>

				<Card border="white">
					<Card.Img
						className="img-center"
						variant="top"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services6.png"
						style={{ width: "12rem" }}
					/>
					<Card.Body>
						<Card.Text style={{ color: "grey" }}>
							Próximamente: Edita y crea nuevos controles para las mascotas
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
};

export default CardInfoVet;
