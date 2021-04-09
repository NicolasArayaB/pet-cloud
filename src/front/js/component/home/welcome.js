import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
	return (
		<section className="welcome mt-5">
			<Container fluid>
				<figure className="position-relative m-0">
					<h1 className="mt-5 welcomeHeader">La información de las mascotas,</h1>
					<h1 className="welcomeHeader2">cómo y cuándo la necesitas</h1>
					<img
						className="img-fluid"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/18.1-front-proposal/src/front/img/petcloud-dog.png"
					/>
				</figure>
			</Container>
		</section>
	);
};

export default Welcome;
