import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../../styles/services.scss";

const CardInfo = () => {
	return (
		<Container>
			<Row>
				<Col sm>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services1.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-2 p-4" style={{ color: "grey" }}>
						Identifica a tus mascotas rápidamente en tu cuenta
					</p>
				</Col>
				<Col sm>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services2.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-2 p-4" style={{ color: "grey" }}>
						Próximamente: Obten el historial de tu mascota a un click
					</p>
				</Col>
				<Col sm>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services3.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-2 p-4" style={{ color: "grey" }}>
						Próximamente: Recibe notificaciones de los próximos controles de tu mascota
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default CardInfo;
