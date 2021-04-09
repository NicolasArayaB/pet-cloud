import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../../styles/services.scss";

const CardInfoVet = () => {
	return (
		<Container>
			<Row>
				<Col>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services4.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-4" style={{ color: "#grey" }}>
						Enrola fácilmente a los veterinarios en nuestra aplicación
					</p>
				</Col>
				<Col>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services5.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-4" style={{ color: "grey" }}>
						Agrega mascotas en forma estándar en tu registro clínico
					</p>
				</Col>
				<Col>
					<img
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/15-create-services-view/src/front/img/Services6.png"
						style={{ width: "5rem" }}
					/>
					<p className="mt-4" style={{ color: "grey" }}>
						Crea nuevos controles para las mascotas
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default CardInfoVet;
